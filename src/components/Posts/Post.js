import React, {Component} from 'react'
import style from "./post.module.css"

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.id && !this.state.loadedPost){
            return (<h5>در حال بارگزاری اطلاعات</h5>)
        }
            return (
                <div className={style.post} onClick={this.props.clicked}>

                    <h3>{this.props.title}</h3>
                    <div>{this.props.description}</div>
                    <br/>
                    <p className="small">
                        آیدی کاربر:{this.props.userId}
                    </p>
                </div>
            )
    }
}

export default Post;