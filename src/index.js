import styles from './styles/styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app/App'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

ReactDOM.render(<App/>,document.getElementById('root'))

