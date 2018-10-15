import React, { Component } from 'react';
import './App.css';
import BookHeader from './components/BookHeader'
import BookList from './components/BookList';

class App extends Component {

  state = {
    books: []
  }

  async componentDidMount () {
    const response = await fetch("http://localhost:8082/api/books")
    const book = await response.json()
    this.setState({books: book}) 
  }

  render() {
    return (
      <div className="App">
        <BookHeader />
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default App;
