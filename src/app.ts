import appConfig from './config/app';
import connectToDatabase from './utils/connectToDatabase';

(async function start() {
  try {
    await connectToDatabase(appConfig.databaseURI);
    console.log('Conencted to mongo');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}());
