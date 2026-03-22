import React, { Component } from 'react';

class ProductDetail extends Component {
    constructor(params) {
        super(params);
        this.state = {
            count: 0
        }
    }

    // it is used to loaddata
    componentDidMount(){
        fetch('')
        .then(data => data.json())
        .then(products => {
            this.setState({products: products});
        })
    }

    handleClick(){
        const newCount = this.state.count + 1;
        this.setState({count: newCount});
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ProductDetail;