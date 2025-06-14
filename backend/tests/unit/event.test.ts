import { EventService } from '../../src/services/event.service';
import { EventModel } from '../../src/models/event.model';
import { Event } from '../../src/interfaces/event.interface';

jest.mock('../../src/models/event.model', () => {
  return {
    EventModel: jest.fn(), // mock do construtor da classe
  };
});

describe('EventService', () => {
  let eventService: EventService;
  let mockEventModelInstance: jest.Mocked<EventModel>;

  beforeEach(() => {
    // Cria uma instância mockada da classe
    mockEventModelInstance = {
      findAllEvents: jest.fn(),
      findEventById: jest.fn(),
      createEvent: jest.fn(),
      updateEvent: jest.fn(),
      deleteEvent: jest.fn(),
      findEventsByMonth: jest.fn(),
    } as unknown as jest.Mocked<EventModel>;

    // Define que EventModel (mockado como função) retorna nossa instância mock
    (EventModel as jest.Mock).mockImplementation(() => mockEventModelInstance);

    // Injeta no serviço
    eventService = new EventService(new EventModel());
  });

  describe('getAllEvents', () => {
    it('should return all events when found', async () => {
      const mockEvents: Event[] = [
        { id: '1', month: 'janeiro', day: 1, title: 'Event 1', description: 'Desc 1', details: 'Details 1' },
        { id: '2', month: 'fevereiro', day: 2, title: 'Event 2', description: 'Desc 2', details: 'Details 2' },
      ];
      // Configura o método findAllEvents da instância mockada para retornar os dados esperados.
      mockEventModelInstance.findAllEvents.mockResolvedValue(mockEvents);

      const events = await eventService.getAllEvents();
      expect(events).toEqual(mockEvents);
      // Verifica se o método findAllEvents foi chamado na instância mockada.
      expect(mockEventModelInstance.findAllEvents).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if no events are found', async () => {
      mockEventModelInstance.findAllEvents.mockResolvedValue(null); // Simula "nenhum dado"

      const events = await eventService.getAllEvents();
      expect(events).toEqual([]); // O serviço deve retornar um array vazio nesse caso.
      expect(mockEventModelInstance.findAllEvents).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if findAllEvents fails', async () => {
      // Simula uma falha no nível do modelo (ex: erro de DB)
      mockEventModelInstance.findAllEvents.mockResolvedValue(null); 

      const events = await eventService.getAllEvents();
      expect(events).toEqual([]);
      expect(mockEventModelInstance.findAllEvents).toHaveBeenCalledTimes(1);
    });
  });

  describe('getEventById', () => {
    it('should return an event by ID if found', async () => {
      const mockEvent: Event = { id: '1', month: 'janeiro', day: 1, title: 'Event 1', description: 'Desc 1', details: 'Details 1' };
      mockEventModelInstance.findEventById.mockResolvedValue(mockEvent);

      const event = await eventService.getEventById('1');
      expect(event).toEqual(mockEvent);
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledWith('1');
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledTimes(1);
    });

    it('should return null if event not found by ID', async () => {
      mockEventModelInstance.findEventById.mockResolvedValue(null);

      const event = await eventService.getEventById('999');
      expect(event).toBeNull();
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledWith('999');
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledTimes(1);
    });
  });

  describe('createNewEvent', () => {
    it('should create a new event successfully with generated ID', async () => {
      const newEventData: Omit<Event, 'id'> = { month: 'março', day: 3, title: 'New Event', description: 'New Desc', details: 'New Details' };
      const createdEvent: Event = { id: 'auto-generated-id', ...newEventData }; // ID gerado pelo modelo

      mockEventModelInstance.createEvent.mockResolvedValue(createdEvent);

      const result = await eventService.createNewEvent(newEventData);
      expect(result).toEqual(createdEvent);
      // Verifica que o serviço passou os dados SEM o ID para o modelo
      expect(mockEventModelInstance.createEvent).toHaveBeenCalledWith(newEventData);
      expect(mockEventModelInstance.createEvent).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if required fields are missing', async () => {
      const invalidEventData: Omit<Event, 'id'> = { month: 'abril', day: 4, title: '', description: 'New Desc', details: 'New Details' };
      await expect(eventService.createNewEvent(invalidEventData)).rejects.toThrow('Title, month, and day are required for a new event.');
      // O método createEvent do modelo NÃO deve ser chamado neste caso.
      expect(mockEventModelInstance.createEvent).not.toHaveBeenCalled();
    });

    it('should return null if event creation fails in model', async () => {
      const newEventData: Omit<Event, 'id'> = { month: 'maio', day: 5, title: 'Event Fail', description: 'Desc Fail', details: 'Details Fail' };
      mockEventModelInstance.createEvent.mockResolvedValue(null);

      const result = await eventService.createNewEvent(newEventData);
      expect(result).toBeNull();
      expect(mockEventModelInstance.createEvent).toHaveBeenCalledWith(newEventData);
      expect(mockEventModelInstance.createEvent).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateExistingEvent', () => {
    it('should update an existing event successfully', async () => {
      const existingEvent: Event = { id: '1', month: 'janeiro', day: 1, title: 'Event 1', description: 'Desc 1', details: 'Details 1' };
      const updatedData: Partial<Event> = { title: 'Updated Event 1', description: 'Updated Description' };
      const returnedEvent: Event = { ...existingEvent, ...updatedData };

      mockEventModelInstance.findEventById.mockResolvedValue(existingEvent); // Simula evento encontrado
      mockEventModelInstance.updateEvent.mockResolvedValue(returnedEvent); // Simula atualização bem-sucedida

      const result = await eventService.updateExistingEvent('1', updatedData);
      expect(result).toEqual(returnedEvent);
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledWith('1');
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledTimes(1);
      expect(mockEventModelInstance.updateEvent).toHaveBeenCalledWith('1', updatedData);
      expect(mockEventModelInstance.updateEvent).toHaveBeenCalledTimes(1);
    });

    it('should return null if event to update is not found', async () => {
      mockEventModelInstance.findEventById.mockResolvedValue(null); // Simula evento NÃO encontrado

      const result = await eventService.updateExistingEvent('999', { title: 'Non Existent' });
      expect(result).toBeNull();
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledWith('999');
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledTimes(1);
      expect(mockEventModelInstance.updateEvent).not.toHaveBeenCalled(); // updateEvent não deve ser chamado
    });

    it('should return null if update fails in model even if event exists', async () => {
      const existingEvent: Event = { id: '1', month: 'janeiro', day: 1, title: 'Event 1', description: 'Desc 1', details: 'Details 1' };
      const updatedData: Partial<Event> = { title: 'Updated Event 1' };

      mockEventModelInstance.findEventById.mockResolvedValue(existingEvent);
      mockEventModelInstance.updateEvent.mockResolvedValue(null); // Simula falha na atualização

      const result = await eventService.updateExistingEvent('1', updatedData);
      expect(result).toBeNull();
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledWith('1');
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledTimes(1);
      expect(mockEventModelInstance.updateEvent).toHaveBeenCalledWith('1', updatedData);
      expect(mockEventModelInstance.updateEvent).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteExistingEvent', () => {
    it('should delete an existing event successfully', async () => {
      const existingEvent: Event = { id: '1', month: 'janeiro', day: 1, title: 'Event 1', description: 'Desc 1', details: 'Details 1' };
      mockEventModelInstance.findEventById.mockResolvedValue(existingEvent); // Simula evento encontrado
      mockEventModelInstance.deleteEvent.mockResolvedValue(true); // Simula exclusão bem-sucedida

      const result = await eventService.deleteExistingEvent('1');
      expect(result).toBe(true);
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledWith('1');
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledTimes(1);
      expect(mockEventModelInstance.deleteEvent).toHaveBeenCalledWith('1');
      expect(mockEventModelInstance.deleteEvent).toHaveBeenCalledTimes(1);
    });

    it('should return false if event to delete is not found', async () => {
      mockEventModelInstance.findEventById.mockResolvedValue(null); // Simula evento NÃO encontrado

      const result = await eventService.deleteExistingEvent('999');
      expect(result).toBe(false);
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledWith('999');
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledTimes(1);
      expect(mockEventModelInstance.deleteEvent).not.toHaveBeenCalled(); // deleteEvent não deve ser chamado
    });

    it('should return false if deletion fails in model even if event exists', async () => {
      const existingEvent: Event = { id: '1', month: 'janeiro', day: 1, title: 'Event 1', description: 'Desc 1', details: 'Details 1' };
      mockEventModelInstance.findEventById.mockResolvedValue(existingEvent);
      mockEventModelInstance.deleteEvent.mockResolvedValue(false); // Simula falha na exclusão

      const result = await eventService.deleteExistingEvent('1');
      expect(result).toBe(false);
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledWith('1');
      expect(mockEventModelInstance.findEventById).toHaveBeenCalledTimes(1);
      expect(mockEventModelInstance.deleteEvent).toHaveBeenCalledWith('1');
      expect(mockEventModelInstance.deleteEvent).toHaveBeenCalledTimes(1);
    });
  });

  describe('getEventsByMonth', () => {
    it('should return events for a specific month', async () => {
      const mockMonth = 'janeiro';
      const mockEvents: Event[] = [
        { id: '1', month: 'janeiro', day: 1, title: 'Event 1', description: 'Desc 1', details: 'Details 1' },
      ];
      mockEventModelInstance.findEventsByMonth.mockResolvedValue(mockEvents);

      const events = await eventService.getEventsByMonth(mockMonth);
      expect(events).toEqual(mockEvents);
      expect(mockEventModelInstance.findEventsByMonth).toHaveBeenCalledWith(mockMonth);
      expect(mockEventModelInstance.findEventsByMonth).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if no events are found for the month', async () => {
      const mockMonth = 'dezembro';
      mockEventModelInstance.findEventsByMonth.mockResolvedValue(null);

      const events = await eventService.getEventsByMonth(mockMonth);
      expect(events).toEqual([]);
      expect(mockEventModelInstance.findEventsByMonth).toHaveBeenCalledWith(mockMonth);
      expect(mockEventModelInstance.findEventsByMonth).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if findEventsByMonth fails', async () => {
      const mockMonth = 'invalid';
      mockEventModelInstance.findEventsByMonth.mockResolvedValue(null);

      const events = await eventService.getEventsByMonth(mockMonth);
      expect(events).toEqual([]);
      expect(mockEventModelInstance.findEventsByMonth).toHaveBeenCalledWith(mockMonth);
      expect(mockEventModelInstance.findEventsByMonth).toHaveBeenCalledTimes(1);
    });
  });
});