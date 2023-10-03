import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlockDailyService } from "./blockDaily.service";
import { BlockDailyControllerBase } from "./base/blockDaily.controller.base";

@swagger.ApiTags("blockDailies")
@common.Controller("blockDailies")
export class BlockDailyController extends BlockDailyControllerBase {
  constructor(
    protected readonly service: BlockDailyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
