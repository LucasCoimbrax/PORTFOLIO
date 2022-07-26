import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CharacterPage from "../pages/CharacterPage/Character";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomPage/Home";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />            
                <Route path="/character/:id" element={<CharacterPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router