import React, { Component } from "react";
import css from "./NoResults.module.css";

class NoResults extends Component {
    render() {
        return (
            <p className={css.NoResults}>No images found :(</p>
        )
    }
}

export default NoResults;