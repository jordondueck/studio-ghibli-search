import React from 'react';

const People2 = (props) => {
  const siteStyle = {
    fontFamily: 'Calibri Light',
    padding: 12,
    width: 360,
    borderRadius: 12,
    backgroundColor: '#F1F1F1',
    color: '#000000',
    position: "relative",
    margin: "auto",
    marginBottom: 8
  }

  return (
    <div style={siteStyle}>
      <li>
        <b>Name:</b> {props.name}
        <br />
        <b>Gender:</b> {props.gender}
        <br />
        <b>Age:</b> {props.age} years
        <br />
        <b>Eye Colour:</b> {props.eye_color}
        <br />
        <b>Hair Colour:</b> {props.hair_color}
        <br />
      </li>
    </div>
  )
}

export default People2;