import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RpnCalculatorController } from './rpn-calculator.controller';

@Module({
  imports: [HttpModule],
  controllers: [RpnCalculatorController],
  providers: [],
})
export class AppModule {}
