import React, {Component } from "react";
import Form from "./Form";
import './Forms.css'
import { Link } from "react-router-dom";

const Forms = ({forms}) => {
    return(
        <div className="items">
            {forms.map((el)=> (
                <Link className="link" to={`/user/${el.id}`}>
                    <Form id={el.id} avatarURL={el.avatarURL} name={el.name} age={el.age} sex={el.sex} sport={el.sport} description={el.description} link={el.link} className="form" />
                </Link>
            ))}
        </div>
    )
}


export default Forms;