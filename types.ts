export interface TimeState {
  date: Date;
  synced: boolean;
  offset: number;
}

export enum DisplayMode {
  DEFAULT = 'DEFAULT',
  MINIMAL = 'MINIMAL',
  FULL = 'FULL'
}