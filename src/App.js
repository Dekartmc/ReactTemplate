import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { algo } from './redux/actions/primerActions'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Raiz() {
  return (
    <ul>
      <li><Link to="/uno">Uno</Link></li>
      <li><Link to="/dos">Dos</Link></li>
    </ul>
  )
}
function Uno() {
  return 'Uno'
}
function Dos() {
  return 'Dos'
}

function App() {
  const dispatch = useDispatch();
  const data = useSelector( state => state.mainReducers)

  return (
    // <div className="bg-red-100" onClick={ () => dispatch(algo())}>{data.valor}</div>
    <Router>
      <Switch>
        <Route exact path="/" component={Raiz} />
        <Route path="/uno" component={Uno} />
        <Route path="/dos" component={Dos} />
      </Switch>
    </Router>
  );
}

export default App;
