import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Office from './pages/Office'
import Windows from './pages/Windows'
import Surface from './pages/Surface'
import Xbox from './pages/Xbox'
import Deals from './pages/Deals'
import Support from './pages/Support'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/office">
          <Office />
        </Route>

        <Route path="/windows">
          <Windows />
        </Route>

        <Route path="/surface">
          <Surface />
        </Route>

        <Route path="/xbox">
          <Xbox />
        </Route>

        <Route path="/deals">
          <Deals />
        </Route>

        <Route path="/support">
          <Support />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

// https://www.youtube.com/watch?v=uKgn-To1C4Q&list=LL&index=1&t=91s
// https://codepen.io/bradtraversy/details/ZEGGNRb
