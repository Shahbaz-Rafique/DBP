import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './home';
import Register from './register';
import Login from './login';
import Single from './single';
import Publisher from './publisher';
import Mangaviewer from './mangaviewer';
import Mangalist from './mangalist';
import Aboutus from './aboutus';
import Emailverification from './emailverification';
import Loghome from './loghome';
import Verification from './verification';
import Favourite from './favourite';
import Passreset from './passreset';
import Reset from './reset';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/manga" component={Single}/>
        <Route exact path="/be-a-publisher" component={Publisher}/>
        <Route exact path="/manga/manga-viewer" component={Mangaviewer}/>
        <Route exact path="/manga-list" component={Mangalist}/>
        <Route exact path="/about-us" component={Aboutus}/>
        <Route exact path="/register/email-verification" component={Emailverification}/>
        <Route exact path="/login-home" component={Loghome}/>
        <Route exact path="/verification" component={Verification}/>
        <Route exact path="/favourite-list" component={Favourite}/>
        <Route exact path="/forgot-password" component={Passreset}/>
        <Route exact path="/forgot-password/verification" component={Reset}/>
      </Switch>
    </div>
  );
}

export default App;
