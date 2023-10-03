import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BlockTransactionResolverBase } from "./base/blockTransaction.resolver.base";
import { BlockTransaction } from "./base/BlockTransaction";
import { BlockTransactionService } from "./blockTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BlockTransaction)
export class BlockTransactionResolver extends BlockTransactionResolverBase {
  constructor(
    protected readonly service: BlockTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
