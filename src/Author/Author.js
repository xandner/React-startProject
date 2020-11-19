import React from 'react'
import faker from "faker/locale/fa";


const Author = (props) => {
    return (
        <div className="author pull-right">
            {/*<img src={faker.image.avatar()} alt=""/>*/}
            <h5>نام نویسنده:{props.fullName}</h5>
            <div>تاریخ عضویت:{faker.date.recent().toDateString()}</div>
            <p>{props.children}</p>
        </div>
    )
}

export default Author;