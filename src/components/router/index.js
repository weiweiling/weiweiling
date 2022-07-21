import React from 'react';

import {HashRouter as Router, Route, Routes, Link} from "react-router-dom";
import Tabbar from '@components/common/tabbar.js';
import Category from '@views/category/index.js';
import Home from '@views/home/index.js';
function AppRouter(){
    return (<div>
                <Router>
                    <Routes>
                        <Route exact="true" path="/category" element={<Category/>}></Route>
                        <Route exact="true" path="/info" element={<Home/>}></Route>
                        <Route exact="true" path="/cart" element={<Home/>}></Route>
                        <Route exact="true" path="/my" element={<Home/>}></Route>
                        <Route exact="true" path="/" element={<Home/>}></Route>
                    </Routes>
                    <Tabbar/>
                </Router>
                </div>)

}
export default AppRouter;