import {ModelWithDates} from '@mathrix-education/iridium';
import {CityType} from './user';

export interface Plan extends ModelWithDates {
  title: string;
  description: string;
  url: string;
  institution_id: number;
  start_date?: Date;
  city: CityType;
}
