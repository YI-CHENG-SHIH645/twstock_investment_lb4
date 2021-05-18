import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FinancialDataDataSource} from '../datasources';
import {TradingRecord, TradingRecordRelations} from '../models';

export class TradingRecordRepository extends DefaultCrudRepository<
  TradingRecord,
  typeof TradingRecord.prototype.tid,
  TradingRecordRelations
> {
  constructor(
    @inject('datasources.financial_data') dataSource: FinancialDataDataSource,
  ) {
    super(TradingRecord, dataSource);
  }
}
