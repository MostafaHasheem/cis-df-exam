const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromURL("https://MostafaHasheem.github.io/cis-df-exam/", {
  runScripts: "dangerously",
  resources: "usable"
}).then(dom => {
  dom.window.addEventListener("error", event => {
    console.error("JSDOM Error:", event.error.message);
  });
  dom.window.addEventListener("unhandledrejection", event => {
    console.error("JSDOM Unhandled Rejection:", event.reason);
  });
  
  setTimeout(() => {
    console.log("App innerHTML length:", dom.window.document.getElementById("app").innerHTML.length);
  }, 2000);
}).catch(err => {
  console.error("Failed to load:", err);
});
