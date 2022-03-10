import { InfrError } from "../../../../common/data/models/infr-error";
import { IInfrError } from "../../../../common/domain/models/errors/app-error";
import { BoardResponse } from "../models/board-response";
import { BoardsResponse } from "../models/boards-response";

export class BoardDataSource {
    async getBoards() {
        let resp: Response;
        let infrError: IInfrError | null;

        try {
            resp = await fetch("");
        } catch {
            throw new InfrError("unknown");
        }

        infrError = InfrError.handleErrorFromResp(resp);

        if (infrError)
            throw infrError;

        return BoardsResponse.FromJson(await resp.json());
    }

    async getBoardById(id: number) {
        let resp: Response;
        let infrError: IInfrError | null;

        try {
            resp = await fetch("" + id);
        } catch {
            throw new InfrError("unknown");
        }

        infrError = InfrError.handleErrorFromResp(resp);

        if (infrError)
            throw infrError;

        return BoardResponse.FromJson(await resp.json());
    }
}