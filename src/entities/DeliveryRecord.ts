import {
  Entity, PrimaryKey, Property,
} from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

@Entity({
  collection: 'delivery_records_service',
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
}

export default DeliveryRecord;
