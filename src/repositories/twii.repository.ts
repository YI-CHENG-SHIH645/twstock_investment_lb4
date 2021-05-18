import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FinancialDataDataSource} from '../datasources';
import {Twii, TwiiRelations} from '../models';

export class TwiiRepository extends DefaultCrudRepository<
  Twii,
  typeof Twii.prototype.date,
  TwiiRelations
> {
  constructor(
    @inject('datasources.financial_data') dataSource: FinancialDataDataSource,
  ) {
    super(Twii, dataSource);
  }
}
