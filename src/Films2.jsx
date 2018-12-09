import React from 'react';

const Films2 = (props) => {
  const siteStyle = {
    fontFamily: 'Calibri Light',
    padding: 2
  }

  return (
    <div style={siteStyle}>
      <li>
        {props.title}
      </li>
    </div>
  )
}

export default Films2;