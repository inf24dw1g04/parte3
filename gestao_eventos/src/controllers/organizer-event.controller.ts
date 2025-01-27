import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Organizer,
  Event,
} from '../models';
import {OrganizerRepository} from '../repositories';

export class OrganizerEventController {
  constructor(
    @repository(OrganizerRepository) protected organizerRepository: OrganizerRepository,
  ) { }

  @get('/organizers/{id}/events', {
    responses: {
      '200': {
        description: 'Array of Organizer has many Event',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Event)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Event>,
  ): Promise<Event[]> {
    return this.organizerRepository.events(id).find(filter);
  }

  @post('/organizers/{id}/events', {
    responses: {
      '200': {
        description: 'Organizer model instance',
        content: {'application/json': {schema: getModelSchemaRef(Event)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Organizer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Event, {
            title: 'NewEventInOrganizer',
            exclude: ['id'],
            optional: ['organizerId']
          }),
        },
      },
    }) event: Omit<Event, 'id'>,
  ): Promise<Event> {
    return this.organizerRepository.events(id).create(event);
  }

  @patch('/organizers/{id}/events', {
    responses: {
      '200': {
        description: 'Organizer.Event PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Event, {partial: true}),
        },
      },
    })
    event: Partial<Event>,
    @param.query.object('where', getWhereSchemaFor(Event)) where?: Where<Event>,
  ): Promise<Count> {
    return this.organizerRepository.events(id).patch(event, where);
  }

  @del('/organizers/{id}/events', {
    responses: {
      '200': {
        description: 'Organizer.Event DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Event)) where?: Where<Event>,
  ): Promise<Count> {
    return this.organizerRepository.events(id).delete(where);
  }
}
