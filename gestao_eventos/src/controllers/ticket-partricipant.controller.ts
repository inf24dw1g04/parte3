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
  Ticket,
  Partricipant,
} from '../models';
import {TicketRepository} from '../repositories';

export class TicketPartricipantController {
  constructor(
    @repository(TicketRepository) protected ticketRepository: TicketRepository,
  ) { }

  @get('/tickets/{id}/partricipants', {
    responses: {
      '200': {
        description: 'Array of Ticket has many Partricipant',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Partricipant)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Partricipant>,
  ): Promise<Partricipant[]> {
    return this.ticketRepository.partricipants(id).find(filter);
  }

  @post('/tickets/{id}/partricipants', {
    responses: {
      '200': {
        description: 'Ticket model instance',
        content: {'application/json': {schema: getModelSchemaRef(Partricipant)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Ticket.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partricipant, {
            title: 'NewPartricipantInTicket',
            exclude: ['id'],
            optional: ['ticketId']
          }),
        },
      },
    }) partricipant: Omit<Partricipant, 'id'>,
  ): Promise<Partricipant> {
    return this.ticketRepository.partricipants(id).create(partricipant);
  }

  @patch('/tickets/{id}/partricipants', {
    responses: {
      '200': {
        description: 'Ticket.Partricipant PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partricipant, {partial: true}),
        },
      },
    })
    partricipant: Partial<Partricipant>,
    @param.query.object('where', getWhereSchemaFor(Partricipant)) where?: Where<Partricipant>,
  ): Promise<Count> {
    return this.ticketRepository.partricipants(id).patch(partricipant, where);
  }

  @del('/tickets/{id}/partricipants', {
    responses: {
      '200': {
        description: 'Ticket.Partricipant DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Partricipant)) where?: Where<Partricipant>,
  ): Promise<Count> {
    return this.ticketRepository.partricipants(id).delete(where);
  }
}
