import { MikroORM } from '@mikro-orm/core';
import DeliveryRecord from '../entities/DeliveryRecord';

const connectToDatabase = async (uri: string) => {
  const orm = await MikroORM.init({
    entities: [DeliveryRecord],
    type: 'mongo',
    clientUrl: uri,
    // This app should only read from records
    ensureIndexes: false,
  });
  return orm;
  // console.log(orm.em); // access EntityManager via `em` property
};

export default connectToDatabase;
