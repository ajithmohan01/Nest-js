import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
    PriceChange,
    PriceChangeDocument,
} from 'src/schemas/PriceChange.schema';
import { PriceChangeDto } from '../dto/priceChange.dto'

@Injectable()
export class PriceChangeService {
    constructor(
        @InjectModel(PriceChange.name)
        private readonly priceChangeModel: Model<PriceChangeDocument>,
    ) { }

    //To find All data

    async findAll(): Promise<PriceChange[]> {
        return this.priceChangeModel.find().exec();
        
    }

    //To find data which is above the specified no in search box

    async sort(number: number): Promise<PriceChange[]> {
        return this.priceChangeModel.find({ PctDiff: { $gte: number } }).exec();
    }



    // while approveing 

    async update(PriceChangeDto: PriceChangeDto) {
        
        const ids: string[] = PriceChangeDto?.ids;
        const changedData = [];
        for (let i = 0; i < ids.length; i++) {
            const objectId = new Types.ObjectId(ids[i]);
            const data = await this.priceChangeModel.findById(objectId).exec();
            const Approvedchanges = await this.priceChangeModel.findByIdAndUpdate(
                objectId,
                {
                    $set: {
                        LocalPrice_Prior: data.LocalPrice,
                        PctDiff: 0,
                    },
                },
                { new: true },
            );
            changedData.push(Approvedchanges)
           
        }
        return changedData
        
    }
    
}
