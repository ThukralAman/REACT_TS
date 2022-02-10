import React, { Component } from "react";
import IProduct from "../model/IProduct";
import {products} from '../data';

type ContextType = {
    products:IProduct[],
    handleDetail: (id:string) => IProduct | null
}
type Props = {
}

type StateType = {
    products:IProduct[]
}

export const ProductContext = React.createContext<ContextType>({
    products:[],
    handleDetail: () => {return null;}
});

export class ProductProvider extends Component<Props, StateType> {
    state:StateType = {
        products:[]
    }
    componentDidMount():void {
        this.setProducts();
    }

    setProducts = () => {
        let prds:IProduct[] = [];
        products.forEach(p => {
            prds.push({...p})
        });
        this.setState({
            "products": prds
        }, () =>  console.log("--------> products"));
    }

    handleDetail = (id:string):IProduct => {
        let prd:IProduct = this.state.products.filter(p => p.id === id) [0];
        return prd;
    }

    render() {
        return (
            <ProductContext.Provider value={{...this.state, handleDetail: this.handleDetail}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}