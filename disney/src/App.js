import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Login from "./Components/Login"
import Header from "./Components/Header"
import Home from './Components/Home';
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <switch>
         <Route exact path = "/">
         <Login />
         </Route>
         <Route exact path ="/home">
           <Home />
         </Route>
         <Route exact path ="/details/:id">
           <Detail />
         </Route>
       </switch>
     </Router>
    </div>
  );
}

export default App;
