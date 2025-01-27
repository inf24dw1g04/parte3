import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Organizer} from '../models';
import {OrganizerRepository} from '../repositories';

export class OrganizerControllerController {
  constructor(
    @repository(OrganizerRepository)
    public organizerRepository : OrganizerRepository,
  ) {}

  @post('/organizers')
  @response(200, {
    description: 'Organizer model instance',
    content: {'application/json': {schema: getModelSchemaRef(Organizer)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Organizer, {
            title: 'NewOrganizer',
            exclude: ['id'],
          }),
        },
      },
    })
    organizer: Omit<Organizer, 'id'>,
  ): Promise<Organizer> {
    return this.organizerRepository.create(organizer);
  }

  @get('/organizers/count')
  @response(200, {
    description: 'Organizer model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Organizer) where?: Where<Organizer>,
  ): Promise<Count> {
    return this.organizerRepository.count(where);
  }

  @get('/organizers')
  @response(200, {
    description: 'Array of Organizer model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Organizer, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Organizer) filter?: Filter<Organizer>,
  ): Promise<Organizer[]> {
    return this.organizerRepository.find(filter);
  }

  @patch('/organizers')
  @response(200, {
    description: 'Organizer PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Organizer, {partial: true}),
        },
      },
    })
    organizer: Organizer,
    @param.where(Organizer) where?: Where<Organizer>,
  ): Promise<Count> {
    return this.organizerRepository.updateAll(organizer, where);
  }

  @get('/organizers/{id}')
  @response(200, {
    description: 'Organizer model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Organizer, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Organizer, {exclude: 'where'}) filter?: FilterExcludingWhere<Organizer>
  ): Promise<Organizer> {
    return this.organizerRepository.findById(id, filter);
  }

  @patch('/organizers/{id}')
  @response(204, {
    description: 'Organizer PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Organizer, {partial: true}),
        },
      },
    })
    organizer: Organizer,
  ): Promise<void> {
    await this.organizerRepository.updateById(id, organizer);
  }

  @put('/organizers/{id}')
  @response(204, {
    description: 'Organizer PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() organizer: Organizer,
  ): Promise<void> {
    await this.organizerRepository.replaceById(id, organizer);
  }

  @del('/organizers/{id}')
  @response(204, {
    description: 'Organizer DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.organizerRepository.deleteById(id);
  }
}
