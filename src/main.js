try {
    print("Running main script...");
    console.log("Hello from SpiderMonkey!");
    load("./src/helper.js");
    print("Arguments passed to script:", scriptArgs);
} catch (e) {
    print("Error:", e.message);
    print("Stack:", e.stack);
}
