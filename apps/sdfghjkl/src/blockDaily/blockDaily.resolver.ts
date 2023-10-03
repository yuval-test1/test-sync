import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BlockDailyResolverBase } from "./base/blockDaily.resolver.base";
import { BlockDaily } from "./base/BlockDaily";
import { BlockDailyService } from "./blockDaily.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BlockDaily)
export class BlockDailyResolver extends BlockDailyResolverBase {
  constructor(
    protected readonly service: BlockDailyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
