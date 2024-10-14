import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';  // Assuming you have a UserModule
import { User } from './user/entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestcrud',
      entities: [User], // Specify your entities here
      synchronize: true, // Be careful with this option in production
    }),
    UserModule, // Import other modules like your UserModule
  ],
})
export class AppModule {}
