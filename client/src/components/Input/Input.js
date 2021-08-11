import React from 'react'

import './Input.css'

const Input = ({message, setMessage, sendMessage}) => (
    <form className='form'>
        <input className='input' value={message} type='text' placeholder='Type a message'
            onChange={(event) => setMessage(event.target.value)} 
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className='sendButton' onClick={sendMessage}>Send</button>
    </form>
)

export default Input