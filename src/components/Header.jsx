import './Header.scss';

const Header = ({ children, userEmail, title }) => {
  return(
    <header className="Header">
      <h1>{title}</h1>
      <p>for user {userEmail}</p>
      {children}
    </header>
  )
}

export default Header;