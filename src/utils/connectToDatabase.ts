import { MikroORM } from '@mikro-orm/core';
import appConfig from '../config/app';
import DeliveryRecord from '../entities/DeliveryRecord';

const connectToDatabase = async () => {
  const orm = await MikroORM.init({
    entities: [DeliveryRecord],
    type: 'mongo',
    clientUrl: appConfig.databaseURI,
    // This app should only read from records
    ensureIndexes: false,
  });
  return orm;
  // console.log(orm.em); // access EntityManager via `em` property
};

export default connectToDatabase;
