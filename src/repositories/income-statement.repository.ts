import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FinancialDataDataSource} from '../datasources';
import {IncomeStatement, IncomeStatementRelations} from '../models';

export class IncomeStatementRepository extends DefaultCrudRepository<
  IncomeStatement,
  typeof IncomeStatement.prototype.id,
  IncomeStatementRelations
> {
  constructor(
    @inject('datasources.financial_data') dataSource: FinancialDataDataSource,
  ) {
    super(IncomeStatement, dataSource);
  }
}
