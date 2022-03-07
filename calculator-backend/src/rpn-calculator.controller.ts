import { HttpService } from '@nestjs/axios';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CalculationDto,
  CalculationErrorResponseDto,
  CalculationResponseDto,
} from './calculation.dto';
import { rpn } from './rpn-calculator';

@ApiTags('Rpn Calculator')
@Controller('/rpn')
export class RpnCalculatorController {
  constructor(private readonly httpService: HttpService) {}

  @Post('/calculate')
  @ApiCreatedResponse({ type: CalculationResponseDto })
  @ApiBadRequestResponse({ type: CalculationErrorResponseDto })
  async calculate(
    @Body() body: CalculationDto,
  ): Promise<CalculationResponseDto | CalculationErrorResponseDto> {
    try {
      const {
        data: { result },
      } = await this.httpService
        .post('http://localhost:3002/rpn/calculate', body)
        .toPromise();
      return { result };
    } catch (e) {
      throw new BadRequestException({ error: 'Invalid Expression Error' });
    }
  }
}
