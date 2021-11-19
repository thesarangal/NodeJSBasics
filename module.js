// NPM Module: 'cli-color'
const color = require('cli-color');

// IIFS (Immediately Invoked Function Expression) Function
(function(value) {
    
    // Print Log
    console.log(color.green(value))
})("IIFS Function: Executed")

/* Next Line */
console.log("\n")

/* Import Modules */
const authModule = require('./auth')
const pathModule = require('path')
const fsModule = require('fs')
const osModule = require('os')

/* CUSTOM MODULE - Heading */
console.log(color.blueBright("Custom Modules"))

/* Register User */
authModule.registration("info@sarangal.com")

/* Login User */
authModule.login("info@sarangal.com")

/* Next Line */
console.log("\n")

/* PATH MODULE - Heading */
console.log(color.blueBright("Path Module"))

/* Print Current File Name */
console.log("File Name:", pathModule.basename(__filename))

/* Print Current File Extension Name */
console.log("File Extension Name", pathModule.extname(__filename))

/* Parse Current File */
console.log("Parse File", pathModule.parse(__filename))

/* Join */
console.log("Join Example:", pathModule.join(
    __dirname,
    color.green(pathModule.basename(__filename))
))

/* Next Line */
console.log("\n")

/* FILE SYSTEM MODULE - Heading */
console.log(color.blueBright("File System Module"))

/* Make Directory */
const dir = pathModule.join(
    __dirname,
    "public" // Making New Directory
)
fsModule.mkdir(dir, (error) => {

    if(error) {
        
        /* Print Log */
        console.log(color.red("Make Directory Failed: " + error.message))
        
        /* Print Log */
        console.log(error)
        return
    }

    /* Print Log */
    console.log(`Directory Created: ${dir}`)

})

/* Create File */
const filePath = pathModule.join(
    __dirname,
    "public",
    "index.html"
)

const fileContent = "Hello NodeJS"

const fileError = (error) => {

    if(error) {
        
        /* Print Log */
        console.log(color.red("Create File Failed: " + error.message))
        
        /* Print Log */
        console.log(error)
        return
    }

    /* Print Log */
    console.log(`File Created: ${filePath}`)

}

fsModule.writeFile(filePath, fileContent, fileError)

/* Read File - 1 */
fsModule.readFile(filePath, (error, bufferContent) => {

    if(error) {
        throw error
    }

    const buffer = Buffer.from(bufferContent)

    /* Print Log */
    console.log(buffer.toString())

})

/* Append Data */
    fsModule.appendFile(filePath, "Welcome to Learning", (error) => {
        
        if(error) {
            throw error
        }
    })

/* Read File - 2 */
fsModule.readFile(filePath, "utf-8", (error, content) => {

    if(error) {
        throw error
    }

    /* Print Log */
    console.log(content)

})

/* Next Line */
console.log("\n")

/* OPERATING SYSTEM MODULE - Heading */
console.log(color.blueBright("Operating System Module"))

/* OS Type */
console.log("OS Type: " + osModule.type)
console.log("OS Platform: " + osModule.platform)
console.log("CPU Architecture: " + osModule.arch)
