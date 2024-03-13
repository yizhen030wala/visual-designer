// eslint-disable-next-line no-unused-vars
import React from 'react'
import Nav from './nav'
import { Outlet } from 'react-router-dom'


const outlet = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}

export default outlet
