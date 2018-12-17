import React from 'react';

const Films2 = (props) => {
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
        <b>Title:</b> {props.title}
        <br />
        <b>Description:</b> {props.description}
        <br />
        <b>Director:</b> {props.director}
        <br />
        <b>Producer:</b> {props.producer}
        <br />
        <b>Release Date:</b> {props.release_date}
        <br />
        <b>Rotten Tomatoes Score:</b> {props.rt_score} out of 100
        <br />
      </li> 
    </div>
  )
}

export default Films2;