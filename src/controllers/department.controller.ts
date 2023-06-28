import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

// INTERNAL
import {
  department,
  ResGetDepartmentByIdDto,
} from '@/models/department.entity';
import { DepartmentService } from '@/services';

@ApiTags('Department')
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiResponse({ status: 404, description: 'Resource not found.' })
  async findAll(): Promise<department[]> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiResponse({ status: 404, description: 'Resource not found.' })
  async findOne(@Param('id') id: number): Promise<ResGetDepartmentByIdDto> {
    const data = this.departmentService.findOne(id);
    return data;
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() department: department): Promise<department> {
    return this.departmentService.create(department);
  }
}
