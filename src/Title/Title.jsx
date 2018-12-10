import React from 'react';
import './Title.css';
import headerPic from '../images/ghibli-header.png';

const Title = () => {

  return (
    <div className="titleStyle">
      <h1>Studio Ghibli Search</h1>
      <img style={{position: "absolute", top: "0px", right: "0px", height: "35%", width: "25%"}} src={headerPic}/>
    </div>
  )
}

export default Title;