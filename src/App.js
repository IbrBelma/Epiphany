import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import './App.css';
import Home from './pages/home';
import News from './pages/news';
import Contact from "./pages/kontakt";
import About from "./pages/about";
import Login from "./pages/login";
import Menu from "./komponente/menu";
import Services from "./pages/services";

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/news' Component={News}/>
          <Route path='/kontakt' Component={Contact}/>
          <Route path='/about' Component={About}/>
          <Route path='/login' Component={Login}/>
          <Route path='/services' Component={Services}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
