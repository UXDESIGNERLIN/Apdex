import './Checkbox.scss';

const Checkbox = ({ showGrid, label, toggleLayout }) => {
  const handleInput = (event) => {
    toggleLayout(event.target.checked);
  }

  const defaultCheckbox = {
    title: showGrid ? 'Show as an awesome grid' : 'Show as list',
    class: showGrid ? 'Checkbox--checked' : 'Checkbox'
  }

  return (
    <div className={defaultCheckbox.class}>
    <div className="Checkbox__box">
      <input type="checkbox" id={label} value="None" name="check" onChange={handleInput}/>
      <label htmlFor={label}></label>
    </div>
    <span className="Checkbox__title">{defaultCheckbox.title}</span>
    </div>
  )
}

export default Checkbox