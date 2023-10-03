import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlockTransactionModuleBase } from "./base/blockTransaction.module.base";
import { BlockTransactionService } from "./blockTransaction.service";
import { BlockTransactionController } from "./blockTransaction.controller";
import { BlockTransactionResolver } from "./blockTransaction.resolver";

@Module({
  imports: [BlockTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [BlockTransactionController],
  providers: [BlockTransactionService, BlockTransactionResolver],
  exports: [BlockTransactionService],
})
export class BlockTransactionModule {}
