import React from 'react'
import Approve from "./Approve/Approve";
import Comment from "./Comment/comments";
import faker from "faker/locale/fa";

const comments=(props)=>{
    var comments = [];
    for (var i = 0; i < props.authors.length; i++) {
        comments.push(
            <div className="ui container">
                <Approve key={i}>
                    <Comment fullName={faker.name.firstName() + " " + faker.name.lastName()}
                             description={faker.lorem.paragraph()}
                    />
                </Approve>
            </div>
        )

    }
    return comments;
}
export default comments