import React, {Component} from "react"
import { Button, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ChampionContainer extends Component {
    constructor(props){
        super(props)

        props={
            objectClass: "overlay"
        }
    }

    render(){
        return (
            <div class="col-sm-4 jumper">
                <div class={this.props.objectClass}>
                  <a href={this.props.link}><img src={this.props.image} class="img-fluid"/></a>
                  {this.props.name}
                </div>
                
            </div>
        )
    }
}