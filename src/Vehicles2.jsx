import React from 'react';

const Vehicles2 = (props) => {
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
        <b>Description:</b> {props.description}
        <br />
        <b>Class:</b> {props.vehicle_class}
        <br />
        <b>Length:</b> {props.length} m
        <br />
      </li>
    </div>
  )
}

export default Vehicles2;