import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
