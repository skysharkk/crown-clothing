import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./firebase.config";

firebase.initializeApp(config);

export const dataBase = firebase.firestore();

export async function getCollectionDataArray<T>(
  collectionName: string,
  order = ""
): Promise<Array<T> | null> {
  const collectionRef = dataBase.collection(collectionName);
  let snapShot;
  try {
    snapShot = order
      ? await collectionRef.orderBy(order).get()
      : await collectionRef.get();
  } catch (error) {
    throw new Error(error);
  }
  if (snapShot) {
    // eslint-disable-next-line prettier/prettier
    return snapShot.docs.map((doc) => doc.data() as T);
  }
  return null;
}
