import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// INTERNAL
import { employee } from '@/models/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(employee)
    private readonly employeeRepository: Repository<employee>,
  ) {}

  async findAll(): Promise<employee[]> {
    return this.employeeRepository.find();
  }

  async findEmployeesByDepartmentId(departmentId: number): Promise<employee[]> {
    return this.employeeRepository.find({
      where: {
        departmentid: departmentId,
      },
    });
  }

  async findOne(id: string): Promise<employee> {
    return this.employeeRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(employee: employee): Promise<employee> {
    return this.employeeRepository.save(employee);
  }

  async update(id: string, employee: employee): Promise<employee> {
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
