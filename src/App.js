import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Office from './pages/Office'
import Windows from './pages/Windows'

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/office">
        <Office />
      </Route>

      <Route exact path="/windows">
        <Windows />
      </Route>
    </BrowserRouter>
  )
}

export default App

// https://www.youtube.com/watch?v=uKgn-To1C4Q&list=LL&index=1&t=91s
// https://codepen.io/bradtraversy/details/ZEGGNRb
