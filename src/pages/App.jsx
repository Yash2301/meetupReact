import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Users from "./Users";
import Header from "./Header";
import Footer from "./Footer";
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
                <div>
                    <Header />
                    {/*  */}
                    <Footer />

                    {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register onSub={addNote} />
                        </Route>
                        <Route path="/editprofile">
                            <Edit />
                        </Route>
                        <Route path="/home">
                            <Home />


                        </Route>
                        <Route path="/users">
                            {contacts.map((newNote, index) => {
                                return (
                                    <Users
                                        key={index}
                                        id={index}
                                        onDelete={letsDelete}
                                        fname={newNote.fName}
                                        lname={newNote.lName}
                                        email={newNote.email}
                                        password={newNote.password}
                                    />

                                );
                            })}
                        </Route>
                    </Switch>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
