import React, {Component } from "react";
import './Form.css'

export class Form extends Component {
    render() {
        return(
            <div className="item">
                <p className="name">{this.props.item.name}</p>
                <p className="age">Возраст: {this.props.item.age}</p>
                <p className="sport">Вид спорта: {this.props.item.sport}</p>
                <p className="sex">Пол: {this.props.item.male}</p>
                <a href={this.props.item.tglink} className="tglink">Ссылка на Telegram</a>
                <p>Описание:</p>
                <p className="dir">{this.props.item.description}</p>
            </div>
        )
    }
}

export default Form;