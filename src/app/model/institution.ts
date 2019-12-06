import {ModelWithDates} from '@mathrix-education/iridium';

export type CityType = 'Paris' | 'Grenoble';

export interface Institution extends ModelWithDates {
  name: string;
  description: string;
  city?: CityType;
  category: string;
  filter?: string[][]; // [['age', '=', '25'], ['city', '!=', 'grenoble']]
}
