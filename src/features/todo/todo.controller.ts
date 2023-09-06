import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('todos')
export class TodoController {
  public data: any[] = [];

  @Get()
  getTodos(
    @Query('pageNumber') pageNumber?: number,
    @Query('pageSize') pageSize?: number,
  ) {
    const skipNum = Number(pageNumber);
    const limitNum = Number(pageSize);
    if (!skipNum || !limitNum) return this.data;
    return this.data.slice(skipNum, limitNum + skipNum);
  }

  @Get()
  getTodo() {}

  @Post()
  createTodo(@Body() data: unknown) {
    this.data.push(data);
    return data;
  }

  @Put()
  updateTodo() {}

  @Delete()
  deleteTodo() {}
}
