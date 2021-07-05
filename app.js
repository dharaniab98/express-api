const express = require("express");
const app = express();
app.use("/api", require('./routes/api'));

// base url
app.get("/",(req, res) => {
    res.write("This is baseurl");
    res.end();
    
})
app.listen("3000", ()=>{console.log("node is listening")});