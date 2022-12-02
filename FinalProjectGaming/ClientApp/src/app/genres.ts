export interface genres {
    count:    number;
    results:  Result[];
}

export interface Result {
    id:              number;
    name:            string;
    slug:            string;
    gamesCount:      number;
    imageBackground: string;
    games:           Game[];
}

export interface Game {
    id:    number;
    slug:  string;
    name:  string;
    added: number;
}
