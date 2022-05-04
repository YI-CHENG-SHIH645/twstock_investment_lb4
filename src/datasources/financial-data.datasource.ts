import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'financial_data',
  connector: 'postgresql',
  url: '',
  host: '',
  port: 5432,
  user: 'postgres',
  password: '',
  database: 'financial_data'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FinancialDataDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'financial_data';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.financial_data', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
