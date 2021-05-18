import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FinancialDataDataSource} from '../datasources';
import {Dividend, DividendRelations} from '../models';

export class DividendRepository extends DefaultCrudRepository<
  Dividend,
  typeof Dividend.prototype.id,
  DividendRelations
> {
  constructor(
    @inject('datasources.financial_data') dataSource: FinancialDataDataSource,
  ) {
    super(Dividend, dataSource);
  }
}
