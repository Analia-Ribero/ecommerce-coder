// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, addDoc, doc } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQVs6ShKf1VHObm2awVTneSrNE5AcuCF4",
  authDomain: "ecommerce-react-coder.firebaseapp.com",
  projectId: "ecommerce-react-coder",
  storageBucket: "ecommerce-react-coder.appspot.com",
  messagingSenderId: "530662312247",
  appId: "1:530662312247:web:27bdf6aa1e677bc801f2b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);



export async function getAllItems(){
  try {
    const data = collection (db, "items");
    const itemsCollection = await getDocs(data);
    const result = itemsCollection.docs.map(items=>{
      return{...items.data(), id : items.id}
    });
    return result
  }
  catch (err){
    console.log (err)
  }
}
export async function getItem(itemId){
try{
  const data = collection (db,"items");
  const itemsRef = doc (data, itemId);

  let resultDoc = await getDoc (itemsRef);
  return{...resultDoc.data(), id : resultDoc.id}
}
catch(err){
  console.log(err)
}
}
 export async function generateOrder(orderData){
  try{
    const miCollection = collection(db, "orders");
    const orden = await addDoc (miCollection, orderData);
    console.log (orden.id)
  }
  catch(error){
    console.error('error en el envio de datos: ', error);
  }
} 