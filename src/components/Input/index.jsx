import './styles.css'

const Input = ({value, onChange}) => {
  return (
    <input 
      name="user" 
      value={value} 
      onChange={event => onChange(event.target.value)} 
      placeholder="@username"
    />
  )
}

export default Input;