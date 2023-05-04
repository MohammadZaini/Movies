import React from "react";
import YoutubePlayer from 'react-native-youtube-iframe'

const Trailer = ({trailer}) => {

    const getKey = () => {
        return trailer.map( item => {
            return item.key
        });
    };

    return <>
        <YoutubePlayer
        height={230}
        videoId={getKey()[0]}
        play={false}
        />
    </>
};

export default Trailer;