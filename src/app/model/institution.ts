import {ModelWithDates} from '@mathrix-education/iridium';

export type CityType = 'paris' | 'grenoble';
export type CategoryType = 'santé' | 'logement' | 'transport' | 'alimentation' | 'sorties' | 'scolaire';

export interface Institution extends ModelWithDates {
  name: string;
  description: string;
  city?: CityType;
  category: CategoryType;
  filter?: string[][]; // [['age', '=', '25'], ['city', '!=', 'grenoble']]
}
