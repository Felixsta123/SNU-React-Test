import React from 'react';
import ImageSearchEngine from './imageSearchBar/imageSearchEngine';
import ImageList from './imageList/imageList';

const API_KEY = "28646522-b2d4f5beb5fa6bf47614c2ce5"

class App extends React.Component {

    state = {
        images: []
    }

    handleGetRequest = async (event) => {
        event.preventDefault()
        const searchWord = event.target.searchValue.value
        const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchWord}&image_type=photo`
        const request = await fetch(API_URL)
        const response = await request.json()
        this.setState({images: response.hits})
    }

    render() {
        return (
        <div>
            <ImageSearchEngine handleGetRequest={this.handleGetRequest}/>
            <ImageList images={this.state.images}/>
        </div>
        )
    }
}

export default App;
