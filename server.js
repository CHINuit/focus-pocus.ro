const express = require("express");
const app = express();
const { execSync } = require("child_process");

app.use(express.json())
app.post("/git-webhook", (req, res) => {
    try {
        //Validate the token
        const token = req.headers['x-hub-signature']
        if (!token || token !== 'sha1=deploy') {
            res.send("Invalid token")
            return
        }

        process.chdir("/var/www/");
        execSync("git clone https://github.com/CHINuit/focus-pocus.ro.git");
        process.chdir("/var/www/focus-pocus.ro/");
        execSync("git pull https://github.com/CHINuit/focus-pocus.ro.git");
        res.send("Repository cloned and pulled successfully.");
    } catch (err) {
        console.error(err);
        res.send("An error occurred while trying to clone and pull the repository.");
    }
});

app.listen(9000, () => {
    console.log("Server started at port 9000");
});
