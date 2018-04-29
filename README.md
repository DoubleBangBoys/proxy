# Project Name

> This is Shamazon, a clone of Amazon that aims to replicate the functionality of its Photo Gallery, Related Items, and Review Server, and Product Description. Due to the complexitiy of Amazon and time constraints, full completion wasn't feasible. However, these files do work as a proof of concept and can be expanded further. Within my project there are stretch goals that I consider to be next steps.


## Related Projects

  - https://github.com/shamazon/description-server (my component!)
  - https://github.com/shamazon/review-server
  - https://github.com/shamazon/related-items-server
  - https://github.com/shamazon/photo-gallery-server

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Building for Deployment](#building-for-deployment)
1. [Local Deployment](#deployment-to-localhost)
1. [TechStack](#techstack)
1. [Pitfalls](#pitfalls)
1. [Important File Paths](#important-file-paths)

## Usage


To run, open two terminals.

In the first: type npm run server
In the second: type npm start

You will notice there is no database! You must seed and create one yourself. The database port in use is currently 5432. 4 sample database dumps are located and named for each component is located in server.js. The ports used in this project are 5432 for Postgres and 27017 for Mongo. 



## Requirements

- Node 9.4.0 or higher

## Building for Deployment
In order to build, please do the following:

  1) Point the server file in server/server.js from targeting ['..', 'public'] to  ['..', 'build'] then: 
  2a) Change the relative file path for get requests in src/components/App.js to target itself.
  - for Server: server/server.js from line 32-35
  - for App.js: src/components/App.js from line 50
  OR
  2b) Alternatively, host the client in App and the hosted Server on two different ports. If this is done, the file path for client App must point towards the Server.
  3) type: npm run build
  4) type: npm run server
 
## Deployment-to-Localhost

2. Build as mentioned in [Build](#Build).
2. In your terminal run `docker build -t myimage .` in the root directory
2. type touch docker-compose.yml file in a seperate directory.
2. move the description-server.sql from the server/Example-Data/description-server.sql file into the same directory as the docker-compose.yml file.
2. Create a docker compose file! It should like this:

version: '3'

services:
  db:
    image: postgres:latest
    restart: always
    environment: 
      POSTGRES_USER: shamazon
      POSTGRES_DB: shamazon
    volumes:
      - ./Description-Server.sql:/docker-entrypoint-initdb.d/Description-Server.sql
    ports:
      - "5432:5432"

  app: 
    image: 'myimage' 
    depends_on: 
      - 'db'
    ports:
      - '4000:4000'

    NOTE: When a docker image is using a string, that means it is referring to the name of the image. 
    
    This may fail if your image is not named 'myimage' or if any of your ports are in use on your docker server! 
    
    Read up on Docker kill if a port error happens! https://docs.docker.com/engine/reference/commandline/kill/

    NOTE 2: Spacing and syntax needs to be exact. 

2. docker-compose up

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

5) Significant documentation was made in the Proxy Description Server fork. If you are using this file, please refer to the documentation here if you are lost. Note: Every project was coded seperately, so functionality may be difference across different proxies in this group.

### Important-File-Paths
 - Router is located in src/index.js
 - Shamazon Description Component is located in src/components/
 - All other components are located in:
  src/components/OtherCompos




