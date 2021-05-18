import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FinancialDataDataSource} from '../datasources';
import {BalanceSheet, BalanceSheetRelations} from '../models';

export class BalanceSheetRepository extends DefaultCrudRepository<
  BalanceSheet,
  typeof BalanceSheet.prototype.id,
  BalanceSheetRelations
> {
  constructor(
    @inject('datasources.financial_data') dataSource: FinancialDataDataSource,
  ) {
    super(BalanceSheet, dataSource);
  }
}
