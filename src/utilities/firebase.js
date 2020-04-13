import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const app = firebase.app();
export const db = app.firestore();
