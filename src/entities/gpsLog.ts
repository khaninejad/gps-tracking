import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import Model from './baseEntity';
import {Device} from './device';

@Entity('logs')
export class GpsLog extends Model {
  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @ManyToOne(() => Device, device => device.logs)
  @JoinColumn()
  device: Device;
}
