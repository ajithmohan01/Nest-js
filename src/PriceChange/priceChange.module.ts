import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
    PriceChangeSchema,
    PriceChange,
} from 'src/schemas/PriceChange.schema';
import { PriceChangeController } from './priceChange.controller';
import { PriceChangeService } from './priceChange.service';



@Module({
    imports: [
        MongooseModule.forFeature([
            { name: PriceChange.name, schema: PriceChangeSchema },
        ]),
    ],
    controllers: [PriceChangeController],
    providers: [PriceChangeService],
})
export class PriceChangeModule { }