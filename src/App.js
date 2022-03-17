// import logo from './logo.svg';
import './App.css';

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
// The reason it still works is that the import in App.js refers to the component without the file extension, so it can refer to a corresponding file with the same name, or a folder with the same name, but containing an index.js file, the default file.
import Labs from "./components/labs";
import Tuiter from "./components/tuiter"; // no .js extension needed

// import './vendors/fontawesome/css/all.min.css';

// The BrowserRouter tag sets up the base mechanism to navigate between multiple components.
// In this case we're going to navigate between the three components within the BrowserRouter tag, e.g., HelloWorld, Labs and Tuiter.
// To navigate between components we use the Route component from React Router to declare paths and map them to corresponding component we want to render for that path.
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/tuiter/home-screen/HomeScreen";
import ExploreScreen from "./components/tuiter/explore-screen/ExploreScreen";

function App() { // can also use const App = () => {
  return (
      // this calls HelloWorld() and appends return

      // maps /hello to HelloWorld, which means
      // HelloWorld component displayed if you
      // navigate to http://localhost:3000/hello

      // We can declare the Labs component as the default landing screen by mapping it to "/", the root path.
      // We can also map multiple paths by declaring them in an array of paths as shown below.

      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/tuiter"
                         exact={true}
                         element={<Tuiter/>}/>
                  <Route path="/tuiter/home"
                         exact={true}
                         element={<HomeScreen/>}/>
                  <Route path="/tuiter/explore"
                         exact={true}
                         element={<ExploreScreen/>}/>
              </Routes>
          </div>
      </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
