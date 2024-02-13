import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import React, { Component } from "react";
import PropTypes from "prop-types";

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
            <ul className="gallery">
                {images.map(image => {
                    return (
                        <ImageGalleryItem key={image.id} src={image.webformatURL} alt={image.tags} />
                    );
                })}
            </ul>
        );
    }
}

export default ImageGallery;