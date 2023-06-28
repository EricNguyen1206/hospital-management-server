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
      url: 'postgresql://postgres:RpM0w4Z87qoZcqRvM6z5@containers-us-west-15.railway.app:6100/railway',
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
