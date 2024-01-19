/* The browswerrouter wraps everywhere we want to use the router, the routes components which wraps our individual routes, the route component
to create a single route (What does this mean ?)*/ 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Page/Home";
import Navbar from "./Container/Navbar";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      {/* The routes are wrapped within a div to allow us to style them, also a singular route is self closing */}
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
            path="/"
            element={<Home/>}
            />
          </Routes>

        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
