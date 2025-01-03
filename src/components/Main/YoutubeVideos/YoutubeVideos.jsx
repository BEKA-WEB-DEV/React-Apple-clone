import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [youTubeVideos, setYoutubeVideos] = useState([]);
  // const apiKey = import.meta.env.VITE_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    fetch(
      // `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=${apiKey}`

      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCWnvIYOg32aV8AXwBtG9qXkNUk26XJoVM`
    )
      .then((res) => res.json())
      .then((data) => {
        setYoutubeVideos(data.items);
      })
      .catch((error) => console.error("Error fetching YouTube videos:", error));
  }, []);

  return (
    <div className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-12">
              <div className="title-wrapper">
                <h1>Youtube Videos</h1>
              </div>
            </div>

            {youTubeVideos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

              return (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank" rel="noreferrer">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
