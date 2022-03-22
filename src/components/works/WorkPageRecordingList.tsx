import { useEffect, useState } from "react";
import styled from "styled-components";
import spotifyCall from "../../apiCalls/spotifyCall";
import { ComposerType } from "../../reducers/composersSlice";
import Recording, { WorkType } from "./Recording";

type PropTypes = {
  selectedComposer: ComposerType;
  title: string;
};

const StyledEmpty = styled.div`
  font-size: 2rem;
  text-align: center;
`

const StyledList = styled.ul`
  border-top: 1px solid rgb(150, 150, 150);
  border-bottom: 1px solid rgb(150, 150, 150);
`;

const WorkPageRecordingList = ({ selectedComposer, title }: PropTypes) => {
  const [workTracks, setWorkTracks] = useState<WorkType[]>([]);
  const [loaded, setLoaded] = useState(false);

  const normalizeString = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  useEffect(() => {
    if (selectedComposer.name.length && title) {
      spotifyCall
        .searchTrack(encodeURIComponent(normalizeString(title)))
        .then((response) => {
          const tracks = response.tracks.items;
          const formattedTracks = tracks.map((track: any): WorkType => {
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
        });
    }
  }, [selectedComposer, title]);

  const filteredTracks = workTracks.filter((track: WorkType) => {
    const normalizedTitle = normalizeString(title)
    return (
      track.trackName.includes(normalizedTitle.split(" ")[0].replace(/\W/g, '')) ||
      track.albumName.includes(normalizedTitle.split(" ")[0].replace(/\W/g, ''))
    );
  });

  const sortedTracks = filteredTracks.sort((a, b) => b.previewSound ? 1 : -1)

  const allTracks = sortedTracks.map((track: WorkType) => (
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
    return <StyledEmpty><span>No tracks available :(</span></StyledEmpty>
  } else {
    return <StyledList>{allTracks}</StyledList>;
  }
};

export default WorkPageRecordingList;
