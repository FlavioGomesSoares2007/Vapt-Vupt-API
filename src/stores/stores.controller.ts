import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresDto } from './dto/Stores.dto';
import { request } from 'http';
import { AuthGuard } from '../auth/auth.guard';

@Controller('stores')
export class StoresController {
  constructor(private readonly StoresServices: StoresService) {}

  @Post()
  async create(@Body() dados: StoresDto) {
    return await this.StoresServices.create(dados);
  }

  @UseGuards(AuthGuard)
  @Get()
  async seeData(@Req() request) {
    return await this.StoresServices.seeData(request.user.sub);
  }
}
