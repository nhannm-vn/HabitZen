import * as firebaseAdmin from 'firebase-admin';
import { readFileSync } from 'fs';
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const serviceAccount = JSON.parse(
  readFileSync('firebase-service-account.json', 'utf8'),
);
if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
  });
}
export default firebaseAdmin;
