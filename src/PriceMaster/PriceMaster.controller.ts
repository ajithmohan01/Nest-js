import { Controller, Get, Body, Param, Put } from '@nestjs/common';
import { PriceVariationService } from './priceMaster.service';
import { PriceVariation } from '../schemas/PriceVariation.schema';
import { PriceVariationDto } from "../dto/priceVariation.dto"


@Controller('PriceVariation')
export class PriceVariationController {
    constructor(private readonly PriceVariationService: PriceVariationService) { }

    // @Get()
    // async findAll(): Promise<PriceVariation[]> {
    //     return this.PriceVariationService.findAll();
    // }


    @Get()
    async datawithoutzero(): Promise<PriceVariation[]> {
        return await this.PriceVariationService.datawithoutzero();
    }

    @Put()
    async update(@Body() PriceVariationDto: PriceVariationDto) {
        return await this.PriceVariationService.update(PriceVariationDto);
    }


}