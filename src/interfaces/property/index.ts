
export enum PropertyType {
  Individual = 'Individual',
  SemiIndividual = "Semi Individual",
  IndividualShared = "Individual With Floor",
  Apartment = "Apartment",
}

export enum AreaType {
  HKB1 = '1 BHK',
  HKB2 = "2 BHK",
  HKB3 = "3 BHK",
  HKB4 = "4 BHK",
  HKB5 = "5 BHK",
  HK = "HK",
  Studio = "Studio"
}

export enum PriceType {
  Sale = "Sale",
  Rent = "Rent",
  YearlyLease = "Yearly Lease"
}

export enum Facility {
  PowerBackUp = "Power Backup",
  SwimmingPool = "Swimming Pool",
  Gated = "Gated",
  Lift = "Lift",
  ServiceLift = "Service Lift"
}

export interface IPropertyAttrs {
  header: string;
  propertyType: PropertyType;
  area: number;
  areaType: AreaType;
  price: number;
  priceType: PriceType;
  facilities: Facility[];
  address: string;
  city: string;
  lat: number;
  lon: number;
  userId: string;
}

export interface IListingRequestBody extends IPropertyAttrs {

}

export interface IListing extends IPropertyAttrs {
  id: string;
}

export interface IListingResponse {
  listing: IListing[]
}