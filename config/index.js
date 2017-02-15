import article from './article';
import getFlags from './flags';
import axios from 'axios';

export default async function() {
  const d = await article();
  const flags = await getFlags();
  const endpoint = 'http://bertha.ig.ft.com/view/publish/gss/17oaKymZ3JlNFEnmYP2YN7-F7EovLJr-xS5tMzQ79Hrc/data,options';
  let cards = {};
  let data;
  let options;
  let intro;

  try {
    const res = await axios(endpoint);
    data = res.data.data;
    options = res.data.options;
    intro = res.data.options.filter((d) => d.name === 'introParagraph')[0].value;

  } catch (e) {
    console.log('Error getting content from Bertha');
  }

  try {
    const results = await Promise.all(data.map(async function(tweet) {
      tweet.tweetMetadata = await Promise.all(tweet.tweeturl.split(',').map(async function(tweet) {
        let tweetEmbedCode = '';
        let tweetId = '';
        try {
          const response = await axios(`https://publish.twitter.com/oembed?url=${tweet}`);
          tweetEmbedCode = response.data.html;
          tweetId = response.data.url.split('https://twitter.com/realDonaldTrump/status/')[1];
        } catch (e) {
          console.log('Error getting tweet embed code');
        }

        return {
          tweetURL: tweet,
          tweetId,
          tweetEmbedCode,
        }
      }));

      tweet.links = (tweet.links && tweet.links.length ? tweet.links.split(',') : []);
      tweet.links = await Promise.all(tweet.links.map(async function(link) {
        const linkURL = link;
        let linkPubDate = '';
        let linkHeadline = '';

        try {
          const linkUIUD = linkURL.split('https://www.ft.com/content/')[1];
          const response = await axios(`http://next-elastic.ft.com/v3_api_v2/item/${linkUIUD}`);

          linkPubDate = response.data._source.publishedDate;
          linkHeadline = response.data._source.title;
        } catch (e) {
          console.log('Error pinging Next API', e);
        }

        return {
          linkURL,
          linkPubDate,
          linkHeadline,
        }
      }));
      return tweet;
    }));
    cards.tweets = results;
  } catch (e) {
    console.error(e);
  }

  // sort in reverse chron
  cards.tweets = cards.tweets.sort((a, b) => {
    return b.tweeturl.split('https://twitter.com/realDonaldTrump/status/')[1].split(',')[0] - a.tweeturl.split('https://twitter.com/realDonaldTrump/status/')[1].split(',')[0];
  })

  // console.log(JSON.stringify(cards.tweets));

  return {
    ...d,
    intro,
    options,
    cards,
    flags,
  };

}
