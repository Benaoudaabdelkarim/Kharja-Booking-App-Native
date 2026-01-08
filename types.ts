export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  phone: string | null;
  phone_verified_at: string | null;
  country: string;
  preferences: {
    currency: string;
    language: string;
  };
}

export type SectionDesign = "horizontal_list" | "carousel" | "grid" | string;
export type SectionType = "advertisement" | "location" | "package" | string;

export interface Section {
  design: SectionDesign;
  title: string;
  show_title: 0 | 1;
  advertisement: Advertisement | null;
  type: SectionType;
  data: (Advertisement | Location | Event | Schedule)[];
}

export interface Advertisement {
  id: number;
  title: string;
  link: string;
  description: string | null;
  image: string;
}

export interface Location {
  code: string;
  name: string;
  type: string; // country | city
  image: string;
  cover?: string;
}

export interface Company {}

export interface Category {}

export interface Event {}

export interface Schedule {}

export interface Review {}

export interface PaymentMethod {}

export interface Booking {}

export interface Badge {}

export interface Point {}
