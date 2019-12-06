import {ModelWithDates} from '@mathrix-education/iridium';
import {CityType} from './user';

export interface Plan extends ModelWithDates {
  title: string;
  description: string;
  link: string;
  institution_id: number;
  cities: CityType[];
  categories: string[];
  starting_at?: Date;
  ending_at?: Date;
  video_id: string;
}
