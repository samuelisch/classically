import { useEffect, useState } from "react";
import { ReactComponent as PlayButton } from '../assets/playButton.svg'
import { ReactComponent as PauseButton} from '../assets/pauseButton.svg'
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

const StyledElement = styled.li`
  background: rgb(220, 220, 220);
  transition: background .1s;

  &:hover {
    background: rgb(200, 200, 200);
    cursor: pointer;
  }
`

const StyledContainer = styled.div`
  padding: 10px;
  margin-left: 5px;
  border-bottom: 1px solid rgb(180, 180, 180);
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: rgb(20, 20, 20);
    text-decoration: none;
  }
`

const StyledImgContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 10px;
  transition: box-shadow .2s;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    box-shadow: 2px 2px 2px rgb(120, 120, 120);
  }
`

const StyledDetails = styled.div`
  display: flex;
  padding: 0 5px;

  .albumName {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .trackName {
    font-size: 1.1rem;
  }
`

const StyledPreview = styled.div`
  margin: 0 10px;

  button {
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
    border: none;
    background: inherit;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }
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
    [audioPlaying, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setAudioPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setAudioPlaying(false));
    };
  }, [audio]);

  return (
    <StyledElement>
        <StyledContainer>
          <StyledDetails>
          <a href={albumLink} target="_blank" rel='noopener noreferrer'>
          <StyledImgContainer>
            <img src={albumImg} alt="" />
          </StyledImgContainer>
          </a>
          <a href={trackLink} target="_blank" rel="noopener noreferrer">
            <div className="titles">
              <p className='albumName'>{albumName}</p>
              <p className='trackName'>{trackName}</p>
            </div>
          </a>
          </StyledDetails>
          {previewSound &&
            <StyledPreview>
              <button type="button" onClick={toggleAudio}>
                {audioPlaying ? <PauseButton /> : <PlayButton />}
              </button>
            </StyledPreview>
          }
        </StyledContainer>
    </StyledElement>
  )
}

export default Recording
