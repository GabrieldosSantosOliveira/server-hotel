import { CreateStill } from '@application/use-cases/still/create-still';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import {
  CreateStillBodyDto,
  ValidateBody,
} from '@infra/dtos/still/create-still-body.dto';
import { StillViewModel } from '@infra/http/view-models/still-view-model';
import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  Req,
  UseGuards,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { extension } from 'mime-types';
@Controller('still')
export class CreateStillController {
  constructor(private readonly createStill: CreateStill) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async execute(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Req() req: Request,
    @Body() body: CreateStillBodyDto,
  ) {
    const { address, facilities, still } = await new ValidateBody(
      body.body,
    ).getBody();
    files.map((file) => {
      const type = extension(file.mimetype);
      const conditions = ['png', 'jpg', 'jpeg'];
      if (1024 * 1024 * 7 < file.size) {
        throw new HttpException(
          'Invalid image is very large',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
      if (conditions.includes(`${type}`)) {
        return file;
      }
      throw new HttpException(
        'Invalid type image',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    });

    const { newStill } = await this.createStill.execute({
      address,
      facilities,
      images: files.map((file) => {
        return { buffer: file.buffer, fileName: file.originalname };
      }),
      ownerId: req.user['sub'],
      still: still,
    });
    return StillViewModel.toHTTP(newStill);
  }
}
