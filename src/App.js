import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Collections from "./Pages/Collections/Collections/Collections";
import Contacts from "./Pages/Contacts/Contacts";
import Articles from "./Pages/Articles/Articles";
import SinglearticlePage from "./Pages/Articles/SinglearticlePage/SinglearticlePage";
import SingleProduct from "./Pages/Collections/SinglePrduct/SingleProduct";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import Booking from "./Pages/Booking/Booking";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ReviewSubmissionForm from "./Pages/CustomerReview/ReviewSubmissionForm/ReviewSubmissionForm";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";


function App() {
  return (
    <>
      <AuthProvider>
        <Router>

            <Switch>
              
              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/login">
                <Login></Login> 
              </Route>
              
              <Route path="/register">
                <Register></Register>
              </Route>

              <Route exact path="/articles">
                <Articles></Articles>
              </Route>

              <Route exact path="/article/:articleId">
                <SinglearticlePage></SinglearticlePage>
              </Route>

              <Route exact path="/about">
              <About></About>
              </Route>

              <Route exact path="/contacts">
                <Contacts></Contacts> 
              </Route>

              <Route exact path="/collections">
              <Collections></Collections>
              </Route>

              <Route exact path="/collection/:productId">
                <SingleProduct></SingleProduct>
              </Route>

              <PrivateRoute exact path="/booking/:productID">
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute exact path="/submitreview">
                <ReviewSubmissionForm></ReviewSubmissionForm>
              </PrivateRoute>

              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute> 
              <Route  path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
