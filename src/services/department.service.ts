import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// INTERNAL
import {
  department,
  ResGetDepartmentByIdDto,
} from '@/models/department.entity';
import { EmployeeService } from './employee.service';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(department)
    private readonly departmentRepository: Repository<department>,
    @Inject(EmployeeService)
    private readonly employeeService: EmployeeService,
  ) {}

  async findAll(): Promise<department[]> {
    return this.departmentRepository.find();
  }

  async findChildDepartments(departmentId: number): Promise<department[]> {
    return this.departmentRepository.find({
      where: {
        departmentid: departmentId,
      },
    });
  }

  async findOne(id: number): Promise<ResGetDepartmentByIdDto> {
    const departmentEntity = await this.departmentRepository.findOne({
      where: {
        id,
      },
    });
    const result = new ResGetDepartmentByIdDto();
    result.id = departmentEntity.id;
    result.departmentid = departmentEntity.departmentid;
    result.name = departmentEntity.name;
    result.isactive = departmentEntity.isactive;
    result.iscomposite = departmentEntity.iscomposite;

    result.childs = [].concat(
      await this.employeeService.findEmployeesByDepartmentId(id),
      await this.findChildDepartments(id),
    );
    return result;
  }

  async create(department: department): Promise<department> {
    return this.departmentRepository.save(department);
  }

  async update(id: number, user: department): Promise<department> {
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
