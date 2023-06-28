import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// INTERNAL
import { Employee } from '@/models/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findEmployeesByDepartmentId(departmentId: number): Promise<Employee[]> {
    return this.employeeRepository.find({
      where: {
        departmentId: departmentId,
      },
    });
  }

  async findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(employee: Employee): Promise<Employee> {
    return this.employeeRepository.save(employee);
  }

  async update(id: number, employee: Employee): Promise<Employee> {
    await this.employeeRepository.update(id, employee);
    return this.employeeRepository.findOne({
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
