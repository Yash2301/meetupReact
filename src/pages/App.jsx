import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Users from "./Users";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Home from "./Home";
import Edit from "./Edit";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./../store";

function App() {
    
    const [contacts, setContacts] = useState([]);

    function addNote(contact) {
        setContacts((prevNotes) => {
            return [...prevNotes, contact];
        });
    }

    function letsDelete(id) {
        setContacts((prevNotes) => {
            return prevNotes.filter((newItem, index) => {
                return index !== id;
            });
        });
    }


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
                                <Register/>
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

export default App;
