/*
    OJT DAILY ROUTINE SIMULATION
    Name: (Your Name)
    Purpose: Remedial Activity
    Description:
    This program simulates my future OJT routine as a student.
    It demonstrates asynchronous programming using:
    - Callback
    - Promise
    - Async / Await
    - API Call
*/

/* ===============================
   1. CALLBACK - START OF OJT DAY
   =============================== */

function startOJTDay(callback) {
    console.log("⏰ Waking up and preparing for OJT...");

    setTimeout(() => {
        console.log("🚌 Arrived at OJT workplace");
        callback();
    }, 2000);
}

/* ===============================
   2. PROMISE - STRESS MANAGEMENT
   =============================== */

function handleStress(stressLevel) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stressLevel <= 5) {
                resolve("😊 Stress level is manageable. Continue working.");
            } else {
                reject("😫 Stress is too high. Taking a short break.");
            }
        }, 1500);
    });
}

/* ===============================
   3. ASYNC / AWAIT - DAILY TASKS
   =============================== */

function doTask(taskName, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`✅ Completed task: ${taskName}`);
        }, time);
    });
}

/* ===============================
   4. API CALL - DAILY ROUTINE DATA
   =============================== */

async function fetchDailyRoutineFromAPI() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();

        console.log("📡 Data fetched from API:");
        console.log(data);
    } catch (error) {
        console.log("❌ Error fetching API data:", error);
    }
}

/* ===============================
   MAIN OJT ROUTINE (ALL COMBINED)
   =============================== */

async function ojtRoutine() {
    try {
        console.log("\n📘 OJT DAY STARTED\n");

        console.log(await doTask("Checking emails", 1000));
        console.log(await doTask("Coding assigned task", 2000));
        console.log(await doTask("Lunch break", 1000));
        console.log(await doTask("Writing daily report", 1500));

        // Handle stress using Promise
        await handleStress(4)
            .then(message => console.log(message))
            .catch(error => console.log(error));

        // Fetch daily routine data from API
        await fetchDailyRoutineFromAPI();

        console.log("\n🏁 OJT DAY FINISHED\n");
    } catch (error) {
        console.log("❌ Unexpected error during OJT:", error);
    }
}

/* ===============================
   PROGRAM EXECUTION
   =============================== */

startOJTDay(() => {
    console.log("💻 Starting OJT tasks...\n");
    ojtRoutine();
});
