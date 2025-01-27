import {Entity, model, property, hasMany} from '@loopback/repository';
import {Event} from './event.model';

@model()
export class Organizer extends Entity {
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
  phone: string;

  @hasMany(() => Event)
  events: Event[];

  constructor(data?: Partial<Organizer>) {
    super(data);
  }
}

export interface OrganizerRelations {
  // describe navigational properties here
}

export type OrganizerWithRelations = Organizer & OrganizerRelations;
