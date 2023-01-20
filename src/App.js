import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Webhook from './Webhook';



function App() {
  return (
    <Router>
      <Route path="/sync" component={Webhook} />
      {/* other routes */}
    </Router>
  );
}


export default App;
