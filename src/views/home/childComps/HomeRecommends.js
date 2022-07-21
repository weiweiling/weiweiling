import React from 'react';
import './HomeRecommends.css'
function HomeRecommends(props){

    const items = props.recommends;
    return(<div className="recommend">
            {items.map((item, index)=>
                <div key={index}>
                    <a href={item.link}>
                        <img src={item.image} alt = ""/>
                        <div>{item.title}</div>
                    </a>
                </div>)}
            </div>)
}
HomeRecommends.defaultProps = {
    recommends: {
        link:"",
        image:"",
        title:""
    }
}

export default HomeRecommends;