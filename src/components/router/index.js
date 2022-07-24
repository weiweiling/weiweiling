import React from 'react';

import {HashRouter as Router, Route, Routes, Link} from "react-router-dom";
import Tabbar from '@components/common/tabbar';
import Category from '@views/category/index';
import Home from '@views/home/index';
import Cart from '@components/content/cart/cart2';
function AppRouter(){
    return (<div>
                <Router>
                    <Routes>
                        <Route exact="true" path="/category" element={<Category/>}></Route>
                        <Route exact="true" path="/info" element={<Home/>}></Route>
                        <Route exact="true" path="/cart" element={<Cart/>}></Route>
                        <Route exact="true" path="/my" element={<Home/>}></Route>
                        <Route exact="true" path="/" element={<Home/>}></Route>
                    </Routes>
                    <Tabbar/>
                </Router>
                </div>)

}
export default AppRouter;