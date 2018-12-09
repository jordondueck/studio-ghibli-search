import React from 'react';

const Species2 = (props) => {
  const siteStyle = {
    fontFamily: 'Calibri Light',
    padding: 2
  }

  return (
    <div style={siteStyle}>
      <li>
        {props.name}
      </li>
    </div>
  )
}

export default Species2;