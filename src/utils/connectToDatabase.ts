import { Configuration, Connection, IDatabaseDriver, MikroORM, Options } from '@mikro-orm/core';
import DeliveryRecord from '../entities/DeliveryRecord';

const connectToDatabase = async (uri: string, options?: Configuration<IDatabaseDriver<Connection>>|Options<IDatabaseDriver<Connection>>) => {
  const orm = await MikroORM.init({
    entities: [DeliveryRecord],
    type: 'mongo',
    clientUrl: uri,
    ...options
  });
  return orm;
  // console.log(orm.em); // access EntityManager via `em` property
};

export default connectToDatabase;
