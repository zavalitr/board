import { Board } from "../../domain/models/board";
import { Either } from "../../../../common/domain/models/either";
import { AppError, IInfrError } from "../../../../common/domain/models/errors/app-error";
import { IBoardRepo } from "../../domain/repositories/board-repo";
import { BoardDataSource } from "../datasources/board-data-source";

export class BoardRepo implements IBoardRepo {
    constructor(private _boardDataSource: BoardDataSource) { }

    async getBoardList(): Promise<Either<AppError, Array<Board>>> {
        try {
            const boards = await this._boardDataSource.getBoards();

            return Either.Right(boards);
        } catch (err) {
            return Either.Left(AppError.FromError(err as IInfrError));
        }
    };

    async getBoardById(id: number): Promise<Either<AppError, Board>> {
        try {
            const board = await this._boardDataSource.getBoardById(id);

            return Either.Right(board);
        } catch (err) {
            return Either.Left(AppError.FromError(err));
        }
    };
}