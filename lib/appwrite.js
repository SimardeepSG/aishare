import { Avatars, Account, Client, ID, Databases } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.reactapp.aura",
  projectId: "66b05557003153d6fe8c",
  databaseId: "66b058410015cbd53766",
  userCollectionId: "66b058a000239597e828",
  videoCollectionId: "66b058690034bc0fe735",
  storageId: "66b05aec001f598cc2f8",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
//need a database instance

export const createUser = async (email, password, username) => {
  //we are waiting to the function needs to be async
  //passing information about current user through parameters
  //automatically created a try and catch block
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;

    //get initials is a special fucntion that gets the initials of the user's name
  } catch (error) {
    console.log(error);
    //console logged the error
    throw new Error(error);
  }
};

//creating the sign in function

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
