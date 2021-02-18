# Resume and Portfolio Project
## Introduction
This document intented to explain how to setup and start this project.
The idea of this project was taken from this template: [Mat - vCard & Resume Template by tavonline | ThemeForest](https://themeforest.net/item/mat-html-vcard-template/21062060) and following the next serie videos from YT: https://www.youtube.com/watch?v=N2-RWOEfdcU&list=PLISG6SSQ9nqyuuTjr2cDApJlY9-K3jrn1

## Table of content

1.  [Requirements](https://github.com/stevgonzalezb/resume#requirements)
2.  [Installation](https://github.com/stevgonzalezb/resume#installation)

## Requirements

At least node.js version: `10`. You can get it [here](https://nodejs.org/en/).
heck your node version:

```
node --version
```

If you have an other version of node installed, consider using Node Version Manager (nvm) to manage multiple active node.js versions and to switch between them.

-   Get the nvm for Linux / Mac OS  [here](https://github.com/nvm-sh/nvm)
-   Get the equivalent for Windows  [here](https://github.com/coreybutler/nvm-windows)

##  Installation
-   Clone this repository
```
git clone https://github.com/stevgonzalezb/resume.git
```
-   In root of the folder:
```
npm install
```
-   To start the app via localhost:
```
npm start
```
In your browser open a new tab:  [http://localhost:3000/](http://localhost:3000/)


If everything is right, in browser it will show something like this: 
![](http://drys.tech/steven/images/resume-project.png)

And finally you can edit all the data in the file: src/utils/resumeData.js and the the profile photo on src/asserts/images/profile_photo.jpg
