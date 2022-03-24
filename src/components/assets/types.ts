export type ThemeType = {
  type?: string,
  background?: string,
  listBackground?: string,
  color?: string,
  hoverColor?: string,
  listHoverColor?: string,
  borderColor?: string,
}

export type StyledColorProps = {
  period: string
}

export type ComposerType = {
  id: string;
  birth: string;
  death: string;
  name: string;
  complete_name: string;
  epoch: string;
  portrait: string;
};

export type WorkType = {
  id: string
  genre: string,
  title: string,
  searchterms: string[]
}

export type RandomWorkType = {
  id: string,
  title: string,
  genre: string,
  composer: {
    id: string,
    name: string,
    complete_name: string,
    epoch: string
  }
}

export type SearchResultType = {
  composer: ComposerType,
  work: WorkType
}