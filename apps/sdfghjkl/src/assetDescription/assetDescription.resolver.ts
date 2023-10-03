import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssetDescriptionResolverBase } from "./base/assetDescription.resolver.base";
import { AssetDescription } from "./base/AssetDescription";
import { AssetDescriptionService } from "./assetDescription.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssetDescription)
export class AssetDescriptionResolver extends AssetDescriptionResolverBase {
  constructor(
    protected readonly service: AssetDescriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
