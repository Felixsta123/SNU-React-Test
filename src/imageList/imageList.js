import React from 'react';

const ImageList = (props) => {
    return (
        <div>
            {props.images.map(({tags, largeImageURL}) => {
                return (
                    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap">
                                <div className="w-full p-1 md:p-2"></div>
                                    <img src={largeImageURL} alt={tags} />
                                </div>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}

export default ImageList