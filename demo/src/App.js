import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './counter/Counter'
import Todo from './todo/Todo'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/counter/'>Counter</Link>
            </li>
            <li>
              <Link to='/todo/'>Todo</Link>
            </li>
          </ul>
        </nav>

        <section>
          <Route path='/counter/' component={Counter} />
          <Route path='/todo/' component={Todo} />
        </section>
      </div>
    </Router>
  )
}

export default App
