import { FactoryMapper } from './FactoryMapper';

export class Factory {
  constructor() {
    this.factoryMapper = new FactoryMapper();
  }

  createElement(item) {
    const { type } = item;
    const factory = this.factoryMapper.factory(type);
    return factory?.create(item);
  }

  create(item) {
    return this.createElement(item, null);
  }
}
