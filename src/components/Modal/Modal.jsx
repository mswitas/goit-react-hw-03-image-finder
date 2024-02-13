import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./Modal.module.css";

class Modal extends Component {
    static defaultProps = {
        src: "",
        alt: "",
        onClick: () => {},
    }

    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    render() {
        const { src, alt, onClick } = this.props;
        return (
            <div className={css.Overlay} onClick={onClick}>
                <div className={css.Modal}>
                    <img src={src} alt={alt} />
                </div>
            </div>
        )
    }
}

export default Modal;