import { Module } from '@nestjs/common';
import { DonationsModule } from './donations/donations.module';

@Module({
  imports: [DonationsModule],
})
export class AppModule {}
