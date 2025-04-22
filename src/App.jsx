import { useState } from 'react'
import './App.css'
import Field from './Field.jsx';
import { contactFields, edFields, jobFields } from './formFields';

function App() {
  const [listOfContactFields, setContactFields] = useState(contactFields);
  const [listOfEdFields, setEdFields] = useState(edFields);
  const [listOfJobFields, setJobFields] = useState(jobFields);

  const handleChange = (e, index) => {
    const value = e.target.value;
    setContactFields(state => [
      ...state.slice(0, index),
      {...state[index], val: value},
      ...state.slice(index+1)
    ])
  };

  const handleEdChange = (e, outerIndex, innerIndex) => {
    const value = e.target.value;
  
    setEdFields(state => {
      const updated = [...state]; // clone outer array
      const updatedGroup = [...updated[outerIndex]]; // clone inner group
      updatedGroup[innerIndex] = {
        ...updatedGroup[innerIndex],
        val: value
      };
  
      updated[outerIndex] = updatedGroup; // replace the modified group
      return updated;
    });
  };

  return (
    <div className="wrapper">
      <div className="full">
      <h1>Contact Info</h1>
      </div>
      {listOfContactFields.map((ele, index) => {
        return (
          <Field
             key={ele.id}
             lab={ele.label}
             val={ele.val}
             width={ele.width}
             inputType={ele.inputType}
             onChange={e => handleChange(e, index)}
          />
        )
      })}
      <div className="full">
        <h1>Education</h1>
      </div>
      {listOfEdFields.map((group, groupIndex) => {
        return group.map((ele, fieldIndex) => (
          <Field
            key={ele.id}
            lab={ele.label}
            val={ele.val}
            width={ele.width}
            inputType={ele.inputType}
            onChange={e => handleEdChange(e, groupIndex, fieldIndex)}
          />
        ));
      })
      }
      <div className="full">
        <h1>Work Experience</h1>
      </div>
      {listOfJobFields.map((group, groupIndex) => {
        return group.map((ele, fieldIndex) => (
          <Field
            key={ele.id}
            lab={ele.label}
            val={ele.val}
            width={ele.width}
            inputType={ele.inputType}
            onChange={e => handleJobChange(e, groupIndex, fieldIndex)}
          />
        ));
      })
      }
      <SubmitForEdit />
    </div>
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


function SubmitForEdit() {
  return (
    <div className='full'>
    <input type="submit" id="mainSubmit" value="Submit"/>
    </div>
  )
}

export default App;
