import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ExamService {
  constructor(private prisma: PrismaService) {}

  async checkIfEmployeeAlreadyExists(chapa: string): Promise<boolean> {
    return !!(await this.prisma.employee.findFirst({ where: { chapa } }));
  }

  async checkIfHasIdOnBody(createExamDto: CreateExamDto): Promise<boolean> {
    return !!createExamDto.id;
  }

  async create(createExamDto: CreateExamDto): Promise<CreateExamDto> {
    if (await this.checkIfHasIdOnBody(createExamDto)) {
      throw new BadRequestException('Requisição com id');
    }

    if (await this.checkIfEmployeeAlreadyExists(createExamDto.chapa)) {
      throw new BadRequestException('Usuario já existe');
    }

    const { date_of_last_exam } = createExamDto;

    return await this.prisma.employee.create({
      data: {
        ...createExamDto,
        date_of_last_exam: new Date(date_of_last_exam),
      },
    });
  }

  // findAll() {
  //   return `This action returns all exam`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} exam`;
  // }

  // update(id: number, updateExamDto: UpdateExamDto) {
  //   return `This action updates a #${id} exam`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} exam`;
  // }
}
