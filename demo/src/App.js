import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './counter/Counter'
import Spy from './spy/Spy'
import Todo from './todo/Todo'
import Scroll from './scroll/Scroll'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/counter/'>Counter</Link></li>
            <li><Link to='/todo/'>Todo</Link></li>
            <li><Link to='/spy/'>Spy</Link></li>
            <li><Link to='/scroll/'>Scroll</Link></li>
          </ul>
        </nav>

        <section>
          <Route path='/counter/' component={Counter} />
          <Route path='/todo/' component={Todo} />
          <Route path='/spy/' component={Spy} />
          <Route path='/scroll/' component={Scroll} />
        </section>
      </div>
    </Router>
  )
}

export default App
