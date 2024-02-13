import React, { Component } from "react";
import PropTypes from "prop-types";

class Error extends Component {
    static defaultProps = {
        errorMessage: "",
    }

    static propTypes = {
        errorMessage: PropTypes.string.isRequired,
    }

    render() {
        const { errorMessage } = this.props;
        return (
            <div>
                <p>{errorMessage}</p>
            </div>
        );
    }
}

export default Error;