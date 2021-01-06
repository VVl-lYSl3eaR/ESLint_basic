export type aniTitle = string;
export type episode = number;
export type site = string;
export type CTYPE = 'DIRECT' | 'NAVER' | 'TSTORY';

export interface animeInfo {
  T: aniTitle,
  A: episode,
  B: site,
  C: CTYPE,
}

export interface apiStruct {
  RESULT: null | Array<animeInfo>,
}
