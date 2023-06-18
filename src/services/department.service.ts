import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// INTERNAL
import { Department } from '@/models/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }

  async findOne(id: number): Promise<Department> {
    return this.departmentRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(user: Department): Promise<Department> {
    return this.departmentRepository.save(user);
  }

  async update(id: number, user: Department): Promise<Department> {
    await this.departmentRepository.update(id, user);
    return this.departmentRepository.findOne({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.departmentRepository.delete(id);
  }
}
