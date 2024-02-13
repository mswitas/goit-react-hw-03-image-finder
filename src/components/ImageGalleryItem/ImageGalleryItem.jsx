import React, { Component } from "react";

class ImageGalleryItem extends Component {
    static defaultProps = {
        src: "",
        alt: "",
    }

    render() {
        const { src, alt } = this.props;
        return (
            <li className="galleryItem">
                <img src={src} alt={alt} />
            </li>
        )
    }
}

export default ImageGalleryItem;