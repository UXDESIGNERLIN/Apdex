const ListItem = ({ app, toggleDialog }) => {
  const {apdex, name} = app;

  const handleDialog = () => {
    toggleDialog(app)
  }
  
  return(
    <li aria-labelledby={`app-${name}`} onClick={handleDialog}>
      <span>{apdex}</span>
      <span>{name}</span>
    </li>
  )
}

export default ListItem;