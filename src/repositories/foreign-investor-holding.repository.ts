import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FinancialDataDataSource} from '../datasources';
import {ForeignInvestorHolding, ForeignInvestorHoldingRelations} from '../models';

export class ForeignInvestorHoldingRepository extends DefaultCrudRepository<
  ForeignInvestorHolding,
  typeof ForeignInvestorHolding.prototype.id,
  ForeignInvestorHoldingRelations
> {
  constructor(
    @inject('datasources.financial_data') dataSource: FinancialDataDataSource,
  ) {
    super(ForeignInvestorHolding, dataSource);
  }
}
