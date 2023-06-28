import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// INTERNAL
import {
  AppController,
  DepartmentController,
  EmployeeController,
} from './controllers';
import { AppService, DepartmentService, EmployeeService } from './services';
import { department } from './models/department.entity';
import { employee } from './models/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres:w3q2UdyNkGezjeMSWDiT@containers-us-west-74.railway.app:7051/railway',
      synchronize: true,
      entities: [department, employee],
      migrations: ['migrations/*.ts'],
    }),
    TypeOrmModule.forFeature([department, employee]),
  ],
  controllers: [AppController, DepartmentController, EmployeeController],
  providers: [AppService, DepartmentService, EmployeeService],
})
export class AppModule {}
