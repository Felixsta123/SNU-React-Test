import React, { useState, useEffect } from "react";
import ImageSearchEngine from "./imageSearchBar/imageSearchEngine";
import ImageList from "./imageList/imageList";

const API_KEY = "28646522-b2d4f5beb5fa6bf47614c2ce5";

function App() {
  const [searchWord, setSearchWord] = useState("Flowers");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const handleGetRequest = async () => {
      if (searchWord === "") return;

      const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchWord}&image_type=photo`;

      const request = await fetch(API_URL);
      const response = await request.json();

      setImages(response.hits);
    };
    handleGetRequest();
  }, [searchWord]);

  return (
    <div className="container mx-auto">
      <ImageSearchEngine searchText={(text) => setSearchWord(text)} />
      {images.length === 0 && (
        <div className="justify-center text-2xl font-black text-red-500 flex items-center">
          No results for "{searchWord}"
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      )}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ImageList key={index} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
