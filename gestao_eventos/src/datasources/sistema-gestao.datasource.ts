import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'sistema_gestao',
  connector: 'mysql',
  url: '',
  host: 'mysql',
  port: 3306,
  user: 'root',
  password: '12345678',
  database: 'sistema_gestao'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class SistemaGestaoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'sistema_gestao';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.sistema_gestao', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
