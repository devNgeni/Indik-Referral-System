
import React from 'react';
import axios from 'axios';
// import BASE_URL from '../../../../backend/Pix/server/api';


 export default class Pix extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`http://localhost:3001/api/v1/createCharge`)
      .then(response => {
        console.log(user);
        console.log(response.txid);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
