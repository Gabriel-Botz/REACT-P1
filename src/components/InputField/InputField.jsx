import styles from './InputField.module.css';

const InputField = ({ type, placeholder, value, onChange, icon }) => {

return (<div className={styles.inputField}>
  <input 
    type={type} 
    placeholder={placeholder} 
    value={value}
    onChange={onChange} 
  />
  {icon}
</div>);

}

export default InputField;
