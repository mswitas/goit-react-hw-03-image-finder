import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import axios from "axios";
import ImageGallery from "./ImageGallery/ImageGallery";

axios.defaults.baseURL = "https://pixabay.com/api/";
const key = "6950737-29a0d5130824bfea54194711c";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      totalHits: 0,
      isLoading: false,
      error: "",
      currentPage: 1,
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

  getImages = async () => {
    this.setState({
      isLoading: true,
    });
    const { searchQuery, currentPage } = this.state;
    const url = `?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
    try {
      const { data } = await axios.get(url);
      this.setState({
        images: data.hits,
        totalHits: data.totalHits,
      });

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

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    } 
  }


  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handelSubmit} />
        <ImageGallery images={images} />
      </div>
    );
  }  
}

export default App;
