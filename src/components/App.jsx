import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "American Hardcore", author: "Stephen Blush"},
            {title: "Fight Club", author: "Chuck Palanuik"},
            {title: "Watership Down", author: "Richard Adams"}
        ];
        this.state = {
            booknumber: 0
        };
    }

        render() {
            return (
                <div className="container-fluid">
                    <TitleBar /> 
                        <div className="row">
                        <div className="col-md-4">
                        {/*Button to go to previous book goes here*/}
                    </div>
                    <div className="col-md-4">
                        {/*Book will be displayed here*/}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/*Button to go to next book goes here*/}
                        </div>
                    </div>
                </div>
            )
    }
}
export default App;