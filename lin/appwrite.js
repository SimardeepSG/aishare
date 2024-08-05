import { Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.reactapp.aura",
  projectId: "66b05557003153d6fe8c",
  databaseId: "66b058410015cbd53766",
  userCollectionId: "66b058690034bc0fe735",
  videoCollectionId: "66b058a000239597e828",
  storageId: "66b05aec001f598cc2f8",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.
