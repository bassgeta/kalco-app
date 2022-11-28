export interface KalcoEntry {
  bar: string;
  linkDoSlike: string | null;
  ocena: number;
  dzabe: {
    je: boolean;
    confirmed: boolean;
  };
  obstoj: 'zihr' | 'nezihr';
  mapsLink: string;
  lat: number;
  lng: number;
  notes: Array<{ naslou: string; besedilo: string }>;
}
