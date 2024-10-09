import SwaggerParser from 'swagger-parser';
import { compile } from 'json-schema-to-typescript'
import fs from "node:fs";

(async () => {
    const swaggerDoc = await SwaggerParser.dereference("./swagger.json");

    const apiSchema = swaggerDoc.paths["/api/users/login"]["post"];
    const responseSchema = apiSchema.responses['200'].content['application/json'].schema;
    const requestBody = apiSchema.requestBody.content['application/json'].schema;

   const responseTypeFile = await compile(responseSchema, "response-type");
   const requestBodyTypeFile = await compile(requestBody, "request-body-type");

    fs.writeFileSync("./src/__generated__/response-type.ts", responseTypeFile);
    fs.writeFileSync("./src/__generated__/request-body-type.ts", requestBodyTypeFile);
})()
