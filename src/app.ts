import appConfig from './config/app';
import connectToDatabase from './utils/connectToDatabase';

(async function start() {
  try {
    await connectToDatabase(appConfig.databaseURI, {
      // Indexes are ensured within the delivery service app
      ensureIndexes: false
    });
    console.log('Conencted to mongo');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}());
