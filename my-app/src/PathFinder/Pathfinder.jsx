import React, {Component} from 'react';
//importing node from 
import Node from './Node/Node';

export default class PathFinder extends Component{
    constructor(){
        super();
        this.state = {
            grid: [],
            mouseisPressed: false,
        };

    }
    render(){
        return(
            <Node>

                
            </Node>
        )
    }
}