import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ReactBreakpoints from 'react-breakpoints'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { configureStore } from './store/index'

const globalStore = configureStore()

const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1200,
}

document.getElementById('root').style.maxWidth = '100%'

ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </ReactBreakpoints>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
