import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// INTERNAL
import { AppController, EmployeeController } from './controllers';
import { AppService, EmployeeService } from './services';
import { Employee } from './models/employee.entity';
import { DepartmentModule } from './modules/department/department.module';
import { Department } from './modules/department/department.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres:w3q2UdyNkGezjeMSWDiT@containers-us-west-74.railway.app:7051/railway',
      synchronize: true,
      entities: [Department, Employee],
      migrations: ['migrations/*.ts'],
    }),
    TypeOrmModule.forFeature([Employee]),
    DepartmentModule,
  ],
  exports: [EmployeeService],
  controllers: [AppController, EmployeeController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
