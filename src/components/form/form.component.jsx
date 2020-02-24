import React, { Component } from 'react';

import Swap from '../swap/swap.component'

class Form extends Component {
    state = {
        currencies: ['USD', 'GBP', 'EUR', 'CAD', 'AUD', 'JPY', 'ZAR', 'CHF', 'NZD'],
        base: 'ZAR',
        amount: '',
        convertTo: 'USD',
        result: '',
        date: ''
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            result: null
        })

        this.calculateAmount()
    }

    handleInput = e => {
        this.setState({
            amount: e.target.value,
            result: null
        })

        this.calculateAmount()
    }

    calculateAmount = () => {
        const amount = this.state.amount

        if(amount === isNaN) {
            return
        } else {
            fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
                .then(res => res.json())
                .then(data => {
                    const date = data.date
                    const result = (data.rates[this.state.convertTo] * this.state.amount).toFixed(2)

                    this.setState({
                        result,
                        date
                    })
                })
        }

    }

    handleSwap = e => {
        const base = this.state.base
        const convertTo = this.state.convertTo
        
        e.preventDefault()
        this.setState(
            {
                convertTo: base,
                base: convertTo,
                result: null
            },

            this.calculateAmount
        )
    }
    
    render(){
        const { currencies, base, amount, result, convertTo, date } = this.state

        return (
            <div className="col-lg-10 col-md-10 col-sm-10">
                <h2>{ amount } { base }</h2>
                <h3>
                    { amount === '' ?  '0' : result === null ? 0 : result} {convertTo}
                </h3>
                <p className="my-4">
                    {amount === '' ? '' : date === null ? '' : date}
                </p>

                <form className="form-inline mb-4">
                    <label>From: </label>
                    <input
                        type="number"
                        className="form-control form-control-ls mx-3"
                        onChange={this.handleInput}
                        value={amount}
                    />

                    <select 
                        className="form-control form-control-lg"
                        name="base"
                        value={base}
                        onChange={this.handleChange}
                    >
                        { currencies.map(currency => 
                            <option
                                key={currency}
                                value={currency}
                            >{currency}</option>
                        )}
                    </select>
                </form>
                
                <form className="form-inline mb-4">
                    <label>To: </label>
                    <input 
                        disabled={true}
                        type="number"
                        value={result === null ? 0 : result}
                        className="form-control form-control-ls mx-3"
                    />
                    <select 
                        className="form-control form-control-lg"
                        name="convertTo"
                        value={convertTo}
                        onChange={this.handleChange}
                    >
                        { currencies.map(currency => 
                            <option
                                key={currency}
                                value={currency}
                            >{currency}</option>
                        )}
                    </select>
                </form>
                <div onClick={this.handleSwap}>
                    <Swap>
                        &#8639;&#8642;
                    </Swap>
                </div>
            </div>
        )
    }
}

export default Form