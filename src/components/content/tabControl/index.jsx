import React from 'react';
import './tabControl.css';


function TabControl(props){
    const items = props.title;
    const setIndex = props.setIndex;
    function handleClick(index){
            setIndex(index);
      }
    return(
        <div className="tab-control">
            {items.map((item, index)=>{
                return (<span className={props.value==index?"activespan":"normalspan"} key = {index} onClick = {()=>{handleClick(index)}}>{item}</span>)
                })
        }
   </div>)
}
export default TabControl;


