import React from 'react'

export default function Detail(props) {
    return (
        <div>
            Tham số: {props.match.params.id}
        </div>
    )
}
