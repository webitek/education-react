import React, {Component} from 'react'

export default function Comment ({comment}) {
    return (
        <div>
            <p><b>{comment.user}</b></p>
            <p>{comment.text}</p>
        </div>
    )
}
