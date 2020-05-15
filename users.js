import * as fs from "fs";
import { Stringify } from "./utils";

class UserDB {
  save(type, key, value) {
    let data = {};

    try {
      data = JSON.parse(fs.readFileSync(type + ".json").toString());
    } catch {
      data = {};
    }

    data[key] = value;
    fs.writeFileSync(type + ".json", Stringify(data));
  }

  push(type, key, value) {
    let data = {};
    try {
      data = JSON.parse(fs.readFileSync(type + ".json").toString());
    } catch {
      data = {};
    }

    data[key] = data[key] || [];
    data[key].push(value);
    fs.writeFileSync(type + ".json", Stringify(data));
    return;
  }

  load(type, key) {
    var data;
    try {
      data = JSON.parse(fs.readFileSync(type + ".json").toString());
    } catch {
      data = {};
    }
    return data[key];
  }
}
