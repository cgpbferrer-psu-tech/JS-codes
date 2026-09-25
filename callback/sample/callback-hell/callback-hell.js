// callbackhell = situation in JavaScript where callbacks are nested within other callbacks to the degree 
// where the code is difficult to read and maintain.
// Old pattern to handle asynchronous operations before Promises and async/await were introduced.
// Use Promises or async/await to avoid callback hell and improve code readability.


/* 
function task1() {
    setTimeout(() => {
    console.log("Task 1 completed");
    }, 5000); // 5 secs
}
function task2() {
    console.log("Task 2 completed");
}
function task3() {
    console.log("Task 3 completed");
}
function task4() {
    console.log("Task 4 completed");
}
function task5() {
    console.log("Task 5 completed");
}

task1(); 
task2();
task3();
task4();
task5();
console.log("All tasks initiated");


*/




// 1,4,2,3,5 then print output
// 1,4,2,3, then print output then 5 
// output then 1,4,2,3,5
// 1,4 ouput then 2,3,5
// 1,2,3,4,5 then output



// /*

function task1(callback) {
    setTimeout(() => {
    console.log("Task 1 completed");
    callback();
    }, 1000); // 1 sec
}
function task2(callback) {
    setTimeout(() => {
    console.log("Task 2 completed");
    callback();
    }, 2000); // 2 secs
}
function task3(callback) {
    setTimeout(() => {
    console.log("Task 3 completed");
    callback();
    }, 4000); // 4 secs
}
function task4(callback) {
    setTimeout(() => {
    console.log("Task 4 completed");
    callback();
    }, 1000); // 1 sec
}
function task5(callback) {
    setTimeout(() => {
    console.log("Task 5 completed");
    callback();
    }, 10000); // 10 secs
}
 
task5(() => {
    task4(() => {
        task3(() => { 
            task2(() => {
                task1(() => {
                    console.log("All tasks are completed");
                });
            });
        });
    });
});





// */

// without tabbing/spacing

/*

task5(() => {
task4(() => {
task3(() => { 
task2(() => {
task1(() => {
console.log("All tasks are completed");
});
});
});
});
});


*/