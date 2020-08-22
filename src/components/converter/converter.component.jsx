import React from 'react';

import Form from '../form/form.component'

const Converter = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 my-5 text-center">FX Currency Converter</h1>
            <div className="card-deck shadow bg-light rounded">
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Converter