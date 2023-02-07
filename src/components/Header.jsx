const Header = ({ children, userEmail, title }) => {
  return(
    <header className="Header">
      <h3>{title}</h3>
      <p>{userEmail}</p>
      {children}
    </header>
  )
}

export default Header;