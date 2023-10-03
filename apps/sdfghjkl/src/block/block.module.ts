import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlockModuleBase } from "./base/block.module.base";
import { BlockService } from "./block.service";
import { BlockController } from "./block.controller";
import { BlockResolver } from "./block.resolver";

@Module({
  imports: [BlockModuleBase, forwardRef(() => AuthModule)],
  controllers: [BlockController],
  providers: [BlockService, BlockResolver],
  exports: [BlockService],
})
export class BlockModule {}
