import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flights } from './flights.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flights)
    private readonly flightsRepository: Repository<Flights>,
  ) {}

  async findAll(): Promise<Flights[]> {
    return this.flightsRepository.find();
  }

  async getFilteredFlights(orig: string, dest: string): Promise<any> {
    return await this.flightsRepository.find({
      origin: orig,
      destination: dest,
    });
  }

  async addFlight(flight: Flights): Promise<any> {
    return await this.flightsRepository.save(flight);
    console.log("Test1");
  }
}
