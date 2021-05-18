import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FinancialDataDataSource} from '../datasources';
import {Ohlcv, OhlcvRelations} from '../models';

export class OhlcvRepository extends DefaultCrudRepository<
  Ohlcv,
  typeof Ohlcv.prototype.id,
  OhlcvRelations
> {
  constructor(
    @inject('datasources.financial_data') dataSource: FinancialDataDataSource,
  ) {
    super(Ohlcv, dataSource);
  }
}
