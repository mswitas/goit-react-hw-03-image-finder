import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
    static defaultProps = {
        src: "",
        alt: "",
        onClick: () => { },
        large: "",
    }

    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        large: PropTypes.string.isRequired,
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