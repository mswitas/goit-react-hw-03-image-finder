import React, { Component } from "react";
import css from "./Button.module.css";

class Button extends Component {
    static defaultProps = {
        label: "",
        onClick: () => {},
    }

    render() {
        const { label, onClick } = this.props;
        return (
            <button type="button" className={css.Button} onClick={onClick}>{label}</button>
        );
    }
}

export default Button;