import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch'
export default class RecipeList extends Component {
  render() {
    const { recipes, handleDetails, handleChange, value, handleSubmit, error } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch handleChange={handleChange} handleSubmit={handleSubmit} value={value}/>
        <div className="container my-5">
          {/* Start title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="funny-text">recipe list</h1>
            </div>
          </div>
          {/* End title */}
          <div className="row">
            {error? <div className="mx-auto text-center"><h1 className="text-danger text-center">{error}</h1></div>:
              recipes.map(recipe => {
                return <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={handleDetails} />
              })
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}
