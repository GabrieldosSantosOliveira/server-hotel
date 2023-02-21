import { RefreshTokenUseCase } from '@application/use-cases/auth/refresh-token';
import { RefreshTokenAuthGuard } from '@auth/guards/refresh-token.guard';
import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('auth')
export class RefreshTokenController {
  constructor(private readonly refreshTokenUseCase: RefreshTokenUseCase) {}
  @UseGuards(RefreshTokenAuthGuard)
  @Post('refresh-token')
  async refreshToken(@Req() req: Request) {
    return await this.refreshTokenUseCase.execute({ userId: req.user['sub'] });
  }
}
