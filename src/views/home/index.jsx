import React, {useState, useEffect} from 'react';

import BetterScroll from 'better-scroll';
import Navbar from '@components/common/navbar';
import {getHomeMultidata,
        getHomeGoods} from '@components/network/home.js';

import HomeRecommends from './childComps/HomeRecommends';
import FeatureView from './childComps/FeatureView';

import TabControl from '@components/content/tabControl/index';
import GoodsListItem from "@components/content/goods/GoodsListItem";
import {BS, debounce} from "./childComps/Scroll";

import './index.css'
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titles:['pop', 'new', 'sell'],
            rollingArea:0,
            bsContainer:null,
            scrollName:"正在加载中",
            currentIndex:0,
            data: null,
            scroll:null,
            recommends:[],
            goods:[{'pop':{page:0, list:[]}},
            {'new':{page:0, list:[]}},
            {'sell':{page:0, list:[]}},
            ]}
    }
    getGoodsHome(num){

        let type = this.state.titles[num];
        let num_page = Object.values(this.state.goods[num])[0].page;
        console.log(num_page, '!!!!!!!!!!!!!!!!!!!!!!!1');
        getHomeGoods(type, ++num_page).then(res=>{

                return this.setState(prevState => ({
                    goods: prevState.goods.map(
                        el => {
                            let key = Object.keys(el)[0];
                            if(key === type){
                                ++el[key].page;
                                console.log(el[key].page, '***************************************')
                                el[key].list.push(...res.data.list);
                                return {[type]:{page:el[key].page, list:el[key].list}}
                            }
                            else{return el}}
                    )
                }))
            }
        )
    }
    changeBS(){
        const scrolled = debounce((roll, bs) =>
        {  // roll 滚动位置 bs BScroll 对象

            const { x, y } = roll  // x y 轴的距离
            // bs && bs.refresh()  //  按钮因为没有写到 content 也就不会影响到滚动的高度 所以也就不需要加 refresh
            this.setState({
                rollingArea:y
            })
            // console.log(y, '############')
        }, 10)  // 展示的慢 因为加了防抖函数
        // const pullUp=(title)=>
        // {
        //     this.setState({
        //         scrollName: title
        //     })
        // }
        const pullUp = (num)=>{
            this.getGoodsHome(num);
                }
        this.setState({bsContainer:BS('wrapper',this.state.currentIndex, { payload: { params: null, callback: { scrolled, pullUp } } })
        })

        }

    btnBack()
    {
        this.state.bsContainer.scrollTo(750, 0, 2)  // X轴 Y轴 时间
    }
    componentDidMount(){
        this.changeBS()
        getHomeMultidata().then(res=>{
            this.setState({
                banners: res.data.banner.list,
                recommends:res.data.recommend.list
            })
        })
        this.getGoodsHome(this.state.currentIndex);
        if(this.state.bsContainer != null){this.state.bsContainer.refresh();}

    }
    handleClick=(value)=>{
        this.setState({currentIndex:value},
        )
        this.getGoodsHome(value);
        this.state.bsContainer.refresh();
    }


    render(){
        const title = ["流行", "新款", "精选"], value = this.state.currentIndex, gloss = this.state.goods;
        return(
            <div className="home">
                    <Navbar center="首页"/>
                        <HomeRecommends recommends={this.state.recommends}/>
                        <FeatureView/>
                        <TabControl title = {title} value = {this.state.currentIndex} setIndex = {this.handleClick.bind(this)}/>
                        <div className="containers">
                            <div id='wrapper' className="wrappers">
                                <div className="contents">
                                    <GoodsListItem goodss = {Object.values(gloss[value])}/>
                                </div>
                            </div>
                            {this.state.rollingArea <=-50 ? (<img src={require('@assets/images/img/common/top.png')} onClick={this.btnBack.bind(this)} className="btn" />) : null}
                        </div >
    </div>)}
}