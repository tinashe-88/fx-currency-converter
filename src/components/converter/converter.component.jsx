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
                    <div className="col-lg-10 mx-auto ">
                        <h1 className="display-4 my-5 text-center">FX Currency Converter</h1>
                        <div className="card card-body shadow-sm p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <Form/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Converter