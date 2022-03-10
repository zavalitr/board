import { AppLocalization } from "../app-localization";
import { PageNotFoundError, UnknownError } from "./common-errors";

export abstract class IInfrError {
    readonly type: ErrorType;

    constructor(type: ErrorType) {
        this.type = type;

    }

    static handleErrorFromResp: (resp: any) => IInfrError | null;
}

export abstract class AppError {
    static FromError: (err: IInfrError) => AppError = function (err) {
        switch (err.type) {
            case "page-not-found":
                return new PageNotFoundError();
            default:
                return new UnknownError();
        }
    };

    abstract toLocale(localization: AppLocalization): string;

}

export type ErrorType = "page-not-found" | "unknown";