import React, { Component } from "react";
import css from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
    static defaultProps = {
        src: "",
        alt: "",
        onClick: () => { },
        large: "",
    }

    render() {
        const { src, alt, onClick, large } = this.props;
        return (
            <li className={css.ImageGalleryItem}>
                <img src={src} alt={alt} onClick={onClick} data-large={large} />
            </li>
        )
    }
}

export default ImageGalleryItem;