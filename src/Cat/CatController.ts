import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ICatRepo } from '../Interfaces/ICatRepo';
import { CreateCatDto } from './Dto/CreateCatDto';

@Controller('/api/cat')
export class CatController {
  constructor(@Inject('ICatRepo') private readonly catRepo: ICatRepo) {}

  @Get()
  public async getAll(@Res() res: Response) {
    const cats = await this.catRepo.getAll();
    return res.status(HttpStatus.OK).json({
      cats,
    });
  }

  @Get(':id')
  public async getById(@Param('id') id: number, @Res() res: Response) {
    const cat = await this.catRepo.getById(id);
    return res.status(HttpStatus.OK).json({
      cat,
    });
  }

  @Post()
  public async create(@Body() dto: CreateCatDto, @Res() res: Response) {
    const cat = await this.catRepo.create(dto.cat);
    return res.status(HttpStatus.CREATED).json({
      cat,
    });
  }
}
