import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'legal_person_buy_sell'}
  }
})
export class LegalPersonBuySell extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 15,
    postgresql: {columnName: 'sid', dataType: 'character varying', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  sid: string;

  @property({
    type: 'string',
    required: true,
    length: 15,
    postgresql: {columnName: 'sname', dataType: 'character varying', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  sname: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'foreign_investor', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  foreignInvestor?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'investment_trust', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  investmentTrust?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'dealer', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  dealer?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'institutional_investor', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  institutionalInvestor?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'date', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  date?: string;

  @property({
    type: 'string',
    required: true,
    length: 21,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'character varying', dataLength: 21, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  id: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LegalPersonBuySell>) {
    super(data);
  }
}

export interface LegalPersonBuySellRelations {
  // describe navigational properties here
}

export type LegalPersonBuySellWithRelations = LegalPersonBuySell & LegalPersonBuySellRelations;
