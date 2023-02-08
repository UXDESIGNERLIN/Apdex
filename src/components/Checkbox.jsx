import './Checkbox.scss';

const Checkbox = ({ showGrid, label, toggleLayout }) => {
  const handleInput = (event) => {
    toggleLayout(event.target.checked);
  }

  return (
    <div className={showGrid ? 'Checkbox--checked' : 'Checkbox'}>
    <div className="Checkbox__box">
      <input type="checkbox" id={label} value="None" name="check" onChange={handleInput}/>
      <label htmlFor={label}></label>
    </div>
    <span>{showGrid ? 'Show as awesome grid' : 'Show as list'}</span>
    </div>
  )
}

export default Checkbox