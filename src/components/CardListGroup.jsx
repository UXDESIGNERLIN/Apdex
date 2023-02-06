const Card = ({ children, host }) => {
  return(
  <div>
    <h3>{host}</h3>
    <ul>{children}</ul>
  </div>
  )
}

export default Card;