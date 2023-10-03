import { BlockWhereUniqueInput } from "../block/BlockWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BlockTransactionWhereInput = {
  block?: BlockWhereUniqueInput;
  index?: IntNullableFilter;
  transaction?: TransactionWhereUniqueInput;
  id?: StringFilter;
};
