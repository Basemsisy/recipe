import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
    const {handleSubmit, handleChange, value} = this.props
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-capitalize funny-text">
                search for recipes with{" "}
                <strong className="text-danger">food2fork</strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-cpitalize">type recipes sprated by comma</label>
                <div className="input-group">
                  <input 
                    type="text" 
                    name="search" 
                    placeholder="apple, carrot.." 
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button className="input-group-text bg-primary text-white">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
