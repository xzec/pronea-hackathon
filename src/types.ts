import { Q_TYPE } from './constants';

export type QType = keyof typeof Q_TYPE;

export interface IOption {
  value: string;
  correct: boolean;
}

export interface IQuestion {
  title: string;
  type: QType;
  options?: IOption[];
  answer?: string;
  points?: number;
}
