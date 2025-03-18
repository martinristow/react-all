import React from 'react'

const SearchBar = ({videos, onSearchVideo}) => {

    return (

        <form>
            <label>
                <input type="text" name="search"
                       onInput={e => SearchVideoByName(e.currentTarget.value, videos, onSearchVideo)}/>
            </label>

        </form>
    )
}

const SearchVideoByName = (name, videos, onSearchVideo) => {

    let foundVideos = []

    videos.forEach(video => {
        name = name.toLowerCase();
        video.title = video.title.toLowerCase();

        if (video.title.includes(name)) {
            // console.log(video.title);
            foundVideos.push(video);
        }

    });

    onSearchVideo(foundVideos);
}

export default SearchBar
