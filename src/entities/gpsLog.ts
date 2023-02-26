import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import Model from './base-entity';
import {Device} from './device';

@Entity('logs')
export class GpsLog extends Model {
  @Column('numeric', {precision: 10, scale: 7})
  latitude: number;

  @Column('numeric', {precision: 10, scale: 7})
  longitude: number;

  @ManyToOne(() => Device, device => device.logs)
  @JoinColumn()
  device: Device;
}
