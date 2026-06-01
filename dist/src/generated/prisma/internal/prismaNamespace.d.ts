import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Category: "Category";
    readonly Habit: "Habit";
    readonly Schedule: "Schedule";
    readonly HabitLog: "HabitLog";
    readonly Reminder: "Reminder";
    readonly Streak: "Streak";
    readonly AdminLog: "AdminLog";
    readonly CelebrityHabitTemplate: "CelebrityHabitTemplate";
    readonly CelebrityHabitTemplateItem: "CelebrityHabitTemplateItem";
    readonly UserImportedTemplate: "UserImportedTemplate";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "category" | "habit" | "schedule" | "habitLog" | "reminder" | "streak" | "adminLog" | "celebrityHabitTemplate" | "celebrityHabitTemplateItem" | "userImportedTemplate";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Category: {
            payload: Prisma.$CategoryPayload<ExtArgs>;
            fields: Prisma.CategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findFirst: {
                    args: Prisma.CategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findMany: {
                    args: Prisma.CategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                create: {
                    args: Prisma.CategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                createMany: {
                    args: Prisma.CategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                delete: {
                    args: Prisma.CategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                update: {
                    args: Prisma.CategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                upsert: {
                    args: Prisma.CategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                aggregate: {
                    args: Prisma.CategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategory>;
                };
                groupBy: {
                    args: Prisma.CategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryCountAggregateOutputType> | number;
                };
            };
        };
        Habit: {
            payload: Prisma.$HabitPayload<ExtArgs>;
            fields: Prisma.HabitFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HabitFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload>;
                };
                findFirst: {
                    args: Prisma.HabitFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload>;
                };
                findMany: {
                    args: Prisma.HabitFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload>[];
                };
                create: {
                    args: Prisma.HabitCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload>;
                };
                createMany: {
                    args: Prisma.HabitCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HabitCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload>[];
                };
                delete: {
                    args: Prisma.HabitDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload>;
                };
                update: {
                    args: Prisma.HabitUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload>;
                };
                deleteMany: {
                    args: Prisma.HabitDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HabitUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HabitUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload>[];
                };
                upsert: {
                    args: Prisma.HabitUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitPayload>;
                };
                aggregate: {
                    args: Prisma.HabitAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHabit>;
                };
                groupBy: {
                    args: Prisma.HabitGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HabitGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HabitCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HabitCountAggregateOutputType> | number;
                };
            };
        };
        Schedule: {
            payload: Prisma.$SchedulePayload<ExtArgs>;
            fields: Prisma.ScheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ScheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload>;
                };
                findFirst: {
                    args: Prisma.ScheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload>;
                };
                findMany: {
                    args: Prisma.ScheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload>[];
                };
                create: {
                    args: Prisma.ScheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload>;
                };
                createMany: {
                    args: Prisma.ScheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload>[];
                };
                delete: {
                    args: Prisma.ScheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload>;
                };
                update: {
                    args: Prisma.ScheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload>;
                };
                deleteMany: {
                    args: Prisma.ScheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ScheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload>[];
                };
                upsert: {
                    args: Prisma.ScheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchedulePayload>;
                };
                aggregate: {
                    args: Prisma.ScheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSchedule>;
                };
                groupBy: {
                    args: Prisma.ScheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ScheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ScheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ScheduleCountAggregateOutputType> | number;
                };
            };
        };
        HabitLog: {
            payload: Prisma.$HabitLogPayload<ExtArgs>;
            fields: Prisma.HabitLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HabitLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HabitLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload>;
                };
                findFirst: {
                    args: Prisma.HabitLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HabitLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload>;
                };
                findMany: {
                    args: Prisma.HabitLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload>[];
                };
                create: {
                    args: Prisma.HabitLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload>;
                };
                createMany: {
                    args: Prisma.HabitLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HabitLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload>[];
                };
                delete: {
                    args: Prisma.HabitLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload>;
                };
                update: {
                    args: Prisma.HabitLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload>;
                };
                deleteMany: {
                    args: Prisma.HabitLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HabitLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HabitLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload>[];
                };
                upsert: {
                    args: Prisma.HabitLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HabitLogPayload>;
                };
                aggregate: {
                    args: Prisma.HabitLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHabitLog>;
                };
                groupBy: {
                    args: Prisma.HabitLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HabitLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HabitLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HabitLogCountAggregateOutputType> | number;
                };
            };
        };
        Reminder: {
            payload: Prisma.$ReminderPayload<ExtArgs>;
            fields: Prisma.ReminderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReminderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                findFirst: {
                    args: Prisma.ReminderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                findMany: {
                    args: Prisma.ReminderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>[];
                };
                create: {
                    args: Prisma.ReminderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                createMany: {
                    args: Prisma.ReminderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>[];
                };
                delete: {
                    args: Prisma.ReminderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                update: {
                    args: Prisma.ReminderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                deleteMany: {
                    args: Prisma.ReminderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReminderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReminderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>[];
                };
                upsert: {
                    args: Prisma.ReminderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                aggregate: {
                    args: Prisma.ReminderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReminder>;
                };
                groupBy: {
                    args: Prisma.ReminderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReminderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReminderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReminderCountAggregateOutputType> | number;
                };
            };
        };
        Streak: {
            payload: Prisma.$StreakPayload<ExtArgs>;
            fields: Prisma.StreakFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StreakFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StreakFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload>;
                };
                findFirst: {
                    args: Prisma.StreakFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StreakFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload>;
                };
                findMany: {
                    args: Prisma.StreakFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload>[];
                };
                create: {
                    args: Prisma.StreakCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload>;
                };
                createMany: {
                    args: Prisma.StreakCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StreakCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload>[];
                };
                delete: {
                    args: Prisma.StreakDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload>;
                };
                update: {
                    args: Prisma.StreakUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload>;
                };
                deleteMany: {
                    args: Prisma.StreakDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StreakUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StreakUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload>[];
                };
                upsert: {
                    args: Prisma.StreakUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StreakPayload>;
                };
                aggregate: {
                    args: Prisma.StreakAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStreak>;
                };
                groupBy: {
                    args: Prisma.StreakGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StreakGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StreakCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StreakCountAggregateOutputType> | number;
                };
            };
        };
        AdminLog: {
            payload: Prisma.$AdminLogPayload<ExtArgs>;
            fields: Prisma.AdminLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload>;
                };
                findFirst: {
                    args: Prisma.AdminLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload>;
                };
                findMany: {
                    args: Prisma.AdminLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload>[];
                };
                create: {
                    args: Prisma.AdminLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload>;
                };
                createMany: {
                    args: Prisma.AdminLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload>[];
                };
                delete: {
                    args: Prisma.AdminLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload>;
                };
                update: {
                    args: Prisma.AdminLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload>[];
                };
                upsert: {
                    args: Prisma.AdminLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminLogPayload>;
                };
                aggregate: {
                    args: Prisma.AdminLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminLog>;
                };
                groupBy: {
                    args: Prisma.AdminLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminLogCountAggregateOutputType> | number;
                };
            };
        };
        CelebrityHabitTemplate: {
            payload: Prisma.$CelebrityHabitTemplatePayload<ExtArgs>;
            fields: Prisma.CelebrityHabitTemplateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CelebrityHabitTemplateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CelebrityHabitTemplateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload>;
                };
                findFirst: {
                    args: Prisma.CelebrityHabitTemplateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CelebrityHabitTemplateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload>;
                };
                findMany: {
                    args: Prisma.CelebrityHabitTemplateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload>[];
                };
                create: {
                    args: Prisma.CelebrityHabitTemplateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload>;
                };
                createMany: {
                    args: Prisma.CelebrityHabitTemplateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CelebrityHabitTemplateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload>[];
                };
                delete: {
                    args: Prisma.CelebrityHabitTemplateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload>;
                };
                update: {
                    args: Prisma.CelebrityHabitTemplateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload>;
                };
                deleteMany: {
                    args: Prisma.CelebrityHabitTemplateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CelebrityHabitTemplateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CelebrityHabitTemplateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload>[];
                };
                upsert: {
                    args: Prisma.CelebrityHabitTemplateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplatePayload>;
                };
                aggregate: {
                    args: Prisma.CelebrityHabitTemplateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCelebrityHabitTemplate>;
                };
                groupBy: {
                    args: Prisma.CelebrityHabitTemplateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CelebrityHabitTemplateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CelebrityHabitTemplateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CelebrityHabitTemplateCountAggregateOutputType> | number;
                };
            };
        };
        CelebrityHabitTemplateItem: {
            payload: Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>;
            fields: Prisma.CelebrityHabitTemplateItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CelebrityHabitTemplateItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CelebrityHabitTemplateItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload>;
                };
                findFirst: {
                    args: Prisma.CelebrityHabitTemplateItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CelebrityHabitTemplateItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload>;
                };
                findMany: {
                    args: Prisma.CelebrityHabitTemplateItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload>[];
                };
                create: {
                    args: Prisma.CelebrityHabitTemplateItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload>;
                };
                createMany: {
                    args: Prisma.CelebrityHabitTemplateItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CelebrityHabitTemplateItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload>[];
                };
                delete: {
                    args: Prisma.CelebrityHabitTemplateItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload>;
                };
                update: {
                    args: Prisma.CelebrityHabitTemplateItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload>;
                };
                deleteMany: {
                    args: Prisma.CelebrityHabitTemplateItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CelebrityHabitTemplateItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CelebrityHabitTemplateItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload>[];
                };
                upsert: {
                    args: Prisma.CelebrityHabitTemplateItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CelebrityHabitTemplateItemPayload>;
                };
                aggregate: {
                    args: Prisma.CelebrityHabitTemplateItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCelebrityHabitTemplateItem>;
                };
                groupBy: {
                    args: Prisma.CelebrityHabitTemplateItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CelebrityHabitTemplateItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CelebrityHabitTemplateItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CelebrityHabitTemplateItemCountAggregateOutputType> | number;
                };
            };
        };
        UserImportedTemplate: {
            payload: Prisma.$UserImportedTemplatePayload<ExtArgs>;
            fields: Prisma.UserImportedTemplateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserImportedTemplateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserImportedTemplateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload>;
                };
                findFirst: {
                    args: Prisma.UserImportedTemplateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserImportedTemplateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload>;
                };
                findMany: {
                    args: Prisma.UserImportedTemplateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload>[];
                };
                create: {
                    args: Prisma.UserImportedTemplateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload>;
                };
                createMany: {
                    args: Prisma.UserImportedTemplateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserImportedTemplateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload>[];
                };
                delete: {
                    args: Prisma.UserImportedTemplateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload>;
                };
                update: {
                    args: Prisma.UserImportedTemplateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload>;
                };
                deleteMany: {
                    args: Prisma.UserImportedTemplateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserImportedTemplateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserImportedTemplateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload>[];
                };
                upsert: {
                    args: Prisma.UserImportedTemplateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserImportedTemplatePayload>;
                };
                aggregate: {
                    args: Prisma.UserImportedTemplateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserImportedTemplate>;
                };
                groupBy: {
                    args: Prisma.UserImportedTemplateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserImportedTemplateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserImportedTemplateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserImportedTemplateCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly fullName: "fullName";
    readonly timezone: "timezone";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly color: "color";
    readonly icon: "icon";
    readonly isDefault: "isDefault";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const HabitScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly categoryId: "categoryId";
    readonly name: "name";
    readonly description: "description";
    readonly goalType: "goalType";
    readonly goalValue: "goalValue";
    readonly goalUnit: "goalUnit";
    readonly status: "status";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum];
