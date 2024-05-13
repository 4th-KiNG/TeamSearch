import React, {Component } from "react";
import Form from "./Form";
import './Forms.css'
import { Link } from "react-router-dom";

const Forms = ({forms}) => {
    return(
        <div className="items">
            {forms.map((el)=> (
                <Link className="link" to={`/form/${el.formid}`}>
                    <Form sport={el.sport} userEmail={el.userEmail} className="form" />
                </Link>
            ))}
        </div>
    )
}


export default Forms;