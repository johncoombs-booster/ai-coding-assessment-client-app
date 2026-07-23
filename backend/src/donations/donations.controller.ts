import { Controller, Get, Query } from '@nestjs/common';
import { DonationsService, FilterDonationsDto } from './donations.service';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Get()
  findAll(@Query() filters: FilterDonationsDto) {
    return this.donationsService.findAll(filters);
  }
}
