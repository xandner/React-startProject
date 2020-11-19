import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Author from "./Author/Author"
import Comment from "./Comment/comments";
import Approve from "./Approve/Approve";
import faker from "faker/locale/fa";

class App extends Component {
    state = {
        authors:
            [
                {fullName: "احسان کریمی"},
                {fullName: "علی احمدی"},
            ]
    }


    changeAuthorName=() =>{
        // console.log("تغیرات اعمال شد")
        this.setState({
            authors:
                [
                    {fullName: "زندر"},
                    {fullName: "علی احمدی"},
                ]
        })
    }

    render() {
        return (
            <div className="App">
                <div>نویسندگان</div>
                <button className={"btn btn-primary"} onClick={this.changeAuthorName}>تغییر اسامی</button>
                <div className="ui container">
                    <Author fullName={this.state.authors[0].fullName}>برنامه نویس فول استک</Author>
                    <Author fullName={this.state.authors[1].fullName}></Author>
                </div>
                <div>نظرات</div>
                <div className="ui container">
                    <Approve>
                        <Comment fullName={faker.name.firstName() + " " + faker.name.lastName()}
                                 description={faker.lorem.paragraph()}/>
                    </Approve>

                </div>
                <div className="ui container">
                    <Approve>
                        <Comment fullName={faker.name.firstName() + " " + faker.name.lastName()}
                                 description={faker.lorem.paragraph()}/>
                    </Approve>

                </div>
            </div>
        );
    }
}
export default App;
