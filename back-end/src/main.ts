import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


const { DynamoDB } = require("@aws-sdk/client-dynamodb");

(async () => {
  const client = new DynamoDB({ region: "us-east-1" });
  try {
    const results = await client.send('');
    //process data
  } catch (err) {
    console.error(err);
    //error Handling
  }
})();