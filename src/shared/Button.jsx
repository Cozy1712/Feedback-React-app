import React from 'react'
import PropTypes from 'prop-types'
///button will take some props like children
function Button({childern, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}> {childern}
    </button>
  
    
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
} 
Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    
    
}
export default Button