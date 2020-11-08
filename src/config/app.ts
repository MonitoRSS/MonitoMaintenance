import fs from 'fs';
import path from 'path';
import ConfigType from '../types/config';

const configPath = path.join(__dirname, '..', '..', 'config.json');

const appConfig: ConfigType = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export default appConfig;
