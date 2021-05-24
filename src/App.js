
import './App.css';
import {useState, useEffect} from 'react';
import { getBoards } from './services/gets';
import Home from './components/home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Catalog from "./components/catalog";
import Thread from "./components/thread";

function App() {
  // const [data, setData] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   let mounted = true;
  //   getBoards()
  //     .then(response => {
  //       setData(response);
  //       if(mounted) {
  //         setData(response);
  //       }
  //       setIsLoaded(true);
  //     });
  //     return () => mounted = false;
  // }, [setData])

  // console.log(data);


  return (
    <>
    <div className="subpixel-antialiased flex w-full box-border h-auto flex-col bg-gray-900  pb-96" >
    <Router>
      <Switch>
        {/* Home page */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* Board page */}
        <Route  exact path="/:abbrev">
          <Catalog/>
        </Route>
      {/* individual thread view */}
        <Route  exact path="/:abbrev/:id">
          <Thread/>
        </Route>
      </Switch>
    </Router>

    </div>
    <div className="flex w-full h-screen box-border flex-col bg-gray-900 p-10 pb-96" ></div>
    </>
  );
}

export default App;
