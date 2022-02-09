import React, { Component } from "react";
import IProduct from "../model/IProduct";
import {products} from '../data';

type ContextType = {
    products:IProduct[]
}
type Props = {
}

type StateType = {
    products:IProduct[]
}

export const ProductContext = React.createContext<ContextType>({
    products:[]
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
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}