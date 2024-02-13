import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./Searchbar.module.css";

class Searchbar extends Component {
    static defaultProps = {
        onSubmit: () => {},
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    render() {
        const { onSubmit } = this.props;
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={onSubmit}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={css.SearchFormInput}
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