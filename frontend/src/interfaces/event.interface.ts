export interface Event {
  id: string;
  month: string;
  day: number;
  title: string;
  description: string;
  details: string;
  type?: string;
  whatIs?: string;
  whyIsImportant?: string;
  moreInfoLink?: string;
}