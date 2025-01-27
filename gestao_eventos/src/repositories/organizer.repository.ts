import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {SistemaGestaoDataSource} from '../datasources';
import {Organizer, OrganizerRelations, Event} from '../models';
import {EventRepository} from './event.repository';

export class OrganizerRepository extends DefaultCrudRepository<
  Organizer,
  typeof Organizer.prototype.id,
  OrganizerRelations
> {

  public readonly events: HasManyRepositoryFactory<Event, typeof Organizer.prototype.id>;

  constructor(
    @inject('datasources.sistema_gestao') dataSource: SistemaGestaoDataSource, @repository.getter('EventRepository') protected eventRepositoryGetter: Getter<EventRepository>,
  ) {
    super(Organizer, dataSource);
    this.events = this.createHasManyRepositoryFactoryFor('events', eventRepositoryGetter,);
    this.registerInclusionResolver('events', this.events.inclusionResolver);
  }
}
