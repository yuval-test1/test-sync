/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateBlockTransactionArgs } from "./CreateBlockTransactionArgs";
import { UpdateBlockTransactionArgs } from "./UpdateBlockTransactionArgs";
import { DeleteBlockTransactionArgs } from "./DeleteBlockTransactionArgs";
import { BlockTransactionCountArgs } from "./BlockTransactionCountArgs";
import { BlockTransactionFindManyArgs } from "./BlockTransactionFindManyArgs";
import { BlockTransactionFindUniqueArgs } from "./BlockTransactionFindUniqueArgs";
import { BlockTransaction } from "./BlockTransaction";
import { Block } from "../../block/base/Block";
import { Transaction } from "../../transaction/base/Transaction";
import { BlockTransactionService } from "../blockTransaction.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BlockTransaction)
export class BlockTransactionResolverBase {
  constructor(
    protected readonly service: BlockTransactionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BlockTransaction",
    action: "read",
    possession: "any",
  })
  async _blockTransactionsMeta(
    @graphql.Args() args: BlockTransactionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BlockTransaction])
  @nestAccessControl.UseRoles({
    resource: "BlockTransaction",
    action: "read",
    possession: "any",
  })
  async blockTransactions(
    @graphql.Args() args: BlockTransactionFindManyArgs
  ): Promise<BlockTransaction[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BlockTransaction, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BlockTransaction",
    action: "read",
    possession: "own",
  })
  async blockTransaction(
    @graphql.Args() args: BlockTransactionFindUniqueArgs
  ): Promise<BlockTransaction | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BlockTransaction)
  @nestAccessControl.UseRoles({
    resource: "BlockTransaction",
    action: "create",
    possession: "any",
  })
  async createBlockTransaction(
    @graphql.Args() args: CreateBlockTransactionArgs
  ): Promise<BlockTransaction> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        block: {
          connect: args.data.block,
        },

        transaction: {
          connect: args.data.transaction,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BlockTransaction)
  @nestAccessControl.UseRoles({
    resource: "BlockTransaction",
    action: "update",
    possession: "any",
  })
  async updateBlockTransaction(
    @graphql.Args() args: UpdateBlockTransactionArgs
  ): Promise<BlockTransaction | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          block: {
            connect: args.data.block,
          },

          transaction: {
            connect: args.data.transaction,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BlockTransaction)
  @nestAccessControl.UseRoles({
    resource: "BlockTransaction",
    action: "delete",
    possession: "any",
  })
  async deleteBlockTransaction(
    @graphql.Args() args: DeleteBlockTransactionArgs
  ): Promise<BlockTransaction | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Block, {
    nullable: true,
    name: "block",
  })
  @nestAccessControl.UseRoles({
    resource: "Block",
    action: "read",
    possession: "any",
  })
  async resolveFieldBlock(
    @graphql.Parent() parent: BlockTransaction
  ): Promise<Block | null> {
    const result = await this.service.getBlock(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Transaction, {
    nullable: true,
    name: "transaction",
  })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async resolveFieldTransaction(
    @graphql.Parent() parent: BlockTransaction
  ): Promise<Transaction | null> {
    const result = await this.service.getTransaction(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
