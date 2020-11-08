import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';
import connectToDatabase from '../utils/connectToDatabase';
import DeliveryRecord from './DeliveryRecord';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoDriver, MongoEntityManager } from '@mikro-orm/mongodb';
const mongod = new MongoMemoryServer();

describe('entities/DeliveryRecord', () => {
  let dbDriver: MikroORM<IDatabaseDriver<Connection>>;
  let em: MongoEntityManager<MongoDriver>
  beforeAll(async () => {
    const mongoUrl = await mongod.getUri();
    dbDriver = await connectToDatabase(mongoUrl, {
      ensureIndexes: true,
    });
    em = dbDriver.em as MongoEntityManager<MongoDriver>;
  });
  describe('getRecordsWithBadPermissions', () => {
    it('works', async () => {
      await dbDriver.em.nativeInsert(DeliveryRecord, {
        articleID: 'abc',
        channel: 'abc',
        comment: 'Bad status code 403 for article',
        delivered: true,
        feedURL: 'htfff',
      })
      await dbDriver.em.nativeInsert(DeliveryRecord, {
        articleID: 'abc',
        channel: 'abc',
        comment: 'Bad status code 500 for article',
        delivered: true,
        feedURL: 'htfff',
      })
      const found = await DeliveryRecord.getRecordsWithBadPermissions(em)
      expect(found).toHaveLength(1)
    });
  });
  afterAll(async () => {
    await mongod.stop()
    await dbDriver.close(true);
  })
});
