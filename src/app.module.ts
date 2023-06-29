import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// INTERNAL
import { Employee } from './modules/employee/employee.entity';
import { DepartmentModule } from './modules/department/department.module';
import { Department } from './modules/department/department.entity';
import { EmployeeModule } from './modules/employee/employee.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
