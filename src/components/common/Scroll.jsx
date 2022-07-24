import React from 'react';

import BetterScroll from 'better-scroll';

export default function Scroll(WithComp){
    class NewComponent  extends React.Component{
        constructor(props) {
            super(props);
            this.myRef = React.createRef();
            this.state = {
                name:"Scroll",
                scroll:null,
                goods:[],
            }
        }
        componentDidMount(){
            this.setState({
                scroll:new BetterScroll(this.myRef.current, {
                })
            })
        }

        render(){
            return (<div className="wrapper" ref={this.myRef}>
                <div className="content">
                    <WithComp{...this.props}/>
                </div>
            </div>)
        }
    }
    return NewComponent
}


