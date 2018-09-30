// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCqL6wdzhsv8LSDd2rDPUmx-rWWomZHojo',
    authDomain: 'ng-fitness-tracker-1d380.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-1d380.firebaseio.com',
    projectId: 'ng-fitness-tracker-1d380',
    storageBucket: 'ng-fitness-tracker-1d380.appspot.com',
    messagingSenderId: '373843657545'
  }
};
