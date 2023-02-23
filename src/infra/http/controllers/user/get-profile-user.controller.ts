import { GetProfileUser } from '@application/use-cases/user/get-profile-user-use-case';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { UserViewModel } from '@infra/http/view-models/user-view-model';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class GetProfileUserController {
  constructor(private readonly getProfile: GetProfileUser) {}
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async execute(@Req() req: Request) {
    const user = await this.getProfile.execute({
      userId: req.user['sub'],
    });

    return UserViewModel.toHTTP(user);
  }
}
