import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from './CustomerRow';
    
// mock sample data for Customer
// mock deleteCustomer
// render(<CustomerRow 
//  customer={customer} delEvent={id => this.deleteCustomer(id)}/>)

describe("testing customer row in isolation", () => {
    let callback = jest.fn(); // mock
    let c = {
        id:8,
        "firstName" : "Anil",
        "lastName" : "Kumar"
    };

    it("render CustomerRow", () => {
        render(<CustomerRow 
              customer={c} delEvent={id => callback(id)}/>);
              let elem = screen.getByText(/Kumar/i);
             expect(elem).toBeInTheDocument();
    });

    it("delete a customer", () => {
        render(<CustomerRow 
            customer={c} delEvent={id => callback(id)}/>);
        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(8); 
    });

});