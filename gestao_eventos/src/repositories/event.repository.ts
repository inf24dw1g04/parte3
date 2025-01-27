import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {SistemaGestaoDataSource} from '../datasources';
import {Event, EventRelations, Ticket} from '../models';
import {TicketRepository} from './ticket.repository';

export class EventRepository extends DefaultCrudRepository<
  Event,
  typeof Event.prototype.id,
  EventRelations
> {

  public readonly tickets: HasManyRepositoryFactory<Ticket, typeof Event.prototype.id>;

  constructor(
    @inject('datasources.sistema_gestao') dataSource: SistemaGestaoDataSource, @repository.getter('TicketRepository') protected ticketRepositoryGetter: Getter<TicketRepository>,
  ) {
    super(Event, dataSource);
    this.tickets = this.createHasManyRepositoryFactoryFor('tickets', ticketRepositoryGetter,);
    this.registerInclusionResolver('tickets', this.tickets.inclusionResolver);
  }
}
