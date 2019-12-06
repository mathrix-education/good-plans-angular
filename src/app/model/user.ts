import {ModelWithDates} from '@mathrix-education/iridium';

export type CityType = 'paris' | 'grenoble';


export interface User extends ModelWithDates {
  username: string;
  birth_date: Date;
  city: CityType;
  university: string;
  video_id: string;
}
