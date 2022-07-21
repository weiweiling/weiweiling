import React from 'react';


import Navbar from '@components/common/navbar';
import {getHomeMultidata} from '@components/network/home.js';
import HomeRecommends from './childComps/HomeRecommends';
import FeatureView from './childComps/FeatureView';
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            recommends:[]
    }
    }
    componentDidMount(){
        getHomeMultidata().then(res=>{
        console.log(res.data.recommend);
            this.setState({
                banners: res.data.banner.list,
                recommends:res.data.recommend.list
            })
        })
    }
    render(){
        return(<div>
            <Navbar center="首页"/>
            <HomeRecommends recommends={this.state.recommends}/>
            <FeatureView/>
        </div>)}
}