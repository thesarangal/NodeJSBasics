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
- Chrome’s V8 JavaScript Engine + A C++ Program = Node.js
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