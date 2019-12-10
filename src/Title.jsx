import React from 'react';
import './Title.css';
// import headerPic from '../images/ghibli-header.png';
// import footerPic from '../images/ghibli-footer.png';

const Title = () => {

  return (
    <div className='titleStyle'>
      <h1>Studio Ghibli Search</h1>
      {/* <img style={{position: 'fixed', top: '0%', right: '0%', height: '200px', width: '200px'}} src={headerPic} alt='Ghibli header'/>
      <img style={{position: 'fixed', bottom: '2%', left: '0%', height: '200px', width: '200px'}} src={footerPic} alt='Ghibli footer'/> */}
    </div>
  )
}

export default Title;