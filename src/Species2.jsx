import React from 'react';

const Species2 = (props) => {
  const siteStyle = {
    fontFamily: 'Calibri Light',
    padding: 12,
    width: '90%',
    maxWidth: '300px',
    borderRadius: 12,
    backgroundColor: '#F1F1F1',
    color: '#000000',
    position: "relative",
    marginBottom: 8
  }

  return (
    <div style={siteStyle}>
      <li>
        <b>Name:</b> {props.name}
        <br />
        <b>Classification:</b> {props.classification}
        <br />
        <b>Eye Colours:</b> {props.eye_colors}
        <br />
        <b>Hair Colours:</b> {props.hair_colors}
        <br />
      </li>
    </div>
  )
}

export default Species2;