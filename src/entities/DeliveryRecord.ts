import {
  Entity, Index, PrimaryKey, Property,
} from '@mikro-orm/core';
import { EntityManager, ObjectId } from '@mikro-orm/mongodb';

@Entity({
  collection: 'delivery_records_service',
})
@Index({
  properties: ['comment'],
  type: 'text'
})
class DeliveryRecord {
  @PrimaryKey()
  _id!: ObjectId;

  @Property()
  articleID!: string;

  @Property()
  feedURL!: string;

  @Property()
  channel!: string;

  @Property()
  delivered!: boolean;

  @Property({ nullable: true })
  comment?: string;

  @Property()
  addedAt = new Date();

  /**
   * Get all records where the request failed because it was missing permissions.
   */
  static getRecordsWithBadPermissions(em: EntityManager) {
    return em.find(this, {
      comment: {
        $re: 'Bad status code 403'
      }
    });
  }
}

export default DeliveryRecord;
