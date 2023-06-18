import { Department } from '@/models/department.entity';
import { DepartmentService } from '@/services';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  async findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Department> {
    return this.departmentService.findOne(id);
  }

  @Post()
  async create(@Body() department: Department): Promise<Department> {
    return this.departmentService.create(department);
  }
}
