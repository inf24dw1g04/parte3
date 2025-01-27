import {Entity, model, property} from '@loopback/repository';

@model()
export class Partricipant extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'number',
    required: true,
  })
  ticketId: number;


  constructor(data?: Partial<Partricipant>) {
    super(data);
  }
}

export interface PartricipantRelations {
  // describe navigational properties here
}

export type PartricipantWithRelations = Partricipant & PartricipantRelations;
