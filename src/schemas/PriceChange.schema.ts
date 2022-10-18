import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PriceChangeDocument = PriceChange & Document;

@Schema()
export class PriceChange {
    @Prop()
    _id: Types.ObjectId;

    @Prop()
    HistDate: string;

    @Prop()
    MasterSecID: number;

    @Prop()
    SecCode: string;

    @Prop()
    LocalPrice_Prior: number;

    @Prop()
    LocalPrice: number;

    @Prop()
    LocalPriceChange: number;

    @Prop()
    PctDiff: number;

    @Prop()
    number: string;

    @Prop()
    InvType: string;
}

export const PriceChangeSchema = SchemaFactory.createForClass(PriceChange);