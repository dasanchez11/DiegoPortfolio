import './App.css';
import Header from './components/header/header.component'
import SProject from './components/specific-project/specific-project.component';
import Home from './pages/home.page';
import {Route, Switch} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Header/> 
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact path='/aiProjects/:aiProject' component={SProject} />
      </Switch>

      
     
    </div>
  );
}

export default App;
