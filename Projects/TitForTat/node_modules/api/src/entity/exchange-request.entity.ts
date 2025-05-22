import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ExchangeRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  offerId: number;

  @Column()
  requesterId: number;

  @Column({ default: 'pending' })
  status: 'pending' | 'accepted' | 'declined';
}