type Left<T> = {
    type: "left"
    value: T
}

type Right<T> = {
    type: "right"
    value: T
}

export class Either<L, R> {
    private constructor(private readonly _value: Left<L> | Right<R>) { }

    fold<T>(left: ((left: L) => T), right: ((right: R) => T)): T {
        switch (this._value.type) {
            case "left":
                return left(this._value.value);
            case "right":
                return right(this._value.value);
        }
    }

    static Left<L, R>(value: L) {
        return new Either<L, R>({ type: "left", value: value });
    }

    static Right<L, R>(value: R) {
        return new Either<L, R>({ type: "right", value: value });
    }
}