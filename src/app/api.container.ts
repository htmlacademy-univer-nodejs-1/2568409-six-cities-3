import {Container} from 'inversify';
import {LoggerInterface} from '../common/logger/logger.interface.js';
import {ConfigInterface} from '../common/config/config.interface.js';
import {DatabaseClientInterface} from '../database-client/database-client.interface.js';
import {ConfigSchema} from '../common/config/config.schema.js';
import {Component} from '../types/component.enum.js';
import Application from './application.js';
import LoggerService from '../common/logger/logger.service.js';
import ConfigService from '../common/config/config.service.js';
import MongoClientService from '../database-client/mongo-client.service.js';

export function createApplicationContainer() {
  const applicationContainer = new Container();
  applicationContainer.bind<Application>(Component.Application).to(Application).inSingletonScope();
  applicationContainer.bind<LoggerInterface>(Component.LoggerInterface).to(LoggerService).inSingletonScope();
  applicationContainer.bind<ConfigInterface<ConfigSchema>>(Component.ConfigInterface).to(ConfigService).inSingletonScope();
  applicationContainer.bind<DatabaseClientInterface>(Component.DatabaseClientInterface).to(MongoClientService).inSingletonScope();

  return applicationContainer;
}
