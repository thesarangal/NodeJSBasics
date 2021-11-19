# NodeJSBasic
Learning Practices of NodeJS Basics 

### Introduction:
- Base on JavaScript
- Open Source Server Environment
- Not a framework, it's a server
- NodeJS is a JavaScript Runtime

    #### What is Runtime?
    In computer programming, a runtime system, also called runtime environment, primarily implements portions of an execution model.

- Ryan Dahl: Original Developer of Node.js in 2009
- Built on Chrome’s V8 Javascript Engine
- [Chrome’s V8 JavaScript Engine] + [C++ Program] = Node.js
- Node.js is a C++ Program which running with Chrome’s V8 JavaScript Engine
- Include File System and Operating System etc, which are not included in Core JavaScript
- Not multi-threaded. It runs in a single thread with a callback concept.
- Behavior: Async, Non-Blocking

    #### Non-Blocking: Example of Restaurant.  

- runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)

### NodeJS Features:
- Asynchronous and Event Driven
- Very Fast
- Single Threaded but Highly Scalable
- No Buffering

### Where to use:
- I/O bound Applications
- Data Streaming Applications
- Data Intensive Real-time Applications (DIRT)
- JSON APIs based Applications
- Single Page Applications

### Where not to use:
- Not advisable to use Node.js for CPU intensive applications

### Pros:
- Asynchronous event driven IO helps concurrent request handling
- Uses JavaScript, which is easy to learn
- Share the same piece of code with both server and client side
- npm (Node Package Manager), the Node packaged modules has already become huge, and still growing
- Active and vibrant community, with lots of code shared via github, etc
- You can stream big files

### Cons:
- One CPU is not going to be enough; the platform provides no ability to scale out to take advantage of the multiple cores commonly present in today's server-class hardware.
- Dealing with relational databases is a pain if you are using Node.
- Every time using a callback ends up with tons of nested callbacks.
- Without diving in depth of JavaScript if someone starts Node, he may face conceptual problems.
- Node.js is not suited for CPU-intensive tasks. It is suited for I/O stuff only (like web servers).

### Callbacks
- A callback function is called at the completion of a given task.
- An asynchronous equivalent for a function.
- Callbacks are nothing but functions that take some time to produce a result.
- Usually these async callbacks (async short for asynchronous) are used for accessing values from databases, downloading images, reading files etc.
- As these take time to finish, we can neither proceed to next line because it might throw an error saying unavailable nor we can pause our program.
- So we need to store the result and call back when it is complete.

#### Example:
```
// Callback Function
var callbackFunction = function(data) {
  console.log('Task Status: '+ data);
};

// A Function in which Callback Function is used
var processAction = function(callback) {
  callback('Success');
};
```
Use above function as:
```
processAction(callbackFunction);
```

### Callback Hell
- Also known as Pyramid of Doom
- An anti-pattern seen in code of asynchronous programming.
- It is a slang term used to describe and unwieldy number of nested “if” statements or functions.
- If you are not expecting your application logic to get too complex, a few callbacks seem harmless. But once your project requirements start to swell, you will quickly find yourself piling layers of nested callbacks. Congrats! Welcome to Callback Hell.

#### Example:
```
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```
See the pyramid shape and all the }) at the end? This is affectionately known as callback hell.

#### What’s worse than callback hell?
Not fixing it.


### Disclaimer: Above definition and information has been collected from various website and web articles etc. This information is only for education and learning purpose. Don't use it for any commerical purpose in any form.

### ThankYou