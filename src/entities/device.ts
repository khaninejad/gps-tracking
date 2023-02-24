import {Column, Entity, OneToMany} from 'typeorm';
import Model from './baseEntity';
import {GpsLog} from './gpsLog';

@Entity('devices')
export class Device extends Model {
  @Column({unique: true, name: 'unique_device_name'})
  name: string;

  @Column({unique: true, name: 'unique_secret_token'})
  token: string;

  @OneToMany(() => GpsLog, gpsLog => gpsLog.device)
  logs: GpsLog[];

  toJSON() {
    return {
      ...this,
      token: undefined,
    };
  }
}
