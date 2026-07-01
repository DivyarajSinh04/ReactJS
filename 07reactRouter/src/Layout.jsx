import React from 'react';
import { Header, Footer, Home } from './components/index'
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            {/* Header footer stays same outlet is variable and will change based on the route */}
            <Footer />
        </>
    )
}