import { Block as TBlock } from "../api/block/Block";

export const BLOCK_TITLE_FIELD = "hash";

export const BlockTitle = (record: TBlock): string => {
  return record.hash?.toString() || String(record.id);
};
