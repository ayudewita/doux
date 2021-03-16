import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./components/DataProvider";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
// import StarRating from "./components/StarRating";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Navbar/>
          <section>
            <Routes>
              <Route exact path="/doux" element={<Home />}>
                <Home />
              </Route>
              <Route path="/doux/:id" element={<Details />} >
                <Details />
              </Route>
              <Route path="/doux/cart" element={<Cart />} >
                <Cart />
              </Route>
              <Route path="/doux/login" element={<Login />} >
                <Login />
              </Route>
              {/* <Route path="/doux/star" element={<StarRating />} >
                <StarRating />
              </Route> */}
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
