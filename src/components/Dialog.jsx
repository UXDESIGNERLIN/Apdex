import './Dialog.scss';

const Dialog = ({ appClicked, toggleDialog }) => {
  const { name, version } = appClicked;

  const handleClose = () => {
    toggleDialog(false);
  }

  return (
    <div 
      role="dialog" 
      aria-labelledby="dialogTitle" 
      className="Dialog"
    >
    <div className="Dialog__content">
      <h2>{name}</h2>
      <p>{`Release version ${version}`}</p>
      <button onClick={handleClose}>Close</button>
    </div>
  </div>
  )
}

export default Dialog;