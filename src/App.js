import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('https://focus-pocus.ro:9000/execute-command', {
      headers: {
        'x-hub-signature': 'deploy'
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>My React App</h1>
    </div>
  );
}

export default App;
