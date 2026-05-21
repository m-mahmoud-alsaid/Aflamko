
function Input({ inputType, inputName, inputValue, handleChange }) {
    return (
        <input
            className=''
            type={inputType}
            name={inputName}
            value={inputValue}
            onChange={handleChange} />
    )
}

export default Input;