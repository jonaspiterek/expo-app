# expo-app

New project using React Native.

## Quick start

### Development setup

- npm 8 or higher
- nvm
- npx
- yarn
Open the terminal and run the `npm --version` command to make sure you are using the right npm version. If it outputs 8 or higher, you are good to go! Now, run the `npm install` command to install the node_modules. You can start the development by running `npm run web` or `yarn web`.

### Connect with your Plone local server (disable CORS)
```
$ docker run -it --rm --name=plone -p 8080:8080 -e SITE=Plone -e APPLY_PROFILES="plone.volto:default-homepage" -e CONFIGURE_PACKAGES=plone.volto.cors plone/plone-backend:6.0.1
```
Also make sure you have your Docker image up and running with CORS disabled for development.

## Credits

**This project was genereated by [React Nativ](https://reactnative.dev/) using npx [create-expo-app](https://reactnative.dev/docs/environment-setup) on May 17, 2023.**

