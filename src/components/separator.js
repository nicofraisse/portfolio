import React from 'react'
import '../styles/imports.scss'

const Separator = (props) => {
  return (
    <div className="separator" style={{
      marginBottom: props.marginBottom || '20px',
      transform: props.transform || 'perspective(18px) rotateX(8deg)'
    }} >
    </div>
  )
};

export default Separator;
