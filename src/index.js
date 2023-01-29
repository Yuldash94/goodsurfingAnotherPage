import React from 'react';
import ReactDOM from 'react-dom/client';
import {GoogleOAuthProvider} from '@react-oauth/google'
import './index.css';
import App from './App';
const clientID = '268425863623-3qp5bd1uvhdtp3k7cejd3p377pe6uerb.apps.googleusercontent.com'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId ={clientID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);