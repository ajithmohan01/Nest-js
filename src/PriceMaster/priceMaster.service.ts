import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
    PriceVariation,
    PriceVariationDocument,
} from 'src/schemas/PriceVariation.schema';

import { PriceVariationDto } from "../dto/priceVariation.dto"

@Injectable()
export class PriceVariationService {
    constructor(
        @InjectModel(PriceVariation.name)
        private readonly priceVariationModel: Model<PriceVariationDocument>,
    ) { }

    // async findAll(): Promise<PriceVariation[]> {
    //     return this.priceVariationModel.find().exec();
    // }

    async datawithoutzero(): Promise<PriceVariation[]> {
        return this.priceVariationModel
            .find({
                $or: [
                    { PMtoBBGDiff: { $ne: 0 } },
                    { FlextoBBGDiff: { $ne: 0 } },
                    { PomotoBBGDiff: { $ne: 0 } },
                ],
            })
            .exec();
    }

    async update(PriceVariationDto: PriceVariationDto) {
        const ids: string[] = PriceVariationDto?.ids;
        const changedData = [];
        for (let i = 0; i < ids.length; i++) {
            const objectId = new Types.ObjectId(ids[i]);
            const data = await this.priceVariationModel.findById(objectId).exec();
            const Approvedchanges = await this.priceVariationModel.findByIdAndUpdate(
                objectId,
                {
                    $set: {
                        Price_Local_PM: data.Price,
                        Price_Local_FlexONE: data.Price,
                        Price_Local_Pomo: data.Price,
                        PMtoBBGDiff: 0,
                        FlextoBBGDiff: 0,
                        PomotoBBGDiff: 0,
                    },
                },

            );
            changedData.push(Approvedchanges)
        }
        return changedData
    }

}