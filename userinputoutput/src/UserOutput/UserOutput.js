import React from 'react'

export default function UserOutput(props) {
    const style = {
        justifyContent: 'center',
        border: '1px double gray',
        width: '600px',

        backGroundColor: 'gray'
    }
    return (
       <div style={style}>
           <p>Username: {props.userName}</p>
           <p>Hope i get overwritten</p>

       </div>
    )
}
