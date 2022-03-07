import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { CalculationError } from './calculation.error';

export class CalculationDto {
  @ApiProperty({ example: '1 1 +' })
  calculation: string;
}

export class CalculationResponseDto {
  @ApiResponseProperty({ example: '2' })
  result: string;
}

export class CalculationErrorResponseDto {
  @ApiResponseProperty({ enum: CalculationError })
  error: 'Invalid expression' | 'Not enough operands';
}
