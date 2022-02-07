import React, { Component } from 'react';
import ICustomer from '../model/ICustomer';

type IAppProps = {
    "customer": ICustomer,
    "delEvent": (id:number) => void
}

export default class CustomerRow extends Component<IAppProps> {
    public render() {
        let {id, firstName, lastName} = this.props.customer;
        return <div className="row">
            {firstName} &nbsp; {lastName} &nbsp;
            <button type="button" onClick={() => this.props.delEvent(id)}>&times;</button>
        </div>
    }
}