import React from 'react';

import Form from '../form/form.component'
import Footer from '../footer/footer.component'
import NavBar from '../navbar/navbar.component'

const Converter = () => {

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="display-4 my-4 text-center">FX Currency Converter</h1>
                        <div className="card-deck shadow-sm bg-light rounded">
                            <Form/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Converter