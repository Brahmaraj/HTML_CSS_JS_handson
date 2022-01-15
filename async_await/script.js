function resolveAfter2Seconds() {
  console.log("starting slow promise")
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("This is Slow Resolve")
      console.log("Resolves logs after the completion of Promise")
      console.log("slow promise is done")
    }, 2000)
  })
}


function resolveAfter1Second() {
  console.log("starting fast promise")
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("This is Fast Resolve")
      console.log("fast promise is done")
    }, 1000)
  })
}

async function sequentialStart() {
  console.log('==SEQUENTIAL START==')

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds()
  console.log(slow) // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second()
  console.log(fast) // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds() // starts timer immediately
  const fast = resolveAfter1Second() // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow) // 2. this runs 2 seconds after 1.
  console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

function concurrentPromise() {
  console.log('==CONCURRENT START with Promise.all==')
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]) // slow
    console.log(messages[1]) // fast
  })
}

async function parallel() {
  console.log('==PARALLEL with await Promise.all==')

  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
      (async()=>console.log(await resolveAfter2Seconds()))(),
      (async()=>console.log(await resolveAfter1Second()))()
  ])
}

sequentialStart() // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000) // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000) // same as concurrentStart

// wait again
setTimeout(parallel, 10000) // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"

//****************************************************************************************************************************/

// function slow(){
//   console.log("Inside slow promise");
//   return new Promise((resolve)=>{
//     console.log("start slow promise");
//     setTimeout(() => {
//       console.log("1. This is slow function");
//       resolve("(last)slow resolve will always be printed last in slow promise");
//       console.log("2. this is slow function");
//     }, 3000);
//   })
// }

// function fast(){
//   console.log("inside fast promise");
//   return new Promise((resolve)=>{
//     console.log("start fast promise");
//     setTimeout(() => {
//       console.log("1. This is fast function");
//       resolve("(last)fast resolve will always be printed last in fast promise")
//       console.log("2. This is fast function");
//     }, 1000);
//   })
// }


// // let race = Promise.race([slow(),fast()]);
// // race.then(val=>console.log(val));

// const fastpromise = new Promise(resolve => {
//   setTimeout(()=>{
//     resolve('fast');
//   },1000);
// })

// const slowpromise = new Promise(resolve=>{
//   setTimeout(()=>{
//     resolve('slow');
//   },5000);
// })

// // Promise.all([slowpromise,fastpromise]).then(val=>console.log(val[0],val[1]));

// async function concurrent(){
//   let slowvar = await slow();
//   let fastvar = await fast();
//   console.log(slowvar)
//   console.log(fastvar);
// }
// concurrent()