import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import BookingComponent from './components/BookingComponent'; // Importing the BookingComponent

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [bookingData, setBookingData] = useState(null);
    const handleLogin = (username) => {
        setCurrentUser(username);
    }

    const handleBooking = (location, doctor) => {
        setBookingData({ locationName: location, name: doctor });
    };
    console.log(currentUser);
    console.log(bookingData);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/login' element={<Login onLogin={handleLogin} />} />
                    <Route exact path='/register' element={<Register/>} />
                    <Route exact path='/dashboard' element={<Dashboard currentUser={currentUser} bookingData={bookingData} />} /> 
                    <Route exact path='/book' element={<BookingComponent onBooking={handleBooking} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
