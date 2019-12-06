import {ModelWithDates} from '@mathrix-education/iridium';
import {CityType} from './user';
import {Institution} from './institution';

export interface Plan extends ModelWithDates {
  title: string;
  description: string;
  link: string;
  institution_id: number;
  city: CityType;
  category: string;
  starting_at?: Date;
  ending_at?: Date;
  institution?: Institution; // with expand model
  video_id: string;
}
