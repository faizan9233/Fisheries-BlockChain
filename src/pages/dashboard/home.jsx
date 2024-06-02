import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";
import { statisticsCardsData } from "@/data";

export function Home() {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    "https://www.youtube.com/watch?v=jMzj7cWO9bU",
    "https://www.youtube.com/watch?v=IMJbXUARjF8",
    "https://www.youtube.com/watch?v=2pHilIs1x_Q",
    "https://www.youtube.com/watch?v=eNSQimImCeQ",
  ];
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current && playerRef.current.getInternalPlayer()) {
      playerRef.current.seekTo(0);
      playerRef.current.getInternalPlayer().playVideo();
    }
  }, [playerRef.current]); 
  

  const handleVideoEnded = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };

  const handleCardClick = (title) => {
    console.log("Card clicked:", title);
    const formattedTitle = title.replace(/\s/g, '-').toLowerCase(); 
    navigate(`/all/${formattedTitle}`);
  };
  

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
      <div className="mb-12">
        <Card>
          <CardHeader color="blue" className="relative h-[500px]">
            <ReactPlayer
              ref={playerRef}
              url={videos[currentVideoIndex]}
              width="100%"
              height="100%"
              controls={true}
              playing={true} 
              preload={true}
              muted={true}
              onEnded={handleVideoEnded}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Project Overview
            </Typography>
            <Typography>
              Here is a detailed overview of our recent projects. The videos
              provide in-depth insights and walkthroughs.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
