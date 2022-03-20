import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./WebPages/Header/Header";
import Footer from "./WebPages/Header/Footer/Footer";
import About from "./WebPages/About-Us/About";
import Success from "./WebPages/Success/Success";
import Refound from "./WebPages/Refound/Refound";
import Terms from "./WebPages/TermsAndCondition/Terms";
import PrivecyPolicy from "./WebPages/PrivecyPolicy/PrivecyPolicy";
import Home from "./WebPages/HomeSection/MainHome/Home";
import AllCourses from "./WebPages/All-Courses/AllCourses";
import AuthProvider from "./Context/AuthProvider";
import SingleCourse from "./WebPages/All-Courses/SingleCourse/SingleCourse";
import Login from "./WebPages/Login/Login";
import Register from "./WebPages/Register/Register";
import Dashboard from "./WebPages/Dashboard/Dashboard-Main/Dashboard";
import UpdateCourse from "./WebPages/Dashboard/Admin/Update/UpdateCourse";
import Unique from "./WebPages/Dashboard/User/MyCourse/Unique";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/course">
              <AllCourses></AllCourses>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/place-order/:serviceId">
              <SingleCourse></SingleCourse>
            </Route>
            <Route path="/unique-course/:uniqueId">
              <Unique></Unique>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/success">
              <Success></Success>
            </Route>
            <Route path="/refund">
              <Refound></Refound>
            </Route>
            <Route path="/terms">
              <Terms></Terms>
            </Route>
            <Route path="/privacy">
              <PrivecyPolicy></PrivecyPolicy>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
