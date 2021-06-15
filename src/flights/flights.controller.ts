import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { Flights } from './flights.entity';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  findAll(): Promise<Flights[]> {
    return this.flightsService.findAll();
  }

  @Get('query/:orig/:dest')
  async findFilteredFlights(
    @Param('orig') orig: string,
    @Param('dest') dest: string,
  ): Promise<any> {
    return this.flightsService.getFilteredFlights(orig, dest);
  }

  @Post()
  async addFlight(@Body() flight: Flights): Promise<Flights[]> {
    return this.flightsService.addFlight(flight);
  }
}
