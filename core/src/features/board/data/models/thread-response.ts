import { InfrError } from "../../../../common/data/models/infr-error";
import { Thread } from "../../domain/models/thread";

export class ThreadsResponse extends Thread {
    static FromJson(value: any): Array<Thread> {
        let json: Array<any>;

        try {
            json = JSON.parse(value);
        } catch (err: any) {
            throw new InfrError("unknown");
        }

        if (!(json instanceof Array))
            throw new InfrError("unknown");

        return json.map(item => {
            if (
                typeof item.id !== "number" &&
                typeof item.title !== "string" &&
                typeof item.text !== "string" &&
                typeof item.content !== "string" &&
                typeof item.created !== "number"
            )
                throw new InfrError("unknown");

            return new Thread(
                item.id,
                item.title,
                item.text,
                item.content,
                item.created
            );
        });
    }
}