import {BiometricsType} from './Biometrics';
import {Notes} from './Notes';

export interface StoreType {
  user: BiometricsType;
  notes: {notes: Notes[]};
}
