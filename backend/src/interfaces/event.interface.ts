export interface Event {
  id: string;
  month: string;
  day: number;
  title: string;
  description: string;
  details: string;
  type?: string; // Tipo do evento (ex: ambiental, cultural, educacional)
  whatIs?: string;
  whyIsImportant?: string;
  moreInfoLink?: string;
}