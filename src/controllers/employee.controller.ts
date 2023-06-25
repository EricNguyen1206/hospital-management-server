import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// INTERNAL
import { Employee } from '@/models/employee.entity';
import { EmployeeService } from '@/services/employee.service';

@Controller('employee')
@ApiTags('Employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Post()
  async create(@Body() Employee: Employee): Promise<Employee> {
    return this.employeeService.create(Employee);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() employee: Employee,
  ): Promise<Employee> {
    return this.employeeService.update(id, employee);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.employeeService.delete(id);
  }
}
