import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Appoinment from './components/Appoinment/Appoinment';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Doctor from './components/Doctor/Doctor';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MoreDetails from './components/MoreDetails/MoreDetails';
import NotFound from './components/NotFound/NotFound';
import Confirmation from './components/Confirmation/Confirmation';
import Shop from './components/Shop/Shop';
import Thanks from './components/Thanks/Thanks';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/service'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/moredetailes/:serviceId'>
              <MoreDetails></MoreDetails>
            </PrivateRoute>
            <Route path='/doctor'>
              <Doctor></Doctor>
            </Route>
            <PrivateRoute path='/appoinment'>
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route path='/confirmation'>
              <Confirmation></Confirmation>
            </Route>
            <PrivateRoute path='/shop'>
              <Shop></Shop>
            </PrivateRoute>
            <Route path='/thanks'>
              <Thanks></Thanks>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
