import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'

//importing mdb react and font awsome
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />

    </BrowserRouter>
  </React.StrictMode>
);

