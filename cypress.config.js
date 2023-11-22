const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      reporter: 'mochawesome'
      // implement node event listeners here
      on('task', {
        readFileMaybe(filename) { 
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename, 'utf8')
          }
      
          return null
        },
      })
    }
  }
})
