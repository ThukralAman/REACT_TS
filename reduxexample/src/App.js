import React from 'react';

import {createContact, deleteContact} from './redux/ActionCreators'
import { connect } from 'react-redux';
import ContactView from './ContactView';

class App extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value
    }
    this.nameRef.current.value = "";
    this.emailRef.current.value = "";
    this.props.createNewContact(contact);
  }
  
  deleteContact(email) {
    this.props.deleteAContact(email);
  }
  render() {
   return <div>
      <h1>Contacts Application</h1>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" ref={this.nameRef}/> <br />
        Email: <input type="text" ref={this.emailRef}/> <br />
        <button type="submit">Submit</button>
      </form>
      {
        this.props.contacts.map( contact => <ContactView 
          key={contact.email} contact={contact} deleteContact={ (email) => this.deleteContact(email)}/>)
      }
    </div>
  }
}
// state from "redux store"
// return props
const mapStateToProps = (state) => {
  console.log("=====>", state)
  return {
    contacts: state.contacts
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    createNewContact : contact => dispatch(createContact(contact)),
    deleteAContact: email => dispatch(deleteContact(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);