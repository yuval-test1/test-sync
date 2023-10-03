import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlockDailyModuleBase } from "./base/blockDaily.module.base";
import { BlockDailyService } from "./blockDaily.service";
import { BlockDailyController } from "./blockDaily.controller";
import { BlockDailyResolver } from "./blockDaily.resolver";

@Module({
  imports: [BlockDailyModuleBase, forwardRef(() => AuthModule)],
  controllers: [BlockDailyController],
  providers: [BlockDailyService, BlockDailyResolver],
  exports: [BlockDailyService],
})
export class BlockDailyModule {}
