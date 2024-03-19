import { Exclude } from 'class-transformer';
import { IsDateString, IsString, Length, MinLength } from 'class-validator';

export class CreateExamDto {
  @Exclude({ toPlainOnly: true })
  id: string;

  @IsString()
  @Length(8, 8)
  chapa: string;

  @IsString()
  @MinLength(10)
  nome: string;

  @IsDateString()
  date_of_last_exam: Date;
}
