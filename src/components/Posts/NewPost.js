import React, {Component} from "react"
import style from "./post.module.css"
import axios from "axios"

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            author: "احسان کریمی"
        }
    }
    postDataToServer=()=>{
        const data={
            title:this.state.title,
            description:this.state.description,
            author:this.state.author
        }
        axios.post('https://jsonplaceholder.typicode.com/posts/',data).then(
            response=>{
                window.alert(response)
            }
        )
    }

    render() {
        return (
            <div className="newPost">
                <h3>ایجاد مطلب جدید</h3>
                <div className="form-group">
                    <label htmlFor=""> عنوان مطلب</label>
                    <input type="text" className="form-control" value={this.state.title}
                           onChange={(event) => this.setState({title: event.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">توضیحات مطلب</label>
                    <textarea type="text" className="form-control" value={this.state.description}
                              onChange={(event) => this.setState({description: event.target.value})}></textarea>
                </div>
                <button className="btn btn-info" onClick={this.postDataToServer}>ارسال</button>
                <div className="form-group">
                    <select className="form-control" value={this.state.author}
                            onChange={(event) => this.setState({author: event.target.value})}>
                        <option value="">xander</option>
                        <option value="">ehsan</option>
                    </select>
                </div>
            </div>

        )
    }
}

export default NewPost;