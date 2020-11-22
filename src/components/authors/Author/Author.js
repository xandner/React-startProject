import React, {Component} from 'react'
import faker from "faker/locale/fa";
import style from './Author.css'
import Wrapper from "../../../wrappers/wrapper";
import WithClass from "../../../wrappers/whithClass";
import PropTypes from "prop-types"

import AuthContext from "../../../containers/auth-context"

class Author extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        if (this.props.position === 1) {
            this.inputElement.focus();
        }
    }

    render() {
        return (
            <WithClass classes="author pull-right">
                {this.context ? <p>کاربر وارد شده است</p> : null}
                <h5 className={style.redColor}>نام نویسنده:{this.props.fullName}</h5>
                <div>تاریخ عضویت:{faker.date.recent().toDateString()}</div>
                <p>{this.props.children}</p>
                <button className={"btn btn-red"} onClick={this.props.click}>حذف نویسنده</button>
                <div className={"margin-top"}>
                    <input ref={(inp) => {
                        this.inputElement = inp
                    }} type="text" onChange={this.props.changed}/>
                </div>
            </WithClass>
        )
    }
}


Author.propTypes = {
    fullName: PropTypes.string,
    click: PropTypes.func,
    changed: PropTypes.func

}

export default Author;