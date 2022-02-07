import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App />);
  const h1Element = screen.getByText(/React Application/i);
  expect(h1Element).toBeInTheDocument();
});

it("renders customers", () => {
  // render(<App />);
  // let btns = screen.queryAllByRole('button');
  // expect(btns.length).toBe(6);

  let {container} = render(<App/>);
  let rows = container.querySelectorAll('.row');
  expect(rows.length).toBe(6);
});

it("delete a customer", () => {
  render(<App/>);
  let btns = screen.queryAllByRole('button');
  fireEvent.click(btns[2]);
  btns = screen.queryAllByRole('button');
  expect(btns.length).toBe(5);
})

it("filter a customer", () => {
  render(<App/>);
  let txtBox = screen.getByPlaceholderText("search by name");
  fireEvent.change(txtBox, {"target" : {"value": "Geller"}});
  // screen.debug();
  let btns = screen.queryAllByRole('button');
  expect(btns.length).toBe(2);
})