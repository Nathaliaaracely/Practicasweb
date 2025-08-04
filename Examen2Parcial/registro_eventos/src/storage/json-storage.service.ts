import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class JsonStorageService<T extends { id: string }> {
  private filePath: string;

  constructor(private readonly dataFolder: string, private readonly fileName: string) {
    this.filePath = path.join(process.cwd(), dataFolder, fileName);
  }

  private async readData(): Promise<T[]> {
    try {
      await fs.mkdir(path.dirname(this.filePath), { recursive: true });
      const json = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(json) as T[];
    } catch (error) {
      if (error.code === 'ENOENT') {
        return []; // Si el archivo no existe, retorna un arreglo vacío
      }
      throw error;
    }
  }

  private async writeData(data: T[]): Promise<void> {
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
  }

  async create(item: Omit<T, 'id'>): Promise<T> {
    const data = await this.readData();
    const newItem = { id: this.generateId(), ...item } as T;
    data.push(newItem);
    await this.writeData(data);
    return newItem;
  }

  async findAll(): Promise<T[]> {
    return this.readData();
  }

  async findOne(id: string): Promise<T | null> {
    const data = await this.readData();
    return data.find((item) => item.id === id) || null;
  }

  async update(id: string, itemUpdate: Partial<T>): Promise<T | null> {
    const data = await this.readData();
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    const updatedItem = { ...data[index], ...itemUpdate };
    data[index] = updatedItem;
    await this.writeData(data);
    return updatedItem;
  }

  async remove(id: string): Promise<boolean> {
    const data = await this.readData();
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    }
    data.splice(index, 1);
    await this.writeData(data);
    return true;
  }

  private generateId(): string {
    // Usamos crypto para generar un ID único.
    const { randomUUID } = require('crypto');
    return randomUUID();
  }
}