import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlockTransactionService } from "./blockTransaction.service";
import { BlockTransactionControllerBase } from "./base/blockTransaction.controller.base";

@swagger.ApiTags("blockTransactions")
@common.Controller("blockTransactions")
export class BlockTransactionController extends BlockTransactionControllerBase {
  constructor(
    protected readonly service: BlockTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
