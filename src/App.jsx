import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="wrapper">
      <ContactInfo />
      <Education />
      <Experience />
      <SubmitForEdit />
    </div>
  )
}

function ContactInfo() {
  return (
    <>
    <h2>Contact Information</h2>
    <label htmlFor="fname">First Name:</label>
    <input type="text" name="fname" />
    <label htmlFor="lname">Last Name:</label>
    <input  type="text" name="lname" />
    <label htmlFor="email">Email:</label>
    <input type="text" name="email" />
    <label htmlFor="phone">Phone:</label>
    <input type="text" name="phone" />
    <label htmlFor="address">Address:</label>
    <input type="text" name="address" />
    <StateSelect />
    <label htmlFor="zipcode">Zipcode:</label>
    <input type="text" name='zipcode' />
    </>
  )
}

function StateSelect() {
  return (
<>
<label htmlFor="state">State:</label>
<select name="state">
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
    </select>
</>
  )
}

function Education() {
  return (
    <>
    <h2>Education</h2>
    <div className="edRow">
      <label htmlFor="instName">Instutition Name:</label>
      <input type='text' name="instName"/>
      <label htmlFor="degree">Degree:</label>
      <input type="text" name="degree" />
      <label htmlFor="startEd">Start Date:</label>
      <input type="date" name='startEd' />
      <label htmlFor="endEd">End Date:</label>
      <input type="date" name='endEd' />
      <label htmlFor="isAttending">Present:</label>
      <input type="checkbox" name="isAttending"/>
    </div>
    <button id="addEd">Add More</button>
    </>
  )
}

function Experience() {
  return (
    <>
    <h2>Experience</h2>
    <div className="expRow">
      <label htmlFor="coName">Organization Name:</label>
      <input type="text" name="coName" />
      <label htmlFor="coPosition">Position:</label>
      <input type="text" name="coPosition" />
      <label htmlFor="jobdescription">Responsibilities:</label>
      <input type="text" className="extended-box" name="jobdescription" />
      <label htmlFor="startCo">Start Date:</label>
      <input type="date" name='startCo' />
      <label htmlFor="endCo">End Date:</label>
      <input type="date" name='endCo' />
      <label htmlFor="isWorking">Present:</label>
      <input type="checkbox" name="isWorking"/>
    </div>
    <button id="addCo">Add More</button>
    </>
  )
}

function SubmitForEdit() {
  return (
    <>
    <input type="submit" id="mainSubmit" value="Submit"/>
    </>
  )
}

export default App;
