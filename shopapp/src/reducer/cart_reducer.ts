
// action has type and payload
import IProduct from "../model/IProduct";

type Action = {type:'ADD_TO_CART', payload:IProduct} 
| {type:'REMOVE_FROM_CART', payload:string}
| {type:'INCREMENT', payload:string}

export interface ICart {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  qty?:number;
  amount?:number;
}
export interface StateType {
    products: ICart[],
    total:number
}

const cartReducer = (state:StateType, action:Action) => {
    if(action.type === 'ADD_TO_CART') {
        const product = {...action.payload};
        let item = {
            id:product.id,
            name:product.name,
            image: product.image,
            price:product.price,
            qty: 1,
            amount: product.price
        }
        let cartItems = state.products;
        let total = state.total += product.price;
        return {products: [...cartItems, {...item}], total};

    } else if (action.type === 'INCREMENT') {

    } else {
        return state;
    }
}


export default cartReducer;