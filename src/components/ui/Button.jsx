function Button({ txt, handleClick }) {
    return (
        <button
            className='text-primary text-sm'
            onClick={handleClick}>{txt}</button>
    )
}

export default Button;