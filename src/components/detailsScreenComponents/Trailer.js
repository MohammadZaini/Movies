import React from "react";
import YoutubePlayer from 'react-native-youtube-iframe'

const Trailer = ({ trailer }) => {

    const getKey = () => {
        if (trailer) {
            return trailer.map(item => {
                return item.key;
            });
        }
    };

    const getFirstKey = (keys) => {
        return keys[0];
    };

    return <>
        <YoutubePlayer
            height={230}
            videoId={getFirstKey(getKey())}
            play={false}
        />
    </>
};

export default Trailer;