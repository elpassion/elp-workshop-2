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
  constructor() {}

  @Post('/calculate')
  @ApiCreatedResponse({ type: CalculationResponseDto })
  @ApiBadRequestResponse({ type: CalculationErrorResponseDto })
  async calculate(
    @Body() body: CalculationDto,
  ): Promise<CalculationResponseDto | CalculationErrorResponseDto> {
    try {
      return { result: (await rpn(body.calculation)).toString() };
    } catch (error) {
      throw new BadRequestException({ error: error.message });
    }
  }
}
