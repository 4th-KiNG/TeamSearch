import React, {Component } from "react";
import Form from "./Form";
import './Forms.css'

export class Forms extends Component {
    render() {
        return(
            <div className="items">
                {this.props.forms.map(el=> (
                    <Form item={el} />
                ))}
            </div>
        )
    }
}

export default Forms;