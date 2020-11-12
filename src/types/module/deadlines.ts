import { ILotteriesTypes } from './lotteries';

export type IDeadlines = {
  deadlines: IDeadline[];
  __typename: string;
};

export type IDeadline = {
  deadline: Date;
  jackpot: string;
  type: ILotteriesTypes;
  __typename: string;
};
