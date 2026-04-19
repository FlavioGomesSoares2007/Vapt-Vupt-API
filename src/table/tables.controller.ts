import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TablesService } from './tables.service';
import { AuthGuard } from '../auth/auth.guard';
import { TablesCreateDto } from './dto/TablesCreateDto';
import { TablesUpdateDto } from './dto/TablesUpdateDto';

@UseGuards(AuthGuard)
@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Post()
  async create(@Body() dados: TablesCreateDto, @Req() request) {
    return await this.tablesService.create(dados, request.user.sub);
  }
  @Get()
  async findAll(@Req() request) {
    return await this.tablesService.findAll(request.user.sub);
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id_table: number, @Req() request) {
    return await this.tablesService.find(request.user.sub, id_table);
  }
  @Patch(':id')
  async update(
    @Body() dados: TablesUpdateDto,
    @Req() request,
    @Param('id', ParseIntPipe) id_table: number,
  ) {
    return await this.tablesService.update(dados, request.user.sub, id_table);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id_table: number, @Req() request) {
    return await this.tablesService.delete(request.user.sub, id_table);
  }
}