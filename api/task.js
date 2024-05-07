import { ListTablesCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
    UpdateCommand,
    PutItemCommand,
    DynamoDBDocumentClient,
    ScanCommand,
    DeleteCommand,
} from '@aws-sdk/lib-dynamodb';
import crypto from 'crypto';

const client = new DynamoDBClient({ region: 'us-west-1' });
const docClient = DynamoDBDocumentClient.from(client);

export const fetchTasks = async () => {
    const command = new ScanCommand({
        ProjectionExpression: "id, nameTask, completed",
        TableName: "Tasks",
    });

    const response = await docClient.send(command);

    return response;
};

export const CreateTasks = async ({nameTask, completed}) => {
    const uuid = crypto.randomUUID();

    const command = new PutCommand({
        TableName: "Tasks",
        Item: {
            id: uuid,
            nameTask,
            completed,
        },
    });

    const response = await docClient.send(command);

    return response;
};

export const updateTasks = async ({ id, nameTask, completed }) => {
    const command = new UpdateCommand({
        TableName: "Tasks",
        Key: {
            id,
        },
        UpdateExpression: "set nameTask = :n, completed = :c",
        ExpressionAttributeValues: {
            ":n": nameTask,
            ":c": completed,
        },
        ReturnValues: "ALL_NEW",
    });

    const response = await docClient.send(command);

    return response;
};

export const deleteTasks = async (id) => {
    const command = new DeleteCommand({
        TableName: "Tasks",
        Key: {
            id
        },
    })

    const response = await docClient.send(command);

    return response;
};