import { InfrError } from "../../../../common/data/models/infr-error";
import { Board } from "../../domain/models/board";
import { ThreadsResponse } from "./thread-response";

export class BoardResponse extends Board {

    static FromJson(value: any): Board {
        let json: any;

        try {
            json = JSON.parse(value);
        } catch (err: any) {
            throw new InfrError("unknown");
        }

        if (
            !(json instanceof Object) &&
            typeof json.id !== "number" &&
            typeof json.title !== "string"
        )
            throw new InfrError("unknown");

        return new Board(json.id, json.title, ThreadsResponse.FromJson(json.threads));
    }
}