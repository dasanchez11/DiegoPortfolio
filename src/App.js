import './App.css';

import SProject from './components/specific-project/specific-project.component';
import Home from './pages/home.page';
import {Route, Switch} from 'react-router-dom';
import ContactPage  from './pages/contact/contact.page';
import NavigationBar from './components/navigationBar/navigationBar'



function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/aiProjects/:aiProject' component={SProject} />
      </Switch>

      
     
    </div>
  );
}

export default App;
