import { RefreshToken } from '@application/use-cases/auth/refresh-token';
import { RefreshTokenAuthGuard } from '@auth/guards/refresh-token.guard';
import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('auth')
export class RefreshTokenController {
  constructor(private readonly refreshToken: RefreshToken) {}
  @UseGuards(RefreshTokenAuthGuard)
  @Post('refresh-token')
  async execute(@Req() req: Request) {
    return await this.refreshToken.execute({ userId: req.user['sub'] });
  }
}
