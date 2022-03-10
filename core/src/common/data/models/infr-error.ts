import { ErrorType, IInfrError } from "../../domain/models/errors/app-error";

export class InfrError extends IInfrError {
    constructor(type: ErrorType) {
        super(type);
    }

    static handleErrorFromResp(resp: Response) {
        switch (resp.status) {
            case 404:
                return new InfrError("page-not-found");
            default:
                return null;
        }
    }
}