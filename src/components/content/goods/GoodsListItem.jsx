import React from 'react';
import './GoodsItems.css'

function GoodsListItem(props){
    let goodsItems = props.goodss[0].list;
    console.log(goodsItems, '&&&&&&&&&&&&&')
    if(goodsItems == undefined){
        return (<div></div>)
    }
    else{
        return(
            <div className="goods-item">
                {goodsItems.map((goodsItem, index)=>{console.log(goodsItem['acm'].title)
                    return (<div className="each-item" key = {index}>
                                <img src={goodsItem['show'].img} alt=""/>
                                <div className="goods-info">
                                    <p>{goodsItem.title}</p>
                                    <p>{goodsItem.price}</p>
                                </div>
                        </div>)
                    })}
                </div>)
    }
}
export default GoodsListItem;



