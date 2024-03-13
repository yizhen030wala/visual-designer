// import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Nav from '../public/nav/nav';
import Jenny from '../public/nav/outlet'
import Home from '../src/pages/home/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/jenny" element={<Jenny />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>

    // <>
    //   <Nav />
    // </>
  )
}

export default App
