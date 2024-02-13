import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import axios from "axios";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import Button from "./Button/Button";
import css from "./App.module.css";

axios.defaults.baseURL = "https://pixabay.com/api/";
const key = "6950737-29a0d5130824bfea54194711c";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      isLoading: false,
      error: "",
      currentPage: 1,
      totalPages: 0,
      noResults: false,
      searchQuery: "",
    }

    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.search.value;
    this.setState({ searchQuery: searchQuery });
  }

  fetchImages = async (searchQuery, currentPage) => {
    this.setState({
      isLoading: true,
    });
    const url = `?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);
    return response;
  }

  addImages = async () => {
    const { searchQuery, currentPage } = this.state;
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await this.fetchImages(searchQuery, currentPage);
      const noResults = data.totalHits === 0;
      this.setState(state => ({
        images: [...state.images, ...data.hits],
        totalPages: Math.ceil(data.totalHits / 12),
        totalHits: data.hits,
        noResults: noResults,
      }));
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  handleLoadMore = () => {
    this.setState(state => ({
      currentPage: state.currentPage + 1,
    }));
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({
        images: [],
      });
      this.addImages();
    } else if (prevState.currentPage !== this.state.currentPage) {
      this.addImages();
    }
  }
  
  render() {
    const { images, isLoading, error, totalPages, currentPage, noResults } = this.state;

    if (error) {
      return (<Error errorMessage={error.message} />);
    }
    
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handelSubmit} />
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        {noResults && <p>No images found :(</p>}
        {totalPages > 0 && currentPage < totalPages && <Button label="load more" onClick={this.handleLoadMore} />}
      </div>
    );
  }  
}

export default App;
