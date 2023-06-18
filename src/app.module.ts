import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// INTERNAL
import {
  AppController,
  DepartmentController,
  EmployeeController,
} from './controllers';
import { AppService, DepartmentService, EmployeeService } from './services';
import { Department } from './models/department.entity';
import { Employee } from './models/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres:w3q2UdyNkGezjeMSWDiT@containers-us-west-74.railway.app:7051/railway',
      synchronize: true,
      entities: [Department, Employee],
      migrations: ['migrations/*.ts'],
    }),
    TypeOrmModule.forFeature([Department, Employee]),
  ],
  controllers: [AppController, DepartmentController, EmployeeController],
  providers: [AppService, DepartmentService, EmployeeService],
})
export class AppModule {}
