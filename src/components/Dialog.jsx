import './Dialog.scss';

const Dialog = ({ appClicked, toggleDialog }) => {
  const { name, version } = appClicked;

  const handleClose = () => {
    toggleDialog(false);
  }

  return (
    <div role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDescription" className="Dialog">
    <div className="Dialog__content">
      <h2 id="dialogTitle">{name}</h2>
      <p id="dialogDescription">{`Release version ${version}`}</p>
      <button onClick={handleClose}>Close</button>
    </div>
  </div>
  )
}

export default Dialog;