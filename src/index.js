import React from "react";
import ReactDOM from "react-dom";

// pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./store";

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
                        <Route path="/editprofile">
                            <Edit />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Provider>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));