import './App.css';
import MainDisplay from './components/MainDisplay';
import {Route, Switch} from "react-router-dom"
import IndividualView from './components/IndividualView';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainDisplay}/>
        <Route path="/movie/:id" 
        render={(props) => <IndividualView {...props} />}/>
      </Switch>
    </div>
  );
}

export default App;
