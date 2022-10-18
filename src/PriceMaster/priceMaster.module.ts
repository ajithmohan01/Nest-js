import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
    PriceVariationSchema,
    PriceVariation,
} from 'src/schemas/PriceVariation.schema';
import { PriceVariationController } from './PriceMaster.controller';
import { PriceVariationService } from './priceMaster.service';



@Module({
    imports: [
        MongooseModule.forFeature([
            { name: PriceVariation.name, schema: PriceVariationSchema },
        ]),
    ],
    controllers: [PriceVariationController],
    providers: [PriceVariationService],
})
export class PriceVariationModule { }