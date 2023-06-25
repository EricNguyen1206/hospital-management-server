import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// INTERNAL
import {
  Department,
  ResGetDepartmentByIdDto,
} from '@/models/department.entity';
import { EmployeeService } from './employee.service';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @Inject(EmployeeService)
    private readonly employeeService: EmployeeService,
  ) {}

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }

  async findChildDepartments(departmentId: string): Promise<Department[]> {
    return this.departmentRepository.find({
      where: {
        departmentId: departmentId,
      },
    });
  }

  async findOne(id: string): Promise<ResGetDepartmentByIdDto> {
    const departmentEntity = await this.departmentRepository.findOne({
      where: {
        id,
      },
    });
    const result = new ResGetDepartmentByIdDto();
    result.id = departmentEntity.id;
    result.departmentId = departmentEntity.departmentId;
    result.departmentName = departmentEntity.departmentName;
    result.leaderId = departmentEntity.leaderId;
    result.isActive = departmentEntity.isActive;
    result.isComposite = departmentEntity.isComposite;

    result.childs = [].concat(
      await this.employeeService.findEmployeesByDepartmentId(id),
      await this.findChildDepartments(id),
    );
    return result;
  }

  async create(department: Department): Promise<Department> {
    return this.departmentRepository.save(department);
  }

  async update(id: string, user: Department): Promise<Department> {
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
