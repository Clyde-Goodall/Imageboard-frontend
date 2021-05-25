
import './App.css';
import {useState, useEffect} from 'react';
import { getBoards } from './services/gets';
import Home from './components/home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Catalog from "./components/catalog";
import Thread from "./components/thread";
import Sidebar from './components/sidebar';

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
     <Router>
    <div className="flex subpixel-antialiased w-full overflow-hidden box-border h-screen  bg-gray-900 pb-96" >
      <div className=" overflow-hidden hidden lg:block">
        <Sidebar/>
      </div>
      <div className="col-span-3 overflow-y-auto flex-1 h-screen m-b-4">
       
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
     

        </div>
        </div>
      </Router>
    </>
  );
}

export default App;
