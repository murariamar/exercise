React and Redux, Webpack 2 boilerplate.


## What is this?

Boilerplate for kicking off React/Redux applications.

It includes complete, minimal react app.
By complete we mean it has examples for:

- components (both container/views and regular ones)
- routes
- reducers (redux)
- actions (both sync and async),
- SASS (with autoprefixer)<sup>1</sup>
- dummy API
- using assets (in CSS and components)
- imports relative to the app root

## Features

- [x] React
- [x] React router
- [x] Redux
- [x] Redux Thunk
- [x] Redux DevTools (you need to have [browser extension](https://github.com/zalmoxisus/redux-devtools-extension) installed)
- [x] Universal rendering
- [x] Webpack 3 (development and production config)
- [x] Hot Module Replacement
- [x] Immutable reducer data
- [x] Babel - static props, decorators
- [x] SASS with autoprefixing
- [x] Webpack dashboard
- [x] Linting
- [x] Included `es6-promise` and `isomorphic-fetch`
- [x] Preview production build
- [x] File imports relative to the app root
- [x] Git hooks - lint before push
- [x] Tree shaking build
- [x] Import SVGs as React components


## Setup

```
$ npm install
```

## npm tasks

* `start` - starts client app only in development mode, using webpack dev server
* `client:dev` - same as `start` plus fancy webpack dashboard
* `client:watch` - not to be used on it's own, starts webpack with client config in watch mode
* `client:build` - builds client application
* `client:preview` - runs client application in *production* mode, using webpack dev server (use for local testing of the client production build)
* `server:watch` - not to be used on it's own, starts webpack with server config in watch mode
* `server:restart` - not to be used on it's own, server build run using `nodemon`
* `server:build` - not to be used on it's own, builds server application
* `server:dev` - starts server app only in development mode (use for testing server responses)
* `universal:dev` - runs both server and client in watch mode, automatically restarts server on changes
* `universal:build` - builds both server and client

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

## Build client (production)

Build will be placed in the `build` folder.

```
$ npm run client:build
```

If your app is not running on the server root you should change `publicPath` at two places.

In `webpack.config.js` (ATM line 147):

```
output: {
  path: buildPath,
  publicPath: '/your-app/',
  filename: 'app-[hash].js',
},
```

and in `source/js/routes` (ATM line 9):

```
const publicPath = '/your-app/';
```

Don't forget the trailing slash (`/`). In development visit `http://localhost:3000/your-app/`.

## Running client in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run client:preview
```

## Universal dev mode

```
npm run universal:dev
```

Visit `http://localhost:8080/` from your browser of choice.
Server is visible from the local network as well.

## Universal build (production)

```
npm run universal:build
```

copy `package.json` and `build` folder to your production server

install only production dependencies and run server

```
npm install --production

node ./build/server.js
```

## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

## Git hooks

Linting pre-push hook is not enabled by default.
It will prevent the push if lint task fails,
but you need to add it manually by running:

```
npm run hook-add
```

To remove it, run this task:

```
npm run hook-remove
```

## Misc

### Importing images in SCSS

Please note that paths to images in SCSS files are relative to `source/scss/base/main.scss` as it imports all of the other `.scss` files.

```
.BackgroundImgExample {
  background-image: url(../assets/img/book1.jpg);
}
```

### Importing SVGs as components

Just import your `.svg` files from the `source/assets/svg/` folder, and you are good to go.

```
import CircleSvg from '../../../assets/svg/circle.svg';

// then in your render

<CircleSvg />

```

-----
