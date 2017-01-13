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
  let title;

  try {
    const res = await axios(endpoint);
    data = res.data.data;
    options = res.data.options;
    title = res.data.options.filter((d) => d.name === 'introParagraph')[0].value;

  } catch (e) {
    console.log('Error getting content from Bertha');
  }

  try {
    const results = await Promise.all(data.map(async function(tweet) {
      try {
        const response = await axios(`https://publish.twitter.com/oembed?url=${tweet.tweeturl}`);
        tweet.tweetEmbedCode = response.data.html;
      } catch (e) {
        console.log('Error getting tweet embed code');
        tweet.tweetEmbedCode = '';
      }
      return tweet;
    }));
    cards.tweets = results;
    // later get stuff from elasticsearch and add here
  } catch (e) {
    console.error(e);
  }

  return {
    ...d,
    title,
    options,
    cards,
    flags,
  };

}
