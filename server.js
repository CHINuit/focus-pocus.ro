const express = require('express');
const app = express();
const secret = 'deploy';

app.get('/execute-command', (req, res) => {
    const receivedSecret = req.headers['x-hub-signature'];
    if (receivedSecret !== secret) {
        res.status(401).send('Unauthorized');
        return;
    }

    // execute your command here
    // for example:
    const { exec } = require('child_process');
    exec('sh /sync.sh', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
    res.send('Command executed');
});

app.listen(9000, () => {
    console.log('Server listening on port 9000');
});
