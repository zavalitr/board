export class AppLocalization {
    constructor(private _localization: { [K in string]: string }){}
    
    get unknown() {
        return this._localization["unknown"];
    }

    get pageNotFound() {
        return this._localization["page-not-found"];
    }
}