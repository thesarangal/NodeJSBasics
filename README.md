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
firstFunction(args, function() {
  secondFunction(args, function() {
    thirdFunction(args, function() {
      // And so on…
    });
  });
});
```
See the pyramid shape and all the }) at the end? This is affectionately known as callback hell.

#### What’s worse than callback hell?
Not fixing it.

#### Solution to Callback Hell
- Write comments
- Split functions into smaller functions
- Using Promises
- Using Async/await

##### Problem
```
const makeBurger = nextStep => {
  getBeef(function (beef) {
    cookBeef(beef, function (cookedBeef) {
      getBuns(function (buns) {
        putBeefBetweenBuns(buns, beef, function(burger) {
          nextStep(burger)
        })
      })
    })
  })
}

// Make and serve the burger
makeBurger(function (burger) => {
  serve(burger)
})
```

#### Solution: Write Comment
```
// Makes a burger
// makeBurger contains four steps:
//   1. Get beef
//   2. Cook the beef
//   3. Get buns for the burger
//   4. Put the cooked beef between the buns
//   5. Serve the burger (from the callback)
// We use callbacks here because each step is asynchronous.
//   We have to wait for the helper to complete the one step
//   before we can start the next step

const makeBurger = nextStep => {
  getBeef(function(beef) {
    cookBeef(beef, function(cookedBeef) {
      getBuns(function(buns) {
        putBeefBetweenBuns(buns, beef, function(burger) {
          nextStep(burger);
        });
      });
    });
  });
};
```
Now, When you see the callback hell, you get an understanding of why it has to be written this way.

#### Solution: Split the callbacks into different functions
```
const getBeef = nextStep => {
  const fridge = leftFright;
  const beef = getBeefFromFridge(fridge);
  nextStep(beef);
};
```
```
const cookBeef = (beef, nextStep) => {
  const workInProgress = putBeefinOven(beef);
  setTimeout(function() {
    nextStep(workInProgress);
  }, 1000 * 60 * 20);
};
```

#### Solution: Use promises
```
const makeBurger = () => {
  return getBeef()
    .then(beef => cookBeef(beef))
    .then(cookedBeef => getBuns(beef))
    .then(bunsAndBeef => putBeefBetweenBuns(bunsAndBeef));
};

// Make and serve burger
makeBurger().then(burger => serve(burger));
```

#### Solution: Use asynchronous functions
```
const makeBurger = async () => {
  const beef = await getBeef();
  const cookedBeef = await cookBeef(beef);
  const buns = await getBuns();
  const burger = await putBeefBetweenBuns(cookedBeef, buns);
  return burger;
};

// Make and serve burger
makeBurger().then(serve);
```
Reference: https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/

### Event Loop
The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It is done by assigning operations to the operating system whenever and wherever possible.

#### Features of Event Loop
- An endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
- Executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
- Allows us to use callbacks and promises.
- Executes the tasks starting from the oldest first.

#### Example
```
console.log("This is the first statement");
   
setTimeout(function(){
    console.log("This is the second statement");
}, 1000);
   
console.log("This is the third statement"); 
```

#### Phases of the Event loop
- 1. Timers: Callbacks scheduled by setTimeout() or setInterval() are executed in this phase.
- 2. Pending Callbacks: I/O callbacks deferred to the next loop iteration are executed here.
- 3. Idle, Prepare: Used internally only.
- 4. Poll: Retrieves new I/O events.
- 5. Check: It invokes setIntermediate() callbacks.
- 6. Close Callbacks: It handles some close callbacks. Eg: socket.on(‘close’, …)

Reference: https://www.educative.io/edpresso/what-is-the-event-loop-in-nodejs

### Concurrency Model
- JavaScript has a concurrency model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.
- This model is quite different from models in other languages like C and Java.

#### Runtime Concepts
##### Stack
##### Heap
##### Queue

#### Event Loop
##### Run to Completion
##### Add Messages
##### Zero Delays
##### Several runtimes communicating together

#### Never Blocking

### setImmediate()
- allows us to directly add a callback to the event queue.
- If you are familiar with the event loop, the check phase is specifically used to invoke callbacks set using the setImmediate method.

#### Example:
```
console.log('This is the first log');
setImmediate(() => console.log('This was queued!'))
console.log('This is the second log');
```

### process.nextTick()
- Takes a callback and adds it to a queue.
- This callback is then added to the nextTickQueue so that it will be executed as soon as the current phase ends.
- The loop will block until the callback is resolved completely.
- Therefore, taking recursive process.nextTick calls can cause I/O starvation as the event loop might never reach that phase.

#### Example:
```
console.log('This is the first log');
process.nextTick(() => console.log('This was queued!'))
console.log('This is the second log');
```

### setImmediate() vs process.nextTick()
- Both setImmediate and process.nextTick appear to be doing the same thing; however, you may prefer one over the other depending on your callback’s urgency.
- It is interesting to note that setImmediate adds callbacks to the event queue that are executed during the check phase, whereas process.nextTick executes callbacks immediately after the current phase.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#runtime_concepts

### Disclaimer: Above definition and information has been collected from various website and web articles etc. This information is only for education and learning purpose. Don't use it for any commerical purpose in any form.

### ThankYou