import React from 'react';

class Webhook extends React.Component {
    handleWebhook() {
        // Send a request to the endpoint on the local machine
        fetch('http://your-local-ip:3000/webhook', { method: 'POST' })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }
    render() {
        return (
            <div>
                <button onClick={this.handleWebhook}>Run Script</button>
            </div>
        );
    }
}

export default Webhook;
