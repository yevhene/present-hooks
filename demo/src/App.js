import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './counter/Counter'
import Todo from './todo/Todo'
import Scroll from './scroll/Scroll'
import Rules from './rules/Rules'
import Spy from './spy/Spy'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/counter/'>Counter</Link></li>
            <li><Link to='/todo/'>Todo</Link></li>
            <li><Link to='/scroll/'>Scroll</Link></li>
            <li><Link to='/rules/'>Rules</Link></li>
            <li><Link to='/spy/'>Spy</Link></li>
          </ul>
        </nav>

        <section>
          <Route path='/counter/' component={Counter} />
          <Route path='/todo/' component={Todo} />
          <Route path='/scroll/' component={Scroll} />
          <Route path='/rules/' component={Rules} />
          <Route path='/spy/' component={Spy} />
        </section>
      </div>
    </Router>
  )
}

export default App
