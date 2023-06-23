import { Department } from '@/models/department.entity';
import { DepartmentService, EmployeeService } from '@/services';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('department')
export class DepartmentController {
  constructor(
    private readonly departmentService: DepartmentService,
    private readonly employeeService: EmployeeService,
  ) {}

  @Get()
  async findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Department> {
    const data = this.departmentService.findOne(id);
    (await data).childs = [].concat(
      await this.employeeService.findEmployeesByDepartmentId(id),
      await this.departmentService.findChildDepartments(id),
    );
    return data;
  }

  @Post()
  async create(@Body() department: Department): Promise<Department> {
    return this.departmentService.create(department);
  }
}
