# PWA_Text_Editor

This project aims to develop a robust browser-based text editor application that meets the criteria of a Progressive Web App (PWA). The text editor will provide a seamless user experience with offline functionality and multiple data persistence techniques, ensuring data redundancy and availability across various browsers.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Installation

- npm install
- npm run start:dev
- npm run build
- npm start

Install as an app

Click 'Install' button.
![alt text](assets/Install.PNG)

Manifest file
![alt text](assets/Manifest.PNG)

Service Worker
![alt text](assets/Service_worker.PNG)

Off-line capability
![alt text](assets/off_line.PNG)

Indexdb
![alt text](assets/indexdb.PNG)

## Technologies used
- Workbox-webpack
- Concurrently
- IndexedDB
- NodeJS
- Babel