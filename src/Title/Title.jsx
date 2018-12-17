import React from 'react';
import './Title.css';
import headerPic from '../images/ghibli-header.png';

const Title = () => {

  return (
    <div className="titleStyle2">
      <h1 style={{textAlign: "center"}}>Studio Ghibli Search</h1>
      <img style={{position: "absolute", top: "0px", right: "0px", height: "200px", width: "200px"}} src={headerPic}/>
    </div>
  )
}

export default Title;