import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import 'rxjs/add/operator/map';

@Injectable()
export class DBManager {
    devMode: boolean;
    constructor(private sqlite: SQLite) {
        this.sqlite = sqlite;
        this.devMode = true;
    }

    getDB() {
        if (this.devMode) return (<any>window).openDatabase("transtruck.db", "1.0", "Cordova Demo", 200000);
        return this.sqlite.create({
            name: 'transtruck.db',
            location: 'default'
        }).catch(e => console.log(e));
    }

    executeQuery<T>(syntax: string, params = []) {
        if (this.devMode) {
            return new Promise((resolve, reject) => {
                this.getDB().transaction(tx => {
                    tx.executeSql(syntax, params, (tx, res) => {
                        if (!res.rows.length) return resolve([]);
                        const result = [];
                        for (let i = 0; i < res.rows.length; i++) result.push(res.rows.item(i));
                        const data: T[] = result;
                        return resolve(data);
                    });
                });
            });
        } else {
            return this.getDB().then((db: SQLiteObject) => db.executeSql(syntax, params).then(res => {
                if (!res.rows.length) return [];
                const result = [];
                for (let i = 0; i < res.rows.length; i++) result.push(res.rows.item(i));
                const data: T[] = result;
                return data;
            }));
        }
    }

    executeCount(syntax: string, params = []) {
        if (this.devMode) {
            return new Promise((resolve, reject) => {
                this.getDB().transaction(tx => {
                    tx.executeSql(syntax, params, (tx, res) => resolve((<any>Object).values(res.rows[0])[0]));
                });
            });
        } else {
            return this.getDB().then((db: SQLiteObject) => db.executeSql(syntax, params).then(res => (<any>Object).values(res.rows[0])[0]));
        }
    }

    executeSql(syntax: string, params = []) {
        if (this.devMode) {
            return new Promise((resolve, reject) => {
                return this.getDB().transaction(tx => {
                    return tx.executeSql(syntax, params, (tx, res) => {
                        return resolve(res)
                    }, (tx, err) => {
                        console.log(err.message);
                        return resolve();
                    });
                });
            });
        } else {
            return this.getDB().then((db: SQLiteObject) => db.executeSql(syntax, params));
        }
    }

}
