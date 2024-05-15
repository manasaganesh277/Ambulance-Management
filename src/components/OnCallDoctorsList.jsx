import React from 'react';
import '../onCallDoctorsList.css';
import { onCallDoctors } from '../users'

export default function OnCallDoctorsList({ doctorName }) {
    const doctor = onCallDoctors.find(doctor => doctor.name === doctorName);

    return (
        <div className='on-call-doctors-container'>
            <h3 className='on-call-doctors-heading'>On-Call Doctors</h3>
            <ul>
                    <li className='on-call-doctor-item'>
                        <strong>{doctor.name}</strong> - {doctor.specialty}
                        <br />
                        Contact: {doctor.contact}
                        <br />
                        Availability: {doctor.availability}
                    </li>
            </ul>
        </div>
    );
}