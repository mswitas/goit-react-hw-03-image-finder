import React, { Component } from "react";
import css from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
    static defaultProps = {
        src: "",
        alt: "",
    }

    render() {
        const { src, alt } = this.props;
        return (
            <li className={css.ImageGalleryItem}>
                <img src={src} alt={alt} />
            </li>
        )
    }
}

export default ImageGalleryItem;