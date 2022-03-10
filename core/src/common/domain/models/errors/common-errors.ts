import { AppError } from "./app-error";
import { AppLocalization } from "./app-localization";

export class PageNotFoundError extends AppError {
    toLocale(localization: AppLocalization) {
        return localization.pageNotFound;
    }
}

export class UnknownError extends AppError {
    toLocale(localization: AppLocalization) {
        return localization.unknown;
    }
}