// function promiseSetTimeout(delay) {
//     function executorFn(resolve, reject) {
//         setTimeout(function () {
//             resolve("Hi There!!!!");

//         }, delay);
//     }
//     return new Promise(executorFn);
// }

// promiseSetTimeout(1000).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("Error: " + err);
// }) 

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

// Function Constructor.
function CustomPromise(executorFn) {
    // Add required properties and methods.
    // Promise dose not expose these properties.
    let State = PENDING;
    let Value = undefined;

    let scbArr = [];  // It can be a queue.
    let fcbArr = [];  // It can be a queue.

    // atach resolve.
    const resolve = (value) => {
        if (State != PENDING) return;

        State = RESOLVED;
        Value = value;

        // Call your all success from call back array.
        scbArr.forEach((cb) => {
            cb(value);
        })
    }

    // attach reject.
    const reject = (value) => {
        if (State != PENDING) return;

        State = REJECTED;
        Value = value;

        // Call your all failure from call back array.
        fcbArr.forEach((cb) => {
            cb(value);
        })
    }

    // thread then with resolve.
    this.then = function (cb) {
        if (State == RESOLVED) {
            cb(Value);
        } else {
            scbArr.push(cb);
        }
    }


    // thread catch with reject.
    this.catch = function (cb) {
        if (State == REJECTED) {
            cb(Value);
        } else {
            fcbArr.push(cb);
        }
    }

    // Most Important: don't forget to call your executor function.
    executorFn(resolve, reject);

}

const executorFn = (resolve, reject) => {
    //   cb based fn 
    setTimeout(function () {
        resolve("Hey there I'm resolved.");
    }, 1000);

    setTimeout(function () {
        reject("Hey there I'm rejected.");
    }, 2000);
}

// ***************** usage of your custom *****************
const myPromise = new CustomPromise(executorFn);

const cb = (data) => {
    console.log(data);
}

myPromise.then(cb);

myPromise.then((data) => {
    console.log("I am the second then.");
});

myPromise.catch((err) => {
    console.log("Error: ", err);
})

myPromise.catch((data) => {
    console.log("I am the second catch");
})







