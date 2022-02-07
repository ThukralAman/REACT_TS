import React, { Component } from 'react';
import ICustomer from '../model/ICustomer';
import CustomerRow from './CustomerRow';

export interface IAppProps {
}

export interface IAppState {
    "customers" : ICustomer[]
}

export default class CustomerList extends Component<IAppProps, IAppState> {
    constructor(props:IAppProps) {
        super(props);
        this.state  = {
            "customers" : [
                {
                    "id": 1,
                    "firstName": "Rachel",
                    "lastName": "Green "
                },
                {
                    "id": 2,
                    "firstName": "Chandler",
                    "lastName": "Bing"
                },
                {
                    "id": 3,
                    "firstName": "Joey",
                    "lastName": "Tribbiani"
                },
                {
                    "id": 4,
                    "firstName": "Monica",
                    "lastName": "Geller"
                },
                {
                    "id": 5,
                    "firstName": "Ross",
                    "lastName": "Geller"
                },
                {
                    "id": 6,
                    "firstName": "Phoebe",
                    "lastName": "Buffay"
                }
            ]
        }
    }

    public render() {
        return <div>
            {
                this.state.customers.map(customer => <CustomerRow key={customer.id} customer={customer}/>)
            }
        </div>
     }

}

