import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export abstract class AppManager {
  protected drivers: { [key: string]: any } = {};

  constructor() {}

  abstract getDefaultDriver(): string;

  driver(driver?: string): any {
    driver = driver || this.getDefaultDriver();

    if (!driver) {
      throw new NotFoundException(`Unable to resolve NULL driver for [${this.constructor.name}].`);
    }

    if (!this.drivers[driver]) {
      this.drivers[driver] = this.createDriver(driver);
    }

    return this.drivers[driver];
  }

  protected createDriver(driver: string): any {

    const method = `create${driver.charAt(0).toUpperCase() + driver.slice(1)}Driver`;

    if (typeof this[method] === 'function') {
      return this[method]();
    }

    throw new NotFoundException(`Driver [${driver}] not supported.`);
  }

}
