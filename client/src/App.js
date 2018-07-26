import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  state = {
    fields: [] //make sure this data type is correct. dont put '' because you are trying to map an ARRAY
  }

   componentDidMount() {
    axios.get(`http://localhost:3001/fields/`).then(resp => {
      this.setState({
        fields:resp.data //set the state and have axios go to resp.data to get the data
      })
    })
  }

  render() {
    return (
      <div>
      <h2>Sign Up For My Web App</h2>
        {this.state.fields.map(field => {
              if (field.type == 'text' || field.type == 'tel' || field.type == 'email') { //these 3 types render same thing
                return (
                  <div className="input" key={'field-${i}'}>
                  <i className={`fa ${field.icon}`}></i>
                  <input id={field.id} type={field.type} placeholder={field.label} />
                  </div>
                  )
              }
              if (field.type == 'textarea') {
                return (
                <div key={'field=${i}'}>
                <i className={`fa ${field.icon}`}></i>
                <textarea id={field.id} type={field.type} placeholder={field.label} />
                </div>
                )
              }
              if (field.type == 'select') {
                return (
                <div key={'field-${i}'}>
                <i className={`fa ${field.icon}`}></i>
                <select id={field.id}>
                  <option value=''>{field.label}</option>
                  {field.options.map((option, i) => (
                    <option key={`option-${i}`} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  </div>
                )
              }
        })}
        <button type="submit">Submit</button>
      
      </div> //you can do expressions and if/else inside the curly braces because that is Javascript, not JSX
    );
  }
}

export default App;
