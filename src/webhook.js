import express from 'express';
const router = express.Router();
const { exec } = require('child_process');

router.post('/', (req, res) => {
    exec('/var/www/focus-pocus.ro/sync.sh', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    res.send('Deployment started!');
});

export default router;
