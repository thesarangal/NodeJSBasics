/**
 * # To Create Project: npm init
 * and Enter the project related data
 * 
 * OR npm init -y
 * to Skip Data Entering Process
 *  
 * # To Start Server: node index
 * 
 * # To Install Any Package: npm install PACKAGE_NAME i.e. npm install express
 * OR npm i PACKAGE_NAME i.e. npm i express
 * 
 * #. To Start Server with Auto Restart on Changes: npm run dev
 * where 'dev' is script name which is defined under 'scripts' in 'package.json' file.
 * 
 * To Install 'nodeom': npm install -D nodemon
 * where '-D' means package will install for development mode only.
 */ 


/* HTTP Module */
const http = require("http")

/* FS Module */
const fileSystem = require('fs')

/** Path Module */
const path = require('path')

const app = http.createServer((request, response) => {

    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url)

    let urlExtension = path.extname(filePath)

    if(!urlExtension) filePath += '.html'

    let contentType = 'text/html'

    switch(urlExtension) {
        case '.css': {
            contentType = 'text/css'
            break
        }
        case '.js': {
            contentType = 'text/javascript'
            break
        }
        default: {
            contentType = 'text/html'
            break
        }
    }

    fileSystem.readFile(filePath, (error, content) => {

        if(error) {
            fileSystem.readFile(path.join(__dirname, 'public', 'error.html'), (error, content) => {

                if(error) {
                    response.writeHead(500)
            
                    response.end('Error')

                    return
                }
        
                response.writeHead(404, {
                    'Content-Type': contentType
                })
        
                response.end(content)
         
            })

            return
        }

        response.writeHead(200, {
            'Content-Type': contentType
        })

        response.end(content)
 
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {

    /* Print Log */
    console.log("Listening on: " + PORT)
})