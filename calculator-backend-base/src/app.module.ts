import { Module } from '@nestjs/common';
import { RpnCalculatorController } from './rpn-calculator.controller';

@Module({
  imports: [],
  controllers: [RpnCalculatorController],
  providers: [],
})
export class AppModule {}
