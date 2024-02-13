import React, { Component } from "react";

class Error extends Component {
    static defaultProps = {
        errorMessage: "",
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