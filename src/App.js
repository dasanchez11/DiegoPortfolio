import './App.css';
import NavBar from './components/NavBar/NavBar.component'
import SProject from './components/specific-project/specific-project.component';
import Home from './pages/home.page';
import {Route, Switch} from 'react-router-dom';
import ContactPage  from './pages/contact/contact.page';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/aiProjects/:aiProject' component={SProject} />
      </Switch>

      
     
    </div>
  );
}

export default App;
