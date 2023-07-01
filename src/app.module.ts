import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// INTERNAL
import { Employee } from './modules/employee/employee.entity';
import { DepartmentModule } from './modules/department/department.module';
import { Department } from './modules/department/department.entity';
import { EmployeeModule } from './modules/employee/employee.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    DepartmentModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
