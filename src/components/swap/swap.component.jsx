import React, { Component } from 'react';

class Swap extends Component {
    state = {
        currencies: ['USD', 'GBP', 'EUR', 'CAD', 'AUD', 'JPY', 'ZAR', 'CHF', 'NZD'],
        base: 'ZAR',
        amount: '',
        convertTo: 'USD',
        result: '',
        date: ''
    }

    handleSwap = e => {
        e.preventDefault()

        const base = this.state.base
        const convertTo = this.state.convertTo

        this.setState({
            convertTo: base,
            base: convertTo,
            result: null
        })
    }

    render(){
        return (
            <div className="col-lg-2 col-md-2 col-sm-2 align-self-center">
                <button
                    className="btn btn-light" 
                    onClick={this.handleSwap}
                >
                    &#8639;&#8642;
                </button>
            </div>
        )
    }
}

export default Swap