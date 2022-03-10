export class Thread {
    constructor(
        private _id: number,
        private _title: string,
        private _text: string,
        private _content: string,
        private _created: number
    ) { }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get text() {
        return this._text;
    }

    get content() {
        return this._content;
    }

    get created() {
        return this._created;
    }
}