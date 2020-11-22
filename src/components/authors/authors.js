import Author from "./Author/Author";
import React from 'react'

const authors = (props) => props.authors.map((author, index) => {
    return <Author
        fullName={author.fullName}

        // click={this.changeAuthorName.bind(this,faker.name.firstName()+' ' +faker.name.lastName(),index)}
        click={() => props.clicked(index)}
        changed={(event) => {
            props.changed(event, author.fullName)
        }}
        position={index}
        authenticated={props.authenticated}
        key={index}>---</Author>
})
export default authors;
