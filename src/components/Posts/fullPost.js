import React ,{Component} from 'react'
import style from "./post.module.css"
import axios from "axios"

class FullPost extends Component{
    constructor(props) {
        super(props);
        this.state={loadedPost:null}
    }
    componentDidUpdate( ){
        if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost !== this.props.id)){
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id).then(
                response => {
                    this.setState({loadedPost: response.data})
                }
            )
        }

    }
    deletePost=()=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id).then(
            response=>{
                console.log(response)
            }
        )
    }

    render() {
        if(this.props.id && this.state.loadedPost){
            return (

                <div className={style.fullPost}>
                    <h3>{this.state.loadedPost.title}</h3>
                    <h3>نویسنده:{this.props.author}</h3>
                    <div>{this.state.loadedPost.body}</div>
                    <br/>
                    <p className="small">
                        آیدی کاربر:{this.state.loadedPost.userId}
                    </p>
                    <buttnon className="btn btn-danger" onClick={this.deletePost} >حذف مطلب</buttnon>
                </div>
            )}
        else {
            return (<h4>مطلبی را انتخاب کنید</h4>)
        }
    }
}

export default FullPost;