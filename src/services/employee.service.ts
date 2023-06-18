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

  async findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(user: Employee): Promise<Employee> {
    return this.employeeRepository.save(user);
  }

  async update(id: number, user: Employee): Promise<Employee> {
    await this.employeeRepository.update(id, user);
    return this.employeeRepository.findOne({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
