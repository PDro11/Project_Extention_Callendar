import axios from 'axios';
// As interfaces agora virão do backend ou você pode copiá-las para o frontend/src/interfaces
import type { Event } from '../interfaces/event.interface';
import type { MonthHeader } from '../interfaces/monthHeader.interface';

const API_BASE_URL = 'http://localhost:3001/api';

// Funções para Eventos (CRUD)
export const fetchAllEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get<Event[]>(`${API_BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all events:', error);
    return [];
  }
};

export const fetchEventsByMonth = async (monthName: string): Promise<Event[]> => {
  try {
    const response = await axios.get<Event[]>(`${API_BASE_URL}/events`, {
      params: { month: monthName.toLowerCase() } // Envia o mês como query parameter
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching events for month ${monthName}:`, error);
    return [];
  }
};

export const fetchEventById = async (id: string): Promise<Event | null> => {
  try {
    const response = await axios.get<Event>(`${API_BASE_URL}/events/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event with ID ${id}:`, error);
    return null;
  }
};

export const createEvent = async (eventData: Omit<Event, 'id'>): Promise<Event | null> => {
  try {
    const response = await axios.post<Event>(`${API_BASE_URL}/events`, eventData);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    return null;
  }
};

export const updateEvent = async (id: string, eventData: Partial<Event>): Promise<Event | null> => {
  try {
    const response = await axios.put<Event>(`${API_BASE_URL}/events/${id}`, eventData);
    return response.data;
  } catch (error) {
    console.error(`Error updating event with ID ${id}:`, error);
    return null;
  }
};

export const deleteEvent = async (id: string): Promise<boolean> => {
  try {
    await axios.delete(`${API_BASE_URL}/events/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting event with ID ${id}:`, error);
    return false;
  }
};

// NOVAS Funções para Month Headers
export const fetchAllMonthHeaders = async (): Promise<MonthHeader[]> => {
  try {
    const response = await axios.get<MonthHeader[]>(`${API_BASE_URL}/month-headers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all month headers:', error);
    return [];
  }
};

export const fetchMonthHeaderById = async (id: number): Promise<MonthHeader | null> => {
  try {
    const response = await axios.get<MonthHeader>(`${API_BASE_URL}/month-headers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching month header with ID ${id}:`, error);
    return null;
  }
};

export const createMonthHeader = async (monthHeaderData: Omit<MonthHeader, 'id'>): Promise<MonthHeader | null> => {
  try {
    const response = await axios.post<MonthHeader>(`${API_BASE_URL}/month-headers`, monthHeaderData);
    return response.data;
  } catch (error) {
    console.error('Error creating month header:', error);
    return null;
  }
};

export const updateMonthHeader = async (id: number, monthHeaderData: Partial<MonthHeader>): Promise<MonthHeader | null> => {
  try {
    const response = await axios.put<MonthHeader>(`${API_BASE_URL}/month-headers/${id}`, monthHeaderData);
    return response.data;
  } catch (error) {
    console.error(`Error updating month header with ID ${id}:`, error);
    return null;
  }
};

export const deleteMonthHeader = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`${API_BASE_URL}/month-headers/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting month header with ID ${id}:`, error);
    return false;
  }
};