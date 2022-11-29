export interface KalcoRating {
  naslou: string;
  besedilo: string;
  ocena: number;
}

export interface KalcoEntry {
  bar: string;
  linkDoSlike: string | null;
  ocena: number;
  dzabe: {
    je: boolean;
    confirmed: boolean;
  };
  zihr: boolean;
  mapsLink: string;
  lat: number;
  lng: number;
  ratings: KalcoRating[];
}
