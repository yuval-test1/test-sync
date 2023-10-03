import { Block } from "../block/Block";
import { Transaction } from "../transaction/Transaction";

export type BlockTransaction = {
  block?: Block;
  index: number | null;
  transaction?: Transaction;
  id: string;
};
