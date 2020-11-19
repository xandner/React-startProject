import React from 'react'
import faker from 'faker/locale/fa'


const Comment= (props) =>{
    return(
        <div className="author">
            {/*<img src={faker.image.avatar()} alt=""/>*/}
            <div>
                <h5>{props.fullName}</h5>
                <div className={"pull-left"}>{faker.date.recent().toDateString()}</div>
                <p>{props.description}</p>
            </div>

        </div>
    )
}

export default Comment;