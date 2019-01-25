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
    getItem = (id)=>{
        const product = this.state.products.find(item=> item.id===id)
        return product
    }

    handleDetail = (id) =>{
        // console.log('hello from detail')
        const product = this.getItem(id)
        this.setState(()=>{
            return {detailProduct:product}
        })
    }
    addToCart = (id) =>{
        console.log('hello from addToCart',id)
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