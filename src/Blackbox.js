import React, {Component} from 'react';
import * as d3 from 'd3';
class Axis extends Component {
  componentDidMount () { this.renderAxis() }
  componentDidUpdate () { this.renderAxis() }
  renderAxis () {
    const scale = d3.scaleLinear()
                    .domain([0, 10])
                    .range([0, 200]);
    
    const axis = d3.axisBottom(scale);

    d3.select(this.refs.g)
        .call(axis);
    }
    render(){
        return (<svg width="400" height="200">
                    <g transform="translate(10,30)" ref="g" />
                </svg>)
    }
}

export default Axis;