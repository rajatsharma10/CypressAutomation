

//const xlsx=require("xlsx");

module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
   
};

const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  on('task', {
    parseXlsx({ filePath }) {
      return new Promise((resolve, reject) => {          
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath));
          resolve(jsonData);
        } catch (e) {
          reject(e);
        
         }         
        
      });
    
    }
  });
};
  
const readXlsx=require('./readXlsx')

module.exports=(on,config)=>{
  on('task' ,{
    'readXlsx':readXlsx.read
  })
}


