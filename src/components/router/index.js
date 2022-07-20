import React from 'react';

import {HashRouter as Router, Route, Routes, Link} from "react-router-dom";
import Tabbar from '@components/common/tabbar.js';
function AppRouter(){
    return (<div>
                <Router>
                    <Routes>
                        <Route exact="true" path="/category" element={<p/>}></Route>
                        <Route exact="true" path="/info" element={<p/>}></Route>
                        <Route exact="true" path="/cart" element={<p/>}></Route>
                        <Route exact="true" path="/my" element={<p/>}></Route>
                        <Route exact="true" path="/#" element={<p/>}></Route>
                    </Routes>
                    <Tabbar/>
                </Router>
                </div>)

}
export default AppRouter;