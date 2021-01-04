import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      subject:{title:'WEB', sub:'world wide web!!!'},
      subject2:{title:'React', sub:'This is React!!!'},
      content:{title:'HTML', desc:'HTML is HyperText Markup Language.'}
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC></TOC>
        <Subject title={this.state.subject2.title} sub={this.state.subject2.sub}></Subject>
        <Content title={this.state.content.title} desc={this.state.content.desc}></Content>
      </div>
    );
  }
}
  export default App
