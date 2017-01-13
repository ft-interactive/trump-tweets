export default () => ({ // eslint-disable-line

  // link file UUID
  id: '520c6834-adba-11e6-9cb3-bb8207902122',

  // canonical URL of the published page
  // https://ig.ft.com/trump-cabinet/ get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/trump-tweets/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Donald Trump’s tweets explained',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The FT guide to Trump\'s tweets',

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
  byline: [
    { name: 'Person 1' },
    { name: 'Person 2' },
    { name: 'Person 3' },
  ],

  // Appears in the HTML <title>
  title: 'Donald Trump’s tweets explained',

  // meta data
  description: 'The FT guide to Trump\'s tweets',

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
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

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
