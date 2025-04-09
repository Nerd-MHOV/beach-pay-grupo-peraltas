
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Athlete
 * 
 */
export type Athlete = $Result.DefaultSelection<Prisma.$AthletePayload>
/**
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>
/**
 * Model InvestmentType
 * 
 */
export type InvestmentType = $Result.DefaultSelection<Prisma.$InvestmentTypePayload>
/**
 * Model InvestmentGroup
 * 
 */
export type InvestmentGroup = $Result.DefaultSelection<Prisma.$InvestmentGroupPayload>
/**
 * Model Arena
 * 
 */
export type Arena = $Result.DefaultSelection<Prisma.$ArenaPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model Courts
 * 
 */
export type Courts = $Result.DefaultSelection<Prisma.$CourtsPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model TeacherAvailability
 * 
 */
export type TeacherAvailability = $Result.DefaultSelection<Prisma.$TeacherAvailabilityPayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model LessonAttendance
 * 
 */
export type LessonAttendance = $Result.DefaultSelection<Prisma.$LessonAttendancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  operational: 'operational',
  teacher: 'teacher'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.athlete`: Exposes CRUD operations for the **Athlete** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Athletes
    * const athletes = await prisma.athlete.findMany()
    * ```
    */
  get athlete(): Prisma.AthleteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investmentType`: Exposes CRUD operations for the **InvestmentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvestmentTypes
    * const investmentTypes = await prisma.investmentType.findMany()
    * ```
    */
  get investmentType(): Prisma.InvestmentTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investmentGroup`: Exposes CRUD operations for the **InvestmentGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvestmentGroups
    * const investmentGroups = await prisma.investmentGroup.findMany()
    * ```
    */
  get investmentGroup(): Prisma.InvestmentGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arena`: Exposes CRUD operations for the **Arena** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arenas
    * const arenas = await prisma.arena.findMany()
    * ```
    */
  get arena(): Prisma.ArenaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courts`: Exposes CRUD operations for the **Courts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courts
    * const courts = await prisma.courts.findMany()
    * ```
    */
  get courts(): Prisma.CourtsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherAvailability`: Exposes CRUD operations for the **TeacherAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherAvailabilities
    * const teacherAvailabilities = await prisma.teacherAvailability.findMany()
    * ```
    */
  get teacherAvailability(): Prisma.TeacherAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonAttendance`: Exposes CRUD operations for the **LessonAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonAttendances
    * const lessonAttendances = await prisma.lessonAttendance.findMany()
    * ```
    */
  get lessonAttendance(): Prisma.LessonAttendanceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Athlete: 'Athlete',
    Investment: 'Investment',
    InvestmentType: 'InvestmentType',
    InvestmentGroup: 'InvestmentGroup',
    Arena: 'Arena',
    Tournament: 'Tournament',
    Courts: 'Courts',
    Address: 'Address',
    TeacherAvailability: 'TeacherAvailability',
    Lesson: 'Lesson',
    LessonAttendance: 'LessonAttendance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "athlete" | "investment" | "investmentType" | "investmentGroup" | "arena" | "tournament" | "courts" | "address" | "teacherAvailability" | "lesson" | "lessonAttendance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Athlete: {
        payload: Prisma.$AthletePayload<ExtArgs>
        fields: Prisma.AthleteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AthleteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AthleteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>
          }
          findFirst: {
            args: Prisma.AthleteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AthleteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>
          }
          findMany: {
            args: Prisma.AthleteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>[]
          }
          create: {
            args: Prisma.AthleteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>
          }
          createMany: {
            args: Prisma.AthleteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AthleteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>[]
          }
          delete: {
            args: Prisma.AthleteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>
          }
          update: {
            args: Prisma.AthleteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>
          }
          deleteMany: {
            args: Prisma.AthleteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AthleteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AthleteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>[]
          }
          upsert: {
            args: Prisma.AthleteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletePayload>
          }
          aggregate: {
            args: Prisma.AthleteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAthlete>
          }
          groupBy: {
            args: Prisma.AthleteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AthleteGroupByOutputType>[]
          }
          count: {
            args: Prisma.AthleteCountArgs<ExtArgs>
            result: $Utils.Optional<AthleteCountAggregateOutputType> | number
          }
        }
      }
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
          }
        }
      }
      InvestmentType: {
        payload: Prisma.$InvestmentTypePayload<ExtArgs>
        fields: Prisma.InvestmentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload>
          }
          findFirst: {
            args: Prisma.InvestmentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload>
          }
          findMany: {
            args: Prisma.InvestmentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload>[]
          }
          create: {
            args: Prisma.InvestmentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload>
          }
          createMany: {
            args: Prisma.InvestmentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload>[]
          }
          delete: {
            args: Prisma.InvestmentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload>
          }
          update: {
            args: Prisma.InvestmentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload>
          }
          deleteMany: {
            args: Prisma.InvestmentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload>[]
          }
          upsert: {
            args: Prisma.InvestmentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentTypePayload>
          }
          aggregate: {
            args: Prisma.InvestmentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestmentType>
          }
          groupBy: {
            args: Prisma.InvestmentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentTypeCountAggregateOutputType> | number
          }
        }
      }
      InvestmentGroup: {
        payload: Prisma.$InvestmentGroupPayload<ExtArgs>
        fields: Prisma.InvestmentGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload>
          }
          findFirst: {
            args: Prisma.InvestmentGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload>
          }
          findMany: {
            args: Prisma.InvestmentGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload>[]
          }
          create: {
            args: Prisma.InvestmentGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload>
          }
          createMany: {
            args: Prisma.InvestmentGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload>[]
          }
          delete: {
            args: Prisma.InvestmentGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload>
          }
          update: {
            args: Prisma.InvestmentGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentGroupPayload>
          }
          aggregate: {
            args: Prisma.InvestmentGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestmentGroup>
          }
          groupBy: {
            args: Prisma.InvestmentGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentGroupCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupCountAggregateOutputType> | number
          }
        }
      }
      Arena: {
        payload: Prisma.$ArenaPayload<ExtArgs>
        fields: Prisma.ArenaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArenaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArenaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          findFirst: {
            args: Prisma.ArenaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArenaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          findMany: {
            args: Prisma.ArenaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>[]
          }
          create: {
            args: Prisma.ArenaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          createMany: {
            args: Prisma.ArenaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArenaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>[]
          }
          delete: {
            args: Prisma.ArenaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          update: {
            args: Prisma.ArenaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          deleteMany: {
            args: Prisma.ArenaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArenaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArenaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>[]
          }
          upsert: {
            args: Prisma.ArenaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaPayload>
          }
          aggregate: {
            args: Prisma.ArenaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArena>
          }
          groupBy: {
            args: Prisma.ArenaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArenaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArenaCountArgs<ExtArgs>
            result: $Utils.Optional<ArenaCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      Courts: {
        payload: Prisma.$CourtsPayload<ExtArgs>
        fields: Prisma.CourtsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourtsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourtsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          findFirst: {
            args: Prisma.CourtsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourtsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          findMany: {
            args: Prisma.CourtsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>[]
          }
          create: {
            args: Prisma.CourtsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          createMany: {
            args: Prisma.CourtsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourtsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>[]
          }
          delete: {
            args: Prisma.CourtsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          update: {
            args: Prisma.CourtsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          deleteMany: {
            args: Prisma.CourtsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourtsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourtsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>[]
          }
          upsert: {
            args: Prisma.CourtsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          aggregate: {
            args: Prisma.CourtsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourts>
          }
          groupBy: {
            args: Prisma.CourtsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourtsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourtsCountArgs<ExtArgs>
            result: $Utils.Optional<CourtsCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      TeacherAvailability: {
        payload: Prisma.$TeacherAvailabilityPayload<ExtArgs>
        fields: Prisma.TeacherAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.TeacherAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload>
          }
          findMany: {
            args: Prisma.TeacherAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload>[]
          }
          create: {
            args: Prisma.TeacherAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload>
          }
          createMany: {
            args: Prisma.TeacherAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.TeacherAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload>
          }
          update: {
            args: Prisma.TeacherAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.TeacherAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.TeacherAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.TeacherAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherAvailability>
          }
          groupBy: {
            args: Prisma.TeacherAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      LessonAttendance: {
        payload: Prisma.$LessonAttendancePayload<ExtArgs>
        fields: Prisma.LessonAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload>
          }
          findFirst: {
            args: Prisma.LessonAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload>
          }
          findMany: {
            args: Prisma.LessonAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload>[]
          }
          create: {
            args: Prisma.LessonAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload>
          }
          createMany: {
            args: Prisma.LessonAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonAttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload>[]
          }
          delete: {
            args: Prisma.LessonAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload>
          }
          update: {
            args: Prisma.LessonAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload>
          }
          deleteMany: {
            args: Prisma.LessonAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonAttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload>[]
          }
          upsert: {
            args: Prisma.LessonAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonAttendancePayload>
          }
          aggregate: {
            args: Prisma.LessonAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonAttendance>
          }
          groupBy: {
            args: Prisma.LessonAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<LessonAttendanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    athlete?: AthleteOmit
    investment?: InvestmentOmit
    investmentType?: InvestmentTypeOmit
    investmentGroup?: InvestmentGroupOmit
    arena?: ArenaOmit
    tournament?: TournamentOmit
    courts?: CourtsOmit
    address?: AddressOmit
    teacherAvailability?: TeacherAvailabilityOmit
    lesson?: LessonOmit
    lessonAttendance?: LessonAttendanceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AthleteCountOutputType
   */

  export type AthleteCountOutputType = {
    investments: number
    investment_group_athlete: number
    investment_group_pair: number
    teacher_availability: number
    lesson: number
    lesson_attendance: number
  }

  export type AthleteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | AthleteCountOutputTypeCountInvestmentsArgs
    investment_group_athlete?: boolean | AthleteCountOutputTypeCountInvestment_group_athleteArgs
    investment_group_pair?: boolean | AthleteCountOutputTypeCountInvestment_group_pairArgs
    teacher_availability?: boolean | AthleteCountOutputTypeCountTeacher_availabilityArgs
    lesson?: boolean | AthleteCountOutputTypeCountLessonArgs
    lesson_attendance?: boolean | AthleteCountOutputTypeCountLesson_attendanceArgs
  }

  // Custom InputTypes
  /**
   * AthleteCountOutputType without action
   */
  export type AthleteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteCountOutputType
     */
    select?: AthleteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AthleteCountOutputType without action
   */
  export type AthleteCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }

  /**
   * AthleteCountOutputType without action
   */
  export type AthleteCountOutputTypeCountInvestment_group_athleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentGroupWhereInput
  }

  /**
   * AthleteCountOutputType without action
   */
  export type AthleteCountOutputTypeCountInvestment_group_pairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentGroupWhereInput
  }

  /**
   * AthleteCountOutputType without action
   */
  export type AthleteCountOutputTypeCountTeacher_availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherAvailabilityWhereInput
  }

  /**
   * AthleteCountOutputType without action
   */
  export type AthleteCountOutputTypeCountLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }

  /**
   * AthleteCountOutputType without action
   */
  export type AthleteCountOutputTypeCountLesson_attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonAttendanceWhereInput
  }


  /**
   * Count Type InvestmentTypeCountOutputType
   */

  export type InvestmentTypeCountOutputType = {
    investments: number
  }

  export type InvestmentTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | InvestmentTypeCountOutputTypeCountInvestmentsArgs
  }

  // Custom InputTypes
  /**
   * InvestmentTypeCountOutputType without action
   */
  export type InvestmentTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentTypeCountOutputType
     */
    select?: InvestmentTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestmentTypeCountOutputType without action
   */
  export type InvestmentTypeCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }


  /**
   * Count Type InvestmentGroupCountOutputType
   */

  export type InvestmentGroupCountOutputType = {
    investments: number
  }

  export type InvestmentGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | InvestmentGroupCountOutputTypeCountInvestmentsArgs
  }

  // Custom InputTypes
  /**
   * InvestmentGroupCountOutputType without action
   */
  export type InvestmentGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroupCountOutputType
     */
    select?: InvestmentGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestmentGroupCountOutputType without action
   */
  export type InvestmentGroupCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }


  /**
   * Count Type ArenaCountOutputType
   */

  export type ArenaCountOutputType = {
    tournaments: number
  }

  export type ArenaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournaments?: boolean | ArenaCountOutputTypeCountTournamentsArgs
  }

  // Custom InputTypes
  /**
   * ArenaCountOutputType without action
   */
  export type ArenaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaCountOutputType
     */
    select?: ArenaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArenaCountOutputType without action
   */
  export type ArenaCountOutputTypeCountTournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    investment_group: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment_group?: boolean | TournamentCountOutputTypeCountInvestment_groupArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountInvestment_groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentGroupWhereInput
  }


  /**
   * Count Type CourtsCountOutputType
   */

  export type CourtsCountOutputType = {
    lesson: number
  }

  export type CourtsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | CourtsCountOutputTypeCountLessonArgs
  }

  // Custom InputTypes
  /**
   * CourtsCountOutputType without action
   */
  export type CourtsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtsCountOutputType
     */
    select?: CourtsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourtsCountOutputType without action
   */
  export type CourtsCountOutputTypeCountLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    teacher_availability: number
    attendances: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_availability?: boolean | LessonCountOutputTypeCountTeacher_availabilityArgs
    attendances?: boolean | LessonCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountTeacher_availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherAvailabilityWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonAttendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    user: string | null
    passwd: string | null
    email: string | null
    role: $Enums.UserRole | null
    teacher_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    user: string | null
    passwd: string | null
    email: string | null
    role: $Enums.UserRole | null
    teacher_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    user: number
    passwd: number
    email: number
    role: number
    teacher_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    user?: true
    passwd?: true
    email?: true
    role?: true
    teacher_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    user?: true
    passwd?: true
    email?: true
    role?: true
    teacher_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    user?: true
    passwd?: true
    email?: true
    role?: true
    teacher_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    user: string
    passwd: string
    email: string
    role: $Enums.UserRole
    teacher_id: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user?: boolean
    passwd?: boolean
    email?: boolean
    role?: boolean
    teacher_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher?: boolean | User$teacherArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user?: boolean
    passwd?: boolean
    email?: boolean
    role?: boolean
    teacher_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher?: boolean | User$teacherArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user?: boolean
    passwd?: boolean
    email?: boolean
    role?: boolean
    teacher_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher?: boolean | User$teacherArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    user?: boolean
    passwd?: boolean
    email?: boolean
    role?: boolean
    teacher_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "user" | "passwd" | "email" | "role" | "teacher_id" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | User$teacherArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | User$teacherArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | User$teacherArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teacher: Prisma.$AthletePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      user: string
      passwd: string
      email: string
      role: $Enums.UserRole
      teacher_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends User$teacherArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly user: FieldRef<"User", 'String'>
    readonly passwd: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly teacher_id: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teacher
   */
  export type User$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    where?: AthleteWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Athlete
   */

  export type AggregateAthlete = {
    _count: AthleteCountAggregateOutputType | null
    _min: AthleteMinAggregateOutputType | null
    _max: AthleteMaxAggregateOutputType | null
  }

  export type AthleteMinAggregateOutputType = {
    id: string | null
    name: string | null
    birthday: Date | null
    phone: string | null
    responsible: string | null
    date_start: Date | null
    pix_key: string | null
    cpf: string | null
    address_id: string | null
    is_student: boolean | null
    is_associated: boolean | null
    is_teacher: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AthleteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    birthday: Date | null
    phone: string | null
    responsible: string | null
    date_start: Date | null
    pix_key: string | null
    cpf: string | null
    address_id: string | null
    is_student: boolean | null
    is_associated: boolean | null
    is_teacher: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AthleteCountAggregateOutputType = {
    id: number
    name: number
    birthday: number
    phone: number
    responsible: number
    date_start: number
    pix_key: number
    cpf: number
    address_id: number
    is_student: number
    is_associated: number
    is_teacher: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AthleteMinAggregateInputType = {
    id?: true
    name?: true
    birthday?: true
    phone?: true
    responsible?: true
    date_start?: true
    pix_key?: true
    cpf?: true
    address_id?: true
    is_student?: true
    is_associated?: true
    is_teacher?: true
    created_at?: true
    updated_at?: true
  }

  export type AthleteMaxAggregateInputType = {
    id?: true
    name?: true
    birthday?: true
    phone?: true
    responsible?: true
    date_start?: true
    pix_key?: true
    cpf?: true
    address_id?: true
    is_student?: true
    is_associated?: true
    is_teacher?: true
    created_at?: true
    updated_at?: true
  }

  export type AthleteCountAggregateInputType = {
    id?: true
    name?: true
    birthday?: true
    phone?: true
    responsible?: true
    date_start?: true
    pix_key?: true
    cpf?: true
    address_id?: true
    is_student?: true
    is_associated?: true
    is_teacher?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AthleteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Athlete to aggregate.
     */
    where?: AthleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Athletes to fetch.
     */
    orderBy?: AthleteOrderByWithRelationInput | AthleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AthleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Athletes
    **/
    _count?: true | AthleteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AthleteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AthleteMaxAggregateInputType
  }

  export type GetAthleteAggregateType<T extends AthleteAggregateArgs> = {
        [P in keyof T & keyof AggregateAthlete]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAthlete[P]>
      : GetScalarType<T[P], AggregateAthlete[P]>
  }




  export type AthleteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AthleteWhereInput
    orderBy?: AthleteOrderByWithAggregationInput | AthleteOrderByWithAggregationInput[]
    by: AthleteScalarFieldEnum[] | AthleteScalarFieldEnum
    having?: AthleteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AthleteCountAggregateInputType | true
    _min?: AthleteMinAggregateInputType
    _max?: AthleteMaxAggregateInputType
  }

  export type AthleteGroupByOutputType = {
    id: string
    name: string
    birthday: Date
    phone: string
    responsible: string | null
    date_start: Date
    pix_key: string
    cpf: string | null
    address_id: string | null
    is_student: boolean
    is_associated: boolean
    is_teacher: boolean
    created_at: Date
    updated_at: Date
    _count: AthleteCountAggregateOutputType | null
    _min: AthleteMinAggregateOutputType | null
    _max: AthleteMaxAggregateOutputType | null
  }

  type GetAthleteGroupByPayload<T extends AthleteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AthleteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AthleteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AthleteGroupByOutputType[P]>
            : GetScalarType<T[P], AthleteGroupByOutputType[P]>
        }
      >
    >


  export type AthleteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthday?: boolean
    phone?: boolean
    responsible?: boolean
    date_start?: boolean
    pix_key?: boolean
    cpf?: boolean
    address_id?: boolean
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Athlete$userArgs<ExtArgs>
    address?: boolean | Athlete$addressArgs<ExtArgs>
    investments?: boolean | Athlete$investmentsArgs<ExtArgs>
    investment_group_athlete?: boolean | Athlete$investment_group_athleteArgs<ExtArgs>
    investment_group_pair?: boolean | Athlete$investment_group_pairArgs<ExtArgs>
    teacher_availability?: boolean | Athlete$teacher_availabilityArgs<ExtArgs>
    lesson?: boolean | Athlete$lessonArgs<ExtArgs>
    lesson_attendance?: boolean | Athlete$lesson_attendanceArgs<ExtArgs>
    _count?: boolean | AthleteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athlete"]>

  export type AthleteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthday?: boolean
    phone?: boolean
    responsible?: boolean
    date_start?: boolean
    pix_key?: boolean
    cpf?: boolean
    address_id?: boolean
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: boolean
    updated_at?: boolean
    address?: boolean | Athlete$addressArgs<ExtArgs>
  }, ExtArgs["result"]["athlete"]>

  export type AthleteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthday?: boolean
    phone?: boolean
    responsible?: boolean
    date_start?: boolean
    pix_key?: boolean
    cpf?: boolean
    address_id?: boolean
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: boolean
    updated_at?: boolean
    address?: boolean | Athlete$addressArgs<ExtArgs>
  }, ExtArgs["result"]["athlete"]>

  export type AthleteSelectScalar = {
    id?: boolean
    name?: boolean
    birthday?: boolean
    phone?: boolean
    responsible?: boolean
    date_start?: boolean
    pix_key?: boolean
    cpf?: boolean
    address_id?: boolean
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AthleteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "birthday" | "phone" | "responsible" | "date_start" | "pix_key" | "cpf" | "address_id" | "is_student" | "is_associated" | "is_teacher" | "created_at" | "updated_at", ExtArgs["result"]["athlete"]>
  export type AthleteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Athlete$userArgs<ExtArgs>
    address?: boolean | Athlete$addressArgs<ExtArgs>
    investments?: boolean | Athlete$investmentsArgs<ExtArgs>
    investment_group_athlete?: boolean | Athlete$investment_group_athleteArgs<ExtArgs>
    investment_group_pair?: boolean | Athlete$investment_group_pairArgs<ExtArgs>
    teacher_availability?: boolean | Athlete$teacher_availabilityArgs<ExtArgs>
    lesson?: boolean | Athlete$lessonArgs<ExtArgs>
    lesson_attendance?: boolean | Athlete$lesson_attendanceArgs<ExtArgs>
    _count?: boolean | AthleteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AthleteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Athlete$addressArgs<ExtArgs>
  }
  export type AthleteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Athlete$addressArgs<ExtArgs>
  }

  export type $AthletePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Athlete"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      address: Prisma.$AddressPayload<ExtArgs> | null
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
      investment_group_athlete: Prisma.$InvestmentGroupPayload<ExtArgs>[]
      investment_group_pair: Prisma.$InvestmentGroupPayload<ExtArgs>[]
      teacher_availability: Prisma.$TeacherAvailabilityPayload<ExtArgs>[]
      lesson: Prisma.$LessonPayload<ExtArgs>[]
      lesson_attendance: Prisma.$LessonAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      birthday: Date
      phone: string
      responsible: string | null
      date_start: Date
      pix_key: string
      cpf: string | null
      address_id: string | null
      is_student: boolean
      is_associated: boolean
      is_teacher: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["athlete"]>
    composites: {}
  }

  type AthleteGetPayload<S extends boolean | null | undefined | AthleteDefaultArgs> = $Result.GetResult<Prisma.$AthletePayload, S>

  type AthleteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AthleteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AthleteCountAggregateInputType | true
    }

  export interface AthleteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Athlete'], meta: { name: 'Athlete' } }
    /**
     * Find zero or one Athlete that matches the filter.
     * @param {AthleteFindUniqueArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AthleteFindUniqueArgs>(args: SelectSubset<T, AthleteFindUniqueArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Athlete that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AthleteFindUniqueOrThrowArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AthleteFindUniqueOrThrowArgs>(args: SelectSubset<T, AthleteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Athlete that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteFindFirstArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AthleteFindFirstArgs>(args?: SelectSubset<T, AthleteFindFirstArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Athlete that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteFindFirstOrThrowArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AthleteFindFirstOrThrowArgs>(args?: SelectSubset<T, AthleteFindFirstOrThrowArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Athletes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Athletes
     * const athletes = await prisma.athlete.findMany()
     * 
     * // Get first 10 Athletes
     * const athletes = await prisma.athlete.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const athleteWithIdOnly = await prisma.athlete.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AthleteFindManyArgs>(args?: SelectSubset<T, AthleteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Athlete.
     * @param {AthleteCreateArgs} args - Arguments to create a Athlete.
     * @example
     * // Create one Athlete
     * const Athlete = await prisma.athlete.create({
     *   data: {
     *     // ... data to create a Athlete
     *   }
     * })
     * 
     */
    create<T extends AthleteCreateArgs>(args: SelectSubset<T, AthleteCreateArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Athletes.
     * @param {AthleteCreateManyArgs} args - Arguments to create many Athletes.
     * @example
     * // Create many Athletes
     * const athlete = await prisma.athlete.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AthleteCreateManyArgs>(args?: SelectSubset<T, AthleteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Athletes and returns the data saved in the database.
     * @param {AthleteCreateManyAndReturnArgs} args - Arguments to create many Athletes.
     * @example
     * // Create many Athletes
     * const athlete = await prisma.athlete.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Athletes and only return the `id`
     * const athleteWithIdOnly = await prisma.athlete.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AthleteCreateManyAndReturnArgs>(args?: SelectSubset<T, AthleteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Athlete.
     * @param {AthleteDeleteArgs} args - Arguments to delete one Athlete.
     * @example
     * // Delete one Athlete
     * const Athlete = await prisma.athlete.delete({
     *   where: {
     *     // ... filter to delete one Athlete
     *   }
     * })
     * 
     */
    delete<T extends AthleteDeleteArgs>(args: SelectSubset<T, AthleteDeleteArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Athlete.
     * @param {AthleteUpdateArgs} args - Arguments to update one Athlete.
     * @example
     * // Update one Athlete
     * const athlete = await prisma.athlete.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AthleteUpdateArgs>(args: SelectSubset<T, AthleteUpdateArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Athletes.
     * @param {AthleteDeleteManyArgs} args - Arguments to filter Athletes to delete.
     * @example
     * // Delete a few Athletes
     * const { count } = await prisma.athlete.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AthleteDeleteManyArgs>(args?: SelectSubset<T, AthleteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Athletes
     * const athlete = await prisma.athlete.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AthleteUpdateManyArgs>(args: SelectSubset<T, AthleteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athletes and returns the data updated in the database.
     * @param {AthleteUpdateManyAndReturnArgs} args - Arguments to update many Athletes.
     * @example
     * // Update many Athletes
     * const athlete = await prisma.athlete.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Athletes and only return the `id`
     * const athleteWithIdOnly = await prisma.athlete.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AthleteUpdateManyAndReturnArgs>(args: SelectSubset<T, AthleteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Athlete.
     * @param {AthleteUpsertArgs} args - Arguments to update or create a Athlete.
     * @example
     * // Update or create a Athlete
     * const athlete = await prisma.athlete.upsert({
     *   create: {
     *     // ... data to create a Athlete
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Athlete we want to update
     *   }
     * })
     */
    upsert<T extends AthleteUpsertArgs>(args: SelectSubset<T, AthleteUpsertArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteCountArgs} args - Arguments to filter Athletes to count.
     * @example
     * // Count the number of Athletes
     * const count = await prisma.athlete.count({
     *   where: {
     *     // ... the filter for the Athletes we want to count
     *   }
     * })
    **/
    count<T extends AthleteCountArgs>(
      args?: Subset<T, AthleteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AthleteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Athlete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AthleteAggregateArgs>(args: Subset<T, AthleteAggregateArgs>): Prisma.PrismaPromise<GetAthleteAggregateType<T>>

    /**
     * Group by Athlete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AthleteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AthleteGroupByArgs['orderBy'] }
        : { orderBy?: AthleteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AthleteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAthleteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Athlete model
   */
  readonly fields: AthleteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Athlete.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AthleteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Athlete$userArgs<ExtArgs> = {}>(args?: Subset<T, Athlete$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    address<T extends Athlete$addressArgs<ExtArgs> = {}>(args?: Subset<T, Athlete$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    investments<T extends Athlete$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, Athlete$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    investment_group_athlete<T extends Athlete$investment_group_athleteArgs<ExtArgs> = {}>(args?: Subset<T, Athlete$investment_group_athleteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    investment_group_pair<T extends Athlete$investment_group_pairArgs<ExtArgs> = {}>(args?: Subset<T, Athlete$investment_group_pairArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    teacher_availability<T extends Athlete$teacher_availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Athlete$teacher_availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    lesson<T extends Athlete$lessonArgs<ExtArgs> = {}>(args?: Subset<T, Athlete$lessonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    lesson_attendance<T extends Athlete$lesson_attendanceArgs<ExtArgs> = {}>(args?: Subset<T, Athlete$lesson_attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Athlete model
   */ 
  interface AthleteFieldRefs {
    readonly id: FieldRef<"Athlete", 'String'>
    readonly name: FieldRef<"Athlete", 'String'>
    readonly birthday: FieldRef<"Athlete", 'DateTime'>
    readonly phone: FieldRef<"Athlete", 'String'>
    readonly responsible: FieldRef<"Athlete", 'String'>
    readonly date_start: FieldRef<"Athlete", 'DateTime'>
    readonly pix_key: FieldRef<"Athlete", 'String'>
    readonly cpf: FieldRef<"Athlete", 'String'>
    readonly address_id: FieldRef<"Athlete", 'String'>
    readonly is_student: FieldRef<"Athlete", 'Boolean'>
    readonly is_associated: FieldRef<"Athlete", 'Boolean'>
    readonly is_teacher: FieldRef<"Athlete", 'Boolean'>
    readonly created_at: FieldRef<"Athlete", 'DateTime'>
    readonly updated_at: FieldRef<"Athlete", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Athlete findUnique
   */
  export type AthleteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    /**
     * Filter, which Athlete to fetch.
     */
    where: AthleteWhereUniqueInput
  }

  /**
   * Athlete findUniqueOrThrow
   */
  export type AthleteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    /**
     * Filter, which Athlete to fetch.
     */
    where: AthleteWhereUniqueInput
  }

  /**
   * Athlete findFirst
   */
  export type AthleteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    /**
     * Filter, which Athlete to fetch.
     */
    where?: AthleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Athletes to fetch.
     */
    orderBy?: AthleteOrderByWithRelationInput | AthleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Athletes.
     */
    cursor?: AthleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Athletes.
     */
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[]
  }

  /**
   * Athlete findFirstOrThrow
   */
  export type AthleteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    /**
     * Filter, which Athlete to fetch.
     */
    where?: AthleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Athletes to fetch.
     */
    orderBy?: AthleteOrderByWithRelationInput | AthleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Athletes.
     */
    cursor?: AthleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Athletes.
     */
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[]
  }

  /**
   * Athlete findMany
   */
  export type AthleteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    /**
     * Filter, which Athletes to fetch.
     */
    where?: AthleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Athletes to fetch.
     */
    orderBy?: AthleteOrderByWithRelationInput | AthleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Athletes.
     */
    cursor?: AthleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Athletes.
     */
    skip?: number
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[]
  }

  /**
   * Athlete create
   */
  export type AthleteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    /**
     * The data needed to create a Athlete.
     */
    data: XOR<AthleteCreateInput, AthleteUncheckedCreateInput>
  }

  /**
   * Athlete createMany
   */
  export type AthleteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Athletes.
     */
    data: AthleteCreateManyInput | AthleteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Athlete createManyAndReturn
   */
  export type AthleteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * The data used to create many Athletes.
     */
    data: AthleteCreateManyInput | AthleteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Athlete update
   */
  export type AthleteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    /**
     * The data needed to update a Athlete.
     */
    data: XOR<AthleteUpdateInput, AthleteUncheckedUpdateInput>
    /**
     * Choose, which Athlete to update.
     */
    where: AthleteWhereUniqueInput
  }

  /**
   * Athlete updateMany
   */
  export type AthleteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Athletes.
     */
    data: XOR<AthleteUpdateManyMutationInput, AthleteUncheckedUpdateManyInput>
    /**
     * Filter which Athletes to update
     */
    where?: AthleteWhereInput
    /**
     * Limit how many Athletes to update.
     */
    limit?: number
  }

  /**
   * Athlete updateManyAndReturn
   */
  export type AthleteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * The data used to update Athletes.
     */
    data: XOR<AthleteUpdateManyMutationInput, AthleteUncheckedUpdateManyInput>
    /**
     * Filter which Athletes to update
     */
    where?: AthleteWhereInput
    /**
     * Limit how many Athletes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Athlete upsert
   */
  export type AthleteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    /**
     * The filter to search for the Athlete to update in case it exists.
     */
    where: AthleteWhereUniqueInput
    /**
     * In case the Athlete found by the `where` argument doesn't exist, create a new Athlete with this data.
     */
    create: XOR<AthleteCreateInput, AthleteUncheckedCreateInput>
    /**
     * In case the Athlete was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AthleteUpdateInput, AthleteUncheckedUpdateInput>
  }

  /**
   * Athlete delete
   */
  export type AthleteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    /**
     * Filter which Athlete to delete.
     */
    where: AthleteWhereUniqueInput
  }

  /**
   * Athlete deleteMany
   */
  export type AthleteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Athletes to delete
     */
    where?: AthleteWhereInput
    /**
     * Limit how many Athletes to delete.
     */
    limit?: number
  }

  /**
   * Athlete.user
   */
  export type Athlete$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Athlete.address
   */
  export type Athlete$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Athlete.investments
   */
  export type Athlete$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Athlete.investment_group_athlete
   */
  export type Athlete$investment_group_athleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    where?: InvestmentGroupWhereInput
    orderBy?: InvestmentGroupOrderByWithRelationInput | InvestmentGroupOrderByWithRelationInput[]
    cursor?: InvestmentGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentGroupScalarFieldEnum | InvestmentGroupScalarFieldEnum[]
  }

  /**
   * Athlete.investment_group_pair
   */
  export type Athlete$investment_group_pairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    where?: InvestmentGroupWhereInput
    orderBy?: InvestmentGroupOrderByWithRelationInput | InvestmentGroupOrderByWithRelationInput[]
    cursor?: InvestmentGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentGroupScalarFieldEnum | InvestmentGroupScalarFieldEnum[]
  }

  /**
   * Athlete.teacher_availability
   */
  export type Athlete$teacher_availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    where?: TeacherAvailabilityWhereInput
    orderBy?: TeacherAvailabilityOrderByWithRelationInput | TeacherAvailabilityOrderByWithRelationInput[]
    cursor?: TeacherAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherAvailabilityScalarFieldEnum | TeacherAvailabilityScalarFieldEnum[]
  }

  /**
   * Athlete.lesson
   */
  export type Athlete$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Athlete.lesson_attendance
   */
  export type Athlete$lesson_attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    where?: LessonAttendanceWhereInput
    orderBy?: LessonAttendanceOrderByWithRelationInput | LessonAttendanceOrderByWithRelationInput[]
    cursor?: LessonAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonAttendanceScalarFieldEnum | LessonAttendanceScalarFieldEnum[]
  }

  /**
   * Athlete without action
   */
  export type AthleteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
  }


  /**
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    value: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    value: number | null
  }

  export type InvestmentMinAggregateOutputType = {
    id: string | null
    investment_type_id: string | null
    athlete_id: string | null
    value: number | null
    description: string | null
    date: Date | null
    paid: Date | null
    proof: string | null
    investment_group_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: string | null
    investment_type_id: string | null
    athlete_id: string | null
    value: number | null
    description: string | null
    date: Date | null
    paid: Date | null
    proof: string | null
    investment_group_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    investment_type_id: number
    athlete_id: number
    value: number
    description: number
    date: number
    paid: number
    proof: number
    investment_group_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    value?: true
  }

  export type InvestmentSumAggregateInputType = {
    value?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    investment_type_id?: true
    athlete_id?: true
    value?: true
    description?: true
    date?: true
    paid?: true
    proof?: true
    investment_group_id?: true
    created_at?: true
    updated_at?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    investment_type_id?: true
    athlete_id?: true
    value?: true
    description?: true
    date?: true
    paid?: true
    proof?: true
    investment_group_id?: true
    created_at?: true
    updated_at?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    investment_type_id?: true
    athlete_id?: true
    value?: true
    description?: true
    date?: true
    paid?: true
    proof?: true
    investment_group_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: string
    investment_type_id: string
    athlete_id: string
    value: number
    description: string
    date: Date
    paid: Date | null
    proof: string | null
    investment_group_id: string | null
    created_at: Date
    updated_at: Date
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investment_type_id?: boolean
    athlete_id?: boolean
    value?: boolean
    description?: boolean
    date?: boolean
    paid?: boolean
    proof?: boolean
    investment_group_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    investment_type?: boolean | InvestmentTypeDefaultArgs<ExtArgs>
    investment_group?: boolean | Investment$investment_groupArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investment_type_id?: boolean
    athlete_id?: boolean
    value?: boolean
    description?: boolean
    date?: boolean
    paid?: boolean
    proof?: boolean
    investment_group_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    investment_type?: boolean | InvestmentTypeDefaultArgs<ExtArgs>
    investment_group?: boolean | Investment$investment_groupArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investment_type_id?: boolean
    athlete_id?: boolean
    value?: boolean
    description?: boolean
    date?: boolean
    paid?: boolean
    proof?: boolean
    investment_group_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    investment_type?: boolean | InvestmentTypeDefaultArgs<ExtArgs>
    investment_group?: boolean | Investment$investment_groupArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    investment_type_id?: boolean
    athlete_id?: boolean
    value?: boolean
    description?: boolean
    date?: boolean
    paid?: boolean
    proof?: boolean
    investment_group_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type InvestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "investment_type_id" | "athlete_id" | "value" | "description" | "date" | "paid" | "proof" | "investment_group_id" | "created_at" | "updated_at", ExtArgs["result"]["investment"]>
  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    investment_type?: boolean | InvestmentTypeDefaultArgs<ExtArgs>
    investment_group?: boolean | Investment$investment_groupArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    investment_type?: boolean | InvestmentTypeDefaultArgs<ExtArgs>
    investment_group?: boolean | Investment$investment_groupArgs<ExtArgs>
  }
  export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    investment_type?: boolean | InvestmentTypeDefaultArgs<ExtArgs>
    investment_group?: boolean | Investment$investment_groupArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      athlete: Prisma.$AthletePayload<ExtArgs>
      investment_type: Prisma.$InvestmentTypePayload<ExtArgs>
      investment_group: Prisma.$InvestmentGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      investment_type_id: string
      athlete_id: string
      value: number
      description: string
      date: Date
      paid: Date | null
      proof: string | null
      investment_group_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    athlete<T extends AthleteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AthleteDefaultArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    investment_type<T extends InvestmentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentTypeDefaultArgs<ExtArgs>>): Prisma__InvestmentTypeClient<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    investment_group<T extends Investment$investment_groupArgs<ExtArgs> = {}>(args?: Subset<T, Investment$investment_groupArgs<ExtArgs>>): Prisma__InvestmentGroupClient<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investment model
   */ 
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'String'>
    readonly investment_type_id: FieldRef<"Investment", 'String'>
    readonly athlete_id: FieldRef<"Investment", 'String'>
    readonly value: FieldRef<"Investment", 'Float'>
    readonly description: FieldRef<"Investment", 'String'>
    readonly date: FieldRef<"Investment", 'DateTime'>
    readonly paid: FieldRef<"Investment", 'DateTime'>
    readonly proof: FieldRef<"Investment", 'String'>
    readonly investment_group_id: FieldRef<"Investment", 'String'>
    readonly created_at: FieldRef<"Investment", 'DateTime'>
    readonly updated_at: FieldRef<"Investment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
  }

  /**
   * Investment updateManyAndReturn
   */
  export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to delete.
     */
    limit?: number
  }

  /**
   * Investment.investment_group
   */
  export type Investment$investment_groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    where?: InvestmentGroupWhereInput
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
  }


  /**
   * Model InvestmentType
   */

  export type AggregateInvestmentType = {
    _count: InvestmentTypeCountAggregateOutputType | null
    _min: InvestmentTypeMinAggregateOutputType | null
    _max: InvestmentTypeMaxAggregateOutputType | null
  }

  export type InvestmentTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvestmentTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvestmentTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    can_see: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InvestmentTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type InvestmentTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type InvestmentTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    can_see?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InvestmentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentType to aggregate.
     */
    where?: InvestmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentTypes to fetch.
     */
    orderBy?: InvestmentTypeOrderByWithRelationInput | InvestmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvestmentTypes
    **/
    _count?: true | InvestmentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentTypeMaxAggregateInputType
  }

  export type GetInvestmentTypeAggregateType<T extends InvestmentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestmentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestmentType[P]>
      : GetScalarType<T[P], AggregateInvestmentType[P]>
  }




  export type InvestmentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentTypeWhereInput
    orderBy?: InvestmentTypeOrderByWithAggregationInput | InvestmentTypeOrderByWithAggregationInput[]
    by: InvestmentTypeScalarFieldEnum[] | InvestmentTypeScalarFieldEnum
    having?: InvestmentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentTypeCountAggregateInputType | true
    _min?: InvestmentTypeMinAggregateInputType
    _max?: InvestmentTypeMaxAggregateInputType
  }

  export type InvestmentTypeGroupByOutputType = {
    id: string
    name: string
    description: string
    can_see: $Enums.UserRole[]
    created_at: Date
    updated_at: Date
    _count: InvestmentTypeCountAggregateOutputType | null
    _min: InvestmentTypeMinAggregateOutputType | null
    _max: InvestmentTypeMaxAggregateOutputType | null
  }

  type GetInvestmentTypeGroupByPayload<T extends InvestmentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentTypeGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    can_see?: boolean
    created_at?: boolean
    updated_at?: boolean
    investments?: boolean | InvestmentType$investmentsArgs<ExtArgs>
    _count?: boolean | InvestmentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentType"]>

  export type InvestmentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    can_see?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["investmentType"]>

  export type InvestmentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    can_see?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["investmentType"]>

  export type InvestmentTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    can_see?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type InvestmentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "can_see" | "created_at" | "updated_at", ExtArgs["result"]["investmentType"]>
  export type InvestmentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | InvestmentType$investmentsArgs<ExtArgs>
    _count?: boolean | InvestmentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestmentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InvestmentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InvestmentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvestmentType"
    objects: {
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      can_see: $Enums.UserRole[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["investmentType"]>
    composites: {}
  }

  type InvestmentTypeGetPayload<S extends boolean | null | undefined | InvestmentTypeDefaultArgs> = $Result.GetResult<Prisma.$InvestmentTypePayload, S>

  type InvestmentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentTypeCountAggregateInputType | true
    }

  export interface InvestmentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvestmentType'], meta: { name: 'InvestmentType' } }
    /**
     * Find zero or one InvestmentType that matches the filter.
     * @param {InvestmentTypeFindUniqueArgs} args - Arguments to find a InvestmentType
     * @example
     * // Get one InvestmentType
     * const investmentType = await prisma.investmentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentTypeFindUniqueArgs>(args: SelectSubset<T, InvestmentTypeFindUniqueArgs<ExtArgs>>): Prisma__InvestmentTypeClient<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one InvestmentType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentTypeFindUniqueOrThrowArgs} args - Arguments to find a InvestmentType
     * @example
     * // Get one InvestmentType
     * const investmentType = await prisma.investmentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentTypeClient<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first InvestmentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentTypeFindFirstArgs} args - Arguments to find a InvestmentType
     * @example
     * // Get one InvestmentType
     * const investmentType = await prisma.investmentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentTypeFindFirstArgs>(args?: SelectSubset<T, InvestmentTypeFindFirstArgs<ExtArgs>>): Prisma__InvestmentTypeClient<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first InvestmentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentTypeFindFirstOrThrowArgs} args - Arguments to find a InvestmentType
     * @example
     * // Get one InvestmentType
     * const investmentType = await prisma.investmentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentTypeClient<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more InvestmentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvestmentTypes
     * const investmentTypes = await prisma.investmentType.findMany()
     * 
     * // Get first 10 InvestmentTypes
     * const investmentTypes = await prisma.investmentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentTypeWithIdOnly = await prisma.investmentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentTypeFindManyArgs>(args?: SelectSubset<T, InvestmentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a InvestmentType.
     * @param {InvestmentTypeCreateArgs} args - Arguments to create a InvestmentType.
     * @example
     * // Create one InvestmentType
     * const InvestmentType = await prisma.investmentType.create({
     *   data: {
     *     // ... data to create a InvestmentType
     *   }
     * })
     * 
     */
    create<T extends InvestmentTypeCreateArgs>(args: SelectSubset<T, InvestmentTypeCreateArgs<ExtArgs>>): Prisma__InvestmentTypeClient<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many InvestmentTypes.
     * @param {InvestmentTypeCreateManyArgs} args - Arguments to create many InvestmentTypes.
     * @example
     * // Create many InvestmentTypes
     * const investmentType = await prisma.investmentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentTypeCreateManyArgs>(args?: SelectSubset<T, InvestmentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvestmentTypes and returns the data saved in the database.
     * @param {InvestmentTypeCreateManyAndReturnArgs} args - Arguments to create many InvestmentTypes.
     * @example
     * // Create many InvestmentTypes
     * const investmentType = await prisma.investmentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvestmentTypes and only return the `id`
     * const investmentTypeWithIdOnly = await prisma.investmentType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a InvestmentType.
     * @param {InvestmentTypeDeleteArgs} args - Arguments to delete one InvestmentType.
     * @example
     * // Delete one InvestmentType
     * const InvestmentType = await prisma.investmentType.delete({
     *   where: {
     *     // ... filter to delete one InvestmentType
     *   }
     * })
     * 
     */
    delete<T extends InvestmentTypeDeleteArgs>(args: SelectSubset<T, InvestmentTypeDeleteArgs<ExtArgs>>): Prisma__InvestmentTypeClient<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one InvestmentType.
     * @param {InvestmentTypeUpdateArgs} args - Arguments to update one InvestmentType.
     * @example
     * // Update one InvestmentType
     * const investmentType = await prisma.investmentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentTypeUpdateArgs>(args: SelectSubset<T, InvestmentTypeUpdateArgs<ExtArgs>>): Prisma__InvestmentTypeClient<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more InvestmentTypes.
     * @param {InvestmentTypeDeleteManyArgs} args - Arguments to filter InvestmentTypes to delete.
     * @example
     * // Delete a few InvestmentTypes
     * const { count } = await prisma.investmentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentTypeDeleteManyArgs>(args?: SelectSubset<T, InvestmentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvestmentTypes
     * const investmentType = await prisma.investmentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentTypeUpdateManyArgs>(args: SelectSubset<T, InvestmentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentTypes and returns the data updated in the database.
     * @param {InvestmentTypeUpdateManyAndReturnArgs} args - Arguments to update many InvestmentTypes.
     * @example
     * // Update many InvestmentTypes
     * const investmentType = await prisma.investmentType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvestmentTypes and only return the `id`
     * const investmentTypeWithIdOnly = await prisma.investmentType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one InvestmentType.
     * @param {InvestmentTypeUpsertArgs} args - Arguments to update or create a InvestmentType.
     * @example
     * // Update or create a InvestmentType
     * const investmentType = await prisma.investmentType.upsert({
     *   create: {
     *     // ... data to create a InvestmentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvestmentType we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentTypeUpsertArgs>(args: SelectSubset<T, InvestmentTypeUpsertArgs<ExtArgs>>): Prisma__InvestmentTypeClient<$Result.GetResult<Prisma.$InvestmentTypePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of InvestmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentTypeCountArgs} args - Arguments to filter InvestmentTypes to count.
     * @example
     * // Count the number of InvestmentTypes
     * const count = await prisma.investmentType.count({
     *   where: {
     *     // ... the filter for the InvestmentTypes we want to count
     *   }
     * })
    **/
    count<T extends InvestmentTypeCountArgs>(
      args?: Subset<T, InvestmentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvestmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentTypeAggregateArgs>(args: Subset<T, InvestmentTypeAggregateArgs>): Prisma.PrismaPromise<GetInvestmentTypeAggregateType<T>>

    /**
     * Group by InvestmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentTypeGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvestmentType model
   */
  readonly fields: InvestmentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvestmentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investments<T extends InvestmentType$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentType$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvestmentType model
   */ 
  interface InvestmentTypeFieldRefs {
    readonly id: FieldRef<"InvestmentType", 'String'>
    readonly name: FieldRef<"InvestmentType", 'String'>
    readonly description: FieldRef<"InvestmentType", 'String'>
    readonly can_see: FieldRef<"InvestmentType", 'UserRole[]'>
    readonly created_at: FieldRef<"InvestmentType", 'DateTime'>
    readonly updated_at: FieldRef<"InvestmentType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvestmentType findUnique
   */
  export type InvestmentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentType to fetch.
     */
    where: InvestmentTypeWhereUniqueInput
  }

  /**
   * InvestmentType findUniqueOrThrow
   */
  export type InvestmentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentType to fetch.
     */
    where: InvestmentTypeWhereUniqueInput
  }

  /**
   * InvestmentType findFirst
   */
  export type InvestmentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentType to fetch.
     */
    where?: InvestmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentTypes to fetch.
     */
    orderBy?: InvestmentTypeOrderByWithRelationInput | InvestmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentTypes.
     */
    cursor?: InvestmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentTypes.
     */
    distinct?: InvestmentTypeScalarFieldEnum | InvestmentTypeScalarFieldEnum[]
  }

  /**
   * InvestmentType findFirstOrThrow
   */
  export type InvestmentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentType to fetch.
     */
    where?: InvestmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentTypes to fetch.
     */
    orderBy?: InvestmentTypeOrderByWithRelationInput | InvestmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentTypes.
     */
    cursor?: InvestmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentTypes.
     */
    distinct?: InvestmentTypeScalarFieldEnum | InvestmentTypeScalarFieldEnum[]
  }

  /**
   * InvestmentType findMany
   */
  export type InvestmentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentTypes to fetch.
     */
    where?: InvestmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentTypes to fetch.
     */
    orderBy?: InvestmentTypeOrderByWithRelationInput | InvestmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvestmentTypes.
     */
    cursor?: InvestmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentTypes.
     */
    skip?: number
    distinct?: InvestmentTypeScalarFieldEnum | InvestmentTypeScalarFieldEnum[]
  }

  /**
   * InvestmentType create
   */
  export type InvestmentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a InvestmentType.
     */
    data: XOR<InvestmentTypeCreateInput, InvestmentTypeUncheckedCreateInput>
  }

  /**
   * InvestmentType createMany
   */
  export type InvestmentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvestmentTypes.
     */
    data: InvestmentTypeCreateManyInput | InvestmentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvestmentType createManyAndReturn
   */
  export type InvestmentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * The data used to create many InvestmentTypes.
     */
    data: InvestmentTypeCreateManyInput | InvestmentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvestmentType update
   */
  export type InvestmentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a InvestmentType.
     */
    data: XOR<InvestmentTypeUpdateInput, InvestmentTypeUncheckedUpdateInput>
    /**
     * Choose, which InvestmentType to update.
     */
    where: InvestmentTypeWhereUniqueInput
  }

  /**
   * InvestmentType updateMany
   */
  export type InvestmentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvestmentTypes.
     */
    data: XOR<InvestmentTypeUpdateManyMutationInput, InvestmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentTypes to update
     */
    where?: InvestmentTypeWhereInput
    /**
     * Limit how many InvestmentTypes to update.
     */
    limit?: number
  }

  /**
   * InvestmentType updateManyAndReturn
   */
  export type InvestmentTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * The data used to update InvestmentTypes.
     */
    data: XOR<InvestmentTypeUpdateManyMutationInput, InvestmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentTypes to update
     */
    where?: InvestmentTypeWhereInput
    /**
     * Limit how many InvestmentTypes to update.
     */
    limit?: number
  }

  /**
   * InvestmentType upsert
   */
  export type InvestmentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the InvestmentType to update in case it exists.
     */
    where: InvestmentTypeWhereUniqueInput
    /**
     * In case the InvestmentType found by the `where` argument doesn't exist, create a new InvestmentType with this data.
     */
    create: XOR<InvestmentTypeCreateInput, InvestmentTypeUncheckedCreateInput>
    /**
     * In case the InvestmentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentTypeUpdateInput, InvestmentTypeUncheckedUpdateInput>
  }

  /**
   * InvestmentType delete
   */
  export type InvestmentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentTypeInclude<ExtArgs> | null
    /**
     * Filter which InvestmentType to delete.
     */
    where: InvestmentTypeWhereUniqueInput
  }

  /**
   * InvestmentType deleteMany
   */
  export type InvestmentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentTypes to delete
     */
    where?: InvestmentTypeWhereInput
    /**
     * Limit how many InvestmentTypes to delete.
     */
    limit?: number
  }

  /**
   * InvestmentType.investments
   */
  export type InvestmentType$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * InvestmentType without action
   */
  export type InvestmentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentType
     */
    select?: InvestmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentType
     */
    omit?: InvestmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentTypeInclude<ExtArgs> | null
  }


  /**
   * Model InvestmentGroup
   */

  export type AggregateInvestmentGroup = {
    _count: InvestmentGroupCountAggregateOutputType | null
    _avg: InvestmentGroupAvgAggregateOutputType | null
    _sum: InvestmentGroupSumAggregateOutputType | null
    _min: InvestmentGroupMinAggregateOutputType | null
    _max: InvestmentGroupMaxAggregateOutputType | null
  }

  export type InvestmentGroupAvgAggregateOutputType = {
    pair_amount: number | null
    km: number | null
    km_racional: number | null
  }

  export type InvestmentGroupSumAggregateOutputType = {
    pair_amount: number | null
    km: number | null
    km_racional: number | null
  }

  export type InvestmentGroupMinAggregateOutputType = {
    id: string | null
    athlete_id: string | null
    pair_id: string | null
    tournament_id: string | null
    podium: string | null
    description: string | null
    pair_amount: number | null
    km: number | null
    km_racional: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvestmentGroupMaxAggregateOutputType = {
    id: string | null
    athlete_id: string | null
    pair_id: string | null
    tournament_id: string | null
    podium: string | null
    description: string | null
    pair_amount: number | null
    km: number | null
    km_racional: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvestmentGroupCountAggregateOutputType = {
    id: number
    athlete_id: number
    pair_id: number
    tournament_id: number
    podium: number
    description: number
    pair_amount: number
    km: number
    km_racional: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InvestmentGroupAvgAggregateInputType = {
    pair_amount?: true
    km?: true
    km_racional?: true
  }

  export type InvestmentGroupSumAggregateInputType = {
    pair_amount?: true
    km?: true
    km_racional?: true
  }

  export type InvestmentGroupMinAggregateInputType = {
    id?: true
    athlete_id?: true
    pair_id?: true
    tournament_id?: true
    podium?: true
    description?: true
    pair_amount?: true
    km?: true
    km_racional?: true
    created_at?: true
    updated_at?: true
  }

  export type InvestmentGroupMaxAggregateInputType = {
    id?: true
    athlete_id?: true
    pair_id?: true
    tournament_id?: true
    podium?: true
    description?: true
    pair_amount?: true
    km?: true
    km_racional?: true
    created_at?: true
    updated_at?: true
  }

  export type InvestmentGroupCountAggregateInputType = {
    id?: true
    athlete_id?: true
    pair_id?: true
    tournament_id?: true
    podium?: true
    description?: true
    pair_amount?: true
    km?: true
    km_racional?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InvestmentGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentGroup to aggregate.
     */
    where?: InvestmentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentGroups to fetch.
     */
    orderBy?: InvestmentGroupOrderByWithRelationInput | InvestmentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvestmentGroups
    **/
    _count?: true | InvestmentGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentGroupMaxAggregateInputType
  }

  export type GetInvestmentGroupAggregateType<T extends InvestmentGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestmentGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestmentGroup[P]>
      : GetScalarType<T[P], AggregateInvestmentGroup[P]>
  }




  export type InvestmentGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentGroupWhereInput
    orderBy?: InvestmentGroupOrderByWithAggregationInput | InvestmentGroupOrderByWithAggregationInput[]
    by: InvestmentGroupScalarFieldEnum[] | InvestmentGroupScalarFieldEnum
    having?: InvestmentGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentGroupCountAggregateInputType | true
    _avg?: InvestmentGroupAvgAggregateInputType
    _sum?: InvestmentGroupSumAggregateInputType
    _min?: InvestmentGroupMinAggregateInputType
    _max?: InvestmentGroupMaxAggregateInputType
  }

  export type InvestmentGroupGroupByOutputType = {
    id: string
    athlete_id: string
    pair_id: string | null
    tournament_id: string | null
    podium: string | null
    description: string | null
    pair_amount: number | null
    km: number | null
    km_racional: number | null
    created_at: Date
    updated_at: Date
    _count: InvestmentGroupCountAggregateOutputType | null
    _avg: InvestmentGroupAvgAggregateOutputType | null
    _sum: InvestmentGroupSumAggregateOutputType | null
    _min: InvestmentGroupMinAggregateOutputType | null
    _max: InvestmentGroupMaxAggregateOutputType | null
  }

  type GetInvestmentGroupGroupByPayload<T extends InvestmentGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athlete_id?: boolean
    pair_id?: boolean
    tournament_id?: boolean
    podium?: boolean
    description?: boolean
    pair_amount?: boolean
    km?: boolean
    km_racional?: boolean
    created_at?: boolean
    updated_at?: boolean
    investments?: boolean | InvestmentGroup$investmentsArgs<ExtArgs>
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    pair?: boolean | InvestmentGroup$pairArgs<ExtArgs>
    tournament?: boolean | InvestmentGroup$tournamentArgs<ExtArgs>
    _count?: boolean | InvestmentGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentGroup"]>

  export type InvestmentGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athlete_id?: boolean
    pair_id?: boolean
    tournament_id?: boolean
    podium?: boolean
    description?: boolean
    pair_amount?: boolean
    km?: boolean
    km_racional?: boolean
    created_at?: boolean
    updated_at?: boolean
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    pair?: boolean | InvestmentGroup$pairArgs<ExtArgs>
    tournament?: boolean | InvestmentGroup$tournamentArgs<ExtArgs>
  }, ExtArgs["result"]["investmentGroup"]>

  export type InvestmentGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athlete_id?: boolean
    pair_id?: boolean
    tournament_id?: boolean
    podium?: boolean
    description?: boolean
    pair_amount?: boolean
    km?: boolean
    km_racional?: boolean
    created_at?: boolean
    updated_at?: boolean
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    pair?: boolean | InvestmentGroup$pairArgs<ExtArgs>
    tournament?: boolean | InvestmentGroup$tournamentArgs<ExtArgs>
  }, ExtArgs["result"]["investmentGroup"]>

  export type InvestmentGroupSelectScalar = {
    id?: boolean
    athlete_id?: boolean
    pair_id?: boolean
    tournament_id?: boolean
    podium?: boolean
    description?: boolean
    pair_amount?: boolean
    km?: boolean
    km_racional?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type InvestmentGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "athlete_id" | "pair_id" | "tournament_id" | "podium" | "description" | "pair_amount" | "km" | "km_racional" | "created_at" | "updated_at", ExtArgs["result"]["investmentGroup"]>
  export type InvestmentGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | InvestmentGroup$investmentsArgs<ExtArgs>
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    pair?: boolean | InvestmentGroup$pairArgs<ExtArgs>
    tournament?: boolean | InvestmentGroup$tournamentArgs<ExtArgs>
    _count?: boolean | InvestmentGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestmentGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    pair?: boolean | InvestmentGroup$pairArgs<ExtArgs>
    tournament?: boolean | InvestmentGroup$tournamentArgs<ExtArgs>
  }
  export type InvestmentGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | AthleteDefaultArgs<ExtArgs>
    pair?: boolean | InvestmentGroup$pairArgs<ExtArgs>
    tournament?: boolean | InvestmentGroup$tournamentArgs<ExtArgs>
  }

  export type $InvestmentGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvestmentGroup"
    objects: {
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
      athlete: Prisma.$AthletePayload<ExtArgs>
      pair: Prisma.$AthletePayload<ExtArgs> | null
      tournament: Prisma.$TournamentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      athlete_id: string
      pair_id: string | null
      tournament_id: string | null
      podium: string | null
      description: string | null
      pair_amount: number | null
      km: number | null
      km_racional: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["investmentGroup"]>
    composites: {}
  }

  type InvestmentGroupGetPayload<S extends boolean | null | undefined | InvestmentGroupDefaultArgs> = $Result.GetResult<Prisma.$InvestmentGroupPayload, S>

  type InvestmentGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentGroupCountAggregateInputType | true
    }

  export interface InvestmentGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvestmentGroup'], meta: { name: 'InvestmentGroup' } }
    /**
     * Find zero or one InvestmentGroup that matches the filter.
     * @param {InvestmentGroupFindUniqueArgs} args - Arguments to find a InvestmentGroup
     * @example
     * // Get one InvestmentGroup
     * const investmentGroup = await prisma.investmentGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentGroupFindUniqueArgs>(args: SelectSubset<T, InvestmentGroupFindUniqueArgs<ExtArgs>>): Prisma__InvestmentGroupClient<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one InvestmentGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentGroupFindUniqueOrThrowArgs} args - Arguments to find a InvestmentGroup
     * @example
     * // Get one InvestmentGroup
     * const investmentGroup = await prisma.investmentGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentGroupClient<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first InvestmentGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupFindFirstArgs} args - Arguments to find a InvestmentGroup
     * @example
     * // Get one InvestmentGroup
     * const investmentGroup = await prisma.investmentGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentGroupFindFirstArgs>(args?: SelectSubset<T, InvestmentGroupFindFirstArgs<ExtArgs>>): Prisma__InvestmentGroupClient<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first InvestmentGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupFindFirstOrThrowArgs} args - Arguments to find a InvestmentGroup
     * @example
     * // Get one InvestmentGroup
     * const investmentGroup = await prisma.investmentGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentGroupClient<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more InvestmentGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvestmentGroups
     * const investmentGroups = await prisma.investmentGroup.findMany()
     * 
     * // Get first 10 InvestmentGroups
     * const investmentGroups = await prisma.investmentGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentGroupWithIdOnly = await prisma.investmentGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentGroupFindManyArgs>(args?: SelectSubset<T, InvestmentGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a InvestmentGroup.
     * @param {InvestmentGroupCreateArgs} args - Arguments to create a InvestmentGroup.
     * @example
     * // Create one InvestmentGroup
     * const InvestmentGroup = await prisma.investmentGroup.create({
     *   data: {
     *     // ... data to create a InvestmentGroup
     *   }
     * })
     * 
     */
    create<T extends InvestmentGroupCreateArgs>(args: SelectSubset<T, InvestmentGroupCreateArgs<ExtArgs>>): Prisma__InvestmentGroupClient<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many InvestmentGroups.
     * @param {InvestmentGroupCreateManyArgs} args - Arguments to create many InvestmentGroups.
     * @example
     * // Create many InvestmentGroups
     * const investmentGroup = await prisma.investmentGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentGroupCreateManyArgs>(args?: SelectSubset<T, InvestmentGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvestmentGroups and returns the data saved in the database.
     * @param {InvestmentGroupCreateManyAndReturnArgs} args - Arguments to create many InvestmentGroups.
     * @example
     * // Create many InvestmentGroups
     * const investmentGroup = await prisma.investmentGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvestmentGroups and only return the `id`
     * const investmentGroupWithIdOnly = await prisma.investmentGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a InvestmentGroup.
     * @param {InvestmentGroupDeleteArgs} args - Arguments to delete one InvestmentGroup.
     * @example
     * // Delete one InvestmentGroup
     * const InvestmentGroup = await prisma.investmentGroup.delete({
     *   where: {
     *     // ... filter to delete one InvestmentGroup
     *   }
     * })
     * 
     */
    delete<T extends InvestmentGroupDeleteArgs>(args: SelectSubset<T, InvestmentGroupDeleteArgs<ExtArgs>>): Prisma__InvestmentGroupClient<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one InvestmentGroup.
     * @param {InvestmentGroupUpdateArgs} args - Arguments to update one InvestmentGroup.
     * @example
     * // Update one InvestmentGroup
     * const investmentGroup = await prisma.investmentGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentGroupUpdateArgs>(args: SelectSubset<T, InvestmentGroupUpdateArgs<ExtArgs>>): Prisma__InvestmentGroupClient<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more InvestmentGroups.
     * @param {InvestmentGroupDeleteManyArgs} args - Arguments to filter InvestmentGroups to delete.
     * @example
     * // Delete a few InvestmentGroups
     * const { count } = await prisma.investmentGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentGroupDeleteManyArgs>(args?: SelectSubset<T, InvestmentGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvestmentGroups
     * const investmentGroup = await prisma.investmentGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentGroupUpdateManyArgs>(args: SelectSubset<T, InvestmentGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentGroups and returns the data updated in the database.
     * @param {InvestmentGroupUpdateManyAndReturnArgs} args - Arguments to update many InvestmentGroups.
     * @example
     * // Update many InvestmentGroups
     * const investmentGroup = await prisma.investmentGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvestmentGroups and only return the `id`
     * const investmentGroupWithIdOnly = await prisma.investmentGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one InvestmentGroup.
     * @param {InvestmentGroupUpsertArgs} args - Arguments to update or create a InvestmentGroup.
     * @example
     * // Update or create a InvestmentGroup
     * const investmentGroup = await prisma.investmentGroup.upsert({
     *   create: {
     *     // ... data to create a InvestmentGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvestmentGroup we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentGroupUpsertArgs>(args: SelectSubset<T, InvestmentGroupUpsertArgs<ExtArgs>>): Prisma__InvestmentGroupClient<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of InvestmentGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupCountArgs} args - Arguments to filter InvestmentGroups to count.
     * @example
     * // Count the number of InvestmentGroups
     * const count = await prisma.investmentGroup.count({
     *   where: {
     *     // ... the filter for the InvestmentGroups we want to count
     *   }
     * })
    **/
    count<T extends InvestmentGroupCountArgs>(
      args?: Subset<T, InvestmentGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvestmentGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentGroupAggregateArgs>(args: Subset<T, InvestmentGroupAggregateArgs>): Prisma.PrismaPromise<GetInvestmentGroupAggregateType<T>>

    /**
     * Group by InvestmentGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvestmentGroup model
   */
  readonly fields: InvestmentGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvestmentGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investments<T extends InvestmentGroup$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentGroup$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    athlete<T extends AthleteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AthleteDefaultArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    pair<T extends InvestmentGroup$pairArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentGroup$pairArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    tournament<T extends InvestmentGroup$tournamentArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentGroup$tournamentArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvestmentGroup model
   */ 
  interface InvestmentGroupFieldRefs {
    readonly id: FieldRef<"InvestmentGroup", 'String'>
    readonly athlete_id: FieldRef<"InvestmentGroup", 'String'>
    readonly pair_id: FieldRef<"InvestmentGroup", 'String'>
    readonly tournament_id: FieldRef<"InvestmentGroup", 'String'>
    readonly podium: FieldRef<"InvestmentGroup", 'String'>
    readonly description: FieldRef<"InvestmentGroup", 'String'>
    readonly pair_amount: FieldRef<"InvestmentGroup", 'Int'>
    readonly km: FieldRef<"InvestmentGroup", 'Float'>
    readonly km_racional: FieldRef<"InvestmentGroup", 'Float'>
    readonly created_at: FieldRef<"InvestmentGroup", 'DateTime'>
    readonly updated_at: FieldRef<"InvestmentGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvestmentGroup findUnique
   */
  export type InvestmentGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentGroup to fetch.
     */
    where: InvestmentGroupWhereUniqueInput
  }

  /**
   * InvestmentGroup findUniqueOrThrow
   */
  export type InvestmentGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentGroup to fetch.
     */
    where: InvestmentGroupWhereUniqueInput
  }

  /**
   * InvestmentGroup findFirst
   */
  export type InvestmentGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentGroup to fetch.
     */
    where?: InvestmentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentGroups to fetch.
     */
    orderBy?: InvestmentGroupOrderByWithRelationInput | InvestmentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentGroups.
     */
    cursor?: InvestmentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentGroups.
     */
    distinct?: InvestmentGroupScalarFieldEnum | InvestmentGroupScalarFieldEnum[]
  }

  /**
   * InvestmentGroup findFirstOrThrow
   */
  export type InvestmentGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentGroup to fetch.
     */
    where?: InvestmentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentGroups to fetch.
     */
    orderBy?: InvestmentGroupOrderByWithRelationInput | InvestmentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentGroups.
     */
    cursor?: InvestmentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentGroups.
     */
    distinct?: InvestmentGroupScalarFieldEnum | InvestmentGroupScalarFieldEnum[]
  }

  /**
   * InvestmentGroup findMany
   */
  export type InvestmentGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentGroups to fetch.
     */
    where?: InvestmentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentGroups to fetch.
     */
    orderBy?: InvestmentGroupOrderByWithRelationInput | InvestmentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvestmentGroups.
     */
    cursor?: InvestmentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentGroups.
     */
    skip?: number
    distinct?: InvestmentGroupScalarFieldEnum | InvestmentGroupScalarFieldEnum[]
  }

  /**
   * InvestmentGroup create
   */
  export type InvestmentGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a InvestmentGroup.
     */
    data: XOR<InvestmentGroupCreateInput, InvestmentGroupUncheckedCreateInput>
  }

  /**
   * InvestmentGroup createMany
   */
  export type InvestmentGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvestmentGroups.
     */
    data: InvestmentGroupCreateManyInput | InvestmentGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvestmentGroup createManyAndReturn
   */
  export type InvestmentGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * The data used to create many InvestmentGroups.
     */
    data: InvestmentGroupCreateManyInput | InvestmentGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvestmentGroup update
   */
  export type InvestmentGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a InvestmentGroup.
     */
    data: XOR<InvestmentGroupUpdateInput, InvestmentGroupUncheckedUpdateInput>
    /**
     * Choose, which InvestmentGroup to update.
     */
    where: InvestmentGroupWhereUniqueInput
  }

  /**
   * InvestmentGroup updateMany
   */
  export type InvestmentGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvestmentGroups.
     */
    data: XOR<InvestmentGroupUpdateManyMutationInput, InvestmentGroupUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentGroups to update
     */
    where?: InvestmentGroupWhereInput
    /**
     * Limit how many InvestmentGroups to update.
     */
    limit?: number
  }

  /**
   * InvestmentGroup updateManyAndReturn
   */
  export type InvestmentGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * The data used to update InvestmentGroups.
     */
    data: XOR<InvestmentGroupUpdateManyMutationInput, InvestmentGroupUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentGroups to update
     */
    where?: InvestmentGroupWhereInput
    /**
     * Limit how many InvestmentGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvestmentGroup upsert
   */
  export type InvestmentGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the InvestmentGroup to update in case it exists.
     */
    where: InvestmentGroupWhereUniqueInput
    /**
     * In case the InvestmentGroup found by the `where` argument doesn't exist, create a new InvestmentGroup with this data.
     */
    create: XOR<InvestmentGroupCreateInput, InvestmentGroupUncheckedCreateInput>
    /**
     * In case the InvestmentGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentGroupUpdateInput, InvestmentGroupUncheckedUpdateInput>
  }

  /**
   * InvestmentGroup delete
   */
  export type InvestmentGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    /**
     * Filter which InvestmentGroup to delete.
     */
    where: InvestmentGroupWhereUniqueInput
  }

  /**
   * InvestmentGroup deleteMany
   */
  export type InvestmentGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentGroups to delete
     */
    where?: InvestmentGroupWhereInput
    /**
     * Limit how many InvestmentGroups to delete.
     */
    limit?: number
  }

  /**
   * InvestmentGroup.investments
   */
  export type InvestmentGroup$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * InvestmentGroup.pair
   */
  export type InvestmentGroup$pairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    where?: AthleteWhereInput
  }

  /**
   * InvestmentGroup.tournament
   */
  export type InvestmentGroup$tournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
  }

  /**
   * InvestmentGroup without action
   */
  export type InvestmentGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
  }


  /**
   * Model Arena
   */

  export type AggregateArena = {
    _count: ArenaCountAggregateOutputType | null
    _min: ArenaMinAggregateOutputType | null
    _max: ArenaMaxAggregateOutputType | null
  }

  export type ArenaMinAggregateOutputType = {
    id: string | null
    name: string | null
    address_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ArenaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ArenaCountAggregateOutputType = {
    id: number
    name: number
    address_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ArenaMinAggregateInputType = {
    id?: true
    name?: true
    address_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ArenaMaxAggregateInputType = {
    id?: true
    name?: true
    address_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ArenaCountAggregateInputType = {
    id?: true
    name?: true
    address_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ArenaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arena to aggregate.
     */
    where?: ArenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arenas to fetch.
     */
    orderBy?: ArenaOrderByWithRelationInput | ArenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arenas
    **/
    _count?: true | ArenaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArenaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArenaMaxAggregateInputType
  }

  export type GetArenaAggregateType<T extends ArenaAggregateArgs> = {
        [P in keyof T & keyof AggregateArena]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArena[P]>
      : GetScalarType<T[P], AggregateArena[P]>
  }




  export type ArenaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArenaWhereInput
    orderBy?: ArenaOrderByWithAggregationInput | ArenaOrderByWithAggregationInput[]
    by: ArenaScalarFieldEnum[] | ArenaScalarFieldEnum
    having?: ArenaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArenaCountAggregateInputType | true
    _min?: ArenaMinAggregateInputType
    _max?: ArenaMaxAggregateInputType
  }

  export type ArenaGroupByOutputType = {
    id: string
    name: string
    address_id: string
    created_at: Date
    updated_at: Date
    _count: ArenaCountAggregateOutputType | null
    _min: ArenaMinAggregateOutputType | null
    _max: ArenaMaxAggregateOutputType | null
  }

  type GetArenaGroupByPayload<T extends ArenaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArenaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArenaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArenaGroupByOutputType[P]>
            : GetScalarType<T[P], ArenaGroupByOutputType[P]>
        }
      >
    >


  export type ArenaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    tournaments?: boolean | Arena$tournamentsArgs<ExtArgs>
    _count?: boolean | ArenaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arena"]>

  export type ArenaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arena"]>

  export type ArenaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arena"]>

  export type ArenaSelectScalar = {
    id?: boolean
    name?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ArenaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address_id" | "created_at" | "updated_at", ExtArgs["result"]["arena"]>
  export type ArenaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    tournaments?: boolean | Arena$tournamentsArgs<ExtArgs>
    _count?: boolean | ArenaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArenaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }
  export type ArenaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $ArenaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arena"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>
      tournaments: Prisma.$TournamentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["arena"]>
    composites: {}
  }

  type ArenaGetPayload<S extends boolean | null | undefined | ArenaDefaultArgs> = $Result.GetResult<Prisma.$ArenaPayload, S>

  type ArenaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArenaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArenaCountAggregateInputType | true
    }

  export interface ArenaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arena'], meta: { name: 'Arena' } }
    /**
     * Find zero or one Arena that matches the filter.
     * @param {ArenaFindUniqueArgs} args - Arguments to find a Arena
     * @example
     * // Get one Arena
     * const arena = await prisma.arena.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArenaFindUniqueArgs>(args: SelectSubset<T, ArenaFindUniqueArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Arena that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArenaFindUniqueOrThrowArgs} args - Arguments to find a Arena
     * @example
     * // Get one Arena
     * const arena = await prisma.arena.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArenaFindUniqueOrThrowArgs>(args: SelectSubset<T, ArenaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Arena that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaFindFirstArgs} args - Arguments to find a Arena
     * @example
     * // Get one Arena
     * const arena = await prisma.arena.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArenaFindFirstArgs>(args?: SelectSubset<T, ArenaFindFirstArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Arena that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaFindFirstOrThrowArgs} args - Arguments to find a Arena
     * @example
     * // Get one Arena
     * const arena = await prisma.arena.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArenaFindFirstOrThrowArgs>(args?: SelectSubset<T, ArenaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Arenas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arenas
     * const arenas = await prisma.arena.findMany()
     * 
     * // Get first 10 Arenas
     * const arenas = await prisma.arena.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arenaWithIdOnly = await prisma.arena.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArenaFindManyArgs>(args?: SelectSubset<T, ArenaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Arena.
     * @param {ArenaCreateArgs} args - Arguments to create a Arena.
     * @example
     * // Create one Arena
     * const Arena = await prisma.arena.create({
     *   data: {
     *     // ... data to create a Arena
     *   }
     * })
     * 
     */
    create<T extends ArenaCreateArgs>(args: SelectSubset<T, ArenaCreateArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Arenas.
     * @param {ArenaCreateManyArgs} args - Arguments to create many Arenas.
     * @example
     * // Create many Arenas
     * const arena = await prisma.arena.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArenaCreateManyArgs>(args?: SelectSubset<T, ArenaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Arenas and returns the data saved in the database.
     * @param {ArenaCreateManyAndReturnArgs} args - Arguments to create many Arenas.
     * @example
     * // Create many Arenas
     * const arena = await prisma.arena.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Arenas and only return the `id`
     * const arenaWithIdOnly = await prisma.arena.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArenaCreateManyAndReturnArgs>(args?: SelectSubset<T, ArenaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Arena.
     * @param {ArenaDeleteArgs} args - Arguments to delete one Arena.
     * @example
     * // Delete one Arena
     * const Arena = await prisma.arena.delete({
     *   where: {
     *     // ... filter to delete one Arena
     *   }
     * })
     * 
     */
    delete<T extends ArenaDeleteArgs>(args: SelectSubset<T, ArenaDeleteArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Arena.
     * @param {ArenaUpdateArgs} args - Arguments to update one Arena.
     * @example
     * // Update one Arena
     * const arena = await prisma.arena.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArenaUpdateArgs>(args: SelectSubset<T, ArenaUpdateArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Arenas.
     * @param {ArenaDeleteManyArgs} args - Arguments to filter Arenas to delete.
     * @example
     * // Delete a few Arenas
     * const { count } = await prisma.arena.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArenaDeleteManyArgs>(args?: SelectSubset<T, ArenaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arenas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arenas
     * const arena = await prisma.arena.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArenaUpdateManyArgs>(args: SelectSubset<T, ArenaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arenas and returns the data updated in the database.
     * @param {ArenaUpdateManyAndReturnArgs} args - Arguments to update many Arenas.
     * @example
     * // Update many Arenas
     * const arena = await prisma.arena.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Arenas and only return the `id`
     * const arenaWithIdOnly = await prisma.arena.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArenaUpdateManyAndReturnArgs>(args: SelectSubset<T, ArenaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Arena.
     * @param {ArenaUpsertArgs} args - Arguments to update or create a Arena.
     * @example
     * // Update or create a Arena
     * const arena = await prisma.arena.upsert({
     *   create: {
     *     // ... data to create a Arena
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arena we want to update
     *   }
     * })
     */
    upsert<T extends ArenaUpsertArgs>(args: SelectSubset<T, ArenaUpsertArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Arenas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaCountArgs} args - Arguments to filter Arenas to count.
     * @example
     * // Count the number of Arenas
     * const count = await prisma.arena.count({
     *   where: {
     *     // ... the filter for the Arenas we want to count
     *   }
     * })
    **/
    count<T extends ArenaCountArgs>(
      args?: Subset<T, ArenaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArenaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arena.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArenaAggregateArgs>(args: Subset<T, ArenaAggregateArgs>): Prisma.PrismaPromise<GetArenaAggregateType<T>>

    /**
     * Group by Arena.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArenaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArenaGroupByArgs['orderBy'] }
        : { orderBy?: ArenaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArenaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArenaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arena model
   */
  readonly fields: ArenaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arena.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArenaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    tournaments<T extends Arena$tournamentsArgs<ExtArgs> = {}>(args?: Subset<T, Arena$tournamentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Arena model
   */ 
  interface ArenaFieldRefs {
    readonly id: FieldRef<"Arena", 'String'>
    readonly name: FieldRef<"Arena", 'String'>
    readonly address_id: FieldRef<"Arena", 'String'>
    readonly created_at: FieldRef<"Arena", 'DateTime'>
    readonly updated_at: FieldRef<"Arena", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Arena findUnique
   */
  export type ArenaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter, which Arena to fetch.
     */
    where: ArenaWhereUniqueInput
  }

  /**
   * Arena findUniqueOrThrow
   */
  export type ArenaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter, which Arena to fetch.
     */
    where: ArenaWhereUniqueInput
  }

  /**
   * Arena findFirst
   */
  export type ArenaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter, which Arena to fetch.
     */
    where?: ArenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arenas to fetch.
     */
    orderBy?: ArenaOrderByWithRelationInput | ArenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arenas.
     */
    cursor?: ArenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arenas.
     */
    distinct?: ArenaScalarFieldEnum | ArenaScalarFieldEnum[]
  }

  /**
   * Arena findFirstOrThrow
   */
  export type ArenaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter, which Arena to fetch.
     */
    where?: ArenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arenas to fetch.
     */
    orderBy?: ArenaOrderByWithRelationInput | ArenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arenas.
     */
    cursor?: ArenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arenas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arenas.
     */
    distinct?: ArenaScalarFieldEnum | ArenaScalarFieldEnum[]
  }

  /**
   * Arena findMany
   */
  export type ArenaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter, which Arenas to fetch.
     */
    where?: ArenaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arenas to fetch.
     */
    orderBy?: ArenaOrderByWithRelationInput | ArenaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arenas.
     */
    cursor?: ArenaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arenas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arenas.
     */
    skip?: number
    distinct?: ArenaScalarFieldEnum | ArenaScalarFieldEnum[]
  }

  /**
   * Arena create
   */
  export type ArenaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * The data needed to create a Arena.
     */
    data: XOR<ArenaCreateInput, ArenaUncheckedCreateInput>
  }

  /**
   * Arena createMany
   */
  export type ArenaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arenas.
     */
    data: ArenaCreateManyInput | ArenaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arena createManyAndReturn
   */
  export type ArenaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * The data used to create many Arenas.
     */
    data: ArenaCreateManyInput | ArenaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Arena update
   */
  export type ArenaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * The data needed to update a Arena.
     */
    data: XOR<ArenaUpdateInput, ArenaUncheckedUpdateInput>
    /**
     * Choose, which Arena to update.
     */
    where: ArenaWhereUniqueInput
  }

  /**
   * Arena updateMany
   */
  export type ArenaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arenas.
     */
    data: XOR<ArenaUpdateManyMutationInput, ArenaUncheckedUpdateManyInput>
    /**
     * Filter which Arenas to update
     */
    where?: ArenaWhereInput
    /**
     * Limit how many Arenas to update.
     */
    limit?: number
  }

  /**
   * Arena updateManyAndReturn
   */
  export type ArenaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * The data used to update Arenas.
     */
    data: XOR<ArenaUpdateManyMutationInput, ArenaUncheckedUpdateManyInput>
    /**
     * Filter which Arenas to update
     */
    where?: ArenaWhereInput
    /**
     * Limit how many Arenas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Arena upsert
   */
  export type ArenaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * The filter to search for the Arena to update in case it exists.
     */
    where: ArenaWhereUniqueInput
    /**
     * In case the Arena found by the `where` argument doesn't exist, create a new Arena with this data.
     */
    create: XOR<ArenaCreateInput, ArenaUncheckedCreateInput>
    /**
     * In case the Arena was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArenaUpdateInput, ArenaUncheckedUpdateInput>
  }

  /**
   * Arena delete
   */
  export type ArenaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    /**
     * Filter which Arena to delete.
     */
    where: ArenaWhereUniqueInput
  }

  /**
   * Arena deleteMany
   */
  export type ArenaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arenas to delete
     */
    where?: ArenaWhereInput
    /**
     * Limit how many Arenas to delete.
     */
    limit?: number
  }

  /**
   * Arena.tournaments
   */
  export type Arena$tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    cursor?: TournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Arena without action
   */
  export type ArenaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentMinAggregateOutputType = {
    id: string | null
    name: string | null
    date_from: Date | null
    date_to: Date | null
    description: string | null
    arena_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date_from: Date | null
    date_to: Date | null
    description: string | null
    arena_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    date_from: number
    date_to: number
    description: number
    arena_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    date_from?: true
    date_to?: true
    description?: true
    arena_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    date_from?: true
    date_to?: true
    description?: true
    arena_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    date_from?: true
    date_to?: true
    description?: true
    arena_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: string
    name: string
    date_from: Date
    date_to: Date
    description: string | null
    arena_id: string
    created_at: Date
    updated_at: Date
    _count: TournamentCountAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date_from?: boolean
    date_to?: boolean
    description?: boolean
    arena_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    arena?: boolean | ArenaDefaultArgs<ExtArgs>
    investment_group?: boolean | Tournament$investment_groupArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date_from?: boolean
    date_to?: boolean
    description?: boolean
    arena_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    arena?: boolean | ArenaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date_from?: boolean
    date_to?: boolean
    description?: boolean
    arena_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    arena?: boolean | ArenaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    date_from?: boolean
    date_to?: boolean
    description?: boolean
    arena_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date_from" | "date_to" | "description" | "arena_id" | "created_at" | "updated_at", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arena?: boolean | ArenaDefaultArgs<ExtArgs>
    investment_group?: boolean | Tournament$investment_groupArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arena?: boolean | ArenaDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arena?: boolean | ArenaDefaultArgs<ExtArgs>
  }

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      arena: Prisma.$ArenaPayload<ExtArgs>
      investment_group: Prisma.$InvestmentGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date_from: Date
      date_to: Date
      description: string | null
      arena_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arena<T extends ArenaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArenaDefaultArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    investment_group<T extends Tournament$investment_groupArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$investment_groupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentGroupPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tournament model
   */ 
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'String'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly date_from: FieldRef<"Tournament", 'DateTime'>
    readonly date_to: FieldRef<"Tournament", 'DateTime'>
    readonly description: FieldRef<"Tournament", 'String'>
    readonly arena_id: FieldRef<"Tournament", 'String'>
    readonly created_at: FieldRef<"Tournament", 'DateTime'>
    readonly updated_at: FieldRef<"Tournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.investment_group
   */
  export type Tournament$investment_groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentGroup
     */
    select?: InvestmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentGroup
     */
    omit?: InvestmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentGroupInclude<ExtArgs> | null
    where?: InvestmentGroupWhereInput
    orderBy?: InvestmentGroupOrderByWithRelationInput | InvestmentGroupOrderByWithRelationInput[]
    cursor?: InvestmentGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentGroupScalarFieldEnum | InvestmentGroupScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model Courts
   */

  export type AggregateCourts = {
    _count: CourtsCountAggregateOutputType | null
    _avg: CourtsAvgAggregateOutputType | null
    _sum: CourtsSumAggregateOutputType | null
    _min: CourtsMinAggregateOutputType | null
    _max: CourtsMaxAggregateOutputType | null
  }

  export type CourtsAvgAggregateOutputType = {
    number: number | null
  }

  export type CourtsSumAggregateOutputType = {
    number: number | null
  }

  export type CourtsMinAggregateOutputType = {
    id: string | null
    name: string | null
    number: number | null
    is_single: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourtsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    number: number | null
    is_single: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourtsCountAggregateOutputType = {
    id: number
    name: number
    number: number
    is_single: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourtsAvgAggregateInputType = {
    number?: true
  }

  export type CourtsSumAggregateInputType = {
    number?: true
  }

  export type CourtsMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    is_single?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourtsMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    is_single?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourtsCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    is_single?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourtsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courts to aggregate.
     */
    where?: CourtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtsOrderByWithRelationInput | CourtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courts
    **/
    _count?: true | CourtsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourtsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourtsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourtsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourtsMaxAggregateInputType
  }

  export type GetCourtsAggregateType<T extends CourtsAggregateArgs> = {
        [P in keyof T & keyof AggregateCourts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourts[P]>
      : GetScalarType<T[P], AggregateCourts[P]>
  }




  export type CourtsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourtsWhereInput
    orderBy?: CourtsOrderByWithAggregationInput | CourtsOrderByWithAggregationInput[]
    by: CourtsScalarFieldEnum[] | CourtsScalarFieldEnum
    having?: CourtsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourtsCountAggregateInputType | true
    _avg?: CourtsAvgAggregateInputType
    _sum?: CourtsSumAggregateInputType
    _min?: CourtsMinAggregateInputType
    _max?: CourtsMaxAggregateInputType
  }

  export type CourtsGroupByOutputType = {
    id: string
    name: string
    number: number
    is_single: boolean
    createdAt: Date
    updatedAt: Date
    _count: CourtsCountAggregateOutputType | null
    _avg: CourtsAvgAggregateOutputType | null
    _sum: CourtsSumAggregateOutputType | null
    _min: CourtsMinAggregateOutputType | null
    _max: CourtsMaxAggregateOutputType | null
  }

  type GetCourtsGroupByPayload<T extends CourtsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourtsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourtsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourtsGroupByOutputType[P]>
            : GetScalarType<T[P], CourtsGroupByOutputType[P]>
        }
      >
    >


  export type CourtsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    is_single?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lesson?: boolean | Courts$lessonArgs<ExtArgs>
    _count?: boolean | CourtsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courts"]>

  export type CourtsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    is_single?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courts"]>

  export type CourtsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    is_single?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courts"]>

  export type CourtsSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    is_single?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourtsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "number" | "is_single" | "createdAt" | "updatedAt", ExtArgs["result"]["courts"]>
  export type CourtsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | Courts$lessonArgs<ExtArgs>
    _count?: boolean | CourtsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourtsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourtsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CourtsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courts"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      number: number
      is_single: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courts"]>
    composites: {}
  }

  type CourtsGetPayload<S extends boolean | null | undefined | CourtsDefaultArgs> = $Result.GetResult<Prisma.$CourtsPayload, S>

  type CourtsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourtsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourtsCountAggregateInputType | true
    }

  export interface CourtsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courts'], meta: { name: 'Courts' } }
    /**
     * Find zero or one Courts that matches the filter.
     * @param {CourtsFindUniqueArgs} args - Arguments to find a Courts
     * @example
     * // Get one Courts
     * const courts = await prisma.courts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourtsFindUniqueArgs>(args: SelectSubset<T, CourtsFindUniqueArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Courts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourtsFindUniqueOrThrowArgs} args - Arguments to find a Courts
     * @example
     * // Get one Courts
     * const courts = await prisma.courts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourtsFindUniqueOrThrowArgs>(args: SelectSubset<T, CourtsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Courts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsFindFirstArgs} args - Arguments to find a Courts
     * @example
     * // Get one Courts
     * const courts = await prisma.courts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourtsFindFirstArgs>(args?: SelectSubset<T, CourtsFindFirstArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Courts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsFindFirstOrThrowArgs} args - Arguments to find a Courts
     * @example
     * // Get one Courts
     * const courts = await prisma.courts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourtsFindFirstOrThrowArgs>(args?: SelectSubset<T, CourtsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Courts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courts
     * const courts = await prisma.courts.findMany()
     * 
     * // Get first 10 Courts
     * const courts = await prisma.courts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courtsWithIdOnly = await prisma.courts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourtsFindManyArgs>(args?: SelectSubset<T, CourtsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Courts.
     * @param {CourtsCreateArgs} args - Arguments to create a Courts.
     * @example
     * // Create one Courts
     * const Courts = await prisma.courts.create({
     *   data: {
     *     // ... data to create a Courts
     *   }
     * })
     * 
     */
    create<T extends CourtsCreateArgs>(args: SelectSubset<T, CourtsCreateArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Courts.
     * @param {CourtsCreateManyArgs} args - Arguments to create many Courts.
     * @example
     * // Create many Courts
     * const courts = await prisma.courts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourtsCreateManyArgs>(args?: SelectSubset<T, CourtsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courts and returns the data saved in the database.
     * @param {CourtsCreateManyAndReturnArgs} args - Arguments to create many Courts.
     * @example
     * // Create many Courts
     * const courts = await prisma.courts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courts and only return the `id`
     * const courtsWithIdOnly = await prisma.courts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourtsCreateManyAndReturnArgs>(args?: SelectSubset<T, CourtsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Courts.
     * @param {CourtsDeleteArgs} args - Arguments to delete one Courts.
     * @example
     * // Delete one Courts
     * const Courts = await prisma.courts.delete({
     *   where: {
     *     // ... filter to delete one Courts
     *   }
     * })
     * 
     */
    delete<T extends CourtsDeleteArgs>(args: SelectSubset<T, CourtsDeleteArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Courts.
     * @param {CourtsUpdateArgs} args - Arguments to update one Courts.
     * @example
     * // Update one Courts
     * const courts = await prisma.courts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourtsUpdateArgs>(args: SelectSubset<T, CourtsUpdateArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Courts.
     * @param {CourtsDeleteManyArgs} args - Arguments to filter Courts to delete.
     * @example
     * // Delete a few Courts
     * const { count } = await prisma.courts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourtsDeleteManyArgs>(args?: SelectSubset<T, CourtsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courts
     * const courts = await prisma.courts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourtsUpdateManyArgs>(args: SelectSubset<T, CourtsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courts and returns the data updated in the database.
     * @param {CourtsUpdateManyAndReturnArgs} args - Arguments to update many Courts.
     * @example
     * // Update many Courts
     * const courts = await prisma.courts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courts and only return the `id`
     * const courtsWithIdOnly = await prisma.courts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourtsUpdateManyAndReturnArgs>(args: SelectSubset<T, CourtsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Courts.
     * @param {CourtsUpsertArgs} args - Arguments to update or create a Courts.
     * @example
     * // Update or create a Courts
     * const courts = await prisma.courts.upsert({
     *   create: {
     *     // ... data to create a Courts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courts we want to update
     *   }
     * })
     */
    upsert<T extends CourtsUpsertArgs>(args: SelectSubset<T, CourtsUpsertArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsCountArgs} args - Arguments to filter Courts to count.
     * @example
     * // Count the number of Courts
     * const count = await prisma.courts.count({
     *   where: {
     *     // ... the filter for the Courts we want to count
     *   }
     * })
    **/
    count<T extends CourtsCountArgs>(
      args?: Subset<T, CourtsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourtsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourtsAggregateArgs>(args: Subset<T, CourtsAggregateArgs>): Prisma.PrismaPromise<GetCourtsAggregateType<T>>

    /**
     * Group by Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourtsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourtsGroupByArgs['orderBy'] }
        : { orderBy?: CourtsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourtsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourtsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courts model
   */
  readonly fields: CourtsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourtsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends Courts$lessonArgs<ExtArgs> = {}>(args?: Subset<T, Courts$lessonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Courts model
   */ 
  interface CourtsFieldRefs {
    readonly id: FieldRef<"Courts", 'String'>
    readonly name: FieldRef<"Courts", 'String'>
    readonly number: FieldRef<"Courts", 'Int'>
    readonly is_single: FieldRef<"Courts", 'Boolean'>
    readonly createdAt: FieldRef<"Courts", 'DateTime'>
    readonly updatedAt: FieldRef<"Courts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Courts findUnique
   */
  export type CourtsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where: CourtsWhereUniqueInput
  }

  /**
   * Courts findUniqueOrThrow
   */
  export type CourtsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where: CourtsWhereUniqueInput
  }

  /**
   * Courts findFirst
   */
  export type CourtsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where?: CourtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtsOrderByWithRelationInput | CourtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     */
    cursor?: CourtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtsScalarFieldEnum | CourtsScalarFieldEnum[]
  }

  /**
   * Courts findFirstOrThrow
   */
  export type CourtsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where?: CourtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtsOrderByWithRelationInput | CourtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     */
    cursor?: CourtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtsScalarFieldEnum | CourtsScalarFieldEnum[]
  }

  /**
   * Courts findMany
   */
  export type CourtsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where?: CourtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtsOrderByWithRelationInput | CourtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courts.
     */
    cursor?: CourtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    distinct?: CourtsScalarFieldEnum | CourtsScalarFieldEnum[]
  }

  /**
   * Courts create
   */
  export type CourtsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * The data needed to create a Courts.
     */
    data: XOR<CourtsCreateInput, CourtsUncheckedCreateInput>
  }

  /**
   * Courts createMany
   */
  export type CourtsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courts.
     */
    data: CourtsCreateManyInput | CourtsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courts createManyAndReturn
   */
  export type CourtsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * The data used to create many Courts.
     */
    data: CourtsCreateManyInput | CourtsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courts update
   */
  export type CourtsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * The data needed to update a Courts.
     */
    data: XOR<CourtsUpdateInput, CourtsUncheckedUpdateInput>
    /**
     * Choose, which Courts to update.
     */
    where: CourtsWhereUniqueInput
  }

  /**
   * Courts updateMany
   */
  export type CourtsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courts.
     */
    data: XOR<CourtsUpdateManyMutationInput, CourtsUncheckedUpdateManyInput>
    /**
     * Filter which Courts to update
     */
    where?: CourtsWhereInput
    /**
     * Limit how many Courts to update.
     */
    limit?: number
  }

  /**
   * Courts updateManyAndReturn
   */
  export type CourtsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * The data used to update Courts.
     */
    data: XOR<CourtsUpdateManyMutationInput, CourtsUncheckedUpdateManyInput>
    /**
     * Filter which Courts to update
     */
    where?: CourtsWhereInput
    /**
     * Limit how many Courts to update.
     */
    limit?: number
  }

  /**
   * Courts upsert
   */
  export type CourtsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * The filter to search for the Courts to update in case it exists.
     */
    where: CourtsWhereUniqueInput
    /**
     * In case the Courts found by the `where` argument doesn't exist, create a new Courts with this data.
     */
    create: XOR<CourtsCreateInput, CourtsUncheckedCreateInput>
    /**
     * In case the Courts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourtsUpdateInput, CourtsUncheckedUpdateInput>
  }

  /**
   * Courts delete
   */
  export type CourtsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter which Courts to delete.
     */
    where: CourtsWhereUniqueInput
  }

  /**
   * Courts deleteMany
   */
  export type CourtsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courts to delete
     */
    where?: CourtsWhereInput
    /**
     * Limit how many Courts to delete.
     */
    limit?: number
  }

  /**
   * Courts.lesson
   */
  export type Courts$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Courts without action
   */
  export type CourtsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    street: string | null
    number: string | null
    complement: string | null
    neighborhood: string | null
    city_state: string | null
    zip_code: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    street: string | null
    number: string | null
    complement: string | null
    neighborhood: string | null
    city_state: string | null
    zip_code: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    number: number
    complement: number
    neighborhood: number
    city_state: number
    zip_code: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    number?: true
    complement?: true
    neighborhood?: true
    city_state?: true
    zip_code?: true
    updated_at?: true
    created_at?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    number?: true
    complement?: true
    neighborhood?: true
    city_state?: true
    zip_code?: true
    updated_at?: true
    created_at?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    number?: true
    complement?: true
    neighborhood?: true
    city_state?: true
    zip_code?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    street: string | null
    number: string | null
    complement: string | null
    neighborhood: string | null
    city_state: string
    zip_code: string | null
    updated_at: Date
    created_at: Date
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    neighborhood?: boolean
    city_state?: boolean
    zip_code?: boolean
    updated_at?: boolean
    created_at?: boolean
    arena?: boolean | Address$arenaArgs<ExtArgs>
    athlete?: boolean | Address$athleteArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    neighborhood?: boolean
    city_state?: boolean
    zip_code?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    neighborhood?: boolean
    city_state?: boolean
    zip_code?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    neighborhood?: boolean
    city_state?: boolean
    zip_code?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "number" | "complement" | "neighborhood" | "city_state" | "zip_code" | "updated_at" | "created_at", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arena?: boolean | Address$arenaArgs<ExtArgs>
    athlete?: boolean | Address$athleteArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      arena: Prisma.$ArenaPayload<ExtArgs> | null
      athlete: Prisma.$AthletePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      street: string | null
      number: string | null
      complement: string | null
      neighborhood: string | null
      city_state: string
      zip_code: string | null
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arena<T extends Address$arenaArgs<ExtArgs> = {}>(args?: Subset<T, Address$arenaArgs<ExtArgs>>): Prisma__ArenaClient<$Result.GetResult<Prisma.$ArenaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    athlete<T extends Address$athleteArgs<ExtArgs> = {}>(args?: Subset<T, Address$athleteArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
    readonly complement: FieldRef<"Address", 'String'>
    readonly neighborhood: FieldRef<"Address", 'String'>
    readonly city_state: FieldRef<"Address", 'String'>
    readonly zip_code: FieldRef<"Address", 'String'>
    readonly updated_at: FieldRef<"Address", 'DateTime'>
    readonly created_at: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.arena
   */
  export type Address$arenaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arena
     */
    select?: ArenaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arena
     */
    omit?: ArenaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaInclude<ExtArgs> | null
    where?: ArenaWhereInput
  }

  /**
   * Address.athlete
   */
  export type Address$athleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athlete
     */
    select?: AthleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athlete
     */
    omit?: AthleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteInclude<ExtArgs> | null
    where?: AthleteWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model TeacherAvailability
   */

  export type AggregateTeacherAvailability = {
    _count: TeacherAvailabilityCountAggregateOutputType | null
    _min: TeacherAvailabilityMinAggregateOutputType | null
    _max: TeacherAvailabilityMaxAggregateOutputType | null
  }

  export type TeacherAvailabilityMinAggregateOutputType = {
    id: string | null
    teacher_id: string | null
    time_start: Date | null
    time_end: Date | null
    lesson_id: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type TeacherAvailabilityMaxAggregateOutputType = {
    id: string | null
    teacher_id: string | null
    time_start: Date | null
    time_end: Date | null
    lesson_id: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type TeacherAvailabilityCountAggregateOutputType = {
    id: number
    teacher_id: number
    time_start: number
    time_end: number
    lesson_id: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type TeacherAvailabilityMinAggregateInputType = {
    id?: true
    teacher_id?: true
    time_start?: true
    time_end?: true
    lesson_id?: true
    updated_at?: true
    created_at?: true
  }

  export type TeacherAvailabilityMaxAggregateInputType = {
    id?: true
    teacher_id?: true
    time_start?: true
    time_end?: true
    lesson_id?: true
    updated_at?: true
    created_at?: true
  }

  export type TeacherAvailabilityCountAggregateInputType = {
    id?: true
    teacher_id?: true
    time_start?: true
    time_end?: true
    lesson_id?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type TeacherAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherAvailability to aggregate.
     */
    where?: TeacherAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAvailabilities to fetch.
     */
    orderBy?: TeacherAvailabilityOrderByWithRelationInput | TeacherAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherAvailabilities
    **/
    _count?: true | TeacherAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherAvailabilityMaxAggregateInputType
  }

  export type GetTeacherAvailabilityAggregateType<T extends TeacherAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherAvailability[P]>
      : GetScalarType<T[P], AggregateTeacherAvailability[P]>
  }




  export type TeacherAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherAvailabilityWhereInput
    orderBy?: TeacherAvailabilityOrderByWithAggregationInput | TeacherAvailabilityOrderByWithAggregationInput[]
    by: TeacherAvailabilityScalarFieldEnum[] | TeacherAvailabilityScalarFieldEnum
    having?: TeacherAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherAvailabilityCountAggregateInputType | true
    _min?: TeacherAvailabilityMinAggregateInputType
    _max?: TeacherAvailabilityMaxAggregateInputType
  }

  export type TeacherAvailabilityGroupByOutputType = {
    id: string
    teacher_id: string
    time_start: Date
    time_end: Date
    lesson_id: string | null
    updated_at: Date
    created_at: Date
    _count: TeacherAvailabilityCountAggregateOutputType | null
    _min: TeacherAvailabilityMinAggregateOutputType | null
    _max: TeacherAvailabilityMaxAggregateOutputType | null
  }

  type GetTeacherAvailabilityGroupByPayload<T extends TeacherAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type TeacherAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    time_start?: boolean
    time_end?: boolean
    lesson_id?: boolean
    updated_at?: boolean
    created_at?: boolean
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    lesson?: boolean | TeacherAvailability$lessonArgs<ExtArgs>
  }, ExtArgs["result"]["teacherAvailability"]>

  export type TeacherAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    time_start?: boolean
    time_end?: boolean
    lesson_id?: boolean
    updated_at?: boolean
    created_at?: boolean
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    lesson?: boolean | TeacherAvailability$lessonArgs<ExtArgs>
  }, ExtArgs["result"]["teacherAvailability"]>

  export type TeacherAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    time_start?: boolean
    time_end?: boolean
    lesson_id?: boolean
    updated_at?: boolean
    created_at?: boolean
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    lesson?: boolean | TeacherAvailability$lessonArgs<ExtArgs>
  }, ExtArgs["result"]["teacherAvailability"]>

  export type TeacherAvailabilitySelectScalar = {
    id?: boolean
    teacher_id?: boolean
    time_start?: boolean
    time_end?: boolean
    lesson_id?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type TeacherAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacher_id" | "time_start" | "time_end" | "lesson_id" | "updated_at" | "created_at", ExtArgs["result"]["teacherAvailability"]>
  export type TeacherAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    lesson?: boolean | TeacherAvailability$lessonArgs<ExtArgs>
  }
  export type TeacherAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    lesson?: boolean | TeacherAvailability$lessonArgs<ExtArgs>
  }
  export type TeacherAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    lesson?: boolean | TeacherAvailability$lessonArgs<ExtArgs>
  }

  export type $TeacherAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherAvailability"
    objects: {
      teacher: Prisma.$AthletePayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacher_id: string
      time_start: Date
      time_end: Date
      lesson_id: string | null
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["teacherAvailability"]>
    composites: {}
  }

  type TeacherAvailabilityGetPayload<S extends boolean | null | undefined | TeacherAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$TeacherAvailabilityPayload, S>

  type TeacherAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherAvailabilityCountAggregateInputType | true
    }

  export interface TeacherAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherAvailability'], meta: { name: 'TeacherAvailability' } }
    /**
     * Find zero or one TeacherAvailability that matches the filter.
     * @param {TeacherAvailabilityFindUniqueArgs} args - Arguments to find a TeacherAvailability
     * @example
     * // Get one TeacherAvailability
     * const teacherAvailability = await prisma.teacherAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherAvailabilityFindUniqueArgs>(args: SelectSubset<T, TeacherAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__TeacherAvailabilityClient<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TeacherAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a TeacherAvailability
     * @example
     * // Get one TeacherAvailability
     * const teacherAvailability = await prisma.teacherAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherAvailabilityClient<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TeacherAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAvailabilityFindFirstArgs} args - Arguments to find a TeacherAvailability
     * @example
     * // Get one TeacherAvailability
     * const teacherAvailability = await prisma.teacherAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherAvailabilityFindFirstArgs>(args?: SelectSubset<T, TeacherAvailabilityFindFirstArgs<ExtArgs>>): Prisma__TeacherAvailabilityClient<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TeacherAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAvailabilityFindFirstOrThrowArgs} args - Arguments to find a TeacherAvailability
     * @example
     * // Get one TeacherAvailability
     * const teacherAvailability = await prisma.teacherAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherAvailabilityClient<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TeacherAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherAvailabilities
     * const teacherAvailabilities = await prisma.teacherAvailability.findMany()
     * 
     * // Get first 10 TeacherAvailabilities
     * const teacherAvailabilities = await prisma.teacherAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherAvailabilityWithIdOnly = await prisma.teacherAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherAvailabilityFindManyArgs>(args?: SelectSubset<T, TeacherAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TeacherAvailability.
     * @param {TeacherAvailabilityCreateArgs} args - Arguments to create a TeacherAvailability.
     * @example
     * // Create one TeacherAvailability
     * const TeacherAvailability = await prisma.teacherAvailability.create({
     *   data: {
     *     // ... data to create a TeacherAvailability
     *   }
     * })
     * 
     */
    create<T extends TeacherAvailabilityCreateArgs>(args: SelectSubset<T, TeacherAvailabilityCreateArgs<ExtArgs>>): Prisma__TeacherAvailabilityClient<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TeacherAvailabilities.
     * @param {TeacherAvailabilityCreateManyArgs} args - Arguments to create many TeacherAvailabilities.
     * @example
     * // Create many TeacherAvailabilities
     * const teacherAvailability = await prisma.teacherAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherAvailabilityCreateManyArgs>(args?: SelectSubset<T, TeacherAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherAvailabilities and returns the data saved in the database.
     * @param {TeacherAvailabilityCreateManyAndReturnArgs} args - Arguments to create many TeacherAvailabilities.
     * @example
     * // Create many TeacherAvailabilities
     * const teacherAvailability = await prisma.teacherAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherAvailabilities and only return the `id`
     * const teacherAvailabilityWithIdOnly = await prisma.teacherAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TeacherAvailability.
     * @param {TeacherAvailabilityDeleteArgs} args - Arguments to delete one TeacherAvailability.
     * @example
     * // Delete one TeacherAvailability
     * const TeacherAvailability = await prisma.teacherAvailability.delete({
     *   where: {
     *     // ... filter to delete one TeacherAvailability
     *   }
     * })
     * 
     */
    delete<T extends TeacherAvailabilityDeleteArgs>(args: SelectSubset<T, TeacherAvailabilityDeleteArgs<ExtArgs>>): Prisma__TeacherAvailabilityClient<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TeacherAvailability.
     * @param {TeacherAvailabilityUpdateArgs} args - Arguments to update one TeacherAvailability.
     * @example
     * // Update one TeacherAvailability
     * const teacherAvailability = await prisma.teacherAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherAvailabilityUpdateArgs>(args: SelectSubset<T, TeacherAvailabilityUpdateArgs<ExtArgs>>): Prisma__TeacherAvailabilityClient<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TeacherAvailabilities.
     * @param {TeacherAvailabilityDeleteManyArgs} args - Arguments to filter TeacherAvailabilities to delete.
     * @example
     * // Delete a few TeacherAvailabilities
     * const { count } = await prisma.teacherAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherAvailabilityDeleteManyArgs>(args?: SelectSubset<T, TeacherAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherAvailabilities
     * const teacherAvailability = await prisma.teacherAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherAvailabilityUpdateManyArgs>(args: SelectSubset<T, TeacherAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherAvailabilities and returns the data updated in the database.
     * @param {TeacherAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many TeacherAvailabilities.
     * @example
     * // Update many TeacherAvailabilities
     * const teacherAvailability = await prisma.teacherAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherAvailabilities and only return the `id`
     * const teacherAvailabilityWithIdOnly = await prisma.teacherAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TeacherAvailability.
     * @param {TeacherAvailabilityUpsertArgs} args - Arguments to update or create a TeacherAvailability.
     * @example
     * // Update or create a TeacherAvailability
     * const teacherAvailability = await prisma.teacherAvailability.upsert({
     *   create: {
     *     // ... data to create a TeacherAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherAvailability we want to update
     *   }
     * })
     */
    upsert<T extends TeacherAvailabilityUpsertArgs>(args: SelectSubset<T, TeacherAvailabilityUpsertArgs<ExtArgs>>): Prisma__TeacherAvailabilityClient<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TeacherAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAvailabilityCountArgs} args - Arguments to filter TeacherAvailabilities to count.
     * @example
     * // Count the number of TeacherAvailabilities
     * const count = await prisma.teacherAvailability.count({
     *   where: {
     *     // ... the filter for the TeacherAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends TeacherAvailabilityCountArgs>(
      args?: Subset<T, TeacherAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAvailabilityAggregateArgs>(args: Subset<T, TeacherAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetTeacherAvailabilityAggregateType<T>>

    /**
     * Group by TeacherAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: TeacherAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherAvailability model
   */
  readonly fields: TeacherAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends AthleteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AthleteDefaultArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    lesson<T extends TeacherAvailability$lessonArgs<ExtArgs> = {}>(args?: Subset<T, TeacherAvailability$lessonArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherAvailability model
   */ 
  interface TeacherAvailabilityFieldRefs {
    readonly id: FieldRef<"TeacherAvailability", 'String'>
    readonly teacher_id: FieldRef<"TeacherAvailability", 'String'>
    readonly time_start: FieldRef<"TeacherAvailability", 'DateTime'>
    readonly time_end: FieldRef<"TeacherAvailability", 'DateTime'>
    readonly lesson_id: FieldRef<"TeacherAvailability", 'String'>
    readonly updated_at: FieldRef<"TeacherAvailability", 'DateTime'>
    readonly created_at: FieldRef<"TeacherAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherAvailability findUnique
   */
  export type TeacherAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAvailability to fetch.
     */
    where: TeacherAvailabilityWhereUniqueInput
  }

  /**
   * TeacherAvailability findUniqueOrThrow
   */
  export type TeacherAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAvailability to fetch.
     */
    where: TeacherAvailabilityWhereUniqueInput
  }

  /**
   * TeacherAvailability findFirst
   */
  export type TeacherAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAvailability to fetch.
     */
    where?: TeacherAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAvailabilities to fetch.
     */
    orderBy?: TeacherAvailabilityOrderByWithRelationInput | TeacherAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherAvailabilities.
     */
    cursor?: TeacherAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherAvailabilities.
     */
    distinct?: TeacherAvailabilityScalarFieldEnum | TeacherAvailabilityScalarFieldEnum[]
  }

  /**
   * TeacherAvailability findFirstOrThrow
   */
  export type TeacherAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAvailability to fetch.
     */
    where?: TeacherAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAvailabilities to fetch.
     */
    orderBy?: TeacherAvailabilityOrderByWithRelationInput | TeacherAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherAvailabilities.
     */
    cursor?: TeacherAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherAvailabilities.
     */
    distinct?: TeacherAvailabilityScalarFieldEnum | TeacherAvailabilityScalarFieldEnum[]
  }

  /**
   * TeacherAvailability findMany
   */
  export type TeacherAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAvailabilities to fetch.
     */
    where?: TeacherAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAvailabilities to fetch.
     */
    orderBy?: TeacherAvailabilityOrderByWithRelationInput | TeacherAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherAvailabilities.
     */
    cursor?: TeacherAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAvailabilities.
     */
    skip?: number
    distinct?: TeacherAvailabilityScalarFieldEnum | TeacherAvailabilityScalarFieldEnum[]
  }

  /**
   * TeacherAvailability create
   */
  export type TeacherAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherAvailability.
     */
    data: XOR<TeacherAvailabilityCreateInput, TeacherAvailabilityUncheckedCreateInput>
  }

  /**
   * TeacherAvailability createMany
   */
  export type TeacherAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherAvailabilities.
     */
    data: TeacherAvailabilityCreateManyInput | TeacherAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherAvailability createManyAndReturn
   */
  export type TeacherAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherAvailabilities.
     */
    data: TeacherAvailabilityCreateManyInput | TeacherAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherAvailability update
   */
  export type TeacherAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherAvailability.
     */
    data: XOR<TeacherAvailabilityUpdateInput, TeacherAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which TeacherAvailability to update.
     */
    where: TeacherAvailabilityWhereUniqueInput
  }

  /**
   * TeacherAvailability updateMany
   */
  export type TeacherAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherAvailabilities.
     */
    data: XOR<TeacherAvailabilityUpdateManyMutationInput, TeacherAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which TeacherAvailabilities to update
     */
    where?: TeacherAvailabilityWhereInput
    /**
     * Limit how many TeacherAvailabilities to update.
     */
    limit?: number
  }

  /**
   * TeacherAvailability updateManyAndReturn
   */
  export type TeacherAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update TeacherAvailabilities.
     */
    data: XOR<TeacherAvailabilityUpdateManyMutationInput, TeacherAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which TeacherAvailabilities to update
     */
    where?: TeacherAvailabilityWhereInput
    /**
     * Limit how many TeacherAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherAvailability upsert
   */
  export type TeacherAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherAvailability to update in case it exists.
     */
    where: TeacherAvailabilityWhereUniqueInput
    /**
     * In case the TeacherAvailability found by the `where` argument doesn't exist, create a new TeacherAvailability with this data.
     */
    create: XOR<TeacherAvailabilityCreateInput, TeacherAvailabilityUncheckedCreateInput>
    /**
     * In case the TeacherAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherAvailabilityUpdateInput, TeacherAvailabilityUncheckedUpdateInput>
  }

  /**
   * TeacherAvailability delete
   */
  export type TeacherAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which TeacherAvailability to delete.
     */
    where: TeacherAvailabilityWhereUniqueInput
  }

  /**
   * TeacherAvailability deleteMany
   */
  export type TeacherAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherAvailabilities to delete
     */
    where?: TeacherAvailabilityWhereInput
    /**
     * Limit how many TeacherAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * TeacherAvailability.lesson
   */
  export type TeacherAvailability$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
  }

  /**
   * TeacherAvailability without action
   */
  export type TeacherAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    teacher_id: string | null
    time_start: Date | null
    time_end: Date | null
    courts_id: string | null
    subject: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    teacher_id: string | null
    time_start: Date | null
    time_end: Date | null
    courts_id: string | null
    subject: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    teacher_id: number
    time_start: number
    time_end: number
    courts_id: number
    subject: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type LessonMinAggregateInputType = {
    id?: true
    teacher_id?: true
    time_start?: true
    time_end?: true
    courts_id?: true
    subject?: true
    updated_at?: true
    created_at?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    teacher_id?: true
    time_start?: true
    time_end?: true
    courts_id?: true
    subject?: true
    updated_at?: true
    created_at?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    teacher_id?: true
    time_start?: true
    time_end?: true
    courts_id?: true
    subject?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    teacher_id: string
    time_start: Date
    time_end: Date
    courts_id: string
    subject: string | null
    updated_at: Date
    created_at: Date
    _count: LessonCountAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    time_start?: boolean
    time_end?: boolean
    courts_id?: boolean
    subject?: boolean
    updated_at?: boolean
    created_at?: boolean
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    courts?: boolean | CourtsDefaultArgs<ExtArgs>
    teacher_availability?: boolean | Lesson$teacher_availabilityArgs<ExtArgs>
    attendances?: boolean | Lesson$attendancesArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    time_start?: boolean
    time_end?: boolean
    courts_id?: boolean
    subject?: boolean
    updated_at?: boolean
    created_at?: boolean
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    courts?: boolean | CourtsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    time_start?: boolean
    time_end?: boolean
    courts_id?: boolean
    subject?: boolean
    updated_at?: boolean
    created_at?: boolean
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    courts?: boolean | CourtsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    teacher_id?: boolean
    time_start?: boolean
    time_end?: boolean
    courts_id?: boolean
    subject?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacher_id" | "time_start" | "time_end" | "courts_id" | "subject" | "updated_at" | "created_at", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    courts?: boolean | CourtsDefaultArgs<ExtArgs>
    teacher_availability?: boolean | Lesson$teacher_availabilityArgs<ExtArgs>
    attendances?: boolean | Lesson$attendancesArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    courts?: boolean | CourtsDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | AthleteDefaultArgs<ExtArgs>
    courts?: boolean | CourtsDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      teacher: Prisma.$AthletePayload<ExtArgs>
      courts: Prisma.$CourtsPayload<ExtArgs>
      teacher_availability: Prisma.$TeacherAvailabilityPayload<ExtArgs>[]
      attendances: Prisma.$LessonAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacher_id: string
      time_start: Date
      time_end: Date
      courts_id: string
      subject: string | null
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends AthleteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AthleteDefaultArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    courts<T extends CourtsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourtsDefaultArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    teacher_availability<T extends Lesson$teacher_availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$teacher_availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAvailabilityPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    attendances<T extends Lesson$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lesson model
   */ 
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly teacher_id: FieldRef<"Lesson", 'String'>
    readonly time_start: FieldRef<"Lesson", 'DateTime'>
    readonly time_end: FieldRef<"Lesson", 'DateTime'>
    readonly courts_id: FieldRef<"Lesson", 'String'>
    readonly subject: FieldRef<"Lesson", 'String'>
    readonly updated_at: FieldRef<"Lesson", 'DateTime'>
    readonly created_at: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.teacher_availability
   */
  export type Lesson$teacher_availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAvailability
     */
    select?: TeacherAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherAvailability
     */
    omit?: TeacherAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAvailabilityInclude<ExtArgs> | null
    where?: TeacherAvailabilityWhereInput
    orderBy?: TeacherAvailabilityOrderByWithRelationInput | TeacherAvailabilityOrderByWithRelationInput[]
    cursor?: TeacherAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherAvailabilityScalarFieldEnum | TeacherAvailabilityScalarFieldEnum[]
  }

  /**
   * Lesson.attendances
   */
  export type Lesson$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    where?: LessonAttendanceWhereInput
    orderBy?: LessonAttendanceOrderByWithRelationInput | LessonAttendanceOrderByWithRelationInput[]
    cursor?: LessonAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonAttendanceScalarFieldEnum | LessonAttendanceScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model LessonAttendance
   */

  export type AggregateLessonAttendance = {
    _count: LessonAttendanceCountAggregateOutputType | null
    _min: LessonAttendanceMinAggregateOutputType | null
    _max: LessonAttendanceMaxAggregateOutputType | null
  }

  export type LessonAttendanceMinAggregateOutputType = {
    id: string | null
    lesson_id: string | null
    student_id: string | null
    did_attend: boolean | null
    reason: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type LessonAttendanceMaxAggregateOutputType = {
    id: string | null
    lesson_id: string | null
    student_id: string | null
    did_attend: boolean | null
    reason: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type LessonAttendanceCountAggregateOutputType = {
    id: number
    lesson_id: number
    student_id: number
    did_attend: number
    reason: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type LessonAttendanceMinAggregateInputType = {
    id?: true
    lesson_id?: true
    student_id?: true
    did_attend?: true
    reason?: true
    updated_at?: true
    created_at?: true
  }

  export type LessonAttendanceMaxAggregateInputType = {
    id?: true
    lesson_id?: true
    student_id?: true
    did_attend?: true
    reason?: true
    updated_at?: true
    created_at?: true
  }

  export type LessonAttendanceCountAggregateInputType = {
    id?: true
    lesson_id?: true
    student_id?: true
    did_attend?: true
    reason?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type LessonAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonAttendance to aggregate.
     */
    where?: LessonAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonAttendances to fetch.
     */
    orderBy?: LessonAttendanceOrderByWithRelationInput | LessonAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonAttendances
    **/
    _count?: true | LessonAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonAttendanceMaxAggregateInputType
  }

  export type GetLessonAttendanceAggregateType<T extends LessonAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonAttendance[P]>
      : GetScalarType<T[P], AggregateLessonAttendance[P]>
  }




  export type LessonAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonAttendanceWhereInput
    orderBy?: LessonAttendanceOrderByWithAggregationInput | LessonAttendanceOrderByWithAggregationInput[]
    by: LessonAttendanceScalarFieldEnum[] | LessonAttendanceScalarFieldEnum
    having?: LessonAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonAttendanceCountAggregateInputType | true
    _min?: LessonAttendanceMinAggregateInputType
    _max?: LessonAttendanceMaxAggregateInputType
  }

  export type LessonAttendanceGroupByOutputType = {
    id: string
    lesson_id: string
    student_id: string
    did_attend: boolean
    reason: string | null
    updated_at: Date
    created_at: Date
    _count: LessonAttendanceCountAggregateOutputType | null
    _min: LessonAttendanceMinAggregateOutputType | null
    _max: LessonAttendanceMaxAggregateOutputType | null
  }

  type GetLessonAttendanceGroupByPayload<T extends LessonAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], LessonAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type LessonAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lesson_id?: boolean
    student_id?: boolean
    did_attend?: boolean
    reason?: boolean
    updated_at?: boolean
    created_at?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    student?: boolean | AthleteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonAttendance"]>

  export type LessonAttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lesson_id?: boolean
    student_id?: boolean
    did_attend?: boolean
    reason?: boolean
    updated_at?: boolean
    created_at?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    student?: boolean | AthleteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonAttendance"]>

  export type LessonAttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lesson_id?: boolean
    student_id?: boolean
    did_attend?: boolean
    reason?: boolean
    updated_at?: boolean
    created_at?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    student?: boolean | AthleteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonAttendance"]>

  export type LessonAttendanceSelectScalar = {
    id?: boolean
    lesson_id?: boolean
    student_id?: boolean
    did_attend?: boolean
    reason?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type LessonAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lesson_id" | "student_id" | "did_attend" | "reason" | "updated_at" | "created_at", ExtArgs["result"]["lessonAttendance"]>
  export type LessonAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    student?: boolean | AthleteDefaultArgs<ExtArgs>
  }
  export type LessonAttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    student?: boolean | AthleteDefaultArgs<ExtArgs>
  }
  export type LessonAttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    student?: boolean | AthleteDefaultArgs<ExtArgs>
  }

  export type $LessonAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonAttendance"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs>
      student: Prisma.$AthletePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lesson_id: string
      student_id: string
      did_attend: boolean
      reason: string | null
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["lessonAttendance"]>
    composites: {}
  }

  type LessonAttendanceGetPayload<S extends boolean | null | undefined | LessonAttendanceDefaultArgs> = $Result.GetResult<Prisma.$LessonAttendancePayload, S>

  type LessonAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonAttendanceCountAggregateInputType | true
    }

  export interface LessonAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonAttendance'], meta: { name: 'LessonAttendance' } }
    /**
     * Find zero or one LessonAttendance that matches the filter.
     * @param {LessonAttendanceFindUniqueArgs} args - Arguments to find a LessonAttendance
     * @example
     * // Get one LessonAttendance
     * const lessonAttendance = await prisma.lessonAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonAttendanceFindUniqueArgs>(args: SelectSubset<T, LessonAttendanceFindUniqueArgs<ExtArgs>>): Prisma__LessonAttendanceClient<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one LessonAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonAttendanceFindUniqueOrThrowArgs} args - Arguments to find a LessonAttendance
     * @example
     * // Get one LessonAttendance
     * const lessonAttendance = await prisma.lessonAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonAttendanceClient<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first LessonAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttendanceFindFirstArgs} args - Arguments to find a LessonAttendance
     * @example
     * // Get one LessonAttendance
     * const lessonAttendance = await prisma.lessonAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonAttendanceFindFirstArgs>(args?: SelectSubset<T, LessonAttendanceFindFirstArgs<ExtArgs>>): Prisma__LessonAttendanceClient<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first LessonAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttendanceFindFirstOrThrowArgs} args - Arguments to find a LessonAttendance
     * @example
     * // Get one LessonAttendance
     * const lessonAttendance = await prisma.lessonAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonAttendanceClient<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more LessonAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonAttendances
     * const lessonAttendances = await prisma.lessonAttendance.findMany()
     * 
     * // Get first 10 LessonAttendances
     * const lessonAttendances = await prisma.lessonAttendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonAttendanceWithIdOnly = await prisma.lessonAttendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonAttendanceFindManyArgs>(args?: SelectSubset<T, LessonAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a LessonAttendance.
     * @param {LessonAttendanceCreateArgs} args - Arguments to create a LessonAttendance.
     * @example
     * // Create one LessonAttendance
     * const LessonAttendance = await prisma.lessonAttendance.create({
     *   data: {
     *     // ... data to create a LessonAttendance
     *   }
     * })
     * 
     */
    create<T extends LessonAttendanceCreateArgs>(args: SelectSubset<T, LessonAttendanceCreateArgs<ExtArgs>>): Prisma__LessonAttendanceClient<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many LessonAttendances.
     * @param {LessonAttendanceCreateManyArgs} args - Arguments to create many LessonAttendances.
     * @example
     * // Create many LessonAttendances
     * const lessonAttendance = await prisma.lessonAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonAttendanceCreateManyArgs>(args?: SelectSubset<T, LessonAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonAttendances and returns the data saved in the database.
     * @param {LessonAttendanceCreateManyAndReturnArgs} args - Arguments to create many LessonAttendances.
     * @example
     * // Create many LessonAttendances
     * const lessonAttendance = await prisma.lessonAttendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonAttendances and only return the `id`
     * const lessonAttendanceWithIdOnly = await prisma.lessonAttendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonAttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a LessonAttendance.
     * @param {LessonAttendanceDeleteArgs} args - Arguments to delete one LessonAttendance.
     * @example
     * // Delete one LessonAttendance
     * const LessonAttendance = await prisma.lessonAttendance.delete({
     *   where: {
     *     // ... filter to delete one LessonAttendance
     *   }
     * })
     * 
     */
    delete<T extends LessonAttendanceDeleteArgs>(args: SelectSubset<T, LessonAttendanceDeleteArgs<ExtArgs>>): Prisma__LessonAttendanceClient<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one LessonAttendance.
     * @param {LessonAttendanceUpdateArgs} args - Arguments to update one LessonAttendance.
     * @example
     * // Update one LessonAttendance
     * const lessonAttendance = await prisma.lessonAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonAttendanceUpdateArgs>(args: SelectSubset<T, LessonAttendanceUpdateArgs<ExtArgs>>): Prisma__LessonAttendanceClient<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more LessonAttendances.
     * @param {LessonAttendanceDeleteManyArgs} args - Arguments to filter LessonAttendances to delete.
     * @example
     * // Delete a few LessonAttendances
     * const { count } = await prisma.lessonAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonAttendanceDeleteManyArgs>(args?: SelectSubset<T, LessonAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonAttendances
     * const lessonAttendance = await prisma.lessonAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonAttendanceUpdateManyArgs>(args: SelectSubset<T, LessonAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonAttendances and returns the data updated in the database.
     * @param {LessonAttendanceUpdateManyAndReturnArgs} args - Arguments to update many LessonAttendances.
     * @example
     * // Update many LessonAttendances
     * const lessonAttendance = await prisma.lessonAttendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonAttendances and only return the `id`
     * const lessonAttendanceWithIdOnly = await prisma.lessonAttendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonAttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonAttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one LessonAttendance.
     * @param {LessonAttendanceUpsertArgs} args - Arguments to update or create a LessonAttendance.
     * @example
     * // Update or create a LessonAttendance
     * const lessonAttendance = await prisma.lessonAttendance.upsert({
     *   create: {
     *     // ... data to create a LessonAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonAttendance we want to update
     *   }
     * })
     */
    upsert<T extends LessonAttendanceUpsertArgs>(args: SelectSubset<T, LessonAttendanceUpsertArgs<ExtArgs>>): Prisma__LessonAttendanceClient<$Result.GetResult<Prisma.$LessonAttendancePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of LessonAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttendanceCountArgs} args - Arguments to filter LessonAttendances to count.
     * @example
     * // Count the number of LessonAttendances
     * const count = await prisma.lessonAttendance.count({
     *   where: {
     *     // ... the filter for the LessonAttendances we want to count
     *   }
     * })
    **/
    count<T extends LessonAttendanceCountArgs>(
      args?: Subset<T, LessonAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonAttendanceAggregateArgs>(args: Subset<T, LessonAttendanceAggregateArgs>): Prisma.PrismaPromise<GetLessonAttendanceAggregateType<T>>

    /**
     * Group by LessonAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: LessonAttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonAttendance model
   */
  readonly fields: LessonAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    student<T extends AthleteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AthleteDefaultArgs<ExtArgs>>): Prisma__AthleteClient<$Result.GetResult<Prisma.$AthletePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LessonAttendance model
   */ 
  interface LessonAttendanceFieldRefs {
    readonly id: FieldRef<"LessonAttendance", 'String'>
    readonly lesson_id: FieldRef<"LessonAttendance", 'String'>
    readonly student_id: FieldRef<"LessonAttendance", 'String'>
    readonly did_attend: FieldRef<"LessonAttendance", 'Boolean'>
    readonly reason: FieldRef<"LessonAttendance", 'String'>
    readonly updated_at: FieldRef<"LessonAttendance", 'DateTime'>
    readonly created_at: FieldRef<"LessonAttendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonAttendance findUnique
   */
  export type LessonAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which LessonAttendance to fetch.
     */
    where: LessonAttendanceWhereUniqueInput
  }

  /**
   * LessonAttendance findUniqueOrThrow
   */
  export type LessonAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which LessonAttendance to fetch.
     */
    where: LessonAttendanceWhereUniqueInput
  }

  /**
   * LessonAttendance findFirst
   */
  export type LessonAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which LessonAttendance to fetch.
     */
    where?: LessonAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonAttendances to fetch.
     */
    orderBy?: LessonAttendanceOrderByWithRelationInput | LessonAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonAttendances.
     */
    cursor?: LessonAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonAttendances.
     */
    distinct?: LessonAttendanceScalarFieldEnum | LessonAttendanceScalarFieldEnum[]
  }

  /**
   * LessonAttendance findFirstOrThrow
   */
  export type LessonAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which LessonAttendance to fetch.
     */
    where?: LessonAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonAttendances to fetch.
     */
    orderBy?: LessonAttendanceOrderByWithRelationInput | LessonAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonAttendances.
     */
    cursor?: LessonAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonAttendances.
     */
    distinct?: LessonAttendanceScalarFieldEnum | LessonAttendanceScalarFieldEnum[]
  }

  /**
   * LessonAttendance findMany
   */
  export type LessonAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which LessonAttendances to fetch.
     */
    where?: LessonAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonAttendances to fetch.
     */
    orderBy?: LessonAttendanceOrderByWithRelationInput | LessonAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonAttendances.
     */
    cursor?: LessonAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonAttendances.
     */
    skip?: number
    distinct?: LessonAttendanceScalarFieldEnum | LessonAttendanceScalarFieldEnum[]
  }

  /**
   * LessonAttendance create
   */
  export type LessonAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonAttendance.
     */
    data: XOR<LessonAttendanceCreateInput, LessonAttendanceUncheckedCreateInput>
  }

  /**
   * LessonAttendance createMany
   */
  export type LessonAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonAttendances.
     */
    data: LessonAttendanceCreateManyInput | LessonAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonAttendance createManyAndReturn
   */
  export type LessonAttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many LessonAttendances.
     */
    data: LessonAttendanceCreateManyInput | LessonAttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonAttendance update
   */
  export type LessonAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonAttendance.
     */
    data: XOR<LessonAttendanceUpdateInput, LessonAttendanceUncheckedUpdateInput>
    /**
     * Choose, which LessonAttendance to update.
     */
    where: LessonAttendanceWhereUniqueInput
  }

  /**
   * LessonAttendance updateMany
   */
  export type LessonAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonAttendances.
     */
    data: XOR<LessonAttendanceUpdateManyMutationInput, LessonAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which LessonAttendances to update
     */
    where?: LessonAttendanceWhereInput
    /**
     * Limit how many LessonAttendances to update.
     */
    limit?: number
  }

  /**
   * LessonAttendance updateManyAndReturn
   */
  export type LessonAttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * The data used to update LessonAttendances.
     */
    data: XOR<LessonAttendanceUpdateManyMutationInput, LessonAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which LessonAttendances to update
     */
    where?: LessonAttendanceWhereInput
    /**
     * Limit how many LessonAttendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonAttendance upsert
   */
  export type LessonAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonAttendance to update in case it exists.
     */
    where: LessonAttendanceWhereUniqueInput
    /**
     * In case the LessonAttendance found by the `where` argument doesn't exist, create a new LessonAttendance with this data.
     */
    create: XOR<LessonAttendanceCreateInput, LessonAttendanceUncheckedCreateInput>
    /**
     * In case the LessonAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonAttendanceUpdateInput, LessonAttendanceUncheckedUpdateInput>
  }

  /**
   * LessonAttendance delete
   */
  export type LessonAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
    /**
     * Filter which LessonAttendance to delete.
     */
    where: LessonAttendanceWhereUniqueInput
  }

  /**
   * LessonAttendance deleteMany
   */
  export type LessonAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonAttendances to delete
     */
    where?: LessonAttendanceWhereInput
    /**
     * Limit how many LessonAttendances to delete.
     */
    limit?: number
  }

  /**
   * LessonAttendance without action
   */
  export type LessonAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonAttendance
     */
    select?: LessonAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonAttendance
     */
    omit?: LessonAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonAttendanceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user: 'user',
    passwd: 'passwd',
    email: 'email',
    role: 'role',
    teacher_id: 'teacher_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AthleteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    birthday: 'birthday',
    phone: 'phone',
    responsible: 'responsible',
    date_start: 'date_start',
    pix_key: 'pix_key',
    cpf: 'cpf',
    address_id: 'address_id',
    is_student: 'is_student',
    is_associated: 'is_associated',
    is_teacher: 'is_teacher',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AthleteScalarFieldEnum = (typeof AthleteScalarFieldEnum)[keyof typeof AthleteScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    investment_type_id: 'investment_type_id',
    athlete_id: 'athlete_id',
    value: 'value',
    description: 'description',
    date: 'date',
    paid: 'paid',
    proof: 'proof',
    investment_group_id: 'investment_group_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


  export const InvestmentTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    can_see: 'can_see',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InvestmentTypeScalarFieldEnum = (typeof InvestmentTypeScalarFieldEnum)[keyof typeof InvestmentTypeScalarFieldEnum]


  export const InvestmentGroupScalarFieldEnum: {
    id: 'id',
    athlete_id: 'athlete_id',
    pair_id: 'pair_id',
    tournament_id: 'tournament_id',
    podium: 'podium',
    description: 'description',
    pair_amount: 'pair_amount',
    km: 'km',
    km_racional: 'km_racional',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InvestmentGroupScalarFieldEnum = (typeof InvestmentGroupScalarFieldEnum)[keyof typeof InvestmentGroupScalarFieldEnum]


  export const ArenaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address_id: 'address_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ArenaScalarFieldEnum = (typeof ArenaScalarFieldEnum)[keyof typeof ArenaScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date_from: 'date_from',
    date_to: 'date_to',
    description: 'description',
    arena_id: 'arena_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const CourtsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    is_single: 'is_single',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourtsScalarFieldEnum = (typeof CourtsScalarFieldEnum)[keyof typeof CourtsScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    number: 'number',
    complement: 'complement',
    neighborhood: 'neighborhood',
    city_state: 'city_state',
    zip_code: 'zip_code',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const TeacherAvailabilityScalarFieldEnum: {
    id: 'id',
    teacher_id: 'teacher_id',
    time_start: 'time_start',
    time_end: 'time_end',
    lesson_id: 'lesson_id',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type TeacherAvailabilityScalarFieldEnum = (typeof TeacherAvailabilityScalarFieldEnum)[keyof typeof TeacherAvailabilityScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    teacher_id: 'teacher_id',
    time_start: 'time_start',
    time_end: 'time_end',
    courts_id: 'courts_id',
    subject: 'subject',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const LessonAttendanceScalarFieldEnum: {
    id: 'id',
    lesson_id: 'lesson_id',
    student_id: 'student_id',
    did_attend: 'did_attend',
    reason: 'reason',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type LessonAttendanceScalarFieldEnum = (typeof LessonAttendanceScalarFieldEnum)[keyof typeof LessonAttendanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    user?: StringFilter<"User"> | string
    passwd?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    teacher_id?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    teacher?: XOR<AthleteNullableScalarRelationFilter, AthleteWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user?: SortOrder
    passwd?: SortOrder
    email?: SortOrder
    role?: SortOrder
    teacher_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    teacher?: AthleteOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user?: string
    teacher_id?: string
    teacher_id_name?: UserTeacher_idNameCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwd?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    teacher?: XOR<AthleteNullableScalarRelationFilter, AthleteWhereInput> | null
  }, "id" | "user" | "teacher_id" | "teacher_id_name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user?: SortOrder
    passwd?: SortOrder
    email?: SortOrder
    role?: SortOrder
    teacher_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    user?: StringWithAggregatesFilter<"User"> | string
    passwd?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    teacher_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AthleteWhereInput = {
    AND?: AthleteWhereInput | AthleteWhereInput[]
    OR?: AthleteWhereInput[]
    NOT?: AthleteWhereInput | AthleteWhereInput[]
    id?: StringFilter<"Athlete"> | string
    name?: StringFilter<"Athlete"> | string
    birthday?: DateTimeFilter<"Athlete"> | Date | string
    phone?: StringFilter<"Athlete"> | string
    responsible?: StringNullableFilter<"Athlete"> | string | null
    date_start?: DateTimeFilter<"Athlete"> | Date | string
    pix_key?: StringFilter<"Athlete"> | string
    cpf?: StringNullableFilter<"Athlete"> | string | null
    address_id?: StringNullableFilter<"Athlete"> | string | null
    is_student?: BoolFilter<"Athlete"> | boolean
    is_associated?: BoolFilter<"Athlete"> | boolean
    is_teacher?: BoolFilter<"Athlete"> | boolean
    created_at?: DateTimeFilter<"Athlete"> | Date | string
    updated_at?: DateTimeFilter<"Athlete"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    investments?: InvestmentListRelationFilter
    investment_group_athlete?: InvestmentGroupListRelationFilter
    investment_group_pair?: InvestmentGroupListRelationFilter
    teacher_availability?: TeacherAvailabilityListRelationFilter
    lesson?: LessonListRelationFilter
    lesson_attendance?: LessonAttendanceListRelationFilter
  }

  export type AthleteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    responsible?: SortOrderInput | SortOrder
    date_start?: SortOrder
    pix_key?: SortOrder
    cpf?: SortOrderInput | SortOrder
    address_id?: SortOrderInput | SortOrder
    is_student?: SortOrder
    is_associated?: SortOrder
    is_teacher?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    investments?: InvestmentOrderByRelationAggregateInput
    investment_group_athlete?: InvestmentGroupOrderByRelationAggregateInput
    investment_group_pair?: InvestmentGroupOrderByRelationAggregateInput
    teacher_availability?: TeacherAvailabilityOrderByRelationAggregateInput
    lesson?: LessonOrderByRelationAggregateInput
    lesson_attendance?: LessonAttendanceOrderByRelationAggregateInput
  }

  export type AthleteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    address_id?: string
    id_name?: AthleteIdNameCompoundUniqueInput
    AND?: AthleteWhereInput | AthleteWhereInput[]
    OR?: AthleteWhereInput[]
    NOT?: AthleteWhereInput | AthleteWhereInput[]
    birthday?: DateTimeFilter<"Athlete"> | Date | string
    phone?: StringFilter<"Athlete"> | string
    responsible?: StringNullableFilter<"Athlete"> | string | null
    date_start?: DateTimeFilter<"Athlete"> | Date | string
    pix_key?: StringFilter<"Athlete"> | string
    cpf?: StringNullableFilter<"Athlete"> | string | null
    is_student?: BoolFilter<"Athlete"> | boolean
    is_associated?: BoolFilter<"Athlete"> | boolean
    is_teacher?: BoolFilter<"Athlete"> | boolean
    created_at?: DateTimeFilter<"Athlete"> | Date | string
    updated_at?: DateTimeFilter<"Athlete"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    investments?: InvestmentListRelationFilter
    investment_group_athlete?: InvestmentGroupListRelationFilter
    investment_group_pair?: InvestmentGroupListRelationFilter
    teacher_availability?: TeacherAvailabilityListRelationFilter
    lesson?: LessonListRelationFilter
    lesson_attendance?: LessonAttendanceListRelationFilter
  }, "id" | "name" | "address_id" | "id_name">

  export type AthleteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    responsible?: SortOrderInput | SortOrder
    date_start?: SortOrder
    pix_key?: SortOrder
    cpf?: SortOrderInput | SortOrder
    address_id?: SortOrderInput | SortOrder
    is_student?: SortOrder
    is_associated?: SortOrder
    is_teacher?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AthleteCountOrderByAggregateInput
    _max?: AthleteMaxOrderByAggregateInput
    _min?: AthleteMinOrderByAggregateInput
  }

  export type AthleteScalarWhereWithAggregatesInput = {
    AND?: AthleteScalarWhereWithAggregatesInput | AthleteScalarWhereWithAggregatesInput[]
    OR?: AthleteScalarWhereWithAggregatesInput[]
    NOT?: AthleteScalarWhereWithAggregatesInput | AthleteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Athlete"> | string
    name?: StringWithAggregatesFilter<"Athlete"> | string
    birthday?: DateTimeWithAggregatesFilter<"Athlete"> | Date | string
    phone?: StringWithAggregatesFilter<"Athlete"> | string
    responsible?: StringNullableWithAggregatesFilter<"Athlete"> | string | null
    date_start?: DateTimeWithAggregatesFilter<"Athlete"> | Date | string
    pix_key?: StringWithAggregatesFilter<"Athlete"> | string
    cpf?: StringNullableWithAggregatesFilter<"Athlete"> | string | null
    address_id?: StringNullableWithAggregatesFilter<"Athlete"> | string | null
    is_student?: BoolWithAggregatesFilter<"Athlete"> | boolean
    is_associated?: BoolWithAggregatesFilter<"Athlete"> | boolean
    is_teacher?: BoolWithAggregatesFilter<"Athlete"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Athlete"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Athlete"> | Date | string
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: StringFilter<"Investment"> | string
    investment_type_id?: StringFilter<"Investment"> | string
    athlete_id?: StringFilter<"Investment"> | string
    value?: FloatFilter<"Investment"> | number
    description?: StringFilter<"Investment"> | string
    date?: DateTimeFilter<"Investment"> | Date | string
    paid?: DateTimeNullableFilter<"Investment"> | Date | string | null
    proof?: StringNullableFilter<"Investment"> | string | null
    investment_group_id?: StringNullableFilter<"Investment"> | string | null
    created_at?: DateTimeFilter<"Investment"> | Date | string
    updated_at?: DateTimeFilter<"Investment"> | Date | string
    athlete?: XOR<AthleteScalarRelationFilter, AthleteWhereInput>
    investment_type?: XOR<InvestmentTypeScalarRelationFilter, InvestmentTypeWhereInput>
    investment_group?: XOR<InvestmentGroupNullableScalarRelationFilter, InvestmentGroupWhereInput> | null
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    investment_type_id?: SortOrder
    athlete_id?: SortOrder
    value?: SortOrder
    description?: SortOrder
    date?: SortOrder
    paid?: SortOrderInput | SortOrder
    proof?: SortOrderInput | SortOrder
    investment_group_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    athlete?: AthleteOrderByWithRelationInput
    investment_type?: InvestmentTypeOrderByWithRelationInput
    investment_group?: InvestmentGroupOrderByWithRelationInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    investment_type_id?: StringFilter<"Investment"> | string
    athlete_id?: StringFilter<"Investment"> | string
    value?: FloatFilter<"Investment"> | number
    description?: StringFilter<"Investment"> | string
    date?: DateTimeFilter<"Investment"> | Date | string
    paid?: DateTimeNullableFilter<"Investment"> | Date | string | null
    proof?: StringNullableFilter<"Investment"> | string | null
    investment_group_id?: StringNullableFilter<"Investment"> | string | null
    created_at?: DateTimeFilter<"Investment"> | Date | string
    updated_at?: DateTimeFilter<"Investment"> | Date | string
    athlete?: XOR<AthleteScalarRelationFilter, AthleteWhereInput>
    investment_type?: XOR<InvestmentTypeScalarRelationFilter, InvestmentTypeWhereInput>
    investment_group?: XOR<InvestmentGroupNullableScalarRelationFilter, InvestmentGroupWhereInput> | null
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    investment_type_id?: SortOrder
    athlete_id?: SortOrder
    value?: SortOrder
    description?: SortOrder
    date?: SortOrder
    paid?: SortOrderInput | SortOrder
    proof?: SortOrderInput | SortOrder
    investment_group_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment"> | string
    investment_type_id?: StringWithAggregatesFilter<"Investment"> | string
    athlete_id?: StringWithAggregatesFilter<"Investment"> | string
    value?: FloatWithAggregatesFilter<"Investment"> | number
    description?: StringWithAggregatesFilter<"Investment"> | string
    date?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    paid?: DateTimeNullableWithAggregatesFilter<"Investment"> | Date | string | null
    proof?: StringNullableWithAggregatesFilter<"Investment"> | string | null
    investment_group_id?: StringNullableWithAggregatesFilter<"Investment"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
  }

  export type InvestmentTypeWhereInput = {
    AND?: InvestmentTypeWhereInput | InvestmentTypeWhereInput[]
    OR?: InvestmentTypeWhereInput[]
    NOT?: InvestmentTypeWhereInput | InvestmentTypeWhereInput[]
    id?: StringFilter<"InvestmentType"> | string
    name?: StringFilter<"InvestmentType"> | string
    description?: StringFilter<"InvestmentType"> | string
    can_see?: EnumUserRoleNullableListFilter<"InvestmentType">
    created_at?: DateTimeFilter<"InvestmentType"> | Date | string
    updated_at?: DateTimeFilter<"InvestmentType"> | Date | string
    investments?: InvestmentListRelationFilter
  }

  export type InvestmentTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    can_see?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    investments?: InvestmentOrderByRelationAggregateInput
  }

  export type InvestmentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: InvestmentTypeWhereInput | InvestmentTypeWhereInput[]
    OR?: InvestmentTypeWhereInput[]
    NOT?: InvestmentTypeWhereInput | InvestmentTypeWhereInput[]
    description?: StringFilter<"InvestmentType"> | string
    can_see?: EnumUserRoleNullableListFilter<"InvestmentType">
    created_at?: DateTimeFilter<"InvestmentType"> | Date | string
    updated_at?: DateTimeFilter<"InvestmentType"> | Date | string
    investments?: InvestmentListRelationFilter
  }, "id" | "name">

  export type InvestmentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    can_see?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: InvestmentTypeCountOrderByAggregateInput
    _max?: InvestmentTypeMaxOrderByAggregateInput
    _min?: InvestmentTypeMinOrderByAggregateInput
  }

  export type InvestmentTypeScalarWhereWithAggregatesInput = {
    AND?: InvestmentTypeScalarWhereWithAggregatesInput | InvestmentTypeScalarWhereWithAggregatesInput[]
    OR?: InvestmentTypeScalarWhereWithAggregatesInput[]
    NOT?: InvestmentTypeScalarWhereWithAggregatesInput | InvestmentTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvestmentType"> | string
    name?: StringWithAggregatesFilter<"InvestmentType"> | string
    description?: StringWithAggregatesFilter<"InvestmentType"> | string
    can_see?: EnumUserRoleNullableListFilter<"InvestmentType">
    created_at?: DateTimeWithAggregatesFilter<"InvestmentType"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"InvestmentType"> | Date | string
  }

  export type InvestmentGroupWhereInput = {
    AND?: InvestmentGroupWhereInput | InvestmentGroupWhereInput[]
    OR?: InvestmentGroupWhereInput[]
    NOT?: InvestmentGroupWhereInput | InvestmentGroupWhereInput[]
    id?: StringFilter<"InvestmentGroup"> | string
    athlete_id?: StringFilter<"InvestmentGroup"> | string
    pair_id?: StringNullableFilter<"InvestmentGroup"> | string | null
    tournament_id?: StringNullableFilter<"InvestmentGroup"> | string | null
    podium?: StringNullableFilter<"InvestmentGroup"> | string | null
    description?: StringNullableFilter<"InvestmentGroup"> | string | null
    pair_amount?: IntNullableFilter<"InvestmentGroup"> | number | null
    km?: FloatNullableFilter<"InvestmentGroup"> | number | null
    km_racional?: FloatNullableFilter<"InvestmentGroup"> | number | null
    created_at?: DateTimeFilter<"InvestmentGroup"> | Date | string
    updated_at?: DateTimeFilter<"InvestmentGroup"> | Date | string
    investments?: InvestmentListRelationFilter
    athlete?: XOR<AthleteScalarRelationFilter, AthleteWhereInput>
    pair?: XOR<AthleteNullableScalarRelationFilter, AthleteWhereInput> | null
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
  }

  export type InvestmentGroupOrderByWithRelationInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    pair_id?: SortOrderInput | SortOrder
    tournament_id?: SortOrderInput | SortOrder
    podium?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    pair_amount?: SortOrderInput | SortOrder
    km?: SortOrderInput | SortOrder
    km_racional?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    investments?: InvestmentOrderByRelationAggregateInput
    athlete?: AthleteOrderByWithRelationInput
    pair?: AthleteOrderByWithRelationInput
    tournament?: TournamentOrderByWithRelationInput
  }

  export type InvestmentGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentGroupWhereInput | InvestmentGroupWhereInput[]
    OR?: InvestmentGroupWhereInput[]
    NOT?: InvestmentGroupWhereInput | InvestmentGroupWhereInput[]
    athlete_id?: StringFilter<"InvestmentGroup"> | string
    pair_id?: StringNullableFilter<"InvestmentGroup"> | string | null
    tournament_id?: StringNullableFilter<"InvestmentGroup"> | string | null
    podium?: StringNullableFilter<"InvestmentGroup"> | string | null
    description?: StringNullableFilter<"InvestmentGroup"> | string | null
    pair_amount?: IntNullableFilter<"InvestmentGroup"> | number | null
    km?: FloatNullableFilter<"InvestmentGroup"> | number | null
    km_racional?: FloatNullableFilter<"InvestmentGroup"> | number | null
    created_at?: DateTimeFilter<"InvestmentGroup"> | Date | string
    updated_at?: DateTimeFilter<"InvestmentGroup"> | Date | string
    investments?: InvestmentListRelationFilter
    athlete?: XOR<AthleteScalarRelationFilter, AthleteWhereInput>
    pair?: XOR<AthleteNullableScalarRelationFilter, AthleteWhereInput> | null
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
  }, "id">

  export type InvestmentGroupOrderByWithAggregationInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    pair_id?: SortOrderInput | SortOrder
    tournament_id?: SortOrderInput | SortOrder
    podium?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    pair_amount?: SortOrderInput | SortOrder
    km?: SortOrderInput | SortOrder
    km_racional?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: InvestmentGroupCountOrderByAggregateInput
    _avg?: InvestmentGroupAvgOrderByAggregateInput
    _max?: InvestmentGroupMaxOrderByAggregateInput
    _min?: InvestmentGroupMinOrderByAggregateInput
    _sum?: InvestmentGroupSumOrderByAggregateInput
  }

  export type InvestmentGroupScalarWhereWithAggregatesInput = {
    AND?: InvestmentGroupScalarWhereWithAggregatesInput | InvestmentGroupScalarWhereWithAggregatesInput[]
    OR?: InvestmentGroupScalarWhereWithAggregatesInput[]
    NOT?: InvestmentGroupScalarWhereWithAggregatesInput | InvestmentGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvestmentGroup"> | string
    athlete_id?: StringWithAggregatesFilter<"InvestmentGroup"> | string
    pair_id?: StringNullableWithAggregatesFilter<"InvestmentGroup"> | string | null
    tournament_id?: StringNullableWithAggregatesFilter<"InvestmentGroup"> | string | null
    podium?: StringNullableWithAggregatesFilter<"InvestmentGroup"> | string | null
    description?: StringNullableWithAggregatesFilter<"InvestmentGroup"> | string | null
    pair_amount?: IntNullableWithAggregatesFilter<"InvestmentGroup"> | number | null
    km?: FloatNullableWithAggregatesFilter<"InvestmentGroup"> | number | null
    km_racional?: FloatNullableWithAggregatesFilter<"InvestmentGroup"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"InvestmentGroup"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"InvestmentGroup"> | Date | string
  }

  export type ArenaWhereInput = {
    AND?: ArenaWhereInput | ArenaWhereInput[]
    OR?: ArenaWhereInput[]
    NOT?: ArenaWhereInput | ArenaWhereInput[]
    id?: StringFilter<"Arena"> | string
    name?: StringFilter<"Arena"> | string
    address_id?: StringFilter<"Arena"> | string
    created_at?: DateTimeFilter<"Arena"> | Date | string
    updated_at?: DateTimeFilter<"Arena"> | Date | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    tournaments?: TournamentListRelationFilter
  }

  export type ArenaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    address?: AddressOrderByWithRelationInput
    tournaments?: TournamentOrderByRelationAggregateInput
  }

  export type ArenaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address_id?: string
    name_address_id?: ArenaNameAddress_idCompoundUniqueInput
    AND?: ArenaWhereInput | ArenaWhereInput[]
    OR?: ArenaWhereInput[]
    NOT?: ArenaWhereInput | ArenaWhereInput[]
    name?: StringFilter<"Arena"> | string
    created_at?: DateTimeFilter<"Arena"> | Date | string
    updated_at?: DateTimeFilter<"Arena"> | Date | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    tournaments?: TournamentListRelationFilter
  }, "id" | "address_id" | "name_address_id">

  export type ArenaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ArenaCountOrderByAggregateInput
    _max?: ArenaMaxOrderByAggregateInput
    _min?: ArenaMinOrderByAggregateInput
  }

  export type ArenaScalarWhereWithAggregatesInput = {
    AND?: ArenaScalarWhereWithAggregatesInput | ArenaScalarWhereWithAggregatesInput[]
    OR?: ArenaScalarWhereWithAggregatesInput[]
    NOT?: ArenaScalarWhereWithAggregatesInput | ArenaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Arena"> | string
    name?: StringWithAggregatesFilter<"Arena"> | string
    address_id?: StringWithAggregatesFilter<"Arena"> | string
    created_at?: DateTimeWithAggregatesFilter<"Arena"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Arena"> | Date | string
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    date_from?: DateTimeFilter<"Tournament"> | Date | string
    date_to?: DateTimeFilter<"Tournament"> | Date | string
    description?: StringNullableFilter<"Tournament"> | string | null
    arena_id?: StringFilter<"Tournament"> | string
    created_at?: DateTimeFilter<"Tournament"> | Date | string
    updated_at?: DateTimeFilter<"Tournament"> | Date | string
    arena?: XOR<ArenaScalarRelationFilter, ArenaWhereInput>
    investment_group?: InvestmentGroupListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date_from?: SortOrder
    date_to?: SortOrder
    description?: SortOrderInput | SortOrder
    arena_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    arena?: ArenaOrderByWithRelationInput
    investment_group?: InvestmentGroupOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_arena_id_date_from_date_to?: TournamentNameArena_idDate_fromDate_toCompoundUniqueInput
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    date_from?: DateTimeFilter<"Tournament"> | Date | string
    date_to?: DateTimeFilter<"Tournament"> | Date | string
    description?: StringNullableFilter<"Tournament"> | string | null
    arena_id?: StringFilter<"Tournament"> | string
    created_at?: DateTimeFilter<"Tournament"> | Date | string
    updated_at?: DateTimeFilter<"Tournament"> | Date | string
    arena?: XOR<ArenaScalarRelationFilter, ArenaWhereInput>
    investment_group?: InvestmentGroupListRelationFilter
  }, "id" | "name_arena_id_date_from_date_to">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date_from?: SortOrder
    date_to?: SortOrder
    description?: SortOrderInput | SortOrder
    arena_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tournament"> | string
    name?: StringWithAggregatesFilter<"Tournament"> | string
    date_from?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    date_to?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Tournament"> | string | null
    arena_id?: StringWithAggregatesFilter<"Tournament"> | string
    created_at?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type CourtsWhereInput = {
    AND?: CourtsWhereInput | CourtsWhereInput[]
    OR?: CourtsWhereInput[]
    NOT?: CourtsWhereInput | CourtsWhereInput[]
    id?: StringFilter<"Courts"> | string
    name?: StringFilter<"Courts"> | string
    number?: IntFilter<"Courts"> | number
    is_single?: BoolFilter<"Courts"> | boolean
    createdAt?: DateTimeFilter<"Courts"> | Date | string
    updatedAt?: DateTimeFilter<"Courts"> | Date | string
    lesson?: LessonListRelationFilter
  }

  export type CourtsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    is_single?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lesson?: LessonOrderByRelationAggregateInput
  }

  export type CourtsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourtsWhereInput | CourtsWhereInput[]
    OR?: CourtsWhereInput[]
    NOT?: CourtsWhereInput | CourtsWhereInput[]
    name?: StringFilter<"Courts"> | string
    number?: IntFilter<"Courts"> | number
    is_single?: BoolFilter<"Courts"> | boolean
    createdAt?: DateTimeFilter<"Courts"> | Date | string
    updatedAt?: DateTimeFilter<"Courts"> | Date | string
    lesson?: LessonListRelationFilter
  }, "id">

  export type CourtsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    is_single?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourtsCountOrderByAggregateInput
    _avg?: CourtsAvgOrderByAggregateInput
    _max?: CourtsMaxOrderByAggregateInput
    _min?: CourtsMinOrderByAggregateInput
    _sum?: CourtsSumOrderByAggregateInput
  }

  export type CourtsScalarWhereWithAggregatesInput = {
    AND?: CourtsScalarWhereWithAggregatesInput | CourtsScalarWhereWithAggregatesInput[]
    OR?: CourtsScalarWhereWithAggregatesInput[]
    NOT?: CourtsScalarWhereWithAggregatesInput | CourtsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Courts"> | string
    name?: StringWithAggregatesFilter<"Courts"> | string
    number?: IntWithAggregatesFilter<"Courts"> | number
    is_single?: BoolWithAggregatesFilter<"Courts"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Courts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Courts"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    street?: StringNullableFilter<"Address"> | string | null
    number?: StringNullableFilter<"Address"> | string | null
    complement?: StringNullableFilter<"Address"> | string | null
    neighborhood?: StringNullableFilter<"Address"> | string | null
    city_state?: StringFilter<"Address"> | string
    zip_code?: StringNullableFilter<"Address"> | string | null
    updated_at?: DateTimeFilter<"Address"> | Date | string
    created_at?: DateTimeFilter<"Address"> | Date | string
    arena?: XOR<ArenaNullableScalarRelationFilter, ArenaWhereInput> | null
    athlete?: XOR<AthleteNullableScalarRelationFilter, AthleteWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    city_state?: SortOrder
    zip_code?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    arena?: ArenaOrderByWithRelationInput
    athlete?: AthleteOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringNullableFilter<"Address"> | string | null
    number?: StringNullableFilter<"Address"> | string | null
    complement?: StringNullableFilter<"Address"> | string | null
    neighborhood?: StringNullableFilter<"Address"> | string | null
    city_state?: StringFilter<"Address"> | string
    zip_code?: StringNullableFilter<"Address"> | string | null
    updated_at?: DateTimeFilter<"Address"> | Date | string
    created_at?: DateTimeFilter<"Address"> | Date | string
    arena?: XOR<ArenaNullableScalarRelationFilter, ArenaWhereInput> | null
    athlete?: XOR<AthleteNullableScalarRelationFilter, AthleteWhereInput> | null
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    city_state?: SortOrder
    zip_code?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    street?: StringNullableWithAggregatesFilter<"Address"> | string | null
    number?: StringNullableWithAggregatesFilter<"Address"> | string | null
    complement?: StringNullableWithAggregatesFilter<"Address"> | string | null
    neighborhood?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city_state?: StringWithAggregatesFilter<"Address"> | string
    zip_code?: StringNullableWithAggregatesFilter<"Address"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type TeacherAvailabilityWhereInput = {
    AND?: TeacherAvailabilityWhereInput | TeacherAvailabilityWhereInput[]
    OR?: TeacherAvailabilityWhereInput[]
    NOT?: TeacherAvailabilityWhereInput | TeacherAvailabilityWhereInput[]
    id?: StringFilter<"TeacherAvailability"> | string
    teacher_id?: StringFilter<"TeacherAvailability"> | string
    time_start?: DateTimeFilter<"TeacherAvailability"> | Date | string
    time_end?: DateTimeFilter<"TeacherAvailability"> | Date | string
    lesson_id?: StringNullableFilter<"TeacherAvailability"> | string | null
    updated_at?: DateTimeFilter<"TeacherAvailability"> | Date | string
    created_at?: DateTimeFilter<"TeacherAvailability"> | Date | string
    teacher?: XOR<AthleteScalarRelationFilter, AthleteWhereInput>
    lesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
  }

  export type TeacherAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    lesson_id?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    teacher?: AthleteOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type TeacherAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeacherAvailabilityWhereInput | TeacherAvailabilityWhereInput[]
    OR?: TeacherAvailabilityWhereInput[]
    NOT?: TeacherAvailabilityWhereInput | TeacherAvailabilityWhereInput[]
    teacher_id?: StringFilter<"TeacherAvailability"> | string
    time_start?: DateTimeFilter<"TeacherAvailability"> | Date | string
    time_end?: DateTimeFilter<"TeacherAvailability"> | Date | string
    lesson_id?: StringNullableFilter<"TeacherAvailability"> | string | null
    updated_at?: DateTimeFilter<"TeacherAvailability"> | Date | string
    created_at?: DateTimeFilter<"TeacherAvailability"> | Date | string
    teacher?: XOR<AthleteScalarRelationFilter, AthleteWhereInput>
    lesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
  }, "id">

  export type TeacherAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    lesson_id?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: TeacherAvailabilityCountOrderByAggregateInput
    _max?: TeacherAvailabilityMaxOrderByAggregateInput
    _min?: TeacherAvailabilityMinOrderByAggregateInput
  }

  export type TeacherAvailabilityScalarWhereWithAggregatesInput = {
    AND?: TeacherAvailabilityScalarWhereWithAggregatesInput | TeacherAvailabilityScalarWhereWithAggregatesInput[]
    OR?: TeacherAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: TeacherAvailabilityScalarWhereWithAggregatesInput | TeacherAvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeacherAvailability"> | string
    teacher_id?: StringWithAggregatesFilter<"TeacherAvailability"> | string
    time_start?: DateTimeWithAggregatesFilter<"TeacherAvailability"> | Date | string
    time_end?: DateTimeWithAggregatesFilter<"TeacherAvailability"> | Date | string
    lesson_id?: StringNullableWithAggregatesFilter<"TeacherAvailability"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"TeacherAvailability"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"TeacherAvailability"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    teacher_id?: StringFilter<"Lesson"> | string
    time_start?: DateTimeFilter<"Lesson"> | Date | string
    time_end?: DateTimeFilter<"Lesson"> | Date | string
    courts_id?: StringFilter<"Lesson"> | string
    subject?: StringNullableFilter<"Lesson"> | string | null
    updated_at?: DateTimeFilter<"Lesson"> | Date | string
    created_at?: DateTimeFilter<"Lesson"> | Date | string
    teacher?: XOR<AthleteScalarRelationFilter, AthleteWhereInput>
    courts?: XOR<CourtsScalarRelationFilter, CourtsWhereInput>
    teacher_availability?: TeacherAvailabilityListRelationFilter
    attendances?: LessonAttendanceListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    courts_id?: SortOrder
    subject?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    teacher?: AthleteOrderByWithRelationInput
    courts?: CourtsOrderByWithRelationInput
    teacher_availability?: TeacherAvailabilityOrderByRelationAggregateInput
    attendances?: LessonAttendanceOrderByRelationAggregateInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    teacher_id?: StringFilter<"Lesson"> | string
    time_start?: DateTimeFilter<"Lesson"> | Date | string
    time_end?: DateTimeFilter<"Lesson"> | Date | string
    courts_id?: StringFilter<"Lesson"> | string
    subject?: StringNullableFilter<"Lesson"> | string | null
    updated_at?: DateTimeFilter<"Lesson"> | Date | string
    created_at?: DateTimeFilter<"Lesson"> | Date | string
    teacher?: XOR<AthleteScalarRelationFilter, AthleteWhereInput>
    courts?: XOR<CourtsScalarRelationFilter, CourtsWhereInput>
    teacher_availability?: TeacherAvailabilityListRelationFilter
    attendances?: LessonAttendanceListRelationFilter
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    courts_id?: SortOrder
    subject?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    teacher_id?: StringWithAggregatesFilter<"Lesson"> | string
    time_start?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    time_end?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    courts_id?: StringWithAggregatesFilter<"Lesson"> | string
    subject?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
  }

  export type LessonAttendanceWhereInput = {
    AND?: LessonAttendanceWhereInput | LessonAttendanceWhereInput[]
    OR?: LessonAttendanceWhereInput[]
    NOT?: LessonAttendanceWhereInput | LessonAttendanceWhereInput[]
    id?: StringFilter<"LessonAttendance"> | string
    lesson_id?: StringFilter<"LessonAttendance"> | string
    student_id?: StringFilter<"LessonAttendance"> | string
    did_attend?: BoolFilter<"LessonAttendance"> | boolean
    reason?: StringNullableFilter<"LessonAttendance"> | string | null
    updated_at?: DateTimeFilter<"LessonAttendance"> | Date | string
    created_at?: DateTimeFilter<"LessonAttendance"> | Date | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    student?: XOR<AthleteScalarRelationFilter, AthleteWhereInput>
  }

  export type LessonAttendanceOrderByWithRelationInput = {
    id?: SortOrder
    lesson_id?: SortOrder
    student_id?: SortOrder
    did_attend?: SortOrder
    reason?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    lesson?: LessonOrderByWithRelationInput
    student?: AthleteOrderByWithRelationInput
  }

  export type LessonAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonAttendanceWhereInput | LessonAttendanceWhereInput[]
    OR?: LessonAttendanceWhereInput[]
    NOT?: LessonAttendanceWhereInput | LessonAttendanceWhereInput[]
    lesson_id?: StringFilter<"LessonAttendance"> | string
    student_id?: StringFilter<"LessonAttendance"> | string
    did_attend?: BoolFilter<"LessonAttendance"> | boolean
    reason?: StringNullableFilter<"LessonAttendance"> | string | null
    updated_at?: DateTimeFilter<"LessonAttendance"> | Date | string
    created_at?: DateTimeFilter<"LessonAttendance"> | Date | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    student?: XOR<AthleteScalarRelationFilter, AthleteWhereInput>
  }, "id">

  export type LessonAttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    lesson_id?: SortOrder
    student_id?: SortOrder
    did_attend?: SortOrder
    reason?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: LessonAttendanceCountOrderByAggregateInput
    _max?: LessonAttendanceMaxOrderByAggregateInput
    _min?: LessonAttendanceMinOrderByAggregateInput
  }

  export type LessonAttendanceScalarWhereWithAggregatesInput = {
    AND?: LessonAttendanceScalarWhereWithAggregatesInput | LessonAttendanceScalarWhereWithAggregatesInput[]
    OR?: LessonAttendanceScalarWhereWithAggregatesInput[]
    NOT?: LessonAttendanceScalarWhereWithAggregatesInput | LessonAttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonAttendance"> | string
    lesson_id?: StringWithAggregatesFilter<"LessonAttendance"> | string
    student_id?: StringWithAggregatesFilter<"LessonAttendance"> | string
    did_attend?: BoolWithAggregatesFilter<"LessonAttendance"> | boolean
    reason?: StringNullableWithAggregatesFilter<"LessonAttendance"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"LessonAttendance"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"LessonAttendance"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    user: string
    passwd: string
    email: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
    teacher?: AthleteCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    user: string
    passwd: string
    email: string
    role?: $Enums.UserRole
    teacher_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: AthleteUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    teacher_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    user: string
    passwd: string
    email: string
    role?: $Enums.UserRole
    teacher_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    teacher_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthleteCreateInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutTeacherInput
    address?: AddressCreateNestedOneWithoutAthleteInput
    investments?: InvestmentCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutTeacherInput
    lesson?: LessonCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceCreateNestedManyWithoutStudentInput
  }

  export type AthleteUncheckedCreateInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    address_id?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutTeacherInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupUncheckedCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutTeacherInput
    lesson?: LessonUncheckedCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type AthleteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeacherNestedInput
    address?: AddressUpdateOneWithoutAthleteNestedInput
    investments?: InvestmentUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type AthleteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutTeacherNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUncheckedUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUncheckedUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AthleteCreateManyInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    address_id?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AthleteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthleteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateInput = {
    id?: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    athlete: AthleteCreateNestedOneWithoutInvestmentsInput
    investment_type: InvestmentTypeCreateNestedOneWithoutInvestmentsInput
    investment_group?: InvestmentGroupCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: string
    investment_type_id: string
    athlete_id: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    investment_group_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    athlete?: AthleteUpdateOneRequiredWithoutInvestmentsNestedInput
    investment_type?: InvestmentTypeUpdateOneRequiredWithoutInvestmentsNestedInput
    investment_group?: InvestmentGroupUpdateOneWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    investment_type_id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    investment_group_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManyInput = {
    id?: string
    investment_type_id: string
    athlete_id: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    investment_group_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    investment_type_id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    investment_group_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentTypeCreateInput = {
    id?: string
    name: string
    description: string
    can_see?: InvestmentTypeCreatecan_seeInput | $Enums.UserRole[]
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentCreateNestedManyWithoutInvestment_typeInput
  }

  export type InvestmentTypeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    can_see?: InvestmentTypeCreatecan_seeInput | $Enums.UserRole[]
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestment_typeInput
  }

  export type InvestmentTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    can_see?: InvestmentTypeUpdatecan_seeInput | $Enums.UserRole[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutInvestment_typeNestedInput
  }

  export type InvestmentTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    can_see?: InvestmentTypeUpdatecan_seeInput | $Enums.UserRole[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutInvestment_typeNestedInput
  }

  export type InvestmentTypeCreateManyInput = {
    id?: string
    name: string
    description: string
    can_see?: InvestmentTypeCreatecan_seeInput | $Enums.UserRole[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    can_see?: InvestmentTypeUpdatecan_seeInput | $Enums.UserRole[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    can_see?: InvestmentTypeUpdatecan_seeInput | $Enums.UserRole[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentGroupCreateInput = {
    id?: string
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentCreateNestedManyWithoutInvestment_groupInput
    athlete: AthleteCreateNestedOneWithoutInvestment_group_athleteInput
    pair?: AthleteCreateNestedOneWithoutInvestment_group_pairInput
    tournament?: TournamentCreateNestedOneWithoutInvestment_groupInput
  }

  export type InvestmentGroupUncheckedCreateInput = {
    id?: string
    athlete_id: string
    pair_id?: string | null
    tournament_id?: string | null
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestment_groupInput
  }

  export type InvestmentGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutInvestment_groupNestedInput
    athlete?: AthleteUpdateOneRequiredWithoutInvestment_group_athleteNestedInput
    pair?: AthleteUpdateOneWithoutInvestment_group_pairNestedInput
    tournament?: TournamentUpdateOneWithoutInvestment_groupNestedInput
  }

  export type InvestmentGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    pair_id?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_id?: NullableStringFieldUpdateOperationsInput | string | null
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutInvestment_groupNestedInput
  }

  export type InvestmentGroupCreateManyInput = {
    id?: string
    athlete_id: string
    pair_id?: string | null
    tournament_id?: string | null
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    pair_id?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_id?: NullableStringFieldUpdateOperationsInput | string | null
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    address: AddressCreateNestedOneWithoutArenaInput
    tournaments?: TournamentCreateNestedManyWithoutArenaInput
  }

  export type ArenaUncheckedCreateInput = {
    id?: string
    name: string
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    tournaments?: TournamentUncheckedCreateNestedManyWithoutArenaInput
  }

  export type ArenaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutArenaNestedInput
    tournaments?: TournamentUpdateManyWithoutArenaNestedInput
  }

  export type ArenaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: TournamentUncheckedUpdateManyWithoutArenaNestedInput
  }

  export type ArenaCreateManyInput = {
    id?: string
    name: string
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ArenaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentCreateInput = {
    id?: string
    name: string
    date_from: Date | string
    date_to: Date | string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    arena: ArenaCreateNestedOneWithoutTournamentsInput
    investment_group?: InvestmentGroupCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: string
    name: string
    date_from: Date | string
    date_to: Date | string
    description?: string | null
    arena_id: string
    created_at?: Date | string
    updated_at?: Date | string
    investment_group?: InvestmentGroupUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_from?: DateTimeFieldUpdateOperationsInput | Date | string
    date_to?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arena?: ArenaUpdateOneRequiredWithoutTournamentsNestedInput
    investment_group?: InvestmentGroupUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_from?: DateTimeFieldUpdateOperationsInput | Date | string
    date_to?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    arena_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investment_group?: InvestmentGroupUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: string
    name: string
    date_from: Date | string
    date_to: Date | string
    description?: string | null
    arena_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_from?: DateTimeFieldUpdateOperationsInput | Date | string
    date_to?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_from?: DateTimeFieldUpdateOperationsInput | Date | string
    date_to?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    arena_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourtsCreateInput = {
    id?: string
    name: string
    number: number
    is_single?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lesson?: LessonCreateNestedManyWithoutCourtsInput
  }

  export type CourtsUncheckedCreateInput = {
    id?: string
    name: string
    number: number
    is_single?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lesson?: LessonUncheckedCreateNestedManyWithoutCourtsInput
  }

  export type CourtsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    is_single?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateManyWithoutCourtsNestedInput
  }

  export type CourtsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    is_single?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUncheckedUpdateManyWithoutCourtsNestedInput
  }

  export type CourtsCreateManyInput = {
    id?: string
    name: string
    number: number
    is_single?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourtsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    is_single?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourtsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    is_single?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    id?: string
    street?: string | null
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city_state: string
    zip_code?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    arena?: ArenaCreateNestedOneWithoutAddressInput
    athlete?: AthleteCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    street?: string | null
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city_state: string
    zip_code?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    arena?: ArenaUncheckedCreateNestedOneWithoutAddressInput
    athlete?: AthleteUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city_state?: StringFieldUpdateOperationsInput | string
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arena?: ArenaUpdateOneWithoutAddressNestedInput
    athlete?: AthleteUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city_state?: StringFieldUpdateOperationsInput | string
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arena?: ArenaUncheckedUpdateOneWithoutAddressNestedInput
    athlete?: AthleteUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    street?: string | null
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city_state: string
    zip_code?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city_state?: StringFieldUpdateOperationsInput | string
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city_state?: StringFieldUpdateOperationsInput | string
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherAvailabilityCreateInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    teacher: AthleteCreateNestedOneWithoutTeacher_availabilityInput
    lesson?: LessonCreateNestedOneWithoutTeacher_availabilityInput
  }

  export type TeacherAvailabilityUncheckedCreateInput = {
    id?: string
    teacher_id: string
    time_start: Date | string
    time_end: Date | string
    lesson_id?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type TeacherAvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: AthleteUpdateOneRequiredWithoutTeacher_availabilityNestedInput
    lesson?: LessonUpdateOneWithoutTeacher_availabilityNestedInput
  }

  export type TeacherAvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherAvailabilityCreateManyInput = {
    id?: string
    teacher_id: string
    time_start: Date | string
    time_end: Date | string
    lesson_id?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type TeacherAvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherAvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    teacher: AthleteCreateNestedOneWithoutLessonInput
    courts: CourtsCreateNestedOneWithoutLessonInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutLessonInput
    attendances?: LessonAttendanceCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    teacher_id: string
    time_start: Date | string
    time_end: Date | string
    courts_id: string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutLessonInput
    attendances?: LessonAttendanceUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: AthleteUpdateOneRequiredWithoutLessonNestedInput
    courts?: CourtsUpdateOneRequiredWithoutLessonNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutLessonNestedInput
    attendances?: LessonAttendanceUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    courts_id?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutLessonNestedInput
    attendances?: LessonAttendanceUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: string
    teacher_id: string
    time_start: Date | string
    time_end: Date | string
    courts_id: string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    courts_id?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonAttendanceCreateInput = {
    id?: string
    did_attend?: boolean
    reason?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    lesson: LessonCreateNestedOneWithoutAttendancesInput
    student: AthleteCreateNestedOneWithoutLesson_attendanceInput
  }

  export type LessonAttendanceUncheckedCreateInput = {
    id?: string
    lesson_id: string
    student_id: string
    did_attend?: boolean
    reason?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type LessonAttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    did_attend?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutAttendancesNestedInput
    student?: AthleteUpdateOneRequiredWithoutLesson_attendanceNestedInput
  }

  export type LessonAttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    did_attend?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonAttendanceCreateManyInput = {
    id?: string
    lesson_id: string
    student_id: string
    did_attend?: boolean
    reason?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type LessonAttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    did_attend?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonAttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    did_attend?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AthleteNullableScalarRelationFilter = {
    is?: AthleteWhereInput | null
    isNot?: AthleteWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTeacher_idNameCompoundUniqueInput = {
    teacher_id: string
    name: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user?: SortOrder
    passwd?: SortOrder
    email?: SortOrder
    role?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user?: SortOrder
    passwd?: SortOrder
    email?: SortOrder
    role?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user?: SortOrder
    passwd?: SortOrder
    email?: SortOrder
    role?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type InvestmentGroupListRelationFilter = {
    every?: InvestmentGroupWhereInput
    some?: InvestmentGroupWhereInput
    none?: InvestmentGroupWhereInput
  }

  export type TeacherAvailabilityListRelationFilter = {
    every?: TeacherAvailabilityWhereInput
    some?: TeacherAvailabilityWhereInput
    none?: TeacherAvailabilityWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonAttendanceListRelationFilter = {
    every?: LessonAttendanceWhereInput
    some?: LessonAttendanceWhereInput
    none?: LessonAttendanceWhereInput
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestmentGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AthleteIdNameCompoundUniqueInput = {
    id: string
    name: string
  }

  export type AthleteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    responsible?: SortOrder
    date_start?: SortOrder
    pix_key?: SortOrder
    cpf?: SortOrder
    address_id?: SortOrder
    is_student?: SortOrder
    is_associated?: SortOrder
    is_teacher?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AthleteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    responsible?: SortOrder
    date_start?: SortOrder
    pix_key?: SortOrder
    cpf?: SortOrder
    address_id?: SortOrder
    is_student?: SortOrder
    is_associated?: SortOrder
    is_teacher?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AthleteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    responsible?: SortOrder
    date_start?: SortOrder
    pix_key?: SortOrder
    cpf?: SortOrder
    address_id?: SortOrder
    is_student?: SortOrder
    is_associated?: SortOrder
    is_teacher?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AthleteScalarRelationFilter = {
    is?: AthleteWhereInput
    isNot?: AthleteWhereInput
  }

  export type InvestmentTypeScalarRelationFilter = {
    is?: InvestmentTypeWhereInput
    isNot?: InvestmentTypeWhereInput
  }

  export type InvestmentGroupNullableScalarRelationFilter = {
    is?: InvestmentGroupWhereInput | null
    isNot?: InvestmentGroupWhereInput | null
  }

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    investment_type_id?: SortOrder
    athlete_id?: SortOrder
    value?: SortOrder
    description?: SortOrder
    date?: SortOrder
    paid?: SortOrder
    proof?: SortOrder
    investment_group_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    investment_type_id?: SortOrder
    athlete_id?: SortOrder
    value?: SortOrder
    description?: SortOrder
    date?: SortOrder
    paid?: SortOrder
    proof?: SortOrder
    investment_group_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    investment_type_id?: SortOrder
    athlete_id?: SortOrder
    value?: SortOrder
    description?: SortOrder
    date?: SortOrder
    paid?: SortOrder
    proof?: SortOrder
    investment_group_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type InvestmentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    can_see?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvestmentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvestmentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TournamentNullableScalarRelationFilter = {
    is?: TournamentWhereInput | null
    isNot?: TournamentWhereInput | null
  }

  export type InvestmentGroupCountOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    pair_id?: SortOrder
    tournament_id?: SortOrder
    podium?: SortOrder
    description?: SortOrder
    pair_amount?: SortOrder
    km?: SortOrder
    km_racional?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvestmentGroupAvgOrderByAggregateInput = {
    pair_amount?: SortOrder
    km?: SortOrder
    km_racional?: SortOrder
  }

  export type InvestmentGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    pair_id?: SortOrder
    tournament_id?: SortOrder
    podium?: SortOrder
    description?: SortOrder
    pair_amount?: SortOrder
    km?: SortOrder
    km_racional?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvestmentGroupMinOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    pair_id?: SortOrder
    tournament_id?: SortOrder
    podium?: SortOrder
    description?: SortOrder
    pair_amount?: SortOrder
    km?: SortOrder
    km_racional?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvestmentGroupSumOrderByAggregateInput = {
    pair_amount?: SortOrder
    km?: SortOrder
    km_racional?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type TournamentListRelationFilter = {
    every?: TournamentWhereInput
    some?: TournamentWhereInput
    none?: TournamentWhereInput
  }

  export type TournamentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArenaNameAddress_idCompoundUniqueInput = {
    name: string
    address_id: string
  }

  export type ArenaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ArenaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ArenaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ArenaScalarRelationFilter = {
    is?: ArenaWhereInput
    isNot?: ArenaWhereInput
  }

  export type TournamentNameArena_idDate_fromDate_toCompoundUniqueInput = {
    name: string
    arena_id: string
    date_from: Date | string
    date_to: Date | string
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date_from?: SortOrder
    date_to?: SortOrder
    description?: SortOrder
    arena_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date_from?: SortOrder
    date_to?: SortOrder
    description?: SortOrder
    arena_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date_from?: SortOrder
    date_to?: SortOrder
    description?: SortOrder
    arena_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CourtsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    is_single?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourtsAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type CourtsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    is_single?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourtsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    is_single?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourtsSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ArenaNullableScalarRelationFilter = {
    is?: ArenaWhereInput | null
    isNot?: ArenaWhereInput | null
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    neighborhood?: SortOrder
    city_state?: SortOrder
    zip_code?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    neighborhood?: SortOrder
    city_state?: SortOrder
    zip_code?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    neighborhood?: SortOrder
    city_state?: SortOrder
    zip_code?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type LessonNullableScalarRelationFilter = {
    is?: LessonWhereInput | null
    isNot?: LessonWhereInput | null
  }

  export type TeacherAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    lesson_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type TeacherAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    lesson_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type TeacherAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    lesson_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type CourtsScalarRelationFilter = {
    is?: CourtsWhereInput
    isNot?: CourtsWhereInput
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    courts_id?: SortOrder
    subject?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    courts_id?: SortOrder
    subject?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    courts_id?: SortOrder
    subject?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type LessonAttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    lesson_id?: SortOrder
    student_id?: SortOrder
    did_attend?: SortOrder
    reason?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type LessonAttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    lesson_id?: SortOrder
    student_id?: SortOrder
    did_attend?: SortOrder
    reason?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type LessonAttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    lesson_id?: SortOrder
    student_id?: SortOrder
    did_attend?: SortOrder
    reason?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type AthleteCreateNestedOneWithoutUserInput = {
    create?: XOR<AthleteCreateWithoutUserInput, AthleteUncheckedCreateWithoutUserInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutUserInput
    connect?: AthleteWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AthleteUpdateOneWithoutUserNestedInput = {
    create?: XOR<AthleteCreateWithoutUserInput, AthleteUncheckedCreateWithoutUserInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutUserInput
    upsert?: AthleteUpsertWithoutUserInput
    disconnect?: AthleteWhereInput | boolean
    delete?: AthleteWhereInput | boolean
    connect?: AthleteWhereUniqueInput
    update?: XOR<XOR<AthleteUpdateToOneWithWhereWithoutUserInput, AthleteUpdateWithoutUserInput>, AthleteUncheckedUpdateWithoutUserInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCreateNestedOneWithoutTeacherInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutAthleteInput = {
    create?: XOR<AddressCreateWithoutAthleteInput, AddressUncheckedCreateWithoutAthleteInput>
    connectOrCreate?: AddressCreateOrConnectWithoutAthleteInput
    connect?: AddressWhereUniqueInput
  }

  export type InvestmentCreateNestedManyWithoutAthleteInput = {
    create?: XOR<InvestmentCreateWithoutAthleteInput, InvestmentUncheckedCreateWithoutAthleteInput> | InvestmentCreateWithoutAthleteInput[] | InvestmentUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutAthleteInput | InvestmentCreateOrConnectWithoutAthleteInput[]
    createMany?: InvestmentCreateManyAthleteInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentGroupCreateNestedManyWithoutAthleteInput = {
    create?: XOR<InvestmentGroupCreateWithoutAthleteInput, InvestmentGroupUncheckedCreateWithoutAthleteInput> | InvestmentGroupCreateWithoutAthleteInput[] | InvestmentGroupUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutAthleteInput | InvestmentGroupCreateOrConnectWithoutAthleteInput[]
    createMany?: InvestmentGroupCreateManyAthleteInputEnvelope
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
  }

  export type InvestmentGroupCreateNestedManyWithoutPairInput = {
    create?: XOR<InvestmentGroupCreateWithoutPairInput, InvestmentGroupUncheckedCreateWithoutPairInput> | InvestmentGroupCreateWithoutPairInput[] | InvestmentGroupUncheckedCreateWithoutPairInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutPairInput | InvestmentGroupCreateOrConnectWithoutPairInput[]
    createMany?: InvestmentGroupCreateManyPairInputEnvelope
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
  }

  export type TeacherAvailabilityCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherAvailabilityCreateWithoutTeacherInput, TeacherAvailabilityUncheckedCreateWithoutTeacherInput> | TeacherAvailabilityCreateWithoutTeacherInput[] | TeacherAvailabilityUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAvailabilityCreateOrConnectWithoutTeacherInput | TeacherAvailabilityCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherAvailabilityCreateManyTeacherInputEnvelope
    connect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
  }

  export type LessonCreateNestedManyWithoutTeacherInput = {
    create?: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput> | LessonCreateWithoutTeacherInput[] | LessonUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutTeacherInput | LessonCreateOrConnectWithoutTeacherInput[]
    createMany?: LessonCreateManyTeacherInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonAttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<LessonAttendanceCreateWithoutStudentInput, LessonAttendanceUncheckedCreateWithoutStudentInput> | LessonAttendanceCreateWithoutStudentInput[] | LessonAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: LessonAttendanceCreateOrConnectWithoutStudentInput | LessonAttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: LessonAttendanceCreateManyStudentInputEnvelope
    connect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutTeacherInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentUncheckedCreateNestedManyWithoutAthleteInput = {
    create?: XOR<InvestmentCreateWithoutAthleteInput, InvestmentUncheckedCreateWithoutAthleteInput> | InvestmentCreateWithoutAthleteInput[] | InvestmentUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutAthleteInput | InvestmentCreateOrConnectWithoutAthleteInput[]
    createMany?: InvestmentCreateManyAthleteInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentGroupUncheckedCreateNestedManyWithoutAthleteInput = {
    create?: XOR<InvestmentGroupCreateWithoutAthleteInput, InvestmentGroupUncheckedCreateWithoutAthleteInput> | InvestmentGroupCreateWithoutAthleteInput[] | InvestmentGroupUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutAthleteInput | InvestmentGroupCreateOrConnectWithoutAthleteInput[]
    createMany?: InvestmentGroupCreateManyAthleteInputEnvelope
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
  }

  export type InvestmentGroupUncheckedCreateNestedManyWithoutPairInput = {
    create?: XOR<InvestmentGroupCreateWithoutPairInput, InvestmentGroupUncheckedCreateWithoutPairInput> | InvestmentGroupCreateWithoutPairInput[] | InvestmentGroupUncheckedCreateWithoutPairInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutPairInput | InvestmentGroupCreateOrConnectWithoutPairInput[]
    createMany?: InvestmentGroupCreateManyPairInputEnvelope
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
  }

  export type TeacherAvailabilityUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherAvailabilityCreateWithoutTeacherInput, TeacherAvailabilityUncheckedCreateWithoutTeacherInput> | TeacherAvailabilityCreateWithoutTeacherInput[] | TeacherAvailabilityUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAvailabilityCreateOrConnectWithoutTeacherInput | TeacherAvailabilityCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherAvailabilityCreateManyTeacherInputEnvelope
    connect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput> | LessonCreateWithoutTeacherInput[] | LessonUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutTeacherInput | LessonCreateOrConnectWithoutTeacherInput[]
    createMany?: LessonCreateManyTeacherInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonAttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<LessonAttendanceCreateWithoutStudentInput, LessonAttendanceUncheckedCreateWithoutStudentInput> | LessonAttendanceCreateWithoutStudentInput[] | LessonAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: LessonAttendanceCreateOrConnectWithoutStudentInput | LessonAttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: LessonAttendanceCreateManyStudentInputEnvelope
    connect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutTeacherNestedInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    upsert?: UserUpsertWithoutTeacherInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherInput, UserUpdateWithoutTeacherInput>, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type AddressUpdateOneWithoutAthleteNestedInput = {
    create?: XOR<AddressCreateWithoutAthleteInput, AddressUncheckedCreateWithoutAthleteInput>
    connectOrCreate?: AddressCreateOrConnectWithoutAthleteInput
    upsert?: AddressUpsertWithoutAthleteInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutAthleteInput, AddressUpdateWithoutAthleteInput>, AddressUncheckedUpdateWithoutAthleteInput>
  }

  export type InvestmentUpdateManyWithoutAthleteNestedInput = {
    create?: XOR<InvestmentCreateWithoutAthleteInput, InvestmentUncheckedCreateWithoutAthleteInput> | InvestmentCreateWithoutAthleteInput[] | InvestmentUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutAthleteInput | InvestmentCreateOrConnectWithoutAthleteInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutAthleteInput | InvestmentUpsertWithWhereUniqueWithoutAthleteInput[]
    createMany?: InvestmentCreateManyAthleteInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutAthleteInput | InvestmentUpdateWithWhereUniqueWithoutAthleteInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutAthleteInput | InvestmentUpdateManyWithWhereWithoutAthleteInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentGroupUpdateManyWithoutAthleteNestedInput = {
    create?: XOR<InvestmentGroupCreateWithoutAthleteInput, InvestmentGroupUncheckedCreateWithoutAthleteInput> | InvestmentGroupCreateWithoutAthleteInput[] | InvestmentGroupUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutAthleteInput | InvestmentGroupCreateOrConnectWithoutAthleteInput[]
    upsert?: InvestmentGroupUpsertWithWhereUniqueWithoutAthleteInput | InvestmentGroupUpsertWithWhereUniqueWithoutAthleteInput[]
    createMany?: InvestmentGroupCreateManyAthleteInputEnvelope
    set?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    disconnect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    delete?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    update?: InvestmentGroupUpdateWithWhereUniqueWithoutAthleteInput | InvestmentGroupUpdateWithWhereUniqueWithoutAthleteInput[]
    updateMany?: InvestmentGroupUpdateManyWithWhereWithoutAthleteInput | InvestmentGroupUpdateManyWithWhereWithoutAthleteInput[]
    deleteMany?: InvestmentGroupScalarWhereInput | InvestmentGroupScalarWhereInput[]
  }

  export type InvestmentGroupUpdateManyWithoutPairNestedInput = {
    create?: XOR<InvestmentGroupCreateWithoutPairInput, InvestmentGroupUncheckedCreateWithoutPairInput> | InvestmentGroupCreateWithoutPairInput[] | InvestmentGroupUncheckedCreateWithoutPairInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutPairInput | InvestmentGroupCreateOrConnectWithoutPairInput[]
    upsert?: InvestmentGroupUpsertWithWhereUniqueWithoutPairInput | InvestmentGroupUpsertWithWhereUniqueWithoutPairInput[]
    createMany?: InvestmentGroupCreateManyPairInputEnvelope
    set?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    disconnect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    delete?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    update?: InvestmentGroupUpdateWithWhereUniqueWithoutPairInput | InvestmentGroupUpdateWithWhereUniqueWithoutPairInput[]
    updateMany?: InvestmentGroupUpdateManyWithWhereWithoutPairInput | InvestmentGroupUpdateManyWithWhereWithoutPairInput[]
    deleteMany?: InvestmentGroupScalarWhereInput | InvestmentGroupScalarWhereInput[]
  }

  export type TeacherAvailabilityUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherAvailabilityCreateWithoutTeacherInput, TeacherAvailabilityUncheckedCreateWithoutTeacherInput> | TeacherAvailabilityCreateWithoutTeacherInput[] | TeacherAvailabilityUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAvailabilityCreateOrConnectWithoutTeacherInput | TeacherAvailabilityCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherAvailabilityUpsertWithWhereUniqueWithoutTeacherInput | TeacherAvailabilityUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherAvailabilityCreateManyTeacherInputEnvelope
    set?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    disconnect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    delete?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    connect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    update?: TeacherAvailabilityUpdateWithWhereUniqueWithoutTeacherInput | TeacherAvailabilityUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherAvailabilityUpdateManyWithWhereWithoutTeacherInput | TeacherAvailabilityUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherAvailabilityScalarWhereInput | TeacherAvailabilityScalarWhereInput[]
  }

  export type LessonUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput> | LessonCreateWithoutTeacherInput[] | LessonUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutTeacherInput | LessonCreateOrConnectWithoutTeacherInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutTeacherInput | LessonUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: LessonCreateManyTeacherInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutTeacherInput | LessonUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutTeacherInput | LessonUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonAttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<LessonAttendanceCreateWithoutStudentInput, LessonAttendanceUncheckedCreateWithoutStudentInput> | LessonAttendanceCreateWithoutStudentInput[] | LessonAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: LessonAttendanceCreateOrConnectWithoutStudentInput | LessonAttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: LessonAttendanceUpsertWithWhereUniqueWithoutStudentInput | LessonAttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: LessonAttendanceCreateManyStudentInputEnvelope
    set?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    disconnect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    delete?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    connect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    update?: LessonAttendanceUpdateWithWhereUniqueWithoutStudentInput | LessonAttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: LessonAttendanceUpdateManyWithWhereWithoutStudentInput | LessonAttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: LessonAttendanceScalarWhereInput | LessonAttendanceScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutTeacherNestedInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    upsert?: UserUpsertWithoutTeacherInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherInput, UserUpdateWithoutTeacherInput>, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type InvestmentUncheckedUpdateManyWithoutAthleteNestedInput = {
    create?: XOR<InvestmentCreateWithoutAthleteInput, InvestmentUncheckedCreateWithoutAthleteInput> | InvestmentCreateWithoutAthleteInput[] | InvestmentUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutAthleteInput | InvestmentCreateOrConnectWithoutAthleteInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutAthleteInput | InvestmentUpsertWithWhereUniqueWithoutAthleteInput[]
    createMany?: InvestmentCreateManyAthleteInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutAthleteInput | InvestmentUpdateWithWhereUniqueWithoutAthleteInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutAthleteInput | InvestmentUpdateManyWithWhereWithoutAthleteInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentGroupUncheckedUpdateManyWithoutAthleteNestedInput = {
    create?: XOR<InvestmentGroupCreateWithoutAthleteInput, InvestmentGroupUncheckedCreateWithoutAthleteInput> | InvestmentGroupCreateWithoutAthleteInput[] | InvestmentGroupUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutAthleteInput | InvestmentGroupCreateOrConnectWithoutAthleteInput[]
    upsert?: InvestmentGroupUpsertWithWhereUniqueWithoutAthleteInput | InvestmentGroupUpsertWithWhereUniqueWithoutAthleteInput[]
    createMany?: InvestmentGroupCreateManyAthleteInputEnvelope
    set?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    disconnect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    delete?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    update?: InvestmentGroupUpdateWithWhereUniqueWithoutAthleteInput | InvestmentGroupUpdateWithWhereUniqueWithoutAthleteInput[]
    updateMany?: InvestmentGroupUpdateManyWithWhereWithoutAthleteInput | InvestmentGroupUpdateManyWithWhereWithoutAthleteInput[]
    deleteMany?: InvestmentGroupScalarWhereInput | InvestmentGroupScalarWhereInput[]
  }

  export type InvestmentGroupUncheckedUpdateManyWithoutPairNestedInput = {
    create?: XOR<InvestmentGroupCreateWithoutPairInput, InvestmentGroupUncheckedCreateWithoutPairInput> | InvestmentGroupCreateWithoutPairInput[] | InvestmentGroupUncheckedCreateWithoutPairInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutPairInput | InvestmentGroupCreateOrConnectWithoutPairInput[]
    upsert?: InvestmentGroupUpsertWithWhereUniqueWithoutPairInput | InvestmentGroupUpsertWithWhereUniqueWithoutPairInput[]
    createMany?: InvestmentGroupCreateManyPairInputEnvelope
    set?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    disconnect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    delete?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    update?: InvestmentGroupUpdateWithWhereUniqueWithoutPairInput | InvestmentGroupUpdateWithWhereUniqueWithoutPairInput[]
    updateMany?: InvestmentGroupUpdateManyWithWhereWithoutPairInput | InvestmentGroupUpdateManyWithWhereWithoutPairInput[]
    deleteMany?: InvestmentGroupScalarWhereInput | InvestmentGroupScalarWhereInput[]
  }

  export type TeacherAvailabilityUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherAvailabilityCreateWithoutTeacherInput, TeacherAvailabilityUncheckedCreateWithoutTeacherInput> | TeacherAvailabilityCreateWithoutTeacherInput[] | TeacherAvailabilityUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAvailabilityCreateOrConnectWithoutTeacherInput | TeacherAvailabilityCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherAvailabilityUpsertWithWhereUniqueWithoutTeacherInput | TeacherAvailabilityUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherAvailabilityCreateManyTeacherInputEnvelope
    set?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    disconnect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    delete?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    connect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    update?: TeacherAvailabilityUpdateWithWhereUniqueWithoutTeacherInput | TeacherAvailabilityUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherAvailabilityUpdateManyWithWhereWithoutTeacherInput | TeacherAvailabilityUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherAvailabilityScalarWhereInput | TeacherAvailabilityScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput> | LessonCreateWithoutTeacherInput[] | LessonUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutTeacherInput | LessonCreateOrConnectWithoutTeacherInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutTeacherInput | LessonUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: LessonCreateManyTeacherInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutTeacherInput | LessonUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutTeacherInput | LessonUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonAttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<LessonAttendanceCreateWithoutStudentInput, LessonAttendanceUncheckedCreateWithoutStudentInput> | LessonAttendanceCreateWithoutStudentInput[] | LessonAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: LessonAttendanceCreateOrConnectWithoutStudentInput | LessonAttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: LessonAttendanceUpsertWithWhereUniqueWithoutStudentInput | LessonAttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: LessonAttendanceCreateManyStudentInputEnvelope
    set?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    disconnect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    delete?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    connect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    update?: LessonAttendanceUpdateWithWhereUniqueWithoutStudentInput | LessonAttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: LessonAttendanceUpdateManyWithWhereWithoutStudentInput | LessonAttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: LessonAttendanceScalarWhereInput | LessonAttendanceScalarWhereInput[]
  }

  export type AthleteCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<AthleteCreateWithoutInvestmentsInput, AthleteUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutInvestmentsInput
    connect?: AthleteWhereUniqueInput
  }

  export type InvestmentTypeCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<InvestmentTypeCreateWithoutInvestmentsInput, InvestmentTypeUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: InvestmentTypeCreateOrConnectWithoutInvestmentsInput
    connect?: InvestmentTypeWhereUniqueInput
  }

  export type InvestmentGroupCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<InvestmentGroupCreateWithoutInvestmentsInput, InvestmentGroupUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutInvestmentsInput
    connect?: InvestmentGroupWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AthleteUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<AthleteCreateWithoutInvestmentsInput, AthleteUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutInvestmentsInput
    upsert?: AthleteUpsertWithoutInvestmentsInput
    connect?: AthleteWhereUniqueInput
    update?: XOR<XOR<AthleteUpdateToOneWithWhereWithoutInvestmentsInput, AthleteUpdateWithoutInvestmentsInput>, AthleteUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestmentTypeUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<InvestmentTypeCreateWithoutInvestmentsInput, InvestmentTypeUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: InvestmentTypeCreateOrConnectWithoutInvestmentsInput
    upsert?: InvestmentTypeUpsertWithoutInvestmentsInput
    connect?: InvestmentTypeWhereUniqueInput
    update?: XOR<XOR<InvestmentTypeUpdateToOneWithWhereWithoutInvestmentsInput, InvestmentTypeUpdateWithoutInvestmentsInput>, InvestmentTypeUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestmentGroupUpdateOneWithoutInvestmentsNestedInput = {
    create?: XOR<InvestmentGroupCreateWithoutInvestmentsInput, InvestmentGroupUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutInvestmentsInput
    upsert?: InvestmentGroupUpsertWithoutInvestmentsInput
    disconnect?: InvestmentGroupWhereInput | boolean
    delete?: InvestmentGroupWhereInput | boolean
    connect?: InvestmentGroupWhereUniqueInput
    update?: XOR<XOR<InvestmentGroupUpdateToOneWithWhereWithoutInvestmentsInput, InvestmentGroupUpdateWithoutInvestmentsInput>, InvestmentGroupUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestmentTypeCreatecan_seeInput = {
    set: $Enums.UserRole[]
  }

  export type InvestmentCreateNestedManyWithoutInvestment_typeInput = {
    create?: XOR<InvestmentCreateWithoutInvestment_typeInput, InvestmentUncheckedCreateWithoutInvestment_typeInput> | InvestmentCreateWithoutInvestment_typeInput[] | InvestmentUncheckedCreateWithoutInvestment_typeInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestment_typeInput | InvestmentCreateOrConnectWithoutInvestment_typeInput[]
    createMany?: InvestmentCreateManyInvestment_typeInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutInvestment_typeInput = {
    create?: XOR<InvestmentCreateWithoutInvestment_typeInput, InvestmentUncheckedCreateWithoutInvestment_typeInput> | InvestmentCreateWithoutInvestment_typeInput[] | InvestmentUncheckedCreateWithoutInvestment_typeInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestment_typeInput | InvestmentCreateOrConnectWithoutInvestment_typeInput[]
    createMany?: InvestmentCreateManyInvestment_typeInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentTypeUpdatecan_seeInput = {
    set?: $Enums.UserRole[]
    push?: $Enums.UserRole | $Enums.UserRole[]
  }

  export type InvestmentUpdateManyWithoutInvestment_typeNestedInput = {
    create?: XOR<InvestmentCreateWithoutInvestment_typeInput, InvestmentUncheckedCreateWithoutInvestment_typeInput> | InvestmentCreateWithoutInvestment_typeInput[] | InvestmentUncheckedCreateWithoutInvestment_typeInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestment_typeInput | InvestmentCreateOrConnectWithoutInvestment_typeInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInvestment_typeInput | InvestmentUpsertWithWhereUniqueWithoutInvestment_typeInput[]
    createMany?: InvestmentCreateManyInvestment_typeInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInvestment_typeInput | InvestmentUpdateWithWhereUniqueWithoutInvestment_typeInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInvestment_typeInput | InvestmentUpdateManyWithWhereWithoutInvestment_typeInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutInvestment_typeNestedInput = {
    create?: XOR<InvestmentCreateWithoutInvestment_typeInput, InvestmentUncheckedCreateWithoutInvestment_typeInput> | InvestmentCreateWithoutInvestment_typeInput[] | InvestmentUncheckedCreateWithoutInvestment_typeInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestment_typeInput | InvestmentCreateOrConnectWithoutInvestment_typeInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInvestment_typeInput | InvestmentUpsertWithWhereUniqueWithoutInvestment_typeInput[]
    createMany?: InvestmentCreateManyInvestment_typeInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInvestment_typeInput | InvestmentUpdateWithWhereUniqueWithoutInvestment_typeInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInvestment_typeInput | InvestmentUpdateManyWithWhereWithoutInvestment_typeInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentCreateNestedManyWithoutInvestment_groupInput = {
    create?: XOR<InvestmentCreateWithoutInvestment_groupInput, InvestmentUncheckedCreateWithoutInvestment_groupInput> | InvestmentCreateWithoutInvestment_groupInput[] | InvestmentUncheckedCreateWithoutInvestment_groupInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestment_groupInput | InvestmentCreateOrConnectWithoutInvestment_groupInput[]
    createMany?: InvestmentCreateManyInvestment_groupInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type AthleteCreateNestedOneWithoutInvestment_group_athleteInput = {
    create?: XOR<AthleteCreateWithoutInvestment_group_athleteInput, AthleteUncheckedCreateWithoutInvestment_group_athleteInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutInvestment_group_athleteInput
    connect?: AthleteWhereUniqueInput
  }

  export type AthleteCreateNestedOneWithoutInvestment_group_pairInput = {
    create?: XOR<AthleteCreateWithoutInvestment_group_pairInput, AthleteUncheckedCreateWithoutInvestment_group_pairInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutInvestment_group_pairInput
    connect?: AthleteWhereUniqueInput
  }

  export type TournamentCreateNestedOneWithoutInvestment_groupInput = {
    create?: XOR<TournamentCreateWithoutInvestment_groupInput, TournamentUncheckedCreateWithoutInvestment_groupInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutInvestment_groupInput
    connect?: TournamentWhereUniqueInput
  }

  export type InvestmentUncheckedCreateNestedManyWithoutInvestment_groupInput = {
    create?: XOR<InvestmentCreateWithoutInvestment_groupInput, InvestmentUncheckedCreateWithoutInvestment_groupInput> | InvestmentCreateWithoutInvestment_groupInput[] | InvestmentUncheckedCreateWithoutInvestment_groupInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestment_groupInput | InvestmentCreateOrConnectWithoutInvestment_groupInput[]
    createMany?: InvestmentCreateManyInvestment_groupInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvestmentUpdateManyWithoutInvestment_groupNestedInput = {
    create?: XOR<InvestmentCreateWithoutInvestment_groupInput, InvestmentUncheckedCreateWithoutInvestment_groupInput> | InvestmentCreateWithoutInvestment_groupInput[] | InvestmentUncheckedCreateWithoutInvestment_groupInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestment_groupInput | InvestmentCreateOrConnectWithoutInvestment_groupInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInvestment_groupInput | InvestmentUpsertWithWhereUniqueWithoutInvestment_groupInput[]
    createMany?: InvestmentCreateManyInvestment_groupInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInvestment_groupInput | InvestmentUpdateWithWhereUniqueWithoutInvestment_groupInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInvestment_groupInput | InvestmentUpdateManyWithWhereWithoutInvestment_groupInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type AthleteUpdateOneRequiredWithoutInvestment_group_athleteNestedInput = {
    create?: XOR<AthleteCreateWithoutInvestment_group_athleteInput, AthleteUncheckedCreateWithoutInvestment_group_athleteInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutInvestment_group_athleteInput
    upsert?: AthleteUpsertWithoutInvestment_group_athleteInput
    connect?: AthleteWhereUniqueInput
    update?: XOR<XOR<AthleteUpdateToOneWithWhereWithoutInvestment_group_athleteInput, AthleteUpdateWithoutInvestment_group_athleteInput>, AthleteUncheckedUpdateWithoutInvestment_group_athleteInput>
  }

  export type AthleteUpdateOneWithoutInvestment_group_pairNestedInput = {
    create?: XOR<AthleteCreateWithoutInvestment_group_pairInput, AthleteUncheckedCreateWithoutInvestment_group_pairInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutInvestment_group_pairInput
    upsert?: AthleteUpsertWithoutInvestment_group_pairInput
    disconnect?: AthleteWhereInput | boolean
    delete?: AthleteWhereInput | boolean
    connect?: AthleteWhereUniqueInput
    update?: XOR<XOR<AthleteUpdateToOneWithWhereWithoutInvestment_group_pairInput, AthleteUpdateWithoutInvestment_group_pairInput>, AthleteUncheckedUpdateWithoutInvestment_group_pairInput>
  }

  export type TournamentUpdateOneWithoutInvestment_groupNestedInput = {
    create?: XOR<TournamentCreateWithoutInvestment_groupInput, TournamentUncheckedCreateWithoutInvestment_groupInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutInvestment_groupInput
    upsert?: TournamentUpsertWithoutInvestment_groupInput
    disconnect?: TournamentWhereInput | boolean
    delete?: TournamentWhereInput | boolean
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutInvestment_groupInput, TournamentUpdateWithoutInvestment_groupInput>, TournamentUncheckedUpdateWithoutInvestment_groupInput>
  }

  export type InvestmentUncheckedUpdateManyWithoutInvestment_groupNestedInput = {
    create?: XOR<InvestmentCreateWithoutInvestment_groupInput, InvestmentUncheckedCreateWithoutInvestment_groupInput> | InvestmentCreateWithoutInvestment_groupInput[] | InvestmentUncheckedCreateWithoutInvestment_groupInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestment_groupInput | InvestmentCreateOrConnectWithoutInvestment_groupInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInvestment_groupInput | InvestmentUpsertWithWhereUniqueWithoutInvestment_groupInput[]
    createMany?: InvestmentCreateManyInvestment_groupInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInvestment_groupInput | InvestmentUpdateWithWhereUniqueWithoutInvestment_groupInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInvestment_groupInput | InvestmentUpdateManyWithWhereWithoutInvestment_groupInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutArenaInput = {
    create?: XOR<AddressCreateWithoutArenaInput, AddressUncheckedCreateWithoutArenaInput>
    connectOrCreate?: AddressCreateOrConnectWithoutArenaInput
    connect?: AddressWhereUniqueInput
  }

  export type TournamentCreateNestedManyWithoutArenaInput = {
    create?: XOR<TournamentCreateWithoutArenaInput, TournamentUncheckedCreateWithoutArenaInput> | TournamentCreateWithoutArenaInput[] | TournamentUncheckedCreateWithoutArenaInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutArenaInput | TournamentCreateOrConnectWithoutArenaInput[]
    createMany?: TournamentCreateManyArenaInputEnvelope
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type TournamentUncheckedCreateNestedManyWithoutArenaInput = {
    create?: XOR<TournamentCreateWithoutArenaInput, TournamentUncheckedCreateWithoutArenaInput> | TournamentCreateWithoutArenaInput[] | TournamentUncheckedCreateWithoutArenaInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutArenaInput | TournamentCreateOrConnectWithoutArenaInput[]
    createMany?: TournamentCreateManyArenaInputEnvelope
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type AddressUpdateOneRequiredWithoutArenaNestedInput = {
    create?: XOR<AddressCreateWithoutArenaInput, AddressUncheckedCreateWithoutArenaInput>
    connectOrCreate?: AddressCreateOrConnectWithoutArenaInput
    upsert?: AddressUpsertWithoutArenaInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutArenaInput, AddressUpdateWithoutArenaInput>, AddressUncheckedUpdateWithoutArenaInput>
  }

  export type TournamentUpdateManyWithoutArenaNestedInput = {
    create?: XOR<TournamentCreateWithoutArenaInput, TournamentUncheckedCreateWithoutArenaInput> | TournamentCreateWithoutArenaInput[] | TournamentUncheckedCreateWithoutArenaInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutArenaInput | TournamentCreateOrConnectWithoutArenaInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutArenaInput | TournamentUpsertWithWhereUniqueWithoutArenaInput[]
    createMany?: TournamentCreateManyArenaInputEnvelope
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutArenaInput | TournamentUpdateWithWhereUniqueWithoutArenaInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutArenaInput | TournamentUpdateManyWithWhereWithoutArenaInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type TournamentUncheckedUpdateManyWithoutArenaNestedInput = {
    create?: XOR<TournamentCreateWithoutArenaInput, TournamentUncheckedCreateWithoutArenaInput> | TournamentCreateWithoutArenaInput[] | TournamentUncheckedCreateWithoutArenaInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutArenaInput | TournamentCreateOrConnectWithoutArenaInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutArenaInput | TournamentUpsertWithWhereUniqueWithoutArenaInput[]
    createMany?: TournamentCreateManyArenaInputEnvelope
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutArenaInput | TournamentUpdateWithWhereUniqueWithoutArenaInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutArenaInput | TournamentUpdateManyWithWhereWithoutArenaInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type ArenaCreateNestedOneWithoutTournamentsInput = {
    create?: XOR<ArenaCreateWithoutTournamentsInput, ArenaUncheckedCreateWithoutTournamentsInput>
    connectOrCreate?: ArenaCreateOrConnectWithoutTournamentsInput
    connect?: ArenaWhereUniqueInput
  }

  export type InvestmentGroupCreateNestedManyWithoutTournamentInput = {
    create?: XOR<InvestmentGroupCreateWithoutTournamentInput, InvestmentGroupUncheckedCreateWithoutTournamentInput> | InvestmentGroupCreateWithoutTournamentInput[] | InvestmentGroupUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutTournamentInput | InvestmentGroupCreateOrConnectWithoutTournamentInput[]
    createMany?: InvestmentGroupCreateManyTournamentInputEnvelope
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
  }

  export type InvestmentGroupUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<InvestmentGroupCreateWithoutTournamentInput, InvestmentGroupUncheckedCreateWithoutTournamentInput> | InvestmentGroupCreateWithoutTournamentInput[] | InvestmentGroupUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutTournamentInput | InvestmentGroupCreateOrConnectWithoutTournamentInput[]
    createMany?: InvestmentGroupCreateManyTournamentInputEnvelope
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
  }

  export type ArenaUpdateOneRequiredWithoutTournamentsNestedInput = {
    create?: XOR<ArenaCreateWithoutTournamentsInput, ArenaUncheckedCreateWithoutTournamentsInput>
    connectOrCreate?: ArenaCreateOrConnectWithoutTournamentsInput
    upsert?: ArenaUpsertWithoutTournamentsInput
    connect?: ArenaWhereUniqueInput
    update?: XOR<XOR<ArenaUpdateToOneWithWhereWithoutTournamentsInput, ArenaUpdateWithoutTournamentsInput>, ArenaUncheckedUpdateWithoutTournamentsInput>
  }

  export type InvestmentGroupUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<InvestmentGroupCreateWithoutTournamentInput, InvestmentGroupUncheckedCreateWithoutTournamentInput> | InvestmentGroupCreateWithoutTournamentInput[] | InvestmentGroupUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutTournamentInput | InvestmentGroupCreateOrConnectWithoutTournamentInput[]
    upsert?: InvestmentGroupUpsertWithWhereUniqueWithoutTournamentInput | InvestmentGroupUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: InvestmentGroupCreateManyTournamentInputEnvelope
    set?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    disconnect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    delete?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    update?: InvestmentGroupUpdateWithWhereUniqueWithoutTournamentInput | InvestmentGroupUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: InvestmentGroupUpdateManyWithWhereWithoutTournamentInput | InvestmentGroupUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: InvestmentGroupScalarWhereInput | InvestmentGroupScalarWhereInput[]
  }

  export type InvestmentGroupUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<InvestmentGroupCreateWithoutTournamentInput, InvestmentGroupUncheckedCreateWithoutTournamentInput> | InvestmentGroupCreateWithoutTournamentInput[] | InvestmentGroupUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: InvestmentGroupCreateOrConnectWithoutTournamentInput | InvestmentGroupCreateOrConnectWithoutTournamentInput[]
    upsert?: InvestmentGroupUpsertWithWhereUniqueWithoutTournamentInput | InvestmentGroupUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: InvestmentGroupCreateManyTournamentInputEnvelope
    set?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    disconnect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    delete?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    connect?: InvestmentGroupWhereUniqueInput | InvestmentGroupWhereUniqueInput[]
    update?: InvestmentGroupUpdateWithWhereUniqueWithoutTournamentInput | InvestmentGroupUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: InvestmentGroupUpdateManyWithWhereWithoutTournamentInput | InvestmentGroupUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: InvestmentGroupScalarWhereInput | InvestmentGroupScalarWhereInput[]
  }

  export type LessonCreateNestedManyWithoutCourtsInput = {
    create?: XOR<LessonCreateWithoutCourtsInput, LessonUncheckedCreateWithoutCourtsInput> | LessonCreateWithoutCourtsInput[] | LessonUncheckedCreateWithoutCourtsInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourtsInput | LessonCreateOrConnectWithoutCourtsInput[]
    createMany?: LessonCreateManyCourtsInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutCourtsInput = {
    create?: XOR<LessonCreateWithoutCourtsInput, LessonUncheckedCreateWithoutCourtsInput> | LessonCreateWithoutCourtsInput[] | LessonUncheckedCreateWithoutCourtsInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourtsInput | LessonCreateOrConnectWithoutCourtsInput[]
    createMany?: LessonCreateManyCourtsInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LessonUpdateManyWithoutCourtsNestedInput = {
    create?: XOR<LessonCreateWithoutCourtsInput, LessonUncheckedCreateWithoutCourtsInput> | LessonCreateWithoutCourtsInput[] | LessonUncheckedCreateWithoutCourtsInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourtsInput | LessonCreateOrConnectWithoutCourtsInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourtsInput | LessonUpsertWithWhereUniqueWithoutCourtsInput[]
    createMany?: LessonCreateManyCourtsInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourtsInput | LessonUpdateWithWhereUniqueWithoutCourtsInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourtsInput | LessonUpdateManyWithWhereWithoutCourtsInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutCourtsNestedInput = {
    create?: XOR<LessonCreateWithoutCourtsInput, LessonUncheckedCreateWithoutCourtsInput> | LessonCreateWithoutCourtsInput[] | LessonUncheckedCreateWithoutCourtsInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourtsInput | LessonCreateOrConnectWithoutCourtsInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourtsInput | LessonUpsertWithWhereUniqueWithoutCourtsInput[]
    createMany?: LessonCreateManyCourtsInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourtsInput | LessonUpdateWithWhereUniqueWithoutCourtsInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourtsInput | LessonUpdateManyWithWhereWithoutCourtsInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type ArenaCreateNestedOneWithoutAddressInput = {
    create?: XOR<ArenaCreateWithoutAddressInput, ArenaUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ArenaCreateOrConnectWithoutAddressInput
    connect?: ArenaWhereUniqueInput
  }

  export type AthleteCreateNestedOneWithoutAddressInput = {
    create?: XOR<AthleteCreateWithoutAddressInput, AthleteUncheckedCreateWithoutAddressInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutAddressInput
    connect?: AthleteWhereUniqueInput
  }

  export type ArenaUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<ArenaCreateWithoutAddressInput, ArenaUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ArenaCreateOrConnectWithoutAddressInput
    connect?: ArenaWhereUniqueInput
  }

  export type AthleteUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<AthleteCreateWithoutAddressInput, AthleteUncheckedCreateWithoutAddressInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutAddressInput
    connect?: AthleteWhereUniqueInput
  }

  export type ArenaUpdateOneWithoutAddressNestedInput = {
    create?: XOR<ArenaCreateWithoutAddressInput, ArenaUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ArenaCreateOrConnectWithoutAddressInput
    upsert?: ArenaUpsertWithoutAddressInput
    disconnect?: ArenaWhereInput | boolean
    delete?: ArenaWhereInput | boolean
    connect?: ArenaWhereUniqueInput
    update?: XOR<XOR<ArenaUpdateToOneWithWhereWithoutAddressInput, ArenaUpdateWithoutAddressInput>, ArenaUncheckedUpdateWithoutAddressInput>
  }

  export type AthleteUpdateOneWithoutAddressNestedInput = {
    create?: XOR<AthleteCreateWithoutAddressInput, AthleteUncheckedCreateWithoutAddressInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutAddressInput
    upsert?: AthleteUpsertWithoutAddressInput
    disconnect?: AthleteWhereInput | boolean
    delete?: AthleteWhereInput | boolean
    connect?: AthleteWhereUniqueInput
    update?: XOR<XOR<AthleteUpdateToOneWithWhereWithoutAddressInput, AthleteUpdateWithoutAddressInput>, AthleteUncheckedUpdateWithoutAddressInput>
  }

  export type ArenaUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<ArenaCreateWithoutAddressInput, ArenaUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ArenaCreateOrConnectWithoutAddressInput
    upsert?: ArenaUpsertWithoutAddressInput
    disconnect?: ArenaWhereInput | boolean
    delete?: ArenaWhereInput | boolean
    connect?: ArenaWhereUniqueInput
    update?: XOR<XOR<ArenaUpdateToOneWithWhereWithoutAddressInput, ArenaUpdateWithoutAddressInput>, ArenaUncheckedUpdateWithoutAddressInput>
  }

  export type AthleteUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<AthleteCreateWithoutAddressInput, AthleteUncheckedCreateWithoutAddressInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutAddressInput
    upsert?: AthleteUpsertWithoutAddressInput
    disconnect?: AthleteWhereInput | boolean
    delete?: AthleteWhereInput | boolean
    connect?: AthleteWhereUniqueInput
    update?: XOR<XOR<AthleteUpdateToOneWithWhereWithoutAddressInput, AthleteUpdateWithoutAddressInput>, AthleteUncheckedUpdateWithoutAddressInput>
  }

  export type AthleteCreateNestedOneWithoutTeacher_availabilityInput = {
    create?: XOR<AthleteCreateWithoutTeacher_availabilityInput, AthleteUncheckedCreateWithoutTeacher_availabilityInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutTeacher_availabilityInput
    connect?: AthleteWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutTeacher_availabilityInput = {
    create?: XOR<LessonCreateWithoutTeacher_availabilityInput, LessonUncheckedCreateWithoutTeacher_availabilityInput>
    connectOrCreate?: LessonCreateOrConnectWithoutTeacher_availabilityInput
    connect?: LessonWhereUniqueInput
  }

  export type AthleteUpdateOneRequiredWithoutTeacher_availabilityNestedInput = {
    create?: XOR<AthleteCreateWithoutTeacher_availabilityInput, AthleteUncheckedCreateWithoutTeacher_availabilityInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutTeacher_availabilityInput
    upsert?: AthleteUpsertWithoutTeacher_availabilityInput
    connect?: AthleteWhereUniqueInput
    update?: XOR<XOR<AthleteUpdateToOneWithWhereWithoutTeacher_availabilityInput, AthleteUpdateWithoutTeacher_availabilityInput>, AthleteUncheckedUpdateWithoutTeacher_availabilityInput>
  }

  export type LessonUpdateOneWithoutTeacher_availabilityNestedInput = {
    create?: XOR<LessonCreateWithoutTeacher_availabilityInput, LessonUncheckedCreateWithoutTeacher_availabilityInput>
    connectOrCreate?: LessonCreateOrConnectWithoutTeacher_availabilityInput
    upsert?: LessonUpsertWithoutTeacher_availabilityInput
    disconnect?: LessonWhereInput | boolean
    delete?: LessonWhereInput | boolean
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutTeacher_availabilityInput, LessonUpdateWithoutTeacher_availabilityInput>, LessonUncheckedUpdateWithoutTeacher_availabilityInput>
  }

  export type AthleteCreateNestedOneWithoutLessonInput = {
    create?: XOR<AthleteCreateWithoutLessonInput, AthleteUncheckedCreateWithoutLessonInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutLessonInput
    connect?: AthleteWhereUniqueInput
  }

  export type CourtsCreateNestedOneWithoutLessonInput = {
    create?: XOR<CourtsCreateWithoutLessonInput, CourtsUncheckedCreateWithoutLessonInput>
    connectOrCreate?: CourtsCreateOrConnectWithoutLessonInput
    connect?: CourtsWhereUniqueInput
  }

  export type TeacherAvailabilityCreateNestedManyWithoutLessonInput = {
    create?: XOR<TeacherAvailabilityCreateWithoutLessonInput, TeacherAvailabilityUncheckedCreateWithoutLessonInput> | TeacherAvailabilityCreateWithoutLessonInput[] | TeacherAvailabilityUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: TeacherAvailabilityCreateOrConnectWithoutLessonInput | TeacherAvailabilityCreateOrConnectWithoutLessonInput[]
    createMany?: TeacherAvailabilityCreateManyLessonInputEnvelope
    connect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
  }

  export type LessonAttendanceCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonAttendanceCreateWithoutLessonInput, LessonAttendanceUncheckedCreateWithoutLessonInput> | LessonAttendanceCreateWithoutLessonInput[] | LessonAttendanceUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonAttendanceCreateOrConnectWithoutLessonInput | LessonAttendanceCreateOrConnectWithoutLessonInput[]
    createMany?: LessonAttendanceCreateManyLessonInputEnvelope
    connect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
  }

  export type TeacherAvailabilityUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<TeacherAvailabilityCreateWithoutLessonInput, TeacherAvailabilityUncheckedCreateWithoutLessonInput> | TeacherAvailabilityCreateWithoutLessonInput[] | TeacherAvailabilityUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: TeacherAvailabilityCreateOrConnectWithoutLessonInput | TeacherAvailabilityCreateOrConnectWithoutLessonInput[]
    createMany?: TeacherAvailabilityCreateManyLessonInputEnvelope
    connect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
  }

  export type LessonAttendanceUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonAttendanceCreateWithoutLessonInput, LessonAttendanceUncheckedCreateWithoutLessonInput> | LessonAttendanceCreateWithoutLessonInput[] | LessonAttendanceUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonAttendanceCreateOrConnectWithoutLessonInput | LessonAttendanceCreateOrConnectWithoutLessonInput[]
    createMany?: LessonAttendanceCreateManyLessonInputEnvelope
    connect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
  }

  export type AthleteUpdateOneRequiredWithoutLessonNestedInput = {
    create?: XOR<AthleteCreateWithoutLessonInput, AthleteUncheckedCreateWithoutLessonInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutLessonInput
    upsert?: AthleteUpsertWithoutLessonInput
    connect?: AthleteWhereUniqueInput
    update?: XOR<XOR<AthleteUpdateToOneWithWhereWithoutLessonInput, AthleteUpdateWithoutLessonInput>, AthleteUncheckedUpdateWithoutLessonInput>
  }

  export type CourtsUpdateOneRequiredWithoutLessonNestedInput = {
    create?: XOR<CourtsCreateWithoutLessonInput, CourtsUncheckedCreateWithoutLessonInput>
    connectOrCreate?: CourtsCreateOrConnectWithoutLessonInput
    upsert?: CourtsUpsertWithoutLessonInput
    connect?: CourtsWhereUniqueInput
    update?: XOR<XOR<CourtsUpdateToOneWithWhereWithoutLessonInput, CourtsUpdateWithoutLessonInput>, CourtsUncheckedUpdateWithoutLessonInput>
  }

  export type TeacherAvailabilityUpdateManyWithoutLessonNestedInput = {
    create?: XOR<TeacherAvailabilityCreateWithoutLessonInput, TeacherAvailabilityUncheckedCreateWithoutLessonInput> | TeacherAvailabilityCreateWithoutLessonInput[] | TeacherAvailabilityUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: TeacherAvailabilityCreateOrConnectWithoutLessonInput | TeacherAvailabilityCreateOrConnectWithoutLessonInput[]
    upsert?: TeacherAvailabilityUpsertWithWhereUniqueWithoutLessonInput | TeacherAvailabilityUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: TeacherAvailabilityCreateManyLessonInputEnvelope
    set?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    disconnect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    delete?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    connect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    update?: TeacherAvailabilityUpdateWithWhereUniqueWithoutLessonInput | TeacherAvailabilityUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: TeacherAvailabilityUpdateManyWithWhereWithoutLessonInput | TeacherAvailabilityUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: TeacherAvailabilityScalarWhereInput | TeacherAvailabilityScalarWhereInput[]
  }

  export type LessonAttendanceUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonAttendanceCreateWithoutLessonInput, LessonAttendanceUncheckedCreateWithoutLessonInput> | LessonAttendanceCreateWithoutLessonInput[] | LessonAttendanceUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonAttendanceCreateOrConnectWithoutLessonInput | LessonAttendanceCreateOrConnectWithoutLessonInput[]
    upsert?: LessonAttendanceUpsertWithWhereUniqueWithoutLessonInput | LessonAttendanceUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonAttendanceCreateManyLessonInputEnvelope
    set?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    disconnect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    delete?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    connect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    update?: LessonAttendanceUpdateWithWhereUniqueWithoutLessonInput | LessonAttendanceUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonAttendanceUpdateManyWithWhereWithoutLessonInput | LessonAttendanceUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonAttendanceScalarWhereInput | LessonAttendanceScalarWhereInput[]
  }

  export type TeacherAvailabilityUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<TeacherAvailabilityCreateWithoutLessonInput, TeacherAvailabilityUncheckedCreateWithoutLessonInput> | TeacherAvailabilityCreateWithoutLessonInput[] | TeacherAvailabilityUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: TeacherAvailabilityCreateOrConnectWithoutLessonInput | TeacherAvailabilityCreateOrConnectWithoutLessonInput[]
    upsert?: TeacherAvailabilityUpsertWithWhereUniqueWithoutLessonInput | TeacherAvailabilityUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: TeacherAvailabilityCreateManyLessonInputEnvelope
    set?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    disconnect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    delete?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    connect?: TeacherAvailabilityWhereUniqueInput | TeacherAvailabilityWhereUniqueInput[]
    update?: TeacherAvailabilityUpdateWithWhereUniqueWithoutLessonInput | TeacherAvailabilityUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: TeacherAvailabilityUpdateManyWithWhereWithoutLessonInput | TeacherAvailabilityUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: TeacherAvailabilityScalarWhereInput | TeacherAvailabilityScalarWhereInput[]
  }

  export type LessonAttendanceUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonAttendanceCreateWithoutLessonInput, LessonAttendanceUncheckedCreateWithoutLessonInput> | LessonAttendanceCreateWithoutLessonInput[] | LessonAttendanceUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonAttendanceCreateOrConnectWithoutLessonInput | LessonAttendanceCreateOrConnectWithoutLessonInput[]
    upsert?: LessonAttendanceUpsertWithWhereUniqueWithoutLessonInput | LessonAttendanceUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonAttendanceCreateManyLessonInputEnvelope
    set?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    disconnect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    delete?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    connect?: LessonAttendanceWhereUniqueInput | LessonAttendanceWhereUniqueInput[]
    update?: LessonAttendanceUpdateWithWhereUniqueWithoutLessonInput | LessonAttendanceUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonAttendanceUpdateManyWithWhereWithoutLessonInput | LessonAttendanceUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonAttendanceScalarWhereInput | LessonAttendanceScalarWhereInput[]
  }

  export type LessonCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<LessonCreateWithoutAttendancesInput, LessonUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: LessonCreateOrConnectWithoutAttendancesInput
    connect?: LessonWhereUniqueInput
  }

  export type AthleteCreateNestedOneWithoutLesson_attendanceInput = {
    create?: XOR<AthleteCreateWithoutLesson_attendanceInput, AthleteUncheckedCreateWithoutLesson_attendanceInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutLesson_attendanceInput
    connect?: AthleteWhereUniqueInput
  }

  export type LessonUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<LessonCreateWithoutAttendancesInput, LessonUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: LessonCreateOrConnectWithoutAttendancesInput
    upsert?: LessonUpsertWithoutAttendancesInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutAttendancesInput, LessonUpdateWithoutAttendancesInput>, LessonUncheckedUpdateWithoutAttendancesInput>
  }

  export type AthleteUpdateOneRequiredWithoutLesson_attendanceNestedInput = {
    create?: XOR<AthleteCreateWithoutLesson_attendanceInput, AthleteUncheckedCreateWithoutLesson_attendanceInput>
    connectOrCreate?: AthleteCreateOrConnectWithoutLesson_attendanceInput
    upsert?: AthleteUpsertWithoutLesson_attendanceInput
    connect?: AthleteWhereUniqueInput
    update?: XOR<XOR<AthleteUpdateToOneWithWhereWithoutLesson_attendanceInput, AthleteUpdateWithoutLesson_attendanceInput>, AthleteUncheckedUpdateWithoutLesson_attendanceInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AthleteCreateWithoutUserInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressCreateNestedOneWithoutAthleteInput
    investments?: InvestmentCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutTeacherInput
    lesson?: LessonCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceCreateNestedManyWithoutStudentInput
  }

  export type AthleteUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    address_id?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupUncheckedCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutTeacherInput
    lesson?: LessonUncheckedCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type AthleteCreateOrConnectWithoutUserInput = {
    where: AthleteWhereUniqueInput
    create: XOR<AthleteCreateWithoutUserInput, AthleteUncheckedCreateWithoutUserInput>
  }

  export type AthleteUpsertWithoutUserInput = {
    update: XOR<AthleteUpdateWithoutUserInput, AthleteUncheckedUpdateWithoutUserInput>
    create: XOR<AthleteCreateWithoutUserInput, AthleteUncheckedCreateWithoutUserInput>
    where?: AthleteWhereInput
  }

  export type AthleteUpdateToOneWithWhereWithoutUserInput = {
    where?: AthleteWhereInput
    data: XOR<AthleteUpdateWithoutUserInput, AthleteUncheckedUpdateWithoutUserInput>
  }

  export type AthleteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutAthleteNestedInput
    investments?: InvestmentUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type AthleteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUncheckedUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUncheckedUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateWithoutTeacherInput = {
    id?: string
    user: string
    passwd: string
    email: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutTeacherInput = {
    id?: string
    user: string
    passwd: string
    email: string
    role?: $Enums.UserRole
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
  }

  export type AddressCreateWithoutAthleteInput = {
    id?: string
    street?: string | null
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city_state: string
    zip_code?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    arena?: ArenaCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutAthleteInput = {
    id?: string
    street?: string | null
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city_state: string
    zip_code?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    arena?: ArenaUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutAthleteInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutAthleteInput, AddressUncheckedCreateWithoutAthleteInput>
  }

  export type InvestmentCreateWithoutAthleteInput = {
    id?: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    investment_type: InvestmentTypeCreateNestedOneWithoutInvestmentsInput
    investment_group?: InvestmentGroupCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateWithoutAthleteInput = {
    id?: string
    investment_type_id: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    investment_group_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentCreateOrConnectWithoutAthleteInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutAthleteInput, InvestmentUncheckedCreateWithoutAthleteInput>
  }

  export type InvestmentCreateManyAthleteInputEnvelope = {
    data: InvestmentCreateManyAthleteInput | InvestmentCreateManyAthleteInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentGroupCreateWithoutAthleteInput = {
    id?: string
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentCreateNestedManyWithoutInvestment_groupInput
    pair?: AthleteCreateNestedOneWithoutInvestment_group_pairInput
    tournament?: TournamentCreateNestedOneWithoutInvestment_groupInput
  }

  export type InvestmentGroupUncheckedCreateWithoutAthleteInput = {
    id?: string
    pair_id?: string | null
    tournament_id?: string | null
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestment_groupInput
  }

  export type InvestmentGroupCreateOrConnectWithoutAthleteInput = {
    where: InvestmentGroupWhereUniqueInput
    create: XOR<InvestmentGroupCreateWithoutAthleteInput, InvestmentGroupUncheckedCreateWithoutAthleteInput>
  }

  export type InvestmentGroupCreateManyAthleteInputEnvelope = {
    data: InvestmentGroupCreateManyAthleteInput | InvestmentGroupCreateManyAthleteInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentGroupCreateWithoutPairInput = {
    id?: string
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentCreateNestedManyWithoutInvestment_groupInput
    athlete: AthleteCreateNestedOneWithoutInvestment_group_athleteInput
    tournament?: TournamentCreateNestedOneWithoutInvestment_groupInput
  }

  export type InvestmentGroupUncheckedCreateWithoutPairInput = {
    id?: string
    athlete_id: string
    tournament_id?: string | null
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestment_groupInput
  }

  export type InvestmentGroupCreateOrConnectWithoutPairInput = {
    where: InvestmentGroupWhereUniqueInput
    create: XOR<InvestmentGroupCreateWithoutPairInput, InvestmentGroupUncheckedCreateWithoutPairInput>
  }

  export type InvestmentGroupCreateManyPairInputEnvelope = {
    data: InvestmentGroupCreateManyPairInput | InvestmentGroupCreateManyPairInput[]
    skipDuplicates?: boolean
  }

  export type TeacherAvailabilityCreateWithoutTeacherInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    lesson?: LessonCreateNestedOneWithoutTeacher_availabilityInput
  }

  export type TeacherAvailabilityUncheckedCreateWithoutTeacherInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    lesson_id?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type TeacherAvailabilityCreateOrConnectWithoutTeacherInput = {
    where: TeacherAvailabilityWhereUniqueInput
    create: XOR<TeacherAvailabilityCreateWithoutTeacherInput, TeacherAvailabilityUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherAvailabilityCreateManyTeacherInputEnvelope = {
    data: TeacherAvailabilityCreateManyTeacherInput | TeacherAvailabilityCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type LessonCreateWithoutTeacherInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    courts: CourtsCreateNestedOneWithoutLessonInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutLessonInput
    attendances?: LessonAttendanceCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutTeacherInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    courts_id: string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutLessonInput
    attendances?: LessonAttendanceUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutTeacherInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput>
  }

  export type LessonCreateManyTeacherInputEnvelope = {
    data: LessonCreateManyTeacherInput | LessonCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type LessonAttendanceCreateWithoutStudentInput = {
    id?: string
    did_attend?: boolean
    reason?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    lesson: LessonCreateNestedOneWithoutAttendancesInput
  }

  export type LessonAttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    lesson_id: string
    did_attend?: boolean
    reason?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type LessonAttendanceCreateOrConnectWithoutStudentInput = {
    where: LessonAttendanceWhereUniqueInput
    create: XOR<LessonAttendanceCreateWithoutStudentInput, LessonAttendanceUncheckedCreateWithoutStudentInput>
  }

  export type LessonAttendanceCreateManyStudentInputEnvelope = {
    data: LessonAttendanceCreateManyStudentInput | LessonAttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeacherInput = {
    update: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type UserUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpsertWithoutAthleteInput = {
    update: XOR<AddressUpdateWithoutAthleteInput, AddressUncheckedUpdateWithoutAthleteInput>
    create: XOR<AddressCreateWithoutAthleteInput, AddressUncheckedCreateWithoutAthleteInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutAthleteInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutAthleteInput, AddressUncheckedUpdateWithoutAthleteInput>
  }

  export type AddressUpdateWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city_state?: StringFieldUpdateOperationsInput | string
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arena?: ArenaUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city_state?: StringFieldUpdateOperationsInput | string
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arena?: ArenaUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type InvestmentUpsertWithWhereUniqueWithoutAthleteInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutAthleteInput, InvestmentUncheckedUpdateWithoutAthleteInput>
    create: XOR<InvestmentCreateWithoutAthleteInput, InvestmentUncheckedCreateWithoutAthleteInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutAthleteInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutAthleteInput, InvestmentUncheckedUpdateWithoutAthleteInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutAthleteInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutAthleteInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: StringFilter<"Investment"> | string
    investment_type_id?: StringFilter<"Investment"> | string
    athlete_id?: StringFilter<"Investment"> | string
    value?: FloatFilter<"Investment"> | number
    description?: StringFilter<"Investment"> | string
    date?: DateTimeFilter<"Investment"> | Date | string
    paid?: DateTimeNullableFilter<"Investment"> | Date | string | null
    proof?: StringNullableFilter<"Investment"> | string | null
    investment_group_id?: StringNullableFilter<"Investment"> | string | null
    created_at?: DateTimeFilter<"Investment"> | Date | string
    updated_at?: DateTimeFilter<"Investment"> | Date | string
  }

  export type InvestmentGroupUpsertWithWhereUniqueWithoutAthleteInput = {
    where: InvestmentGroupWhereUniqueInput
    update: XOR<InvestmentGroupUpdateWithoutAthleteInput, InvestmentGroupUncheckedUpdateWithoutAthleteInput>
    create: XOR<InvestmentGroupCreateWithoutAthleteInput, InvestmentGroupUncheckedCreateWithoutAthleteInput>
  }

  export type InvestmentGroupUpdateWithWhereUniqueWithoutAthleteInput = {
    where: InvestmentGroupWhereUniqueInput
    data: XOR<InvestmentGroupUpdateWithoutAthleteInput, InvestmentGroupUncheckedUpdateWithoutAthleteInput>
  }

  export type InvestmentGroupUpdateManyWithWhereWithoutAthleteInput = {
    where: InvestmentGroupScalarWhereInput
    data: XOR<InvestmentGroupUpdateManyMutationInput, InvestmentGroupUncheckedUpdateManyWithoutAthleteInput>
  }

  export type InvestmentGroupScalarWhereInput = {
    AND?: InvestmentGroupScalarWhereInput | InvestmentGroupScalarWhereInput[]
    OR?: InvestmentGroupScalarWhereInput[]
    NOT?: InvestmentGroupScalarWhereInput | InvestmentGroupScalarWhereInput[]
    id?: StringFilter<"InvestmentGroup"> | string
    athlete_id?: StringFilter<"InvestmentGroup"> | string
    pair_id?: StringNullableFilter<"InvestmentGroup"> | string | null
    tournament_id?: StringNullableFilter<"InvestmentGroup"> | string | null
    podium?: StringNullableFilter<"InvestmentGroup"> | string | null
    description?: StringNullableFilter<"InvestmentGroup"> | string | null
    pair_amount?: IntNullableFilter<"InvestmentGroup"> | number | null
    km?: FloatNullableFilter<"InvestmentGroup"> | number | null
    km_racional?: FloatNullableFilter<"InvestmentGroup"> | number | null
    created_at?: DateTimeFilter<"InvestmentGroup"> | Date | string
    updated_at?: DateTimeFilter<"InvestmentGroup"> | Date | string
  }

  export type InvestmentGroupUpsertWithWhereUniqueWithoutPairInput = {
    where: InvestmentGroupWhereUniqueInput
    update: XOR<InvestmentGroupUpdateWithoutPairInput, InvestmentGroupUncheckedUpdateWithoutPairInput>
    create: XOR<InvestmentGroupCreateWithoutPairInput, InvestmentGroupUncheckedCreateWithoutPairInput>
  }

  export type InvestmentGroupUpdateWithWhereUniqueWithoutPairInput = {
    where: InvestmentGroupWhereUniqueInput
    data: XOR<InvestmentGroupUpdateWithoutPairInput, InvestmentGroupUncheckedUpdateWithoutPairInput>
  }

  export type InvestmentGroupUpdateManyWithWhereWithoutPairInput = {
    where: InvestmentGroupScalarWhereInput
    data: XOR<InvestmentGroupUpdateManyMutationInput, InvestmentGroupUncheckedUpdateManyWithoutPairInput>
  }

  export type TeacherAvailabilityUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherAvailabilityWhereUniqueInput
    update: XOR<TeacherAvailabilityUpdateWithoutTeacherInput, TeacherAvailabilityUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherAvailabilityCreateWithoutTeacherInput, TeacherAvailabilityUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherAvailabilityUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherAvailabilityWhereUniqueInput
    data: XOR<TeacherAvailabilityUpdateWithoutTeacherInput, TeacherAvailabilityUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherAvailabilityUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherAvailabilityScalarWhereInput
    data: XOR<TeacherAvailabilityUpdateManyMutationInput, TeacherAvailabilityUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherAvailabilityScalarWhereInput = {
    AND?: TeacherAvailabilityScalarWhereInput | TeacherAvailabilityScalarWhereInput[]
    OR?: TeacherAvailabilityScalarWhereInput[]
    NOT?: TeacherAvailabilityScalarWhereInput | TeacherAvailabilityScalarWhereInput[]
    id?: StringFilter<"TeacherAvailability"> | string
    teacher_id?: StringFilter<"TeacherAvailability"> | string
    time_start?: DateTimeFilter<"TeacherAvailability"> | Date | string
    time_end?: DateTimeFilter<"TeacherAvailability"> | Date | string
    lesson_id?: StringNullableFilter<"TeacherAvailability"> | string | null
    updated_at?: DateTimeFilter<"TeacherAvailability"> | Date | string
    created_at?: DateTimeFilter<"TeacherAvailability"> | Date | string
  }

  export type LessonUpsertWithWhereUniqueWithoutTeacherInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutTeacherInput, LessonUncheckedUpdateWithoutTeacherInput>
    create: XOR<LessonCreateWithoutTeacherInput, LessonUncheckedCreateWithoutTeacherInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutTeacherInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutTeacherInput, LessonUncheckedUpdateWithoutTeacherInput>
  }

  export type LessonUpdateManyWithWhereWithoutTeacherInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutTeacherInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    teacher_id?: StringFilter<"Lesson"> | string
    time_start?: DateTimeFilter<"Lesson"> | Date | string
    time_end?: DateTimeFilter<"Lesson"> | Date | string
    courts_id?: StringFilter<"Lesson"> | string
    subject?: StringNullableFilter<"Lesson"> | string | null
    updated_at?: DateTimeFilter<"Lesson"> | Date | string
    created_at?: DateTimeFilter<"Lesson"> | Date | string
  }

  export type LessonAttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: LessonAttendanceWhereUniqueInput
    update: XOR<LessonAttendanceUpdateWithoutStudentInput, LessonAttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<LessonAttendanceCreateWithoutStudentInput, LessonAttendanceUncheckedCreateWithoutStudentInput>
  }

  export type LessonAttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: LessonAttendanceWhereUniqueInput
    data: XOR<LessonAttendanceUpdateWithoutStudentInput, LessonAttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type LessonAttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: LessonAttendanceScalarWhereInput
    data: XOR<LessonAttendanceUpdateManyMutationInput, LessonAttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type LessonAttendanceScalarWhereInput = {
    AND?: LessonAttendanceScalarWhereInput | LessonAttendanceScalarWhereInput[]
    OR?: LessonAttendanceScalarWhereInput[]
    NOT?: LessonAttendanceScalarWhereInput | LessonAttendanceScalarWhereInput[]
    id?: StringFilter<"LessonAttendance"> | string
    lesson_id?: StringFilter<"LessonAttendance"> | string
    student_id?: StringFilter<"LessonAttendance"> | string
    did_attend?: BoolFilter<"LessonAttendance"> | boolean
    reason?: StringNullableFilter<"LessonAttendance"> | string | null
    updated_at?: DateTimeFilter<"LessonAttendance"> | Date | string
    created_at?: DateTimeFilter<"LessonAttendance"> | Date | string
  }

  export type AthleteCreateWithoutInvestmentsInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutTeacherInput
    address?: AddressCreateNestedOneWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutTeacherInput
    lesson?: LessonCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceCreateNestedManyWithoutStudentInput
  }

  export type AthleteUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    address_id?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutTeacherInput
    investment_group_athlete?: InvestmentGroupUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupUncheckedCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutTeacherInput
    lesson?: LessonUncheckedCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type AthleteCreateOrConnectWithoutInvestmentsInput = {
    where: AthleteWhereUniqueInput
    create: XOR<AthleteCreateWithoutInvestmentsInput, AthleteUncheckedCreateWithoutInvestmentsInput>
  }

  export type InvestmentTypeCreateWithoutInvestmentsInput = {
    id?: string
    name: string
    description: string
    can_see?: InvestmentTypeCreatecan_seeInput | $Enums.UserRole[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentTypeUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    name: string
    description: string
    can_see?: InvestmentTypeCreatecan_seeInput | $Enums.UserRole[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentTypeCreateOrConnectWithoutInvestmentsInput = {
    where: InvestmentTypeWhereUniqueInput
    create: XOR<InvestmentTypeCreateWithoutInvestmentsInput, InvestmentTypeUncheckedCreateWithoutInvestmentsInput>
  }

  export type InvestmentGroupCreateWithoutInvestmentsInput = {
    id?: string
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    athlete: AthleteCreateNestedOneWithoutInvestment_group_athleteInput
    pair?: AthleteCreateNestedOneWithoutInvestment_group_pairInput
    tournament?: TournamentCreateNestedOneWithoutInvestment_groupInput
  }

  export type InvestmentGroupUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    athlete_id: string
    pair_id?: string | null
    tournament_id?: string | null
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentGroupCreateOrConnectWithoutInvestmentsInput = {
    where: InvestmentGroupWhereUniqueInput
    create: XOR<InvestmentGroupCreateWithoutInvestmentsInput, InvestmentGroupUncheckedCreateWithoutInvestmentsInput>
  }

  export type AthleteUpsertWithoutInvestmentsInput = {
    update: XOR<AthleteUpdateWithoutInvestmentsInput, AthleteUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<AthleteCreateWithoutInvestmentsInput, AthleteUncheckedCreateWithoutInvestmentsInput>
    where?: AthleteWhereInput
  }

  export type AthleteUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: AthleteWhereInput
    data: XOR<AthleteUpdateWithoutInvestmentsInput, AthleteUncheckedUpdateWithoutInvestmentsInput>
  }

  export type AthleteUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeacherNestedInput
    address?: AddressUpdateOneWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type AthleteUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutTeacherNestedInput
    investment_group_athlete?: InvestmentGroupUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUncheckedUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUncheckedUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type InvestmentTypeUpsertWithoutInvestmentsInput = {
    update: XOR<InvestmentTypeUpdateWithoutInvestmentsInput, InvestmentTypeUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<InvestmentTypeCreateWithoutInvestmentsInput, InvestmentTypeUncheckedCreateWithoutInvestmentsInput>
    where?: InvestmentTypeWhereInput
  }

  export type InvestmentTypeUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: InvestmentTypeWhereInput
    data: XOR<InvestmentTypeUpdateWithoutInvestmentsInput, InvestmentTypeUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestmentTypeUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    can_see?: InvestmentTypeUpdatecan_seeInput | $Enums.UserRole[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentTypeUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    can_see?: InvestmentTypeUpdatecan_seeInput | $Enums.UserRole[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentGroupUpsertWithoutInvestmentsInput = {
    update: XOR<InvestmentGroupUpdateWithoutInvestmentsInput, InvestmentGroupUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<InvestmentGroupCreateWithoutInvestmentsInput, InvestmentGroupUncheckedCreateWithoutInvestmentsInput>
    where?: InvestmentGroupWhereInput
  }

  export type InvestmentGroupUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: InvestmentGroupWhereInput
    data: XOR<InvestmentGroupUpdateWithoutInvestmentsInput, InvestmentGroupUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestmentGroupUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    athlete?: AthleteUpdateOneRequiredWithoutInvestment_group_athleteNestedInput
    pair?: AthleteUpdateOneWithoutInvestment_group_pairNestedInput
    tournament?: TournamentUpdateOneWithoutInvestment_groupNestedInput
  }

  export type InvestmentGroupUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    pair_id?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_id?: NullableStringFieldUpdateOperationsInput | string | null
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateWithoutInvestment_typeInput = {
    id?: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    athlete: AthleteCreateNestedOneWithoutInvestmentsInput
    investment_group?: InvestmentGroupCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateWithoutInvestment_typeInput = {
    id?: string
    athlete_id: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    investment_group_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentCreateOrConnectWithoutInvestment_typeInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutInvestment_typeInput, InvestmentUncheckedCreateWithoutInvestment_typeInput>
  }

  export type InvestmentCreateManyInvestment_typeInputEnvelope = {
    data: InvestmentCreateManyInvestment_typeInput | InvestmentCreateManyInvestment_typeInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentUpsertWithWhereUniqueWithoutInvestment_typeInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutInvestment_typeInput, InvestmentUncheckedUpdateWithoutInvestment_typeInput>
    create: XOR<InvestmentCreateWithoutInvestment_typeInput, InvestmentUncheckedCreateWithoutInvestment_typeInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutInvestment_typeInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutInvestment_typeInput, InvestmentUncheckedUpdateWithoutInvestment_typeInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutInvestment_typeInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutInvestment_typeInput>
  }

  export type InvestmentCreateWithoutInvestment_groupInput = {
    id?: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    athlete: AthleteCreateNestedOneWithoutInvestmentsInput
    investment_type: InvestmentTypeCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateWithoutInvestment_groupInput = {
    id?: string
    investment_type_id: string
    athlete_id: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentCreateOrConnectWithoutInvestment_groupInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutInvestment_groupInput, InvestmentUncheckedCreateWithoutInvestment_groupInput>
  }

  export type InvestmentCreateManyInvestment_groupInputEnvelope = {
    data: InvestmentCreateManyInvestment_groupInput | InvestmentCreateManyInvestment_groupInput[]
    skipDuplicates?: boolean
  }

  export type AthleteCreateWithoutInvestment_group_athleteInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutTeacherInput
    address?: AddressCreateNestedOneWithoutAthleteInput
    investments?: InvestmentCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutTeacherInput
    lesson?: LessonCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceCreateNestedManyWithoutStudentInput
  }

  export type AthleteUncheckedCreateWithoutInvestment_group_athleteInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    address_id?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutTeacherInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupUncheckedCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutTeacherInput
    lesson?: LessonUncheckedCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type AthleteCreateOrConnectWithoutInvestment_group_athleteInput = {
    where: AthleteWhereUniqueInput
    create: XOR<AthleteCreateWithoutInvestment_group_athleteInput, AthleteUncheckedCreateWithoutInvestment_group_athleteInput>
  }

  export type AthleteCreateWithoutInvestment_group_pairInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutTeacherInput
    address?: AddressCreateNestedOneWithoutAthleteInput
    investments?: InvestmentCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupCreateNestedManyWithoutAthleteInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutTeacherInput
    lesson?: LessonCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceCreateNestedManyWithoutStudentInput
  }

  export type AthleteUncheckedCreateWithoutInvestment_group_pairInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    address_id?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutTeacherInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupUncheckedCreateNestedManyWithoutAthleteInput
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutTeacherInput
    lesson?: LessonUncheckedCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type AthleteCreateOrConnectWithoutInvestment_group_pairInput = {
    where: AthleteWhereUniqueInput
    create: XOR<AthleteCreateWithoutInvestment_group_pairInput, AthleteUncheckedCreateWithoutInvestment_group_pairInput>
  }

  export type TournamentCreateWithoutInvestment_groupInput = {
    id?: string
    name: string
    date_from: Date | string
    date_to: Date | string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    arena: ArenaCreateNestedOneWithoutTournamentsInput
  }

  export type TournamentUncheckedCreateWithoutInvestment_groupInput = {
    id?: string
    name: string
    date_from: Date | string
    date_to: Date | string
    description?: string | null
    arena_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TournamentCreateOrConnectWithoutInvestment_groupInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutInvestment_groupInput, TournamentUncheckedCreateWithoutInvestment_groupInput>
  }

  export type InvestmentUpsertWithWhereUniqueWithoutInvestment_groupInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutInvestment_groupInput, InvestmentUncheckedUpdateWithoutInvestment_groupInput>
    create: XOR<InvestmentCreateWithoutInvestment_groupInput, InvestmentUncheckedCreateWithoutInvestment_groupInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutInvestment_groupInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutInvestment_groupInput, InvestmentUncheckedUpdateWithoutInvestment_groupInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutInvestment_groupInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutInvestment_groupInput>
  }

  export type AthleteUpsertWithoutInvestment_group_athleteInput = {
    update: XOR<AthleteUpdateWithoutInvestment_group_athleteInput, AthleteUncheckedUpdateWithoutInvestment_group_athleteInput>
    create: XOR<AthleteCreateWithoutInvestment_group_athleteInput, AthleteUncheckedCreateWithoutInvestment_group_athleteInput>
    where?: AthleteWhereInput
  }

  export type AthleteUpdateToOneWithWhereWithoutInvestment_group_athleteInput = {
    where?: AthleteWhereInput
    data: XOR<AthleteUpdateWithoutInvestment_group_athleteInput, AthleteUncheckedUpdateWithoutInvestment_group_athleteInput>
  }

  export type AthleteUpdateWithoutInvestment_group_athleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeacherNestedInput
    address?: AddressUpdateOneWithoutAthleteNestedInput
    investments?: InvestmentUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type AthleteUncheckedUpdateWithoutInvestment_group_athleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutTeacherNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUncheckedUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUncheckedUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AthleteUpsertWithoutInvestment_group_pairInput = {
    update: XOR<AthleteUpdateWithoutInvestment_group_pairInput, AthleteUncheckedUpdateWithoutInvestment_group_pairInput>
    create: XOR<AthleteCreateWithoutInvestment_group_pairInput, AthleteUncheckedCreateWithoutInvestment_group_pairInput>
    where?: AthleteWhereInput
  }

  export type AthleteUpdateToOneWithWhereWithoutInvestment_group_pairInput = {
    where?: AthleteWhereInput
    data: XOR<AthleteUpdateWithoutInvestment_group_pairInput, AthleteUncheckedUpdateWithoutInvestment_group_pairInput>
  }

  export type AthleteUpdateWithoutInvestment_group_pairInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeacherNestedInput
    address?: AddressUpdateOneWithoutAthleteNestedInput
    investments?: InvestmentUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUpdateManyWithoutAthleteNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type AthleteUncheckedUpdateWithoutInvestment_group_pairInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutTeacherNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUncheckedUpdateManyWithoutAthleteNestedInput
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUncheckedUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TournamentUpsertWithoutInvestment_groupInput = {
    update: XOR<TournamentUpdateWithoutInvestment_groupInput, TournamentUncheckedUpdateWithoutInvestment_groupInput>
    create: XOR<TournamentCreateWithoutInvestment_groupInput, TournamentUncheckedCreateWithoutInvestment_groupInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutInvestment_groupInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutInvestment_groupInput, TournamentUncheckedUpdateWithoutInvestment_groupInput>
  }

  export type TournamentUpdateWithoutInvestment_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_from?: DateTimeFieldUpdateOperationsInput | Date | string
    date_to?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    arena?: ArenaUpdateOneRequiredWithoutTournamentsNestedInput
  }

  export type TournamentUncheckedUpdateWithoutInvestment_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_from?: DateTimeFieldUpdateOperationsInput | Date | string
    date_to?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    arena_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateWithoutArenaInput = {
    id?: string
    street?: string | null
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city_state: string
    zip_code?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    athlete?: AthleteCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutArenaInput = {
    id?: string
    street?: string | null
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city_state: string
    zip_code?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    athlete?: AthleteUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutArenaInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutArenaInput, AddressUncheckedCreateWithoutArenaInput>
  }

  export type TournamentCreateWithoutArenaInput = {
    id?: string
    name: string
    date_from: Date | string
    date_to: Date | string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    investment_group?: InvestmentGroupCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutArenaInput = {
    id?: string
    name: string
    date_from: Date | string
    date_to: Date | string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    investment_group?: InvestmentGroupUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutArenaInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutArenaInput, TournamentUncheckedCreateWithoutArenaInput>
  }

  export type TournamentCreateManyArenaInputEnvelope = {
    data: TournamentCreateManyArenaInput | TournamentCreateManyArenaInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutArenaInput = {
    update: XOR<AddressUpdateWithoutArenaInput, AddressUncheckedUpdateWithoutArenaInput>
    create: XOR<AddressCreateWithoutArenaInput, AddressUncheckedCreateWithoutArenaInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutArenaInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutArenaInput, AddressUncheckedUpdateWithoutArenaInput>
  }

  export type AddressUpdateWithoutArenaInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city_state?: StringFieldUpdateOperationsInput | string
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    athlete?: AthleteUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutArenaInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city_state?: StringFieldUpdateOperationsInput | string
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    athlete?: AthleteUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type TournamentUpsertWithWhereUniqueWithoutArenaInput = {
    where: TournamentWhereUniqueInput
    update: XOR<TournamentUpdateWithoutArenaInput, TournamentUncheckedUpdateWithoutArenaInput>
    create: XOR<TournamentCreateWithoutArenaInput, TournamentUncheckedCreateWithoutArenaInput>
  }

  export type TournamentUpdateWithWhereUniqueWithoutArenaInput = {
    where: TournamentWhereUniqueInput
    data: XOR<TournamentUpdateWithoutArenaInput, TournamentUncheckedUpdateWithoutArenaInput>
  }

  export type TournamentUpdateManyWithWhereWithoutArenaInput = {
    where: TournamentScalarWhereInput
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyWithoutArenaInput>
  }

  export type TournamentScalarWhereInput = {
    AND?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    OR?: TournamentScalarWhereInput[]
    NOT?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    date_from?: DateTimeFilter<"Tournament"> | Date | string
    date_to?: DateTimeFilter<"Tournament"> | Date | string
    description?: StringNullableFilter<"Tournament"> | string | null
    arena_id?: StringFilter<"Tournament"> | string
    created_at?: DateTimeFilter<"Tournament"> | Date | string
    updated_at?: DateTimeFilter<"Tournament"> | Date | string
  }

  export type ArenaCreateWithoutTournamentsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    address: AddressCreateNestedOneWithoutArenaInput
  }

  export type ArenaUncheckedCreateWithoutTournamentsInput = {
    id?: string
    name: string
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ArenaCreateOrConnectWithoutTournamentsInput = {
    where: ArenaWhereUniqueInput
    create: XOR<ArenaCreateWithoutTournamentsInput, ArenaUncheckedCreateWithoutTournamentsInput>
  }

  export type InvestmentGroupCreateWithoutTournamentInput = {
    id?: string
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentCreateNestedManyWithoutInvestment_groupInput
    athlete: AthleteCreateNestedOneWithoutInvestment_group_athleteInput
    pair?: AthleteCreateNestedOneWithoutInvestment_group_pairInput
  }

  export type InvestmentGroupUncheckedCreateWithoutTournamentInput = {
    id?: string
    athlete_id: string
    pair_id?: string | null
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestment_groupInput
  }

  export type InvestmentGroupCreateOrConnectWithoutTournamentInput = {
    where: InvestmentGroupWhereUniqueInput
    create: XOR<InvestmentGroupCreateWithoutTournamentInput, InvestmentGroupUncheckedCreateWithoutTournamentInput>
  }

  export type InvestmentGroupCreateManyTournamentInputEnvelope = {
    data: InvestmentGroupCreateManyTournamentInput | InvestmentGroupCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type ArenaUpsertWithoutTournamentsInput = {
    update: XOR<ArenaUpdateWithoutTournamentsInput, ArenaUncheckedUpdateWithoutTournamentsInput>
    create: XOR<ArenaCreateWithoutTournamentsInput, ArenaUncheckedCreateWithoutTournamentsInput>
    where?: ArenaWhereInput
  }

  export type ArenaUpdateToOneWithWhereWithoutTournamentsInput = {
    where?: ArenaWhereInput
    data: XOR<ArenaUpdateWithoutTournamentsInput, ArenaUncheckedUpdateWithoutTournamentsInput>
  }

  export type ArenaUpdateWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutArenaNestedInput
  }

  export type ArenaUncheckedUpdateWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentGroupUpsertWithWhereUniqueWithoutTournamentInput = {
    where: InvestmentGroupWhereUniqueInput
    update: XOR<InvestmentGroupUpdateWithoutTournamentInput, InvestmentGroupUncheckedUpdateWithoutTournamentInput>
    create: XOR<InvestmentGroupCreateWithoutTournamentInput, InvestmentGroupUncheckedCreateWithoutTournamentInput>
  }

  export type InvestmentGroupUpdateWithWhereUniqueWithoutTournamentInput = {
    where: InvestmentGroupWhereUniqueInput
    data: XOR<InvestmentGroupUpdateWithoutTournamentInput, InvestmentGroupUncheckedUpdateWithoutTournamentInput>
  }

  export type InvestmentGroupUpdateManyWithWhereWithoutTournamentInput = {
    where: InvestmentGroupScalarWhereInput
    data: XOR<InvestmentGroupUpdateManyMutationInput, InvestmentGroupUncheckedUpdateManyWithoutTournamentInput>
  }

  export type LessonCreateWithoutCourtsInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    teacher: AthleteCreateNestedOneWithoutLessonInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutLessonInput
    attendances?: LessonAttendanceCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCourtsInput = {
    id?: string
    teacher_id: string
    time_start: Date | string
    time_end: Date | string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutLessonInput
    attendances?: LessonAttendanceUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCourtsInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCourtsInput, LessonUncheckedCreateWithoutCourtsInput>
  }

  export type LessonCreateManyCourtsInputEnvelope = {
    data: LessonCreateManyCourtsInput | LessonCreateManyCourtsInput[]
    skipDuplicates?: boolean
  }

  export type LessonUpsertWithWhereUniqueWithoutCourtsInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutCourtsInput, LessonUncheckedUpdateWithoutCourtsInput>
    create: XOR<LessonCreateWithoutCourtsInput, LessonUncheckedCreateWithoutCourtsInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutCourtsInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutCourtsInput, LessonUncheckedUpdateWithoutCourtsInput>
  }

  export type LessonUpdateManyWithWhereWithoutCourtsInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutCourtsInput>
  }

  export type ArenaCreateWithoutAddressInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    tournaments?: TournamentCreateNestedManyWithoutArenaInput
  }

  export type ArenaUncheckedCreateWithoutAddressInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    tournaments?: TournamentUncheckedCreateNestedManyWithoutArenaInput
  }

  export type ArenaCreateOrConnectWithoutAddressInput = {
    where: ArenaWhereUniqueInput
    create: XOR<ArenaCreateWithoutAddressInput, ArenaUncheckedCreateWithoutAddressInput>
  }

  export type AthleteCreateWithoutAddressInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutTeacherInput
    investments?: InvestmentCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutTeacherInput
    lesson?: LessonCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceCreateNestedManyWithoutStudentInput
  }

  export type AthleteUncheckedCreateWithoutAddressInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutTeacherInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupUncheckedCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutTeacherInput
    lesson?: LessonUncheckedCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type AthleteCreateOrConnectWithoutAddressInput = {
    where: AthleteWhereUniqueInput
    create: XOR<AthleteCreateWithoutAddressInput, AthleteUncheckedCreateWithoutAddressInput>
  }

  export type ArenaUpsertWithoutAddressInput = {
    update: XOR<ArenaUpdateWithoutAddressInput, ArenaUncheckedUpdateWithoutAddressInput>
    create: XOR<ArenaCreateWithoutAddressInput, ArenaUncheckedCreateWithoutAddressInput>
    where?: ArenaWhereInput
  }

  export type ArenaUpdateToOneWithWhereWithoutAddressInput = {
    where?: ArenaWhereInput
    data: XOR<ArenaUpdateWithoutAddressInput, ArenaUncheckedUpdateWithoutAddressInput>
  }

  export type ArenaUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: TournamentUpdateManyWithoutArenaNestedInput
  }

  export type ArenaUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: TournamentUncheckedUpdateManyWithoutArenaNestedInput
  }

  export type AthleteUpsertWithoutAddressInput = {
    update: XOR<AthleteUpdateWithoutAddressInput, AthleteUncheckedUpdateWithoutAddressInput>
    create: XOR<AthleteCreateWithoutAddressInput, AthleteUncheckedCreateWithoutAddressInput>
    where?: AthleteWhereInput
  }

  export type AthleteUpdateToOneWithWhereWithoutAddressInput = {
    where?: AthleteWhereInput
    data: XOR<AthleteUpdateWithoutAddressInput, AthleteUncheckedUpdateWithoutAddressInput>
  }

  export type AthleteUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeacherNestedInput
    investments?: InvestmentUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type AthleteUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutTeacherNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUncheckedUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUncheckedUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AthleteCreateWithoutTeacher_availabilityInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutTeacherInput
    address?: AddressCreateNestedOneWithoutAthleteInput
    investments?: InvestmentCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupCreateNestedManyWithoutPairInput
    lesson?: LessonCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceCreateNestedManyWithoutStudentInput
  }

  export type AthleteUncheckedCreateWithoutTeacher_availabilityInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    address_id?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutTeacherInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupUncheckedCreateNestedManyWithoutPairInput
    lesson?: LessonUncheckedCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type AthleteCreateOrConnectWithoutTeacher_availabilityInput = {
    where: AthleteWhereUniqueInput
    create: XOR<AthleteCreateWithoutTeacher_availabilityInput, AthleteUncheckedCreateWithoutTeacher_availabilityInput>
  }

  export type LessonCreateWithoutTeacher_availabilityInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    teacher: AthleteCreateNestedOneWithoutLessonInput
    courts: CourtsCreateNestedOneWithoutLessonInput
    attendances?: LessonAttendanceCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutTeacher_availabilityInput = {
    id?: string
    teacher_id: string
    time_start: Date | string
    time_end: Date | string
    courts_id: string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    attendances?: LessonAttendanceUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutTeacher_availabilityInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutTeacher_availabilityInput, LessonUncheckedCreateWithoutTeacher_availabilityInput>
  }

  export type AthleteUpsertWithoutTeacher_availabilityInput = {
    update: XOR<AthleteUpdateWithoutTeacher_availabilityInput, AthleteUncheckedUpdateWithoutTeacher_availabilityInput>
    create: XOR<AthleteCreateWithoutTeacher_availabilityInput, AthleteUncheckedCreateWithoutTeacher_availabilityInput>
    where?: AthleteWhereInput
  }

  export type AthleteUpdateToOneWithWhereWithoutTeacher_availabilityInput = {
    where?: AthleteWhereInput
    data: XOR<AthleteUpdateWithoutTeacher_availabilityInput, AthleteUncheckedUpdateWithoutTeacher_availabilityInput>
  }

  export type AthleteUpdateWithoutTeacher_availabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeacherNestedInput
    address?: AddressUpdateOneWithoutAthleteNestedInput
    investments?: InvestmentUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUpdateManyWithoutPairNestedInput
    lesson?: LessonUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type AthleteUncheckedUpdateWithoutTeacher_availabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutTeacherNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUncheckedUpdateManyWithoutPairNestedInput
    lesson?: LessonUncheckedUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type LessonUpsertWithoutTeacher_availabilityInput = {
    update: XOR<LessonUpdateWithoutTeacher_availabilityInput, LessonUncheckedUpdateWithoutTeacher_availabilityInput>
    create: XOR<LessonCreateWithoutTeacher_availabilityInput, LessonUncheckedCreateWithoutTeacher_availabilityInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutTeacher_availabilityInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutTeacher_availabilityInput, LessonUncheckedUpdateWithoutTeacher_availabilityInput>
  }

  export type LessonUpdateWithoutTeacher_availabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: AthleteUpdateOneRequiredWithoutLessonNestedInput
    courts?: CourtsUpdateOneRequiredWithoutLessonNestedInput
    attendances?: LessonAttendanceUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutTeacher_availabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    courts_id?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: LessonAttendanceUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type AthleteCreateWithoutLessonInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutTeacherInput
    address?: AddressCreateNestedOneWithoutAthleteInput
    investments?: InvestmentCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceCreateNestedManyWithoutStudentInput
  }

  export type AthleteUncheckedCreateWithoutLessonInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    address_id?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutTeacherInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupUncheckedCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutTeacherInput
    lesson_attendance?: LessonAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type AthleteCreateOrConnectWithoutLessonInput = {
    where: AthleteWhereUniqueInput
    create: XOR<AthleteCreateWithoutLessonInput, AthleteUncheckedCreateWithoutLessonInput>
  }

  export type CourtsCreateWithoutLessonInput = {
    id?: string
    name: string
    number: number
    is_single?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourtsUncheckedCreateWithoutLessonInput = {
    id?: string
    name: string
    number: number
    is_single?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourtsCreateOrConnectWithoutLessonInput = {
    where: CourtsWhereUniqueInput
    create: XOR<CourtsCreateWithoutLessonInput, CourtsUncheckedCreateWithoutLessonInput>
  }

  export type TeacherAvailabilityCreateWithoutLessonInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    teacher: AthleteCreateNestedOneWithoutTeacher_availabilityInput
  }

  export type TeacherAvailabilityUncheckedCreateWithoutLessonInput = {
    id?: string
    teacher_id: string
    time_start: Date | string
    time_end: Date | string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type TeacherAvailabilityCreateOrConnectWithoutLessonInput = {
    where: TeacherAvailabilityWhereUniqueInput
    create: XOR<TeacherAvailabilityCreateWithoutLessonInput, TeacherAvailabilityUncheckedCreateWithoutLessonInput>
  }

  export type TeacherAvailabilityCreateManyLessonInputEnvelope = {
    data: TeacherAvailabilityCreateManyLessonInput | TeacherAvailabilityCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type LessonAttendanceCreateWithoutLessonInput = {
    id?: string
    did_attend?: boolean
    reason?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    student: AthleteCreateNestedOneWithoutLesson_attendanceInput
  }

  export type LessonAttendanceUncheckedCreateWithoutLessonInput = {
    id?: string
    student_id: string
    did_attend?: boolean
    reason?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type LessonAttendanceCreateOrConnectWithoutLessonInput = {
    where: LessonAttendanceWhereUniqueInput
    create: XOR<LessonAttendanceCreateWithoutLessonInput, LessonAttendanceUncheckedCreateWithoutLessonInput>
  }

  export type LessonAttendanceCreateManyLessonInputEnvelope = {
    data: LessonAttendanceCreateManyLessonInput | LessonAttendanceCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type AthleteUpsertWithoutLessonInput = {
    update: XOR<AthleteUpdateWithoutLessonInput, AthleteUncheckedUpdateWithoutLessonInput>
    create: XOR<AthleteCreateWithoutLessonInput, AthleteUncheckedCreateWithoutLessonInput>
    where?: AthleteWhereInput
  }

  export type AthleteUpdateToOneWithWhereWithoutLessonInput = {
    where?: AthleteWhereInput
    data: XOR<AthleteUpdateWithoutLessonInput, AthleteUncheckedUpdateWithoutLessonInput>
  }

  export type AthleteUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeacherNestedInput
    address?: AddressUpdateOneWithoutAthleteNestedInput
    investments?: InvestmentUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type AthleteUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutTeacherNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUncheckedUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutTeacherNestedInput
    lesson_attendance?: LessonAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourtsUpsertWithoutLessonInput = {
    update: XOR<CourtsUpdateWithoutLessonInput, CourtsUncheckedUpdateWithoutLessonInput>
    create: XOR<CourtsCreateWithoutLessonInput, CourtsUncheckedCreateWithoutLessonInput>
    where?: CourtsWhereInput
  }

  export type CourtsUpdateToOneWithWhereWithoutLessonInput = {
    where?: CourtsWhereInput
    data: XOR<CourtsUpdateWithoutLessonInput, CourtsUncheckedUpdateWithoutLessonInput>
  }

  export type CourtsUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    is_single?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourtsUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    is_single?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherAvailabilityUpsertWithWhereUniqueWithoutLessonInput = {
    where: TeacherAvailabilityWhereUniqueInput
    update: XOR<TeacherAvailabilityUpdateWithoutLessonInput, TeacherAvailabilityUncheckedUpdateWithoutLessonInput>
    create: XOR<TeacherAvailabilityCreateWithoutLessonInput, TeacherAvailabilityUncheckedCreateWithoutLessonInput>
  }

  export type TeacherAvailabilityUpdateWithWhereUniqueWithoutLessonInput = {
    where: TeacherAvailabilityWhereUniqueInput
    data: XOR<TeacherAvailabilityUpdateWithoutLessonInput, TeacherAvailabilityUncheckedUpdateWithoutLessonInput>
  }

  export type TeacherAvailabilityUpdateManyWithWhereWithoutLessonInput = {
    where: TeacherAvailabilityScalarWhereInput
    data: XOR<TeacherAvailabilityUpdateManyMutationInput, TeacherAvailabilityUncheckedUpdateManyWithoutLessonInput>
  }

  export type LessonAttendanceUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonAttendanceWhereUniqueInput
    update: XOR<LessonAttendanceUpdateWithoutLessonInput, LessonAttendanceUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonAttendanceCreateWithoutLessonInput, LessonAttendanceUncheckedCreateWithoutLessonInput>
  }

  export type LessonAttendanceUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonAttendanceWhereUniqueInput
    data: XOR<LessonAttendanceUpdateWithoutLessonInput, LessonAttendanceUncheckedUpdateWithoutLessonInput>
  }

  export type LessonAttendanceUpdateManyWithWhereWithoutLessonInput = {
    where: LessonAttendanceScalarWhereInput
    data: XOR<LessonAttendanceUpdateManyMutationInput, LessonAttendanceUncheckedUpdateManyWithoutLessonInput>
  }

  export type LessonCreateWithoutAttendancesInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    teacher: AthleteCreateNestedOneWithoutLessonInput
    courts: CourtsCreateNestedOneWithoutLessonInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutAttendancesInput = {
    id?: string
    teacher_id: string
    time_start: Date | string
    time_end: Date | string
    courts_id: string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutAttendancesInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutAttendancesInput, LessonUncheckedCreateWithoutAttendancesInput>
  }

  export type AthleteCreateWithoutLesson_attendanceInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutTeacherInput
    address?: AddressCreateNestedOneWithoutAthleteInput
    investments?: InvestmentCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityCreateNestedManyWithoutTeacherInput
    lesson?: LessonCreateNestedManyWithoutTeacherInput
  }

  export type AthleteUncheckedCreateWithoutLesson_attendanceInput = {
    id?: string
    name: string
    birthday: Date | string
    phone: string
    responsible?: string | null
    date_start: Date | string
    pix_key: string
    cpf?: string | null
    address_id?: string | null
    is_student?: boolean
    is_associated?: boolean
    is_teacher?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutTeacherInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_athlete?: InvestmentGroupUncheckedCreateNestedManyWithoutAthleteInput
    investment_group_pair?: InvestmentGroupUncheckedCreateNestedManyWithoutPairInput
    teacher_availability?: TeacherAvailabilityUncheckedCreateNestedManyWithoutTeacherInput
    lesson?: LessonUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type AthleteCreateOrConnectWithoutLesson_attendanceInput = {
    where: AthleteWhereUniqueInput
    create: XOR<AthleteCreateWithoutLesson_attendanceInput, AthleteUncheckedCreateWithoutLesson_attendanceInput>
  }

  export type LessonUpsertWithoutAttendancesInput = {
    update: XOR<LessonUpdateWithoutAttendancesInput, LessonUncheckedUpdateWithoutAttendancesInput>
    create: XOR<LessonCreateWithoutAttendancesInput, LessonUncheckedCreateWithoutAttendancesInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutAttendancesInput, LessonUncheckedUpdateWithoutAttendancesInput>
  }

  export type LessonUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: AthleteUpdateOneRequiredWithoutLessonNestedInput
    courts?: CourtsUpdateOneRequiredWithoutLessonNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    courts_id?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type AthleteUpsertWithoutLesson_attendanceInput = {
    update: XOR<AthleteUpdateWithoutLesson_attendanceInput, AthleteUncheckedUpdateWithoutLesson_attendanceInput>
    create: XOR<AthleteCreateWithoutLesson_attendanceInput, AthleteUncheckedCreateWithoutLesson_attendanceInput>
    where?: AthleteWhereInput
  }

  export type AthleteUpdateToOneWithWhereWithoutLesson_attendanceInput = {
    where?: AthleteWhereInput
    data: XOR<AthleteUpdateWithoutLesson_attendanceInput, AthleteUncheckedUpdateWithoutLesson_attendanceInput>
  }

  export type AthleteUpdateWithoutLesson_attendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeacherNestedInput
    address?: AddressUpdateOneWithoutAthleteNestedInput
    investments?: InvestmentUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUpdateManyWithoutTeacherNestedInput
  }

  export type AthleteUncheckedUpdateWithoutLesson_attendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    responsible?: NullableStringFieldUpdateOperationsInput | string | null
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    pix_key?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_student?: BoolFieldUpdateOperationsInput | boolean
    is_associated?: BoolFieldUpdateOperationsInput | boolean
    is_teacher?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutTeacherNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_athlete?: InvestmentGroupUncheckedUpdateManyWithoutAthleteNestedInput
    investment_group_pair?: InvestmentGroupUncheckedUpdateManyWithoutPairNestedInput
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutTeacherNestedInput
    lesson?: LessonUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type InvestmentCreateManyAthleteInput = {
    id?: string
    investment_type_id: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    investment_group_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentGroupCreateManyAthleteInput = {
    id?: string
    pair_id?: string | null
    tournament_id?: string | null
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentGroupCreateManyPairInput = {
    id?: string
    athlete_id: string
    tournament_id?: string | null
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TeacherAvailabilityCreateManyTeacherInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    lesson_id?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type LessonCreateManyTeacherInput = {
    id?: string
    time_start: Date | string
    time_end: Date | string
    courts_id: string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type LessonAttendanceCreateManyStudentInput = {
    id?: string
    lesson_id: string
    did_attend?: boolean
    reason?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type InvestmentUpdateWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investment_type?: InvestmentTypeUpdateOneRequiredWithoutInvestmentsNestedInput
    investment_group?: InvestmentGroupUpdateOneWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    investment_type_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    investment_group_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    investment_type_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    investment_group_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentGroupUpdateWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutInvestment_groupNestedInput
    pair?: AthleteUpdateOneWithoutInvestment_group_pairNestedInput
    tournament?: TournamentUpdateOneWithoutInvestment_groupNestedInput
  }

  export type InvestmentGroupUncheckedUpdateWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    pair_id?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_id?: NullableStringFieldUpdateOperationsInput | string | null
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutInvestment_groupNestedInput
  }

  export type InvestmentGroupUncheckedUpdateManyWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    pair_id?: NullableStringFieldUpdateOperationsInput | string | null
    tournament_id?: NullableStringFieldUpdateOperationsInput | string | null
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentGroupUpdateWithoutPairInput = {
    id?: StringFieldUpdateOperationsInput | string
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutInvestment_groupNestedInput
    athlete?: AthleteUpdateOneRequiredWithoutInvestment_group_athleteNestedInput
    tournament?: TournamentUpdateOneWithoutInvestment_groupNestedInput
  }

  export type InvestmentGroupUncheckedUpdateWithoutPairInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    tournament_id?: NullableStringFieldUpdateOperationsInput | string | null
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutInvestment_groupNestedInput
  }

  export type InvestmentGroupUncheckedUpdateManyWithoutPairInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    tournament_id?: NullableStringFieldUpdateOperationsInput | string | null
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherAvailabilityUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneWithoutTeacher_availabilityNestedInput
  }

  export type TeacherAvailabilityUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherAvailabilityUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson_id?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courts?: CourtsUpdateOneRequiredWithoutLessonNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutLessonNestedInput
    attendances?: LessonAttendanceUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    courts_id?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutLessonNestedInput
    attendances?: LessonAttendanceUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    courts_id?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonAttendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    did_attend?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type LessonAttendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    did_attend?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonAttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    did_attend?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManyInvestment_typeInput = {
    id?: string
    athlete_id: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    investment_group_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentUpdateWithoutInvestment_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    athlete?: AthleteUpdateOneRequiredWithoutInvestmentsNestedInput
    investment_group?: InvestmentGroupUpdateOneWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutInvestment_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    investment_group_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyWithoutInvestment_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    investment_group_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManyInvestment_groupInput = {
    id?: string
    investment_type_id: string
    athlete_id: string
    value: number
    description: string
    date: Date | string
    paid?: Date | string | null
    proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentUpdateWithoutInvestment_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    athlete?: AthleteUpdateOneRequiredWithoutInvestmentsNestedInput
    investment_type?: InvestmentTypeUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutInvestment_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    investment_type_id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyWithoutInvestment_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    investment_type_id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentCreateManyArenaInput = {
    id?: string
    name: string
    date_from: Date | string
    date_to: Date | string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TournamentUpdateWithoutArenaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_from?: DateTimeFieldUpdateOperationsInput | Date | string
    date_to?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investment_group?: InvestmentGroupUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutArenaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_from?: DateTimeFieldUpdateOperationsInput | Date | string
    date_to?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investment_group?: InvestmentGroupUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateManyWithoutArenaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date_from?: DateTimeFieldUpdateOperationsInput | Date | string
    date_to?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentGroupCreateManyTournamentInput = {
    id?: string
    athlete_id: string
    pair_id?: string | null
    podium?: string | null
    description?: string | null
    pair_amount?: number | null
    km?: number | null
    km_racional?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvestmentGroupUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutInvestment_groupNestedInput
    athlete?: AthleteUpdateOneRequiredWithoutInvestment_group_athleteNestedInput
    pair?: AthleteUpdateOneWithoutInvestment_group_pairNestedInput
  }

  export type InvestmentGroupUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    pair_id?: NullableStringFieldUpdateOperationsInput | string | null
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutInvestment_groupNestedInput
  }

  export type InvestmentGroupUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    pair_id?: NullableStringFieldUpdateOperationsInput | string | null
    podium?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pair_amount?: NullableIntFieldUpdateOperationsInput | number | null
    km?: NullableFloatFieldUpdateOperationsInput | number | null
    km_racional?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyCourtsInput = {
    id?: string
    teacher_id: string
    time_start: Date | string
    time_end: Date | string
    subject?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type LessonUpdateWithoutCourtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: AthleteUpdateOneRequiredWithoutLessonNestedInput
    teacher_availability?: TeacherAvailabilityUpdateManyWithoutLessonNestedInput
    attendances?: LessonAttendanceUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCourtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_availability?: TeacherAvailabilityUncheckedUpdateManyWithoutLessonNestedInput
    attendances?: LessonAttendanceUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutCourtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherAvailabilityCreateManyLessonInput = {
    id?: string
    teacher_id: string
    time_start: Date | string
    time_end: Date | string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type LessonAttendanceCreateManyLessonInput = {
    id?: string
    student_id: string
    did_attend?: boolean
    reason?: string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type TeacherAvailabilityUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: AthleteUpdateOneRequiredWithoutTeacher_availabilityNestedInput
  }

  export type TeacherAvailabilityUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherAvailabilityUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonAttendanceUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    did_attend?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: AthleteUpdateOneRequiredWithoutLesson_attendanceNestedInput
  }

  export type LessonAttendanceUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    did_attend?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonAttendanceUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    did_attend?: BoolFieldUpdateOperationsInput | boolean
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}