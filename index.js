
'use strict'
import { Provider } from 'react-redux'
import store from './client/store'
import { render } from 'react-dom'
import React from 'react'
import Main from './client/components/Main'
import './index.css'

render(
  <Provider store={ store }>
    <Main />
  </Provider>,
  document.getElementById('app')
)
