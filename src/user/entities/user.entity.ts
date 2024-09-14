import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement, BeforeCreate } from "sequelize-typescript";
import { Order } from "../../presentation/orders/order.entity";
import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";
import * as bcrypt from 'bcrypt';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({
    allowNull: false
  })
  @IsString()
  document: string;

  @IsNotEmpty({ message: 'O campo email não pode estar vazio' })
  @IsEmail({}, { message: 'Email no formato inválido' })
  @Column({ unique: true, allowNull: false })
  email: string;

  @Column({ type: 'BIGINT', allowNull: false })
  phone: number;

  @Column
  city: string;

  @Column
  state: string;

  @IsNotEmpty({ message: 'O campo senha não pode estar vazio' })
  @IsString()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  @Matches(/[A-Z]/, { message: 'A senha deve conter pelo menos uma letra maiúscula' })
  @Matches(/[a-z]/, { message: 'A senha deve conter pelo menos uma letra minúscula' })
  @Matches(/\d/, { message: 'A senha deve conter pelo menos um número' })
  @Matches(/[\W_]/, { message: 'A senha deve conter pelo menos um caractere especial' })
  @Column({ unique: true, allowNull: false })
  password: string;

  @Column
  idRole: number;

  @Column({ defaultValue: 1 })
  accessAmount: number;

  @Column
  company: number;

  @HasMany(() => Order)
  orders: Order[];
  @BeforeCreate
  static async hashPassword(user: User) {
    user.password = await bcrypt.hash(user.password, 10);
  }
}
