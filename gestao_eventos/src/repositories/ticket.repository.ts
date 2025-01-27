import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {SistemaGestaoDataSource} from '../datasources';
import {Ticket, TicketRelations, Partricipant} from '../models';
import {PartricipantRepository} from './partricipant.repository';

export class TicketRepository extends DefaultCrudRepository<
  Ticket,
  typeof Ticket.prototype.id,
  TicketRelations
> {

  public readonly partricipants: HasManyRepositoryFactory<Partricipant, typeof Ticket.prototype.id>;

  constructor(
    @inject('datasources.sistema_gestao') dataSource: SistemaGestaoDataSource, @repository.getter('PartricipantRepository') protected partricipantRepositoryGetter: Getter<PartricipantRepository>,
  ) {
    super(Ticket, dataSource);
    this.partricipants = this.createHasManyRepositoryFactoryFor('partricipants', partricipantRepositoryGetter,);
    this.registerInclusionResolver('partricipants', this.partricipants.inclusionResolver);
  }
}
