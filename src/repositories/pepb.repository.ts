import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FinancialDataDataSource} from '../datasources';
import {Pepb, PepbRelations} from '../models';

export class PepbRepository extends DefaultCrudRepository<
  Pepb,
  typeof Pepb.prototype.id,
  PepbRelations
> {
  constructor(
    @inject('datasources.financial_data') dataSource: FinancialDataDataSource,
  ) {
    super(Pepb, dataSource);
  }
}
