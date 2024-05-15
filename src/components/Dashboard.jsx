import React from 'react';
import Map from './Map';
import OnCallDoctorsList from './OnCallDoctorsList';
import Reports from './Reports';
import { userDetails, locations } from '../users';
import '../dashboard.css';

export default function Dashboard({ currentUser, bookingData }) {

    const { locationName, doctor } = bookingData;
    const location = locations.find(location => location.name === locationName);
    console.log(location);
    const user = userDetails.find(user => user.username === currentUser);

    const { reports } = user;
    console.log(reports);
    return (
        <div className='dashboard-container'>
            <h2 className='dashboard-heading'>Dashboard</h2>
            <Map ambulanceLocation={location} additionalLocations={[location]} />
            {/* <OnCallDoctorsList doctorName={[doctor]} /> */}
            <strong>{doctor}</strong>
            <Reports data={reports} />
        </div>
    );
}
