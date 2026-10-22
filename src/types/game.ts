export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export interface Position {
  x: number;
  y: number;
}

export type TileType = 
  | 'grass' 
  | 'path' 
  | 'bamboo' 
  | 'tree' 
  | 'river' 
  | 'bridge' 
  | 'stone' 
  | 'gapura_entrance' 
  | 'gapura_exit'
  | 'moss_ruins';

export type ObstacleType = 
  | 'nyamuk_raksasa' 
  | 'ular_berbisa' 
  | 'monster_sampah' 
  | 'ranting_duri' 
  | 'tebing_curam' 
  | 'sungai_deras' 
  | 'batu_candi';

export type ItemType = 
  | 'feather_key' 
  | 'mitella' 
  | 'bidai' 
  | 'kassa' 
  | 'antiseptik'
  | 'tandu';

export interface ObstacleEncounter {
  id: string;
  x: number;
  y: number;
  type: ObstacleType;
  name: string;
  description: string;
  questionId: string;
  defeated: boolean;
  rewardScore: number;
  rewardItem?: ItemType;
}

export interface ItemCollectible {
  id: string;
  x: number;
  y: number;
  type: ItemType;
  name: string;
  collected: boolean;
}

export interface PPQuestion {
  id: string;
  category: 'Dasar P3K & APD' | 'Luka & Pendarahan' | 'Patah Tulang & Bidai' | 'Pingsan & Syok' | 'Gigitan Ular & Rimba' | 'Evakuasi & Tandu';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  modulReference: string;
  damageOnFail: number;
}

export interface LevelData {
  id: number;
  title: string;
  subtitle: string;
  zoneName: string;
  themeColor: string;
  gridWidth: number;
  gridHeight: number;
  tiles: TileType[][];
  playerStart: Position;
  exitGapura: Position;
  featherKeyPosition: Position;
  obstacles: ObstacleEncounter[];
  items: ItemCollectible[];
  missionBrief: string;
  learningTopic: string;
}

export type GameScreen = 
  | 'TITLE' 
  | 'PLAYING' 
  | 'QUIZ' 
  | 'FEATHER_FOUND' 
  | 'LEVEL_CLEARED' 
  | 'GAME_OVER' 
  | 'ALL_CLEARED' 
  | 'POCKETBOOK' 
  | 'CERTIFICATE';

export interface CadetProfile {
  name: string;
  gender: 'putra' | 'putri';
  contingent: string;
  school: string;
}
