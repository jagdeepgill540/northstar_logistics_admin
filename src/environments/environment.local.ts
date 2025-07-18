// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


export const environment = {
  production: false,
  apiUrls: {
    reports: 'http://localhost:8406/api',
    master: 'http://localhost:8406/api',
    purple: 'https://qcbackend.purpleinvestor.com/api',
  },
  socketUrl: 'http://localhost:8406',
  blogsUrl: 'http://cms.wondrfly.com',
  blogsNewUrl: 'https://content.wondrfly.com/api',
  blogsNewImageUrl: 'https://content.wondrfly.com',
  blogGql: 'https://cms.wondrfly.com/graphql',
  blogNewGql: 'https://content.wondrfly.com/graphql',
  baseUrl: 'https://localhost:4200/',
  ogUrl: 'https://localhost:4200',
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
  googleTagManagerURL: '',
  googleTagManagerID: '',
  googleAnalyticsID: '',
  clarityId: '',
  version: '18.1.1', //do not change this - verion on both WEB + PWA should be same
  name: 'local',
  sentry: {
    dsn: "https://c450cd82649bc6ed99254e736751bb6a@o4509649792270336.ingest.us.sentry.io/4509649812586496",
    environment: 'local',
    enabled: true
  }
};

