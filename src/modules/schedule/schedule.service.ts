import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';

// INTERNAL
import { Department } from '@/modules/department/department.entity';
import { Employee } from '../employee/employee.entity';
// import {
//   DepartmentDto,
//   ReqUpdateDepartmentDto,
//   ResGetDepartmentByIdDto,
// } from '@/modules/department//department.dto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async getCurrentSchedule(): Promise<any> {
    function getDatesForCurrentWeek(): Date[] {
        const dates: Date[] = [];
        const today = new Date();
        const currentDayOfWeek = today.getDay();
        const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - currentDayOfWeek + 1);
      
        for (let i = 0; i < 7; i++) {
          const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
          dates.push(date);
        }
      
        return dates;
    }
    function shuffleArray<T>(array: T[]): T[] {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    function zip(moring: Employee[], afternoon: Employee[]): object {
        const length = Math.min(moring.length, afternoon.length);
        const result: object = {};
      
        for (let i = 0; i < length; i++) {
            let shift = {
                moring: {
                    id : moring[i]["id"],
                    name : moring[i]["fullName"],
                },
                afternoon: {
                    id : afternoon[i]["id"],
                    name : afternoon[i]["fullName"],
                },
            };
            result[i] = shift;
        }
        return result;
    }
    const departments = await this.departmentRepository.find({
        where: {
            departmentId: Not(IsNull()),
        },
    });
    
    var result: any[] = [];
    for(var department of departments) {
        const employees = await this.employeeRepository.find({
            where: {
                departmentId: department["id"]
            },
        });
        const morning = shuffleArray(employees)
        const afternoon = shuffleArray(employees)
        const schedule = zip(morning, afternoon)
        let response = {
            id: department["id"],
            department_name: department["departmentName"],
            schedule: schedule,
        };
        result.push(response);
    }
    return result;
  }

//   async findChildDepartments(departmentId: string): Promise<Department[]> {
//     return this.departmentRepository.find({
//       where: {
//         departmentId: departmentId,
//       },
//     });
//   }

//   async findOne(id: string): Promise<ResGetDepartmentByIdDto> {
//     const departmentEntity = await this.departmentRepository.findOne({
//       where: {
//         id,
//       },
//     });
//     const result = new ResGetDepartmentByIdDto();
//     result.id = departmentEntity.id;
//     result.departmentId = departmentEntity.departmentId;
//     result.departmentName = departmentEntity.departmentName;
//     result.leaderId = departmentEntity.leaderId;
//     result.isActive = departmentEntity.isActive;
//     result.isComposite = departmentEntity.isComposite;

//     result.childs = [].concat(
//       // await this.employeeService.findEmployeesByDepartmentId(id),
//       await this.findChildDepartments(id),
//     );
//     return result;
//   }

//   async create(department: DepartmentDto): Promise<DepartmentDto> {
//     return this.departmentRepository.save(department);
//   }

//   async update(
//     id: string,
//     newDepartmentData: ReqUpdateDepartmentDto,
//   ): Promise<DepartmentDto> {
//     const department = await this.departmentRepository.findOne({
//       where: {
//         id,
//       },
//     });
//     if (department) {
//       department.departmentName =
//         newDepartmentData.departmentName ?? department.departmentName;
//       department.departmentId =
//         newDepartmentData.departmentId ?? department.departmentId;
//       if (department.isActive !== newDepartmentData.isActive) {
//         department.isActive = newDepartmentData.isActive;
//       }
//       department.leaderId = newDepartmentData.leaderId ?? department.leaderId;
//     }

//     await this.departmentRepository.update(id, department);
//     return department;
//   }

//   async delete(id: string): Promise<void> {
//     await this.departmentRepository.delete(id);
//   }
}
