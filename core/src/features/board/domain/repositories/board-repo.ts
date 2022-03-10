import { Board } from "../models/board";
import { Either } from "../../../../common/domain/models/either";
import { AppError } from "../../../../common/domain/models/errors/app-error";

export interface IBoardRepo {
    getBoardList: () => Promise<Either<AppError, Array<Board>>>;

    getBoardById: (id: number) => Promise<Either<AppError, Board>>;
}