import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PriceVariationDocument = PriceVariation & Document;

@Schema()
export class PriceVariation {
    @Prop()
    PMtoBBGDiff: number;

    @Prop()
    FlextoBBGDiff: number;

    @Prop()
    PomotoBBGDiff: number;

    @Prop()
    _id: Types.ObjectId;

    @Prop()
    Price: number;

    @Prop()
    Price_Local_PM: number;

    @Prop()
    Price_Local_FlexONE: number;

    @Prop()
    Price_Local_Pomo: number;
}

export const PriceVariationSchema =
    SchemaFactory.createForClass(PriceVariation);
