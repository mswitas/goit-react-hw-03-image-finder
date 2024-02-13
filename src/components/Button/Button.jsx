import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./Button.module.css";

class Button extends Component {
    static defaultProps = {
        label: "",
        onClick: () => {},
    }

    static propTypes = {
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    render() {
        const { label, onClick } = this.props;
        return (
            <button type="button" className={css.Button} onClick={onClick}>{label}</button>
        );
    }
}

export default Button;