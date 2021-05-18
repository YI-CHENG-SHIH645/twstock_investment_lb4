import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FinancialDataDataSource} from '../datasources';
import {LegalPersonBuySell, LegalPersonBuySellRelations} from '../models';

export class LegalPersonBuySellRepository extends DefaultCrudRepository<
  LegalPersonBuySell,
  typeof LegalPersonBuySell.prototype.id,
  LegalPersonBuySellRelations
> {
  constructor(
    @inject('datasources.financial_data') dataSource: FinancialDataDataSource,
  ) {
    super(LegalPersonBuySell, dataSource);
  }
}
