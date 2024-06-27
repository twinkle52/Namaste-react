# hello React

# open index.html

# node preparation.js

First we had the CDN url for react(not a good way, the url may change) now we will import react from NPM

# npm init

We will get package.json which is a configuration for npm.
Bundler bundles our app compress it clean it so that it can be shipped to production. ex (webpack, parcel these are bundler).
They ignite our app.

# npm install -D parcel

- install parcel dev dependency(need while development) not a normal dependency(alraedy in production)
  devDependencies in json is development env dependency
  ^ carret - update the version minor better to use it.
  ~ tilde - update the version major
  package lock json keeps the exact verion of the dependency, while package json has tilde and carret

# npm install -D parcel

- when ran this packagelock.json came and node modules came, node modules is all the dependencies one will require for development from npm.
  If i have package and packagelock.json, i can reh=generate my node modules, just do npm instal. So git will also generate.

# npm install react and npm instal react dom

to get the react in our code

# parcel https://parceljs.org/docs/ chapter 2 all about parcel

- Dev build
- local server host app to server
- HMR (Hot module replacement)
- Image optimization
- bundling as it is a bundler
- minification
- compress
- file watching algo
- onsistent hashing
- differential bundling - so that it con support old, new browser, mobile and every thing

Why React is fast because of these bundlers like parcel.

# npx parcel index.html

so we have to use this to run and build both dev and prod code so to make it easier we will add script in package.json
npm run build for build code in prod, npm run start for running code in dev.
