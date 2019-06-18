import React, { Component } from 'react';
import {recipe} from '../tempDetails';
export default class RecipeDetails extends Component {
  state = {
    recipe: recipe,
    url: `https://www.food2fork.com/api/get?key=17e529937f2f9d75e544a9fdeca11546&rId=${this.props.id}`
  }
  
  async componentDidMount() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({recipe: jsonData.recipe});
    }
    catch(error) {
      console.log(error)
    }
  }
  
  render() {
    console.log(this.props.id)
    const {image_url, title, publisher, publisher_url, source_url, ingredients} = this.state.recipe
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button className="btn btn-warning mb-5 text-capitalize" onClick={() => this.props.handleIndex(0)}>back to recipe list</button>
              <img src={image_url} alt="recipe" className="d-block w-100"/>
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h4 className="text-uppercase">{title}</h4>
              <h6 className="text-warning text-capitalize funny-text">provided by {publisher}</h6>
              <a href={publisher_url} target="_blank" rel="noopener noreferrer" 
                className="btn btn-primary mt-2 text-capitalize">publisher webpage
              </a>
              <a href={source_url} target="_blank" rel="noopener noreferrer" 
                className="btn btn-success mt-2 mx-3 text-capitalize">recipe url
              </a>
              <ul className="list-group mt-4">
                <h4 className="mt-3 mb-4">Ingredients</h4>
                {
                  ingredients.map((item, index) => {
                    return (
                      <li key={index} className="list-group-item">{item}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
