import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter><Route component={App} /></BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
