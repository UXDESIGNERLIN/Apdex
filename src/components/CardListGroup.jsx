import './CardListGroup.scss'

const CardListGroup = ({ children, host }) => {
  return(
  <div className="CardListGroup">
    <h3>{host}</h3>
    <ul>{children}</ul>
  </div>
  )
}

export default CardListGroup;