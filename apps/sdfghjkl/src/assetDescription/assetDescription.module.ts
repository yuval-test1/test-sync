import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssetDescriptionModuleBase } from "./base/assetDescription.module.base";
import { AssetDescriptionService } from "./assetDescription.service";
import { AssetDescriptionController } from "./assetDescription.controller";
import { AssetDescriptionResolver } from "./assetDescription.resolver";

@Module({
  imports: [AssetDescriptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssetDescriptionController],
  providers: [AssetDescriptionService, AssetDescriptionResolver],
  exports: [AssetDescriptionService],
})
export class AssetDescriptionModule {}
