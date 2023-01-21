import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';


function App() {
  function App() {
    useEffect(() => {
      axios.get('http://localhost:9000/execute-command')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
      <Router>
        <div>
          <h1>My React App</h1>
        </div>
      </Router>
    );
  }
}


export default App;


/*
import React, {useEffect} from 'react';
import axios from 'axios';

function App() {
    useEffect(() => {
        axios.get('http://focus-pocus.ro:9000/execute-command')
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

export default App;*/
