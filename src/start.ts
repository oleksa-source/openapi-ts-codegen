import { generate } from './index';

const fetch = require('node-fetch');
const path = require('path');

const specURL = (remoteHost: string) => `${remoteHost}/swagger/v1/swagger.json`;
const generationOutputPath = path.resolve(__dirname, '../', 'generatedOutput')

fetch(specURL('http://localhost:5000')).then(async (spec: any) => {
   generate({
        input: await spec.json(),
        output: generationOutputPath,
        useOptions: true,
        useUnionTypes: true,
        exportSchemas: false,
        exportCore: true,
        exportServices: true, //TODO: fix service method names
        exportModels: true,
    });
})
