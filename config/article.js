export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'b9c3b6ae-f3c3-11e6-95ee-f14e55513608',

  // canonical URL of the published page
  // https://ig.ft.com/trump-cabinet/ get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/trump-tweets/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Donald Trump’s tweets explained',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The FT’s annotated guide to the US president’s Twitter feed',

  topic: {
    name: 'Donald Trump',
    url: 'https://www.ft.com/topics/people/Donald_Trump',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [{
    name: 'Jennifer Bissell', url: 'https://www.ft.com/stream/authorsId/Q0ItOTUzNWFmZg==-QXV0aG9ycw==',
  }],

  // Appears in the HTML <title>
  title: 'Donald Trump’s tweets explained',

  // meta data
  description: 'The FT’s annotated guide to the US president’s Twitter feed',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  socialHeadline: 'Donald Trump’s tweets explained: The FT guide to the US president’s Twitter feed',
  // socialSummary: '',

  // TWITTER
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fig.ft.com%2Fsites%2Ftrump-tweets%2Fimages%2Ftrump_twitter_twitter.jpg?source=ig&width=600',
  // twitterCreator: '@individual's_account',
  tweetText: 'Donald Trump’s tweets explained: The FT guide to the US president’s Twitter feed',
  twitterHeadline: 'Donald Trump’s tweets explained: The FT guide to the US president’s Twitter feed',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fig.ft.com%2Fsites%2Ftrump-tweets%2Fimages%2Ftrump_twitter_face.jpg?source=ig&width=600',
  facebookHeadline: 'Donald Trump’s tweets explained',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
