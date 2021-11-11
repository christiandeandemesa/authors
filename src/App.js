import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from './views/Index';
import Create from './views/Create';
import Edit from './views/Edit';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/edit/:id">
            <Edit />
          </Route>
          <Route path="/new">
            <Create />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
