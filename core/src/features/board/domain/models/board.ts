import { Thread } from "./thread";

export class Board {
    constructor(
        private _id: number,
        private _title: string,
        private _threads: Array<Thread>
    ) { }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get threads() {
        return this._threads;
    }

    getThreadById(id: number) {
        return this._threads.find(item => item.id === id);
    }
}