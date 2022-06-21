import React from 'react'
import spinnerIMG from './loading.gif'
let Spinner = () => {
    return(
        <React.Fragment>
            <img src={spinnerIMG} className='d-block m-auto'/>
        </React.Fragment>
    )
}
export default Spinner;