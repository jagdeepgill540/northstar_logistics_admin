
export const environment = {
  production: false,
  apiUrls: {
    reports: 'http://localhost:4774',
    master: 'http://localhost:4774',
    purple: 'https://qcbackend.purpleinvestor.com/api',
  },
  socketUrl: 'http://localhost:4774',
  blogsUrl: 'https://cms.wondrfly.com',
  blogsNewUrl: 'https://content.wondrfly.com/api',
  blogsNewImageUrl: 'https://content.wondrfly.com',
  blogGql: 'https://cms.wondrfly.com/graphql',
  blogNewGql: 'https://content.wondrfly.com/graphql',
  baseUrl: 'https://qc.wondrfly.com/',
  ogUrl: 'https://qc.wondrfly.com',
  calandlyUrl: 'https://calendly.com/wondrfly/',
  mediaUrl: "https://wondrfly.s3.us-east-2.amazonaws.com/",
  web_discover: "https://wondrfly.s3.us-east-2.amazonaws.com/web_discover/",
  mediaUrl_242_137: "https://wondrfly.s3.us-east-2.amazonaws.com/medium/",
  mediaUrl_medium: "https://wondrfly.s3.us-east-2.amazonaws.com/medium/",
  mediaUrl_1430_954: "https://wondrfly.s3.us-east-2.amazonaws.com/1430_954/",
  map_key: "AIzaSyB-nlH8BJ8oizHMFRaZ70B2yXJUym4C6eo",
  stripeKey: 'pk_test_51IHaHhJAVEiW309FJ5uUa2HgKY7I1nwQSC5PYZ3yMyQ7aSzDrVl9hHUZbi2eXP82yO7HJ3cc5T2pDXzAFYocHy8q0019Vq7BkZ',
  hotjar: '3601188',
  googleSiteVerification: '',
  aboutUsVideoLink: 'https://wondrfly.s3.us-east-2.amazonaws.com/1080p/masterweb.m3u8',
  googleTagManagerURL: '',
  googleTagManagerID: '',
  clarityId: '',
  googleAnalyticsID: '',
  version: '18.1.1', //do not change this - verion on both WEB + PWA should be same
  name: 'qc',
  sentry: {
    dsn: "https://c450cd82649bc6ed99254e736751bb6a@o4509649792270336.ingest.us.sentry.io/4509649812586496",
    environment: 'development',
    enabled: true
  }
};

