import React from 'react';

const Locations2 = (props) => {
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
        <b>Climate:</b> {props.climate}
        <br />
        <b>Terrain:</b> {props.terrain}
        <br />
        <b>Surface Water:</b> {props.surface_water} km<sup>2</sup>
        <br />
      </li>
    </div>
  )
}

export default Locations2;