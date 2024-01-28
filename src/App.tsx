import React from 'react';
import HomePage from './pages/HomePage.tsx';
import CardInfoPage from './pages/CardInfoPage.tsx';
import StatementsPage from './pages/StatementsPage.tsx';
import PostPage from './pages/PostPage.tsx';
import HeaderContainer from './scripts/header/containers/HeaderContainer.tsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div className="app-container">
                <HeaderContainer />

                <div className="content">
                    <Routes>
                        <Route exact path='/' element={<HomePage />} />
                        <Route path='/card-info' element={<CardInfoPage />} />
                        <Route path='/statements' element={<StatementsPage />} />
                        <Route path='/statements/:id' element={<PostPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
