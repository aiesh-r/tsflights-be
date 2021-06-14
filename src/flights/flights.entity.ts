import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flights {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 25 })
  origin: string;
  @Column('varchar', { length: 25 })
  destination: string;
  @Column('int')
  fightnumber: number;
  @Column('timestamp with time zone')
  depart: Date;
  @Column('timestamp with time zone')
  arrive: Date;
  @Column('boolean')
  nonstop: boolean;
}
