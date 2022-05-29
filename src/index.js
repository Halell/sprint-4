import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './root-cmp'
import { Provider } from 'react-redux'
import * as serviceWorkerRegistration from './services/serviceWorkerRegistration'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './assets/styles/styles.scss'
import { store } from './store/store'
// import 'font-awesome/css/font-awesome.min.css'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

