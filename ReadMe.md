# YouTube Clone

## This project is a rough clone of YouTube (or any video streaming platform), made to understand BackEnd in depth.

### Data Modelling:
- I will be adding a link to the data model structure that I will create for this project. But that is not for now
That I will be doing later, once I have created good enough model.

### .gitkeep file:
- .gitkeep is a file that is used to track empty directories.
Git keeps track of files and not directories. So, when it sees an empty directory, it doesn't keep track of it.
- However, sometimes we want that directory to be included in our git to structure our material properly.
- In this case we can simply add a temporary file to keep track of it. However, the standard industry practice is to make a .gitkeep file.

### .gitignore file:
- Now .gitignore file is made to ignore the files while pushing into git.
It's contents are copy-pasted from a git ignore generator which is present online.
- Link of the gitignore generator: https://mrkandreev.name/snippets/gitignore-generator/#Node

### Installing nodemon:
- It is a software, with the main purpose being restarting the server as soon as the file is saved. Kind-of like live server in FrontEnd.

#### Dependency:
- Always a dependency.
- Command: npm i nodemon- Comes under the section of dependencies in package.json
- Comes under the section of dependencies in package.json

#### Dev-Dependency:
- A dependency in development phase but not taken in production. (Makes our project light)
- Command: npm i -D nodemon
- Comes under the section of dev-dependencies in package.json

### prettier:
- Downloading prettier package as a dev dependency (with -D).
- It is considered a good practice in organisations where a large number of devs code together. If devs don't use prettier, then someone will have 2 spaces while someone will have 4 for tab. This will generate thousands of useless conflicts while trying to merge codes. Thus, prettier saves a lot of time and effort.
- Command for installation: npm i -D prettier

#### Setting up prettier:
- Make a .prettierrc.json file and write the settings you want in your entire code. You can use some generator on internet for this and make changes as you need.
- Make a .prettierignore file (don't need to make it .json) and write the files you don't want to use prettier on. This usually contains files where prettier might destroy the functionality by changing the file structure. This can also be generated from internet.