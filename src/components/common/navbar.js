import React from 'react';
import './navbar.css'
function Navbar(props){
    return(<div className="nav-bar">
        <div className="left">
            <slot name="left">{props.left}</slot>
        </div>
        <div className="center">
            <slot name="center">{props.center}</slot>
        </div>
        <div className="right">
            <slot name="right">{props.right}</slot>
        </div>
        {/*插槽*/}
    </div>)
}

export default Navbar;