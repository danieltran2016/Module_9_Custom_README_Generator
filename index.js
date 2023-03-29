const inquirer = require('inquirer'); //this calls and requires the program to have inquirer -DT
const fs = require('fs'); //this calls and requires the program to have fs file system which allows the progam to write files.-DT

inquirer
  .prompt([
    {
      type: 'input', //this is a user typed input -DT
      message: 'Please enter your name', //this is the text displated to the user -DT
      name: 'name', //this is the name of the response to be called on later on -DT
    },
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What do you want the description to say?',
      name: 'description',
    },
    { 
      type: 'input',
      message: 'What needs to be installed for the project to run?',
      name: 'inst',
    },
    {
      type: 'input',
      message: 'How is the program used/Usage instructions?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What is the name of the file in the assets/images/ folder?',
      name: 'image',
    },
    {
      type: 'list', //this is a list option for users. -DT
      message: 'What is the file type extension?',
      name: 'file',
      choices: ['.png','.jpg'], //This gives users the options to move the cursor and pick either one. 
    },
    {
      type: 'input',
      message: 'Please enter the alt text for the image above.',
      name: 'alt',
    },
    {
      type: 'input',
      message: 'Please paste the URL for your Github.',
      name: 'link',
    },
    {
      type: 'input',
      message: 'Please enter your contact email.',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Is there anyone you would like to credit? Any links',
      name: 'credits',
    },
    {
      type: 'input',
      message: 'Are there any tests that have been run?',
      name: 'testsa',
    },
    {
      type: 'input',
      message: 'Are there any key features?',
      name: 'features',
    },
    
  ])
  .then(function (answer){ 
    // console.log('title'+answer.title); //these are console logged answers i used to debug and make sure it was storing the answers correctly. -DT
    // console.log('desc'+answer.description);
    // console.log('isntall'+answer.inst);
    // console.log('usage'+answer.usage);
    // console.log('iamge'+answer.image);
    // console.log('alt'+answer.alt);
    // console.log('credits'+answer.credits);
    // console.log('test'+answer.test);
    // console.log('features'+answer.features);
    

//the variable below stores the template literal inputs in one so its a little cleaner down the road. -DT
    var input = `

#  **${answer.title}**

## Description
    
${answer.description}
    
## Table of Contents 
    
- [Installation](#install)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Tests](#tests)
    
## Installation
  
${answer.inst}
    
## Usage
    
${answer.usage}
    
    
![${answer.alt}](./assets/images/${answer.image}${answer.file})
       
    
## Credits
    
${answer.credits}

## Questions

Project created by: [${answer.name}](${answer.link})
You may directly reach my be contacting me at ${answer.email}.

    
## License

MIT License
   
Copyright (c) 2023 Danny Tran
    
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
    
---
    
## Badges
 
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
![Danny](https://img.shields.io/badge/Danny-myREADME-brightgreen)
    
## Features
  
${answer.features}
    
## Tests

${answer.testsa}`; //had to make tests variable something unique because test by itself was not storing properly. -DT
    
  fs.writeFile('README.md', input, (err) => //this creates a new file for the readme and inserts the "input" template literal above, into the file. -DT
   err ? console.error(err) : console.log('Success!')
   )});