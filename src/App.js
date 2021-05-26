import React, { Component } from 'react';
import './App.css';
import Button from './Button';

const initialState = {
  name: '',
  email: '',
  phone_number: '',
  address: '',
  gender: '',
  age: '',
  maritial_status: ''
}

class App extends Component{
  constructor() {
    super();
    this.state = initialState;
  }

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    })
  }

  onSubmit = (event) => {
    //Typically, we would run a fetch POST here to hit the API endpoint and accept the values to the backend.
    //However, since we do not have a backend, we display submitted values in an alert.
    event.preventDefault();
    alert('Name: ' + this.state.name
          + '\nEmail: ' + this.state.email
          + '\nPhone Number: ' + this.state.phone_number
          + '\nAddress: ' + this.state.address
          + '\nGender: ' + this.state.gender
          + '\nAge: ' + this.state.age
        );
  }

  render() {
    const { name, email, phone_number, address, gender, age } = this.state;
    return (
      <div className="app-box">
        <h2>Form Handling Practice</h2>
        <form>
          <div class='input-box'>
            <input name='name' value={this.state.name} type='text' onChange={this.onChange} />
            <label>Name</label>
          </div>
          <div class='input-box'>
            <input name='email' value={this.state.email} type='text' onChange={this.onChange} />
            <label>Email</label>
          </div>
          <div class='input-box'>
            <input name='phone_number' value={this.state.phone_number} type='number' onChange={this.onChange} />
            <label>Phone Number</label>
          </div>
          <div class='input-box'>
            <input name='address' value={this.state.address} type='text' onChange={this.onChange} />
            <label>Address</label>
          </div>
          <div class='input-box'>
            <select name='gender' value={this.state.gender} onChange={this.onChange} >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
            <label>Gender</label>
          </div>
          <div class='input-box'>
            <input name='age' value={this.state.age} type='number' onChange={this.onChange} />
            <label>Age</label>
          </div>
          <Button name={name} email={email} phone_number={phone_number} address={address} gender={gender} age={age}/>
        </form>
      </div>
    );
  }
}

export default App;
