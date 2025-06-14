import { MonthHeaderService } from '../../src/services/monthHeader.service';
import { MonthHeaderModel } from '../../src/models/monthHeader.model';
import { MonthHeader } from '../../src/interfaces/monthHeader.interface';

jest.mock('../../src/models/monthHeader.model', () => {
  return {
    MonthHeaderModel: jest.fn(), // mock do construtor
  };
});

describe('MonthHeaderService', () => {
  let monthHeaderService: MonthHeaderService;
  let mockMonthHeaderModelInstance: jest.Mocked<MonthHeaderModel>;

  beforeEach(() => {
    jest.clearAllMocks(); // Limpa todos os mocks antes de cada teste

    // Cria a instância mockada manualmente
    mockMonthHeaderModelInstance = {
        findAllMonthHeaders: jest.fn(),
        findMonthHeaderById: jest.fn(),
        createMonthHeader: jest.fn(),
        updateMonthHeader: jest.fn(),
        deleteMonthHeader: jest.fn(),
    } as unknown as jest.Mocked<MonthHeaderModel>;

    // Diz ao mock do construtor para retornar nossa instância mockada
    (MonthHeaderModel as jest.Mock).mockImplementation(() => mockMonthHeaderModelInstance);

    // Cria o serviço com a instância mockada
    monthHeaderService = new MonthHeaderService(new MonthHeaderModel());
  });

  describe('getAllMonthHeaders', () => {
    it('should return all month headers when found', async () => {
      const mockMonthHeaders: MonthHeader[] = [
        { id: 1, name: 'Janeiro', theme: 'Theme 1', colorClass: 'class-1', illustrationUrl: 'url-1' },
        { id: 2, name: 'Fevereiro', theme: 'Theme 2', colorClass: 'class-2', illustrationUrl: 'url-2' },
      ];
      mockMonthHeaderModelInstance.findAllMonthHeaders.mockResolvedValue(mockMonthHeaders);

      const headers = await monthHeaderService.getAllMonthHeaders();
      expect(headers).toEqual(mockMonthHeaders);
      expect(mockMonthHeaderModelInstance.findAllMonthHeaders).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if no month headers are found', async () => {
      mockMonthHeaderModelInstance.findAllMonthHeaders.mockResolvedValue(null);

      const headers = await monthHeaderService.getAllMonthHeaders();
      expect(headers).toEqual([]);
      expect(mockMonthHeaderModelInstance.findAllMonthHeaders).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if findAllMonthHeaders fails', async () => {
      mockMonthHeaderModelInstance.findAllMonthHeaders.mockResolvedValue(null);

      const headers = await monthHeaderService.getAllMonthHeaders();
      expect(headers).toEqual([]);
      expect(mockMonthHeaderModelInstance.findAllMonthHeaders).toHaveBeenCalledTimes(1);
    });
  });

  describe('getMonthHeaderById', () => {
    it('should return a month header by ID if found', async () => {
      const mockMonthHeader: MonthHeader = { id: 1, name: 'Janeiro', theme: 'Theme 1', colorClass: 'class-1', illustrationUrl: 'url-1' };
      mockMonthHeaderModelInstance.findMonthHeaderById.mockResolvedValue(mockMonthHeader);

      const header = await monthHeaderService.getMonthHeaderById(1);
      expect(header).toEqual(mockMonthHeader);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledWith(1);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledTimes(1);
    });

    it('should return null if month header not found by ID', async () => {
      mockMonthHeaderModelInstance.findMonthHeaderById.mockResolvedValue(null);

      const header = await monthHeaderService.getMonthHeaderById(999);
      expect(header).toBeNull();
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledWith(999);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledTimes(1);
    });
  });

  describe('createNewMonthHeader', () => {
    it('should create a new month header successfully', async () => {
      const newMonthHeaderData: Omit<MonthHeader, 'id'> = { name: 'Janeiro', theme: 'New Theme', colorClass: 'new-class', illustrationUrl: 'new-url' };
      const createdMonthHeader: MonthHeader = { id: 13, ...newMonthHeaderData }; // Supondo que o ID será gerado

      mockMonthHeaderModelInstance.createMonthHeader.mockResolvedValue(createdMonthHeader);

      const result = await monthHeaderService.createNewMonthHeader(newMonthHeaderData);
      expect(result).toEqual(createdMonthHeader);
      expect(mockMonthHeaderModelInstance.createMonthHeader).toHaveBeenCalledWith(newMonthHeaderData);
      expect(mockMonthHeaderModelInstance.createMonthHeader).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if required fields (name, theme) are missing', async () => {
      const invalidDataMissingName: Omit<MonthHeader, 'id'> = { name: '', theme: 'Theme', colorClass: 'class', illustrationUrl: 'url' };
      await expect(monthHeaderService.createNewMonthHeader(invalidDataMissingName)).rejects.toThrow('Name and theme are required for a new month header.');
      expect(mockMonthHeaderModelInstance.createMonthHeader).not.toHaveBeenCalled();

      const invalidDataMissingTheme: Omit<MonthHeader, 'id'> = { name: 'Name', theme: '', colorClass: 'class', illustrationUrl: 'url' };
      await expect(monthHeaderService.createNewMonthHeader(invalidDataMissingTheme)).rejects.toThrow('Name and theme are required for a new month header.');
      expect(mockMonthHeaderModelInstance.createMonthHeader).not.toHaveBeenCalled();
    });

    it('should return null if month header creation fails in model', async () => {
      const newMonthHeaderData: Omit<MonthHeader, 'id'> = { name: 'Dezembro', theme: 'Test Fail', colorClass: 'test-class', illustrationUrl: 'test-url' };
      mockMonthHeaderModelInstance.createMonthHeader.mockResolvedValue(null);

      const result = await monthHeaderService.createNewMonthHeader(newMonthHeaderData);
      expect(result).toBeNull();
      expect(mockMonthHeaderModelInstance.createMonthHeader).toHaveBeenCalledWith(newMonthHeaderData);
      expect(mockMonthHeaderModelInstance.createMonthHeader).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateExistingMonthHeader', () => {
    it('should update an existing month header successfully', async () => {
      const existingHeader: MonthHeader = { id: 1, name: 'Janeiro', theme: 'Theme 1', colorClass: 'class-1', illustrationUrl: 'url-1' };
      const updatedData: Partial<MonthHeader> = { theme: 'Updated Theme' };
      const returnedHeader: MonthHeader = { ...existingHeader, ...updatedData };

      mockMonthHeaderModelInstance.findMonthHeaderById.mockResolvedValue(existingHeader);
      mockMonthHeaderModelInstance.updateMonthHeader.mockResolvedValue(returnedHeader);

      const result = await monthHeaderService.updateExistingMonthHeader(1, updatedData);
      expect(result).toEqual(returnedHeader);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledWith(1);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledTimes(1);
      expect(mockMonthHeaderModelInstance.updateMonthHeader).toHaveBeenCalledWith(1, updatedData);
      expect(mockMonthHeaderModelInstance.updateMonthHeader).toHaveBeenCalledTimes(1);
    });

    it('should return null if month header to update is not found', async () => {
      mockMonthHeaderModelInstance.findMonthHeaderById.mockResolvedValue(null);

      const result = await monthHeaderService.updateExistingMonthHeader(999, { theme: 'Non Existent' });
      expect(result).toBeNull();
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledWith(999);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledTimes(1);
      expect(mockMonthHeaderModelInstance.updateMonthHeader).not.toHaveBeenCalled();
    });

    it('should return null if update fails in model even if month header exists', async () => {
      const existingHeader: MonthHeader = { id: 1, name: 'Janeiro', theme: 'Theme 1', colorClass: 'class-1', illustrationUrl: 'url-1' };
      const updatedData: Partial<MonthHeader> = { theme: 'Updated Theme' };

      mockMonthHeaderModelInstance.findMonthHeaderById.mockResolvedValue(existingHeader);
      mockMonthHeaderModelInstance.updateMonthHeader.mockResolvedValue(null);

      const result = await monthHeaderService.updateExistingMonthHeader(1, updatedData);
      expect(result).toBeNull();
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledWith(1);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledTimes(1);
      expect(mockMonthHeaderModelInstance.updateMonthHeader).toHaveBeenCalledWith(1, updatedData);
      expect(mockMonthHeaderModelInstance.updateMonthHeader).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteExistingMonthHeader', () => {
    it('should delete an existing month header successfully', async () => {
      const existingHeader: MonthHeader = { id: 1, name: 'Janeiro', theme: 'Theme 1', colorClass: 'class-1', illustrationUrl: 'url-1' };
      mockMonthHeaderModelInstance.findMonthHeaderById.mockResolvedValue(existingHeader);
      mockMonthHeaderModelInstance.deleteMonthHeader.mockResolvedValue(true);

      const result = await monthHeaderService.deleteExistingMonthHeader(1);
      expect(result).toBe(true);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledWith(1);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledTimes(1);
      expect(mockMonthHeaderModelInstance.deleteMonthHeader).toHaveBeenCalledWith(1);
      expect(mockMonthHeaderModelInstance.deleteMonthHeader).toHaveBeenCalledTimes(1);
    });

    it('should return false if month header to delete is not found', async () => {
      mockMonthHeaderModelInstance.findMonthHeaderById.mockResolvedValue(null);

      const result = await monthHeaderService.deleteExistingMonthHeader(999);
      expect(result).toBe(false);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledWith(999);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledTimes(1);
      expect(mockMonthHeaderModelInstance.deleteMonthHeader).not.toHaveBeenCalled();
    });

    it('should return false if deletion fails in model even if month header exists', async () => {
      const existingHeader: MonthHeader = { id: 1, name: 'Janeiro', theme: 'Theme 1', colorClass: 'class-1', illustrationUrl: 'url-1' };
      mockMonthHeaderModelInstance.findMonthHeaderById.mockResolvedValue(existingHeader);
      mockMonthHeaderModelInstance.deleteMonthHeader.mockResolvedValue(false);

      const result = await monthHeaderService.deleteExistingMonthHeader(1);
      expect(result).toBe(false);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledWith(1);
      expect(mockMonthHeaderModelInstance.findMonthHeaderById).toHaveBeenCalledTimes(1);
      expect(mockMonthHeaderModelInstance.deleteMonthHeader).toHaveBeenCalledWith(1);
      expect(mockMonthHeaderModelInstance.deleteMonthHeader).toHaveBeenCalledTimes(1);
    });
  });
});