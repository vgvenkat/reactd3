import React, {Component} from 'react';
import * as d3 from 'd3';
function D3render(D3Component) {
    return class Hoc extends Component {
        componentDidMount() { D3Component.call(this);}
        componentWillUpdate() {D3Component.call(this);}
        render() {
            
            const {x, y} = this.props;
            return <svg><g  transform={`translate(${x},${y})`} ref="hoc"/></svg>;
        }
    }
}

const HocAxis = D3render(function(){
    const scale = d3.scaleLinear()
                    .domain([0, 20])
                    .range([0, 200]);
    const xAxis = d3.axisBottom(scale);
    
    d3.select(this.refs.hoc)
        .call(xAxis);
})



export default HocAxis;