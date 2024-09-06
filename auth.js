import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")  // Ensure the correct Appwrite endpoint
  .setProject("66dae427002933a4fe83");          // Ensure the correct project ID

const account = new Account(client);

export { account, client };
