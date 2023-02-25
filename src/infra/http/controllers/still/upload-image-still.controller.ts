import { UploadImageStill } from '@application/use-cases/still/upload-image-still';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('still')
export class UploadImageStillController {
  constructor(private readonly uploadImageStill: UploadImageStill) {}
  @Post(':stillId')
  @UseInterceptors(FileInterceptor('file'))
  async execute(
    @Param('stillId') stillId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.uploadImageStill.execute({
      buffer: file.buffer,
      fileName: file.originalname,
      stillId,
    });
  }
}
