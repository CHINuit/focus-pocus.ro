const express = require('express');
const app = express();
const child_process = require('child_process');

// Define the route to execute commands
app.get('/execute-command', (req, res) => {
    // The command you want to execute
    const command = 'cd /var/www/focus-pocus.ro/ && sudo git pull https://github.com/CHINuit/focus-pocus.ro.git';
    // Execute the command
    child_process.exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
    res.send('Command executed');
});

app.listen(9000, () => {
    console.log('Server started on port 9000');
});
