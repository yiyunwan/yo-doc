import { IsString, IsInt } from 'class-validator'

export class CreateCatDto {
  @IsString()
  name: string

  @IsInt({
    message: '必须是数字',
  })
  age: number

  @IsString()
  breed: string
}
