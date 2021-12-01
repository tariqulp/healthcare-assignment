import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Appoinment.css'

const Appoinment = () => {
    return (
        <div className="container total-container my-5 rounded-3">

            <div id="body_header">

                <h1>Appointment Request Form</h1>
                <p>Please fill-in the form below and make an oppointment with any of our specialist doctors</p>

            </div>
            <form>
                <fieldset>
                    <legend><span className="number">1</span>Your basic details</legend>
                    <label htmlFor="name">Name*:</label>
                    <input type="text" id="name" name="user_name" placeholder="Atchyut (only first names)" required pattern="[a-zA-Z0-9]+" />

                    <label htmlFor="mail">Email*:</label>
                    <input type="email" id="mail" name="user_email" placeholder="abc@xyz.com" required />

                    <label htmlFor="tel">Contact Num:</label>
                    <input type="tel" id="tel" placeholder="Include country code" name="user_num" />

                    <label htmlFor="skype_name">Skype username:</label>
                    <input type="text" id="skype_name" name="skype_name" placeholder="@atchyutn" pattern="[a-zA-Z0-9]+" />

                </fieldset>

                <fieldset>
                    <legend><span className="number">2</span>Appointment Details</legend>
                    <label htmlFor="appointment_for">Appointment for*:</label>
                    <select id="appointment_for" name="appointment_for" required>
                        <option defaultValue="regular-checkup">Regular Checkup</option>
                        <option defaultValue="emergency">Emergency</option>
                        <option defaultValue="operation">Operation</option>
                        <option defaultValue="first-checkup">First Checkup</option>
                        <option defaultValue="report-show">Report Show</option>
                        <option defaultValue="consultent">Consultent</option>
                        <option defaultValue="dentist-checkup">Dentist checkup</option>
                    </select>
                    <label htmlFor="appointment_description">Appointment Description:</label>
                    <textarea id="appointment_description" name="appointment_description" placeholder="I wish to get an appointment to skype for resolving health issue."></textarea>
                    <label htmlFor="date">Date*:</label>
                    <input type="date" name="date" defaultValue="" required></input>
                    <br />
                    <label htmlFor="time">Time*:</label>
                    <input type="time" name="time" defaultValue="" required></input>
                    <br />
                    <label htmlFor="duration">How Long??(Minutes)</label>
                    <input type="radio" name="duration" defaultValue="30" defaultChecked /> 30
                    <input type="radio" name="duration" defaultValue="60" /> 60
                    <input type="radio" name="duration" defaultValue="90" /> 90
                    <input type="radio" name="duration" defaultValue="more" /> more
                </fieldset>
                {/* Applying link button for go to confirmation */}
                <Link to='/confirmation'>
                    <Button variant='outline-primary' type="submit">Request For Appointment</Button>
                </Link>
            </form>
        </div>
    );
};

export default Appoinment;