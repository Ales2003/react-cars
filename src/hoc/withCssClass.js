import React from 'react'

const withCssClass = (Component, cssClassName) => {
    return(props) => {
        return (
            <div className={cssClassName}>
                <Component {...props}/>
            </div>
        )
    }
}

export default withCssClass