export declare const ScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly habitId: "habitId";
    readonly repeatType: "repeatType";
    readonly repeatConfig: "repeatConfig";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum];
export declare const HabitLogScalarFieldEnum: {
    readonly id: "id";
    readonly habitId: "habitId";
    readonly userId: "userId";
    readonly logDate: "logDate";
    readonly status: "status";
    readonly progressValue: "progressValue";
    readonly note: "note";
    readonly checkedInAt: "checkedInAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type HabitLogScalarFieldEnum = (typeof HabitLogScalarFieldEnum)[keyof typeof HabitLogScalarFieldEnum];
export declare const ReminderScalarFieldEnum: {
    readonly id: "id";
    readonly habitId: "habitId";
    readonly userId: "userId";
    readonly remindAt: "remindAt";
    readonly isEnabled: "isEnabled";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum];
export declare const StreakScalarFieldEnum: {
    readonly id: "id";
    readonly habitId: "habitId";
    readonly userId: "userId";
    readonly currentStreak: "currentStreak";
    readonly longestStreak: "longestStreak";
    readonly lastCompletedDate: "lastCompletedDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type StreakScalarFieldEnum = (typeof StreakScalarFieldEnum)[keyof typeof StreakScalarFieldEnum];
export declare const AdminLogScalarFieldEnum: {
    readonly id: "id";
    readonly adminId: "adminId";
    readonly action: "action";
    readonly targetType: "targetType";
    readonly targetId: "targetId";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type AdminLogScalarFieldEnum = (typeof AdminLogScalarFieldEnum)[keyof typeof AdminLogScalarFieldEnum];
export declare const CelebrityHabitTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly celebrityName: "celebrityName";
    readonly title: "title";
    readonly description: "description";
    readonly categoryId: "categoryId";
    readonly difficulty: "difficulty";
    readonly estimatedMinutes: "estimatedMinutes";
    readonly isPublic: "isPublic";
    readonly isFeatured: "isFeatured";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type CelebrityHabitTemplateScalarFieldEnum = (typeof CelebrityHabitTemplateScalarFieldEnum)[keyof typeof CelebrityHabitTemplateScalarFieldEnum];
export declare const CelebrityHabitTemplateItemScalarFieldEnum: {
    readonly id: "id";
    readonly templateId: "templateId";
    readonly name: "name";
    readonly description: "description";
    readonly goalType: "goalType";
    readonly goalValue: "goalValue";
    readonly goalUnit: "goalUnit";
    readonly repeatType: "repeatType";
    readonly repeatConfig: "repeatConfig";
    readonly displayOrder: "displayOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type CelebrityHabitTemplateItemScalarFieldEnum = (typeof CelebrityHabitTemplateItemScalarFieldEnum)[keyof typeof CelebrityHabitTemplateItemScalarFieldEnum];
export declare const UserImportedTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly templateId: "templateId";
    readonly importedAt: "importedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type UserImportedTemplateScalarFieldEnum = (typeof UserImportedTemplateScalarFieldEnum)[keyof typeof UserImportedTemplateScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumHabitGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitGoalType'>;
export type ListEnumHabitGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitGoalType[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumHabitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitStatus'>;
export type ListEnumHabitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitStatus[]'>;
export type EnumScheduleRepeatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleRepeatType'>;
export type ListEnumScheduleRepeatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleRepeatType[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumHabitLogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitLogStatus'>;
export type ListEnumHabitLogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitLogStatus[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumTemplateDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateDifficulty'>;
export type ListEnumTemplateDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateDifficulty[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    category?: Prisma.CategoryOmit;
    habit?: Prisma.HabitOmit;
    schedule?: Prisma.ScheduleOmit;
    habitLog?: Prisma.HabitLogOmit;
    reminder?: Prisma.ReminderOmit;
    streak?: Prisma.StreakOmit;
    adminLog?: Prisma.AdminLogOmit;
    celebrityHabitTemplate?: Prisma.CelebrityHabitTemplateOmit;
    celebrityHabitTemplateItem?: Prisma.CelebrityHabitTemplateItemOmit;
    userImportedTemplate?: Prisma.UserImportedTemplateOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
