import React, { Component } from "react";
import css from "./Modal.module.css";

class Modal extends Component {
    static defaultProps = {
        src: "",
        alt: "",
        onClick: () => {},
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