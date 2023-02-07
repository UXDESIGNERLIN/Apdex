import './ListItem.scss';

const ListItem = ({ app, toggleDialog }) => {
  const {apdex, name} = app;

  const handleDialog = () => {
    toggleDialog(app)
  }
  
  return(
    <li 
      aria-labelledby={`app-${name}`} 
      className="ListItem"
      onClick={handleDialog}
    >
      <div className="ListItem__content">
        <span className="ListItem__apdex">{apdex}</span>
        <span className="ListItem__name">{name}</span>
      </div>
    </li>
  )
}

export default ListItem;