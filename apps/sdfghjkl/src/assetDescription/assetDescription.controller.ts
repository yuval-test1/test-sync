import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssetDescriptionService } from "./assetDescription.service";
import { AssetDescriptionControllerBase } from "./base/assetDescription.controller.base";

@swagger.ApiTags("assetDescriptions")
@common.Controller("assetDescriptions")
export class AssetDescriptionController extends AssetDescriptionControllerBase {
  constructor(
    protected readonly service: AssetDescriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
