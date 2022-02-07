import React, { Component } from 'react';
import ICustomer from '../model/ICustomer';
import CustomerRow from './CustomerRow';
import Filter from './Filter';

export interface IAppProps {
}

export interface IAppState {
    "customers" : ICustomer[],
    "complete": ICustomer[]
}

export default class CustomerList extends Component<IAppProps, IAppState> {
     constructor(props:IAppProps) {
        super(props);
        this.state  = {
               "complete": [],
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
    componentDidMount() {
        this.setState({
            complete: this.state.customers
        })
    }

    public render() {
        return <div>
            <Filter filterEvent={(txt) => this.filterCustomers(txt)} />
            {
                this.state.customers.map(customer => <CustomerRow 
                    key={customer.id} customer={customer} delEvent={id => this.deleteCustomer(id)}/>)
            }
        </div>
     }

     filterCustomers(txt:string):void {
        let custs = 
          this.state.complete.filter(c => c.lastName.toLowerCase().indexOf(txt.toLowerCase()) >= 0);
          this.setState({
            "customers": custs
        }, () => console.log("filtered !!!"));
     }

     deleteCustomer(id:number): void {
         let custs = this.state.customers.filter(c => c.id != id);
         // async
         this.setState({
             "customers": custs
         }, () => console.log("deleted !!!", id));
     }

}

