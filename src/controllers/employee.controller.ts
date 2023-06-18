import { Employee } from '@/models/employee.entity';
import { EmployeeService } from '@/services/employee.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Post()
  async create(@Body() Employee: Employee): Promise<Employee> {
    return this.employeeService.create(Employee);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() employee: Employee,
  ): Promise<Employee> {
    return this.employeeService.update(id, employee);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.employeeService.delete(id);
  }
}
