# Javascript NodeJS Starter kit
This is a starter kit to rapidly start have an development environment 
up and running that includes a development and production build process.

This kit includes the following setup:

  * .editorConfig
  * Development Web Server
  * Automation using npm scripts
  * Transpiling
  * Bundling
  * Linting
  * Unit testing
  * Continuous integration
  * HTTP calls and mocking
  * Project structure
  * Production build
  * Production deploy
  
It also includes trackJS, TravisCI and Appveyor. 
trackJS for error logging;
TravisCI for Continuous integration on macOs / linux;
Appveyor for Continuous integration on windows;

### TODO
This list should be added during a period of time:

  * E2E integration testing with testCafe is still on the agenda;
  * Generator to easily reuse this setup with your own settings;

## .editorConfig
To get a more generic way of working, a .editorConfig is added to the 
project. Most editors can adopt this file by default. But please check
: http://editorconfig.org/. It could be that you editor needs a plugin
to adapt the editor settings.

## Development Web Server
Starting a development buid and server it the following command should
be execute in the command line:

      npm start
      
Add -s to remove the webpack feedback and only see what you need to know.

## Automation using npm scripts
@todo

## Transpiling
@todo

## Bundling
@todo

## Linting
@todo

## Unit testing
@todo

## Continuous integration
@todo

## HTTP calls and mocking
@todo

## Project structure
The files should be bundled by feature. And test and source files 
should not be separated and live in the same folder.

## Production build
Starting a production build is done by executing the following command:

    npm run build


Add -s to remove the webpack feedback and only see what you need to know.
The files will be bundled as discussed in the topic Bundling;

Some extra settings will be added:

TrackJS, change the token to the correct one if you want to use this.
Otherwise remove the trackJS code from the index.html file. 

## Production deploy
@todo

