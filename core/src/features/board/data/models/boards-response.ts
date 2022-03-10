import { InfrError } from "../../../../common/data/models/infr-error";
import { Board } from "../../domain/models/board";
import { ThreadsResponse } from "./thread-response";

export class BoardsResponse extends Board {

    static FromJson(value: any): Array<Board> {
        let json: Array<any>;

        try {
            json = JSON.parse(value);
        } catch (err: any) {
            throw new InfrError("unknown");
        }

        if (!(json instanceof Array))
            throw new InfrError("unknown");

        return json.map((item: any) => {

            if (typeof item.id !== "number" && typeof item.title !== "string")
                throw new InfrError("unknown");

            return new Board(item.id, item.title, ThreadsResponse.FromJson(item.threads));
        });
    }
}