import { Avatars, Account, Client, ID, Databases, Query } from "react-native-appwrite";

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

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}


//tell us what user we will have 
export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;
    // if there is no current account then throw the erroe otherwise get it via below 

    const currentUser = await databases.listDocuments(
      config.databaseId, //from which databace
      config.userCollectionId, //from which collection
      [Query.equal('accountId', currentAccount.$id)]
      //specify the query aka how you want to get it
      //we use appwrite native query onject -> has many different methods
      //we want to ensure that the account id is equal to the current account id
    )

    if (!currentUser) throw Error;
    // if there is no current user then we throw an error

    return currentUser.documents[0];
    //if everything is good and we have a user we can return current user 

  } catch (error) {
    console.log(error)
  }
}
