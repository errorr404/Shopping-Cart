import React from 'react'
import Product from './Product';
import Title from './Title'
class ProductList extends React.Component {
    state = {
        products: []
    }
    render(){
        return(
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                <Title name="our" title="product" />
                <div className="row">

                </div>

                </div>

                </div>
            </React.Fragment>
            //    <Product />
        )
    }
}

export default ProductList