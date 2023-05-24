import React from "react";
import Navbar from "./Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import Contact  from "./pages/Contact";
import About  from "./pages/About";


function App() {
  return ( 
  
<BrowserRouter basename="/torq-match">
 <div> 
  <Navbar />
  </div>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route   path="/Contact">
       <div> 
         <Contact />  
       </div> 
      </Route>
      <Route   path="/About">
        <About />  
      </Route>
    </Switch>
</BrowserRouter>

);
}

export default App;
