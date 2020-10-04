import React from 'react'

export default function UserInput(props) {
    const style = {
        border: '4px double blue'
    }
    return (
        <input 
        type='text' 
        style={style}
        onChange={props.changed}
        value={props.currentName}>
        </input>
    )
}
