import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const entryTableName = 'nexus-over-vol2-entries';
const audienceTableName = 'nexus-over-vol2-audiences';
const prelimEntryTableName = 'nexus-over-vol2-prelim-entries';
const battleTableName = 'nexus-over-vol2-battles';

export const handler = async (event, context) => {
  let body;
  let requestJSON;
  let statusCode = 200;
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    switch (event.routeKey) {
      // case "DELETE /entries/{id}":
      //   await dynamo.send(
      //     new DeleteCommand({
      //       TableName: entryTableName,
      //       Key: {
      //         id: event.pathParameters.id,
      //       },
      //     })
      //   );
      //   body = `Deleted entry ${event.pathParameters.id}`;
      //   break;
      case 'GET /entries':
        body = await dynamo.send(new ScanCommand({ TableName: entryTableName }));
        body = body.Items;
        break;
      case 'PUT /entries':
        requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: entryTableName,
            Item: {
              id: requestJSON.id,
              realName: requestJSON.realName,
              entryName: requestJSON.entryName,
              rep: requestJSON.rep,
              generation: requestJSON.generation,
              genre: requestJSON.genre,
              instagram: requestJSON.instagram,
            },
          })
        );
        body = `Put entry ${requestJSON.id}`;
        break;
      // case "DELETE /audiences/{id}":
      //   await dynamo.send(
      //     new DeleteCommand({
      //       TableName: audienceTableName,
      //       Key: {
      //         id: event.pathParameters.id,
      //       },
      //     })
      //   );
      //   body = `Deleted audience ${event.pathParameters.id}`;
      //   break;
      case 'GET /audiences':
        body = await dynamo.send(new ScanCommand({ TableName: audienceTableName }));
        body = body.Items;
        break;
      case 'PUT /audiences':
        requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: audienceTableName,
            Item: {
              id: requestJSON.id,
              realName: requestJSON.realName,
              generation: requestJSON.generation,
              genre: requestJSON.genre,
            },
          })
        );
        body = `Put audience ${requestJSON.id}`;
        break;
      // case "DELETE /prelim-entries/{id}":
      //   await dynamo.send(
      //     new DeleteCommand({
      //       TableName: prelimEntryTableName,
      //       Key: {
      //         id: event.pathParameters.id,
      //       },
      //     })
      //   );
      //   body = `Deleted prelim-entry ${event.pathParameters.id}`;
      //   break;
      case 'GET /prelim-entries':
        body = await dynamo.send(new ScanCommand({ TableName: prelimEntryTableName }));
        body = body.Items;
        break;
      // case "PUT /prelim-entries":
      //   requestJSON = JSON.parse(event.body);
      //   await dynamo.send(
      //     new PutCommand({
      //       TableName: prelimEntryTableName,
      //       Item: {
      //         id: requestJSON.id,
      //         realName: requestJSON.realName,
      //         entryName: requestJSON.entryName,
      //         rep: requestJSON.rep,
      //         generation: requestJSON.generation,
      //         genre: requestJSON.genre,
      //         instagram: requestJSON.instagram,
      //       },
      //     })
      //   );
      //   body = `Put prelim-entry ${requestJSON.id}`;
      //   break;
      case 'GET /battles':
        body = await dynamo.send(new ScanCommand({ TableName: battleTableName }));
        body = body.Items;
        break;
      case 'PUT /battles':
        requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: battleTableName,
            Item: {
              id: requestJSON.id,
              round: requestJSON.round,
              position: requestJSON.position,
              name: requestJSON.name,
            },
          })
        );
        body = `Put battle ${requestJSON.id}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
