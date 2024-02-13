import React, { Component } from "react";
import PropTypes, { func } from "prop-types";

class Searchbar extends Component {
    static defaultProps = {
        onSubmit: () => {},
    }

    static propTypes = {
        onSubmit: func.isRequired,
    }

    render() {
        const { onSubmit } = this.props;
        return (
            <header className="searchbar">
                <form className="form" onSubmit={onSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>
                    <input
                        className="input"
                        type="text"
                        name="search"    
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;