import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamModule } from './exam/exam.module';

@Module({
  imports: [ExamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
