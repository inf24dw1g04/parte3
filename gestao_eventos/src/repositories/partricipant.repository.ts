import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SistemaGestaoDataSource} from '../datasources';
import {Partricipant, PartricipantRelations} from '../models';

export class PartricipantRepository extends DefaultCrudRepository<
  Partricipant,
  typeof Partricipant.prototype.id,
  PartricipantRelations
> {
  constructor(
    @inject('datasources.sistema_gestao') dataSource: SistemaGestaoDataSource,
  ) {
    super(Partricipant, dataSource);
  }
}
