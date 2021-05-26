import React from 'react';
import Popup from 'reactjs-popup';
import './Button.css';

const Button = ({ name, email, phone_number, address, gender, age }) => {
  return (
    <Popup
      trigger={ <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Entered Data </div>
          <div className="content">
            Name: {name}
            <br />
            Email: {email}
            <br />
            Phone Number: {phone_number}
            <br />
            Address: {address}
            <br />
            Gender: {gender}
            <br />
            Age: {age}
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log('modal closed');
                close();
              }}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default Button;
