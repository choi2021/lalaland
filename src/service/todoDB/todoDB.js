import firebaseApp from "../firebase/firebase";
import { getDatabase } from "firebase/database";

class TodoDB {
  constructor() {
    this.db = getDatabase(firebaseApp);
  }

  getTodo() {}

  setTodo() {}
}

export default TodoDB;
