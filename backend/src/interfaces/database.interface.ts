import { Event } from './event.interface';
import { MonthHeader } from './monthHeader.interface';

export interface Database {
  public: {
    Tables: {
      events: {
        Row: Event;
        Insert: Omit<Event, 'id'> & { id?: string };
        Update: Partial<Event>;
      };
      month_headers: {
        Row: MonthHeader;
        Insert: Omit<MonthHeader, 'id'> & { id?: number };
        Update: Partial<MonthHeader>;
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}