import { useState, useEffect } from "react";
import { db } from "./firebase.confiig";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    ingridients: [],
    steps: [],
  });

  const recipesCollectionRef = collection(db, 'recipes');

  useEffect(() => {
    onSnapshot(recipesCollectionRef, snapshot => {
      setRecipes(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data()
        }
      }))
    })
  }, []);

  console.log(recipes);
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
