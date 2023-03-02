// import propTypes 
import PropTypes from 'prop-types'

function Header({ text,bgColor, textColor}) {
  const headerstyles = {
   backgroundColor:  bgColor,
   color: textColor,

  }
  return (
    <header style={headerstyles}>
        <div className="container">
          <h2>{text}</h2>  
        </div>
    </header>
  )
}

//-----defaultProps--
 Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'skyblue',
  textColor: 'darkgreen'
 }  

 //---------propTypes script----
 Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor:PropTypes.string,
 }

export default Header 