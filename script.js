
import { central, db1, db2, db3, vault } from "./database";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}
const returnedValue = await db1(id);
