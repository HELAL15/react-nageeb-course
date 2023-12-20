import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./Components/Dashboard/Dashboard.css"
import { BrowserRouter as Router } from 'react-router-dom';
// import { color } from './Components/context/context';
import UserProvider from './Components/context/context';
// import Context2 from './Components/context/context2';
// import {color} from './Components/context/context2'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
);


