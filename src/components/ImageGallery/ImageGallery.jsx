import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

class ImageGallery extends Component {
    static defaultProps = {
        images: [],
    }

    static propTypes = {
        images: PropTypes.array.isRequired,
    }

    render() {
        const { images } = this.props;
        return (
            <ul className={css.ImageGallery}>
                {images.map((image, i) => {
                    return (
                        <ImageGalleryItem key={i+image.id} src={image.webformatURL} alt={image.tags} />
                    );
                })}
            </ul>
        );
    }
}

export default ImageGallery;