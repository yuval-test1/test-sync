import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FaucetTransactionModuleBase } from "./base/faucetTransaction.module.base";
import { FaucetTransactionService } from "./faucetTransaction.service";
import { FaucetTransactionController } from "./faucetTransaction.controller";
import { FaucetTransactionResolver } from "./faucetTransaction.resolver";

@Module({
  imports: [FaucetTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [FaucetTransactionController],
  providers: [FaucetTransactionService, FaucetTransactionResolver],
  exports: [FaucetTransactionService],
})
export class FaucetTransactionModule {}
