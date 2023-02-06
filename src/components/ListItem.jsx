const ListItem = ({ app }) => {
  const {apdex, name} = app;
  return(
    <li>
      <span>{apdex}</span>
      <span>{name}</span>
    </li>
  )
}

export default ListItem;