import { Injectable } from '@angular/core';
import { DBManager } from './db-manager';
import { Company } from '../models/company';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
  db: any;

  constructor(public dbManager: DBManager) {
    this.dbManager = dbManager;
    this.createTable();
  }

  createTable() {
    let syntax = "";
    syntax = syntax + "CREATE TABLE IF NOT EXISTS COMPANY("
    syntax = syntax + "id INTEGER PRIMARY KEY   AUTOINCREMENT, "
    syntax = syntax + "name TEXT, "
    syntax = syntax + "city TEXT, "
    syntax = syntax + "level INTEGER, "
    syntax = syntax + "money INTEGER, "
    syntax = syntax + "logo TEXT);"
    return this.dbManager.executeSql(syntax);
  }

  countCompany() {
    const syntax = "SELECT COUNT(*) FROM COMPANY;";
    return this.dbManager.executeCount(syntax);
  }

  insert(company: Company) {
    const syntax = "INSERT INTO COMPANY VALUES (?,?,?,?,?,?);";
    return this.dbManager.executeSql(syntax, [company.id, company.name,
    company.city,
    company.level,
    company.money,
    company.logo]);
  }

}

