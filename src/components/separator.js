import React from "react"

import '../styles/imports.scss'

const Separator = (props) => {
  return (
    <div className="separator" style={{
      width: props.width,
      background: props.color,
      marginBottom: props.marginBottom || '20px',
      marginTop: props.marginTop || '-50px',
      transform: props.transform || 'perspective(18px) rotateX(8deg)'
    }} >
    </div>
  )

};

export default Separator;
