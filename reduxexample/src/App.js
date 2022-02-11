import React from 'react';

class App extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  
  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value
    }
    this.nameRef.current.value = "";
    this.emailRef.current.value = "";
  }
  
  render() {
    <div>
      <h1>Contacts Application</h1>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" ref={this.nameRef}/> <br />
        Email: <input type="text" ref={this.emailRef}/> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  }
}