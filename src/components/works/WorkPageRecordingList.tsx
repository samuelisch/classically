import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import spotifyCall from "../../apiCalls/spotifyCall";
import { ComposerType } from "../../reducers/composersSlice";
import { ThemeContext } from "../../ThemeContextWrapper";
import Recording, { RecordingPropsType } from "./Recording";
import { WorkType } from "./WorkPage";

type PropTypes = {
  selectedComposer: ComposerType;
  work: WorkType;
};

const StyledEmpty = styled.div`
  font-size: 2rem;
  text-align: center;
  color: ${props => props.theme.color};
`

const StyledList = styled.ul`
  border-top: 1px solid rgb(150, 150, 150);
  border-bottom: 1px solid rgb(150, 150, 150);
`;

const WorkPageRecordingList = ({ selectedComposer, work }: PropTypes) => {
  const { theme } = useContext(ThemeContext)
  const [workTracks, setWorkTracks] = useState<RecordingPropsType[]>([]);
  const [loaded, setLoaded] = useState(false);

  const normalizeString = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  useEffect(() => {
    let mounted = true;
    if (selectedComposer.name.length && work) {
      spotifyCall
        .searchTrack(encodeURIComponent(normalizeString(selectedComposer.complete_name)) , encodeURIComponent(normalizeString(work.searchterms[0])))
        .then((response) => {
          if (mounted) {
            const tracks = response.tracks.items;
            const formattedTracks = tracks.map((track: any): RecordingPropsType => {
              return {
                id: track.id,
                albumName: track.album.name,
                albumLink: track.album.external_urls.spotify,
                albumImg: track.album.images[2].url,
                trackLink: track.external_urls.spotify,
                trackName: track.name,
                previewSound: track.preview_url,
              };
            });
            setWorkTracks(formattedTracks);
            setLoaded(true) 
        }
      })
      .catch(err => {
        console.error(err)
      })
    }

    return () => {
      mounted = false;
    }
  }, [selectedComposer, work]);

  const sortedTracks = workTracks.sort((a, b) => b.previewSound ? 1 : -1)

  const allTracks = sortedTracks.map((track: RecordingPropsType) => (
    <Recording
      key={track.id}
      id={track.id}
      albumName={track.albumName}
      albumLink={track.albumLink}
      albumImg={track.albumImg}
      trackLink={track.trackLink}
      trackName={track.trackName}
      previewSound={track.previewSound}
    />
  ));

  if (!loaded) {
    return <h1>Loading ...</h1>
  }

  if (!sortedTracks.length) {
    return <StyledEmpty theme={theme}><span>No tracks available :(</span></StyledEmpty>
  } else {
    return <StyledList>{allTracks}</StyledList>;
  }
};

export default WorkPageRecordingList;
