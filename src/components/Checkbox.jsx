import './Checkbox.scss';

const Checkbox = ({ children, label, toggleLayout }) => {
  const handleInput = (event) => {
    toggleLayout(event.target.checked);
  }

  return (
    <div class="Checkbox">
    <div class="Checkbox__box">
      <input type="checkbox" id={label} value="None" name="check" onChange={handleInput}/>
      <label for={label}></label>
    </div>
    <span>{children}</span>
    </div>
  )
}

export default Checkbox