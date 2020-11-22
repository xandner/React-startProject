import React from 'react';
import classes from './authorHeader.css'
import Wrapper from "../../../wrappers/wrapper";
import WithClass from "../../../wrappers/whithClass";

const authorHeader = (props) => {
    let classes = []
    if (props.length > 2) {
        classes.push('author-count')
    } else {
        classes.push('purple')
    }
    return (
        <Wrapper>
            <h2>نویسندگان</h2>
            <button className={"btn btn-success"} onClick={props.clicked}>نمایش نویسندگان </button>
            <p className={classes.join(' ')}>تعداد نویسندگان:{props.authors.length} </p>
            <button onClick={props.login}>ورود</button>
        </Wrapper>
        )


}
export default authorHeader;
// <button className={"btn btn-primary"} onClick={this.changeAuthorName.bind(this, "زندر")}>تغییر اسامی
// </button>

