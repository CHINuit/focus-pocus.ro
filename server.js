const express = require('express');
const app = express();
const child_process = require('child_process');
const secret = 'deploy';

// Define the route to execute commands
app.get('/execute-command', (req, res) => {
    const receivedSecret = req.headers['x-hub-signature'];
    if (receivedSecret !== secret) {
        res.status(401).send('Unauthorized');
        return;
    }
    // The path to the .sh file
    const filePath = '/var/www/focus-pocus.ro/build/sync.sh';
    // Execute the file
    child_process.execFile(filePath, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
    res.send('Command executed');
});

app.listen(9000);
