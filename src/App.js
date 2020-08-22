import React from 'react'

import Footer from './components/footer/footer.component'
import NavBar from './components/navbar/navbar.component'
import Converter from './components/converter/converter.component'

function App() {
  return (
    <>
      <NavBar/>
      <Converter />
      <Footer/>
    </>
  );
}

export default App;
