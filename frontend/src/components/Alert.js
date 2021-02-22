import React from 'react'

export default function Alert(props) {
    return (
        <div className={ `alert alert-${props.variant || 'info' }` }>
            { props.children }
        </div>
    )
}
