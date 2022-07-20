import { Module } from '@nestjs/common';
import { DynamoDBClient, BatchExecuteStatementCommand } from "@aws-sdk/client-dynamodb";

@Module({
    providers: []
  })
  export class DynamoDBModule {}