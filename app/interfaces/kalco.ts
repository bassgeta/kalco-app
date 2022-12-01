export interface KalcoRecenzija {
  naslou: string;
  besedilo: string;
  ocena: number;
}

export interface Kalco {
  id: string;
  bar: string;
  linkDoSlike: string | null;
  ocena: number;
  dzabe: {
    je: boolean;
    confirmed: boolean;
  };
  zihr: boolean;
  zemljevidPovezava: string;
  lat: number;
  lng: number;
  recenzije: KalcoRecenzija[];
}
