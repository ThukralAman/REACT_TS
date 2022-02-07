import React, { Component } from 'react';
import ICustomer from '../model/ICustomer';

type IAppProps = {
    "customer": ICustomer
}

export default class CustomerRow extends Component<IAppProps> {
    public render() {
        let {id, firstName, lastName} = this.props.customer;
        return <div className="row">
            {firstName} &nbsp; {lastName} &nbsp;
            <button type="button">&times;</button>
        </div>
    }
}