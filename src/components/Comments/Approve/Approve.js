import React from 'react'
import faker from 'faker/locale/fa'


const Approve= (props) =>{
    return(
        <div className={"comment"}>
            <button className={"btn btn-sm btn-success"}>تایید</button>
            <button className={"btn btn-sm btn-یشدلثق"}>رد کردن</button>
            <div>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default Approve;