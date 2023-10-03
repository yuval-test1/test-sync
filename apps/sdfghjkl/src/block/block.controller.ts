import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlockService } from "./block.service";
import { BlockControllerBase } from "./base/block.controller.base";

@swagger.ApiTags("blocks")
@common.Controller("blocks")
export class BlockController extends BlockControllerBase {
  constructor(
    protected readonly service: BlockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
