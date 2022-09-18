import React from 'react'

export default function QnA(props) {
    const headerText = props.args.headerText
    console.log("PROPS",props,props.headerText)
    return (
        <div>
            <h2>FICKEN {headerText}</h2>

            
        </div>
    )
}
