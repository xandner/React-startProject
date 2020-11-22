import './App.css';
import React, {Component} from 'react'

import faker from "faker/locale/fa";
import Authors from "../components/authors/authors"
import Comments from "../components/Comments/comments"
import AuthorHeader from "../components/authors/authoHeader/AuthorHeader"
import Wrapper from "../wrappers/wrapper"
import WithClass from "../wrappers/whithClass";
import AuthContext from "./auth-context"
import axios from "axios"
import Post from "../components/Posts/Post";
import FullPost from "../components/Posts/fullPost";
import NewPost from "../components/Posts/NewPost"


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authors:
                [
                    {fullName: "احسان کریمی"},
                    {fullName: "علی احمدی"},
                    {fullName: faker.name.firstName() + " " + faker.name.lastName()},
                ],
            showAuthors: true,
            show: true,
            showComments: true,
            toggleCounter: 0,
            authenticated: false,
            posts: [],
            selectedPostId_:false

        }

    }


    changeAuthorName = (newFullName, index) => {
        console.log(index)
        var w = this.state.authors[0]
        this.setState({
            authors:
                [
                    index === 0 ? {fullName: newFullName} : w,
                    {fullName: "علی احمدی"},
                    {fullName: "علی احمدی"}

                ]
        })
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response => {
                const posts =response.data.splice(0,4)
                const updatePosts=posts.map(post=>{
                    return{
                        ...post,
                        author:"احسان کریمی"

                    }
                })
                this.setState({posts: updatePosts})
            }
        )
    }

    removeAuthorData = (authorIndex) => {
        const authors = [...this.state.authors];
        authors.splice(authorIndex, 1);
        this.setState({authors: authors})
    }
    changeAuthorDAtaBinding = (event, fullName) => {
        const authorIndex = this.state.authors.findIndex(author => {
            return author.fullName === fullName
        })
        const author = {
            ...this.state.authors[authorIndex]  //... is copy
        }
        author.fullName = event.target.value;
        const authors = [...this.state.authors]
        authors[authorIndex] = author;
        this.setState(
            {authors: authors}
        )
    }

    showHideAuthors = () => {
        const status = this.state.show;
        this.setState((prevStatus, props) => {
                return {
                    show: !status,
                    toggleCounter: prevStatus.toggleCounter + 1
                }
            }
        )
    }

    loginUser = () => {
        this.setState({authenticated: true})
    }

    renderAuthors(show) {
        if (show) {
            return (
                <div className="ui container">
                    <div classNa me="ui container">
                        {
                            <Authors authors={this.state.authors}
                                     clicked={this.removeAuthorData}
                                     changed={this.changeAuthorDAtaBinding}
                            />
                        }
                    </div>

                </div>
            )
        } else {
            return null
        }
    }

selectPost(id){
    this.setState({selectedPostId_:id})
}

    render() {
        const posts = this.state.posts.map(post => {
                return (
                    <div className="col-md-3 cursor" key={post.id}>
                        <Post
                            title={post.title}
                            description={post.body}
                            userId={post.userId}
                            author={post.author}
                            clicked={()=>this.selectPost(post.id)}/>
                    </div>
                )

            }
        )
        const style = {
            backgroundColor: 'yellow',
            color: 'black',

        }
        if (this.state.show) {
            style.backgroundColor = 'red';
            style.color = "white";
        }

        return (
            <WithClass classes="App">
                <AuthorHeader clicked={this.showHideAuthors} authors={this.state.authors}
                              login={this.loginUser}/>
                <AuthContext.Provider value={this.state.authenticated}>
                    {this.renderAuthors(this.state.show)}
                </AuthContext.Provider>

                <div>
                    <div>نظرات</div>
                    {
                        this.state.showComments && (

                            <Comments authors={this.state.authors}/>

                        )
                    }
                </div>

                <h2>مطالب</h2>
                <div className="ui container">
                    {posts}
                    <div className="col-md-8 col-offset-md-2">
                        <NewPost/>
                    </div>
                    <div className="col-md-12">
                        <FullPost id={this.state.selectedPostId_}/>
                    </div>



                </div>

            </WithClass>


        );
    }
}

export default App;
