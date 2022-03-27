import firebaseApp from "../firebase/firebase";
import { getDatabase, off, onValue, ref, remove, set } from "firebase/database";

class TodoDB {
  constructor() {
    this.db = getDatabase(firebaseApp);
  }

  getTodo(type, fn) {
    const todoRef = ref(this.db, `users/user1/${type}`);
    onValue(todoRef, (snapshot) => {
      const data = snapshot.val();
      data && fn(data);
    });
    return () => off(todoRef);
  }

  setTodo(todo, type) {
    set(ref(this.db, `users/user1/${type}/${todo.id}`), { ...todo });
  }

  deleteTodo(todo, type) {
    remove(ref(this.db, `users/user1/${type}/${todo.id}`));
  }
}

export default TodoDB;
