/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsBoolean,
  IsInt,
  IsDate,
  IsOptional,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";
import { BlockTransactionCreateNestedManyWithoutBlocksInput } from "./BlockTransactionCreateNestedManyWithoutBlocksInput";

@InputType()
class BlockCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  hash!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  main!: boolean;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  networkVersion!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  transactionsCount!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  timestamp!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  graffiti!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  size?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  difficulty?: Decimal | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  timeSinceLastBlockMs?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  work?: Decimal | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  sequence!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  previousBlockHash!: string;

  @ApiProperty({
    required: false,
    type: () => BlockTransactionCreateNestedManyWithoutBlocksInput,
  })
  @ValidateNested()
  @Type(() => BlockTransactionCreateNestedManyWithoutBlocksInput)
  @IsOptional()
  @Field(() => BlockTransactionCreateNestedManyWithoutBlocksInput, {
    nullable: true,
  })
  blocksTransactions?: BlockTransactionCreateNestedManyWithoutBlocksInput;
}

export { BlockCreateInput as BlockCreateInput };
