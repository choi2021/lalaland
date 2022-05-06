import firebaseApp from "../firebase/firebase";
import { getDatabase, off, onValue, ref, remove, set } from "firebase/database";

class TodoDB {
  constructor() {
    this.db = getDatabase(firebaseApp);
  }

  getTodo(type, fn, user = "user1") {
    const todoRef = ref(this.db, `users/${user}/${type}`);
    onValue(todoRef, (snapshot) => {
      const data = snapshot.val();
      data && fn(data);
    });
    return () => off(todoRef);
  }

  setTodo(todo, type, user = "user1") {
    set(ref(this.db, `users/${user}/${type}/${todo.id}`), { ...todo });
  }

  deleteTodo(todo, type, user = "user1") {
    remove(ref(this.db, `users/${user}/${type}/${todo.id}`));
  }
}

export default TodoDB;
