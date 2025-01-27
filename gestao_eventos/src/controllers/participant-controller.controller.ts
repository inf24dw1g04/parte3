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
import {Partricipant} from '../models';
import {PartricipantRepository} from '../repositories';

export class ParticipantControllerController {
  constructor(
    @repository(PartricipantRepository)
    public partricipantRepository : PartricipantRepository,
  ) {}

  @post('/partricipants')
  @response(200, {
    description: 'Partricipant model instance',
    content: {'application/json': {schema: getModelSchemaRef(Partricipant)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partricipant, {
            title: 'NewPartricipant',
            exclude: ['id'],
          }),
        },
      },
    })
    partricipant: Omit<Partricipant, 'id'>,
  ): Promise<Partricipant> {
    return this.partricipantRepository.create(partricipant);
  }

  @get('/partricipants/count')
  @response(200, {
    description: 'Partricipant model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Partricipant) where?: Where<Partricipant>,
  ): Promise<Count> {
    return this.partricipantRepository.count(where);
  }

  @get('/partricipants')
  @response(200, {
    description: 'Array of Partricipant model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Partricipant, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Partricipant) filter?: Filter<Partricipant>,
  ): Promise<Partricipant[]> {
    return this.partricipantRepository.find(filter);
  }

  @patch('/partricipants')
  @response(200, {
    description: 'Partricipant PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partricipant, {partial: true}),
        },
      },
    })
    partricipant: Partricipant,
    @param.where(Partricipant) where?: Where<Partricipant>,
  ): Promise<Count> {
    return this.partricipantRepository.updateAll(partricipant, where);
  }

  @get('/partricipants/{id}')
  @response(200, {
    description: 'Partricipant model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Partricipant, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Partricipant, {exclude: 'where'}) filter?: FilterExcludingWhere<Partricipant>
  ): Promise<Partricipant> {
    return this.partricipantRepository.findById(id, filter);
  }

  @patch('/partricipants/{id}')
  @response(204, {
    description: 'Partricipant PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partricipant, {partial: true}),
        },
      },
    })
    partricipant: Partricipant,
  ): Promise<void> {
    await this.partricipantRepository.updateById(id, partricipant);
  }

  @put('/partricipants/{id}')
  @response(204, {
    description: 'Partricipant PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() partricipant: Partricipant,
  ): Promise<void> {
    await this.partricipantRepository.replaceById(id, partricipant);
  }

  @del('/partricipants/{id}')
  @response(204, {
    description: 'Partricipant DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.partricipantRepository.deleteById(id);
  }
}
