import connectToDatabase from './utils/connectToDatabase';

(async function start() {
  try {
    await connectToDatabase();
    console.log('Conencted to mongo');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}());
