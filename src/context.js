import React from 'react'
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();  // created the cotext object

//Provider

//Consumer
class ProductProvider extends React.Component {
    state = {
        products:[],
        detailProduct
    }
    componentDidMount(){
        this.setProducts()
    }

    setProducts =()=>{
        let tempProducts = []
        storeProducts.forEach(item=>{
            const singleItem = {...item}
            tempProducts=[...tempProducts,singleItem]
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }
    handleDetail = () =>{
        console.log('hello from detail')
    }
    addToCart = () =>{
        console.log('hello from addToCart')
    }
  
    render(){
        return(
            <ProductContext.Provider value={{
                // products:this.state.products,
                // detailProduct:this.state.detailProduct
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer
export {ProductProvider,ProductConsumer}