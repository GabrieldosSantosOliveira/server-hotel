import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/Create-user';
import { CreateUserBodyGoogleProvider } from 'src/infra/dtos/create-user-body-google-provider';

import { UserViewModel } from '../view-models/user-view-model';

@Controller('user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}
  @Post()
  async createUser(@Body() body: CreateUserBodyGoogleProvider) {
    const user = await this.createUserUseCase.execute(body.access_token);
    return UserViewModel.toHTTP(user);
  }
}
