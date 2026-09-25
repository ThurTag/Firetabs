import { Injectable } from '@angular/core';

import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy
} from 'firebase/firestore';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { initializeApp } from 'firebase/app';

const app = initializeApp(environment.firebaseConfig);
const firestore = getFirestore(app);

export interface Item {
  id?: string;
  name: string;
  description: string;
  createdAt?: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {

  getItems(): Observable<Item[]> {
    return new Observable<Item[]>(subscriber => {
      const itemsCollectionRef = collection(firestore, 'items');
      const q = query(itemsCollectionRef, orderBy('createdAt', 'desc'));

      const unsubscribe = onSnapshot(
        q,
        snapshot => {
          const items = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Item[];

          subscriber.next(items);
        },
        error => subscriber.error(error)
      );

      return unsubscribe;
    });
  }

  getItem(id: string): Observable<Item | undefined> {
    return new Observable<Item | undefined>(subscriber => {
      const itemDocRef = doc(firestore, `items/${id}`);

      const unsubscribe = onSnapshot(
        itemDocRef,
        snapshot => {
          if (snapshot.exists()) {
            subscriber.next({
              id: snapshot.id,
              ...snapshot.data()
            } as Item);
          } else {
            subscriber.next(undefined);
          }
        },
        error => subscriber.error(error)
      );

      return unsubscribe;
    });
  }

  addItem(item: Item) {
    const itemsCollectionRef = collection(firestore, 'items');

    return addDoc(itemsCollectionRef, {
      ...item,
      createdAt: Date.now()
    });
  }

  updateItem(item: Item) {
    const itemDocRef = doc(firestore, `items/${item.id}`);

    return updateDoc(itemDocRef, {
      name: item.name,
      description: item.description
    });
  }

  deleteItem(id: string) {
    const itemDocRef = doc(firestore, `items/${id}`);

    return deleteDoc(itemDocRef);
  }
}
