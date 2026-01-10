1. **Node.js Architecture**
Single main thread for JavaScript execution.Event Loop to manage async tasks.This makes Node.js fast, scalable, and memory efficient

  =>  **JavaScript Engine (V8):**
  V8 is Google’s high-performance JavaScript engine, written in C++, used by Node.js to execute JavaScript code.

  =>**Node.js Core APIs:**
  Node.js Core APIs provide built-in modules to interact with the system.These APIs are not part of V8, they are provided by Node.js runtime.


  =>**Native bindings:**
  Native bindings act as a bridge between JavaScript and C/C++ code.JavaScript cannot directly access OS-level features.Native bindings connect


  =>**Event Loop:**
  The Event Loop is the heart of Node.js. It handles asynchronous operations.Executes callbacks without blocking


2. **libuv**

  => **What is libuv?**
  libuv is a C library used by Node.js to handle:Asynchronous I/O,Event loop,Thread pool.Libuv handles OS-level async operations.


  =>**Why Node.js needs libuv?**
  libuv works across platforms(WIndows,linux,maxOS) whereas javascript cannot perform heavy I/O efficiently


  =>**Responsibilities of libuv:**
  Event loop implementation
  Asynchronous file operations
  Network handling
  DNS operations
  Thread pool management


3. **Thread Pool**
 
  =>**What is Thread pool?**
  A thread pool is a set of background threads used to execute blocking or heavy tasks.


  =>**Why Node.js uses a thread pool?**
  Main thread must remain non-blocking.Heavy tasks can freeze the event loop.Thread pool handles such tasks in background.


  =>**Which operations are handled by the thread pool?**
  File system operations(fs),DNS lookups,Compression, Crypto operations.


4. **Worker Threads:**

  =>**What are worker threads?**
  Worker threads allow you to run JavaScript code in parallel threads.


  =>**Why are worker threads needed?**
  Thread pool is limited and automatic.CPU-intensive JS tasks can block event loop.Worker threads allow true parallelism.


  =>**Difference between thread pool and worker threads:**
    Thread Pool:
    A group of pre-created threads that handle tasks.
    Improves performance by reusing threads instead of creating new ones.
    Common in servers (e.g., handling multiple requests).

   Worker Threads:
    Individual threads that perform specific tasks.
    Can be part of a thread pool or created separately.
    Node.js worker_threads for CPU-intensive tasks.



5. **Event Loop Queues**

  =>**Macro Task Queue:**
  It contains setTimeout,setInterval,setImmediate,I/O callbacks

  =>**Micro Task Queue:**
  It contains Promise.then(),catch(),finally(),process.nextTick()


  =>**Execution priority between them:**
  1. process.nextTick()
  2. Micro Task Queue (Promises)
  3. Macro Task Queue


  =>**Examples of tasks in each queue:**
setTimeout(() => console.log("Timeout"));
Promise.resolve().then(() => console.log("Promise"));
console.log("Start");














