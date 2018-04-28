# Project Name

> This is Shamazon, a clone of Amazon that aims to replicate the functionality of its Photo Gallery, Related Items, and Review Server, and Product Description. Due to the complexitiy of Amazon and time constraints, full completion wasn't feasible. However, these files do work as a proof of concept and can be expanded further. Within my project there are stretch goals that will be done at a later time.


## Related Projects

  - https://github.com/shamazon/description-server (my component!)
  - https://github.com/shamazon/review-server
  - https://github.com/shamazon/related-items-server
  - https://github.com/shamazon/photo-gallery-server

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [TechStack](#TechStack)
1. [Pitfalls](#pitfalls)

## Usage


To run, open two terminals.

In the first: type npm run server
In the second: type npm start

You will notice there is no database! You must seed and create one yourself. The database port in use is currently 5432. 4 sample database dumps are located and named for each component is located in server.js. The ports used in this project are 5432 for Postgres and 27017 for Mongo. 


In order to build, please do the following:

  1) Point the server file in server/server.js from targeting ['..', 'public'] to  ['..', 'build'] then: 
  2a) Change the relative file path for get requests in src/components/App.js to target itself.
  - for Server: server/server.js from line 32-35
  - for App.js: src/components/App.js from line 50
  OR
  2b) Alternatively, host the client in App and the hosted Server on two different ports. If this is done, the file path for client App must point towards the Server.
  3) type: npm run build
  4) type: npm run server
 

## Requirements

- Node 9.4

## Development

### Installing Dependencies

From within the root directory:

```
npm install
```

### Tech Stack
The following technologies were used in this project:

    Outside technologies:
    Create React App v1.5.2
    Docker  v18.03.1
    Postgres v10.3,
    MongoDB v3.6.3,
    
    Within package.json: 
    
    axios 0.18.0,
    body-parser 1.18.2,
    express 4.16.3,
    moment 2.22.0,
    pg-promise 8.2.3,
    prop-types 15.6.1,
    react 16.3.1,
    react-dom 16.3.1,
    react-image-magnify 2.7.0,
    react-modal 3.3.2,
    react-router-3 3.2.2,
    react-scripts 1.1.4


### Pitfalls

1) No database config file was used in this project. The server and database is configurated in server/server.js
2) Program is compiled using react create app. If webpack is needed, ***WARNING*** you are able to use npm run eject. *** However, this is irreversible. Please do this on a seperate branch as it may break.
3) When Deploying to Production:

  1) Point the server from targeting ../public to ../build then: 
  2a) Change the relative file path for get requests in src/components/App.js to target itself.
  - for Server: server/server.js from line 32-35
  - for App.js: src/components/App.js from line 50
  OR
  2b) Alternatively, host the client in App and the hosted Server on two different ports. If this is done, the file path for client App must point towards the Server.
  3) Run npm build
  4) Launch the server.
 

4) A run script is currently used to deploy Docker. When writing your own run script, remember to use chmod +x <filename> or else Docker will not be able to execute the script.

5) Significant documentation was made in the Proxy Description Server fork. If you are using this file, please refer to the documentation here if you are lost.





