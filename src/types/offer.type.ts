import {UserType} from './user.type.js';
import {CityEnum} from './city.enum.js';
import {HousingType} from './housing-type.enum.js';
import {Facilities} from './facilities.enum.js';
import {CoordinatesType} from './coordinates.type.js';


export type OfferType = {
  name: string;
  description: string;
  publicationDate: Date;
  city: CityEnum;
  previewImage: string;
  images: string[];
  premium: boolean;
  favorite: boolean;
  rating: number;
  housingType: HousingType;
  roomCount: number;
  guestCount: number;
  cost: number;
  facilities: Facilities[];
  offerAuthor: UserType;
  commentsCount: number;
  coordinates: CoordinatesType
}
