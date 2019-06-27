import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

class App extends Component  {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=a9c555a45cf881ea5b214a9bbdc078c1",
    base_url: "https://www.food2fork.com/api/search?key=a9c555a45cf881ea5b214a9bbdc078c1",
    id: NaN,
    pageIndex: 0,
    searchKey: "",
    query: "&q=",
    error: ''
  }

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if(jsonData.recipes.length === 0) {
        this.setState({error: 'sorry, but your search did\'t retutn anything' })
      } this.setState({recipes: jsonData.recipes})
    }
    catch(error) {
      console.log(error)
    }
  }
  
  componentDidMount() {
    this.getRecipes()
  }

  displayPage = (index) => {
    switch(index) {
      case 0:
        return (
          <RecipeList 
            recipes={this.state.recipes} 
            handleDetails={this.handleDetails}
            value={this.state.searchKey}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
      case 1:
        return (
          <RecipeDetails 
            id={this.state.id} 
            handleIndex={this.handleIndex}
          />
        )
      default:
    }
  }
  //handle index method
  handleIndex = (index) => {
    this.setState({pageIndex: index})
  }
  //handle details method
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      id: id
    })
  }
  //handle change method
  handleChange = (e) => {
    this.setState({searchKey: e.target.value})
  }
  //handle submit method
  handleSubmit = (e) => {
    e.preventDefault();
    const {base_url, query, searchKey} = this.state;

    this.setState(
      {
        url: `${base_url}${query}${searchKey}`, 
        searchKey: ""
      }, 
      () => 
      {
        this.getRecipes()
      }
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App
