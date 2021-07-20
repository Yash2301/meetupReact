import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Provider } from 'react-redux'

// pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Header from "./components/Header";
import Footer from "./components/Footer";
import store from "./store";
import PrivateRoute from "./components/PrivateRoute";

function Logout (){
    
    return 
}

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Header />
                <div>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <PrivateRoute path="/editprofile" component={Edit} />
                        <PrivateRoute path="/home" component={Home} />
                        <PrivateRoute path="/users" component={Users} />
                        <PrivateRoute path="/logout" component={Logout} />
                    </Switch>
                </div>
                {/* <Footer /> */}
            </Provider>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));