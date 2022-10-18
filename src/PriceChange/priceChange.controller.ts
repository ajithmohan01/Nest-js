import { Controller, Get, Body, Param, Put } from '@nestjs/common';
import { PriceChangeService } from './priceChange.service';
import { PriceChange } from '../schemas/PriceChange.schema';
import {PriceChangeDto} from '../dto/priceChange.dto'


@Controller('priceChange')
export class PriceChangeController {
    constructor(private readonly priceChangeService: PriceChangeService) { }

    @Get()
    async findAll(): Promise<PriceChange[]> {
        return this.priceChangeService.findAll();
    }

    @Get(':number')
    async sort(@Param('number') number: number): Promise<PriceChange[]> {     
        return this.priceChangeService.sort(number);
    }


    @Put()
    async update(@Body() PriceChangeDto: PriceChangeDto) {
        return this.priceChangeService.update(PriceChangeDto);
    }


}