import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()
  return (
      <header className='header'>
      <h1>{title}</h1>
      {location.pathname==='/' && <Button color={showAdd ? 'Red':'Green'} text={showAdd ? 'Close':'Add a Task'} onClick={onAdd} />}
      <a href="https://hirenrupchandani.github.io/Portfolio" target="_blank">{"By Hiren Rupchandani"}</a>
      </header>
  )
}

Header.defaultProps = {
    title:'Taskify',
}

Header.propTypes = {
  title: PropTypes.string,

}
// CSS Style
// const headingStyle = {
//   color:'red',
//   backgroundColor:'black'
// }

export default Header