import Header from "./component/Header";
import Slider from "./component/Slider";
import Card from "./component/Card";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./component/PageNotFound";


import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Header></Header>
            </div>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="row mb-5 ">
                    <div className="col-12">
                      <Slider></Slider>
                    </div>
                  </div>

                  <div className="container mb-5">
                    <div className="row g-4">
                      {" "}
                      {/* g-4 = gap between cards */}
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Card
                          imgSrc="/imgs/gahu.png"
                          title="Wheat"
                          text="A staple grain used for flour, bread, and chapati. Rich in fiber and energy for daily nutrition."
                          btnText="Explore"
                        />
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Card
                          imgSrc="/imgs/jowar.jpeg"
                          title="Jowar"
                          text="A nutritious millet known for its gluten-free properties, high protein, and good for digestion."
                          btnText="Explore"
                        />
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Card
                          imgSrc="/imgs/maize.jpeg"
                          title="Maize"
                          text="Also called corn, maize is versatile and used in food, fodder, and industrial products."
                          btnText="Explore"
                        />
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Card
                          imgSrc="/imgs/raice.jpeg"
                          title="Rice"
                          text="One of the most consumed grains worldwide, a staple food providing essential carbs and energy."
                          btnText="Explore"
                        />
                      </div>
                    </div>
                  </div>
                </>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>


            
          </Routes>

          <div className="row">
            <div className="col-12">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
