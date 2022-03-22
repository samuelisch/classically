import { useEffect, useState } from "react";
import styled from "styled-components";

export type WorkType = {
  id: string, // id
  albumName: string, // album.name
  albumLink: string, // album.external_urls.spotify
  albumImg: string, // album.images[2]
  trackLink: string, //external_urls.spotify
  trackName: string, // name
  previewSound: string, // preview_url
}

const StyledContainer = styled.div`
  padding: 10px;
  margin-left: 5px;
  border-bottom: 1px solid rgb(200, 200, 200);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledImgContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`

const StyledDetails = styled.div`
  display: flex;

  .albumName {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .trackName {
    font-size: 1.1rem;
  }
`

const StyledPreview = styled.div`
  
`

const Recording = ({ albumName, albumLink, albumImg, trackLink, trackName, previewSound }: WorkType) => {
  const [audio, setAudio] = useState(new Audio());
  const [audioPlaying, setAudioPlaying] = useState(false);

  const toggleAudio = () => {
    setAudioPlaying(!audioPlaying);
  }

  useEffect(() => {
    if (previewSound) {
      setAudio(new Audio(previewSound))
    }
  }, [previewSound])

  useEffect(() => {
    audioPlaying ? audio.play() : audio.pause();
    },
    [audioPlaying]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setAudioPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setAudioPlaying(false));
    };
  }, []);

  return (
    <StyledContainer>
      <StyledDetails>
      <StyledImgContainer>
        <img src={albumImg} alt="" />
      </StyledImgContainer>
        <div className="titles">
          <p className='albumName'>{albumName}</p>
          <p className='trackName'>{trackName}</p>
        </div>
      </StyledDetails>
      {previewSound &&
        <StyledPreview>
          <button type="button" onClick={toggleAudio}>{audioPlaying ? "Pause" : "Play"}</button>
        </StyledPreview>
      }
    </StyledContainer>
  )
}

export default Recording
