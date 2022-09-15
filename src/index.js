import React from 'react'
import ReactDOM from 'react-dom/client'
import { deepPurple, red} from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import App from './App'
import './index.css'



const theme = createMuiTheme({
  pallete: {
    primary: {
     main: deepPurple[900],
    },
    secondary: {
      main: red[900],

    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />

    </ThemeProvider>


  </React.StrictMode>
  
)

