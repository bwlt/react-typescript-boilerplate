import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './components/Root'

const rootEl = document.createElement('div')
const bodyEl = document.body
const htmlEl = bodyEl.parentElement
if (!htmlEl) throw new Error('Unexpected missing html tag')

htmlEl.style.setProperty('height', '100%')
bodyEl.style.setProperty('height', '100%')
rootEl.style.setProperty('height', '100%')
bodyEl.style.setProperty('margin', '0')
bodyEl.appendChild(rootEl)

const render = (Component: React.ReactType) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./components/Root.tsx', () => {
    const NextRoot = require('./components/Root.tsx').default
    render(NextRoot)
  })
}