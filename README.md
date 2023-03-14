## Install yarn

Installation instructions: [https://classic.yarnpkg.com/lang/en/docs/install](https://classic.yarnpkg.com/lang/en/docs/install) 


## Configure firebase

Copy file [src/firebase.sample.js](src/firebase.sample.js) and save it as `src/firebase.js`

Go to your project settings, and copy the fragment with `firebaseConfig`

It should look like this: 

```
const firebaseConfig = {
  apiKey: "XXXXxxxxx",
  authDomain: "XXXXxxxxx",
  projectId: "XXXXxxxxx",
  storageBucket: "XXXXxxxxx",
  messagingSenderId: "XXXXxxxxx",
  appId: "XXXXxxxxx",
  measurementId: "XXXXxxxxx"
};
```

Replace firebaseConfig const with your copied version in [src/firebase.js](src/firebase.js) file

## Install dependencies

In the project directory, you can run:

### `yarn install`


## Run application

In the project directory, you can run:

### `yarn start`
