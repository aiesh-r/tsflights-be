import { Controller, Get, Req } from '@nestjs/common';
import { Flights } from './flights.entity';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  findAll(): Promise<Flights[]> {
    return this.flightsService.findAll();
  }
}
