
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Text
 * 
 */
export type Text = $Result.DefaultSelection<Prisma.$TextPayload>
/**
 * Model Actual
 * 
 */
export type Actual = $Result.DefaultSelection<Prisma.$ActualPayload>
/**
 * Model Contribution
 * 
 */
export type Contribution = $Result.DefaultSelection<Prisma.$ContributionPayload>
/**
 * Model Magazine
 * 
 */
export type Magazine = $Result.DefaultSelection<Prisma.$MagazinePayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR'
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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.text`: Exposes CRUD operations for the **Text** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Texts
    * const texts = await prisma.text.findMany()
    * ```
    */
  get text(): Prisma.TextDelegate<ExtArgs>;

  /**
   * `prisma.actual`: Exposes CRUD operations for the **Actual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actuals
    * const actuals = await prisma.actual.findMany()
    * ```
    */
  get actual(): Prisma.ActualDelegate<ExtArgs>;

  /**
   * `prisma.contribution`: Exposes CRUD operations for the **Contribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contributions
    * const contributions = await prisma.contribution.findMany()
    * ```
    */
  get contribution(): Prisma.ContributionDelegate<ExtArgs>;

  /**
   * `prisma.magazine`: Exposes CRUD operations for the **Magazine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Magazines
    * const magazines = await prisma.magazine.findMany()
    * ```
    */
  get magazine(): Prisma.MagazineDelegate<ExtArgs>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Category: 'Category',
    Comment: 'Comment',
    Text: 'Text',
    Actual: 'Actual',
    Contribution: 'Contribution',
    Magazine: 'Magazine',
    Settings: 'Settings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'category' | 'comment' | 'text' | 'actual' | 'contribution' | 'magazine' | 'settings'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Text: {
        payload: Prisma.$TextPayload<ExtArgs>
        fields: Prisma.TextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          findFirst: {
            args: Prisma.TextFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          findMany: {
            args: Prisma.TextFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TextPayload>[]
          }
          create: {
            args: Prisma.TextCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          createMany: {
            args: Prisma.TextCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TextDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          update: {
            args: Prisma.TextUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          deleteMany: {
            args: Prisma.TextDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TextUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TextUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          aggregate: {
            args: Prisma.TextAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateText>
          }
          groupBy: {
            args: Prisma.TextGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TextGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextCountArgs<ExtArgs>,
            result: $Utils.Optional<TextCountAggregateOutputType> | number
          }
        }
      }
      Actual: {
        payload: Prisma.$ActualPayload<ExtArgs>
        fields: Prisma.ActualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActualFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActualFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActualPayload>
          }
          findFirst: {
            args: Prisma.ActualFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActualFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActualPayload>
          }
          findMany: {
            args: Prisma.ActualFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActualPayload>[]
          }
          create: {
            args: Prisma.ActualCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActualPayload>
          }
          createMany: {
            args: Prisma.ActualCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ActualDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActualPayload>
          }
          update: {
            args: Prisma.ActualUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActualPayload>
          }
          deleteMany: {
            args: Prisma.ActualDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActualUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActualUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActualPayload>
          }
          aggregate: {
            args: Prisma.ActualAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActual>
          }
          groupBy: {
            args: Prisma.ActualGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActualGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActualCountArgs<ExtArgs>,
            result: $Utils.Optional<ActualCountAggregateOutputType> | number
          }
        }
      }
      Contribution: {
        payload: Prisma.$ContributionPayload<ExtArgs>
        fields: Prisma.ContributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContributionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContributionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          findFirst: {
            args: Prisma.ContributionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContributionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          findMany: {
            args: Prisma.ContributionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          create: {
            args: Prisma.ContributionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          createMany: {
            args: Prisma.ContributionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContributionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          update: {
            args: Prisma.ContributionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          deleteMany: {
            args: Prisma.ContributionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContributionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContributionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          aggregate: {
            args: Prisma.ContributionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContribution>
          }
          groupBy: {
            args: Prisma.ContributionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContributionCountArgs<ExtArgs>,
            result: $Utils.Optional<ContributionCountAggregateOutputType> | number
          }
        }
      }
      Magazine: {
        payload: Prisma.$MagazinePayload<ExtArgs>
        fields: Prisma.MagazineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MagazineFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MagazineFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          findFirst: {
            args: Prisma.MagazineFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MagazineFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          findMany: {
            args: Prisma.MagazineFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>[]
          }
          create: {
            args: Prisma.MagazineCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          createMany: {
            args: Prisma.MagazineCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MagazineDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          update: {
            args: Prisma.MagazineUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          deleteMany: {
            args: Prisma.MagazineDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MagazineUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MagazineUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          aggregate: {
            args: Prisma.MagazineAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMagazine>
          }
          groupBy: {
            args: Prisma.MagazineGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MagazineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MagazineCountArgs<ExtArgs>,
            result: $Utils.Optional<MagazineCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>,
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    articles: number
    actuals: number
    contributions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | UserCountOutputTypeCountArticlesArgs
    actuals?: boolean | UserCountOutputTypeCountActualsArgs
    contributions?: boolean | UserCountOutputTypeCountContributionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActualWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    articles: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | CategoryCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
  }



  /**
   * Count Type TextCountOutputType
   */

  export type TextCountOutputType = {
    comments: number
  }

  export type TextCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TextCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * TextCountOutputType without action
   */
  export type TextCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextCountOutputType
     */
    select?: TextCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TextCountOutputType without action
   */
  export type TextCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }



  /**
   * Count Type ActualCountOutputType
   */

  export type ActualCountOutputType = {
    comments: number
  }

  export type ActualCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ActualCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * ActualCountOutputType without action
   */
  export type ActualCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActualCountOutputType
     */
    select?: ActualCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ActualCountOutputType without action
   */
  export type ActualCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }



  /**
   * Count Type MagazineCountOutputType
   */

  export type MagazineCountOutputType = {
    comments: number
    contributions: number
  }

  export type MagazineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | MagazineCountOutputTypeCountCommentsArgs
    contributions?: boolean | MagazineCountOutputTypeCountContributionsArgs
  }

  // Custom InputTypes

  /**
   * MagazineCountOutputType without action
   */
  export type MagazineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagazineCountOutputType
     */
    select?: MagazineCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MagazineCountOutputType without action
   */
  export type MagazineCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * MagazineCountOutputType without action
   */
  export type MagazineCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
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
    username: string | null
    email: string | null
    image: string | null
    coverImage: string | null
    password: string | null
    about: string | null
    twitter: string | null
    twitterLink: string | null
    instagramLink: string | null
    instagram: string | null
    facebook: string | null
    facebookLink: string | null
    youtube: string | null
    youtubeLink: string | null
    role: $Enums.UserRole | null
    isConfirm: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    image: string | null
    coverImage: string | null
    password: string | null
    about: string | null
    twitter: string | null
    twitterLink: string | null
    instagramLink: string | null
    instagram: string | null
    facebook: string | null
    facebookLink: string | null
    youtube: string | null
    youtubeLink: string | null
    role: $Enums.UserRole | null
    isConfirm: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    image: number
    coverImage: number
    password: number
    about: number
    twitter: number
    twitterLink: number
    instagramLink: number
    instagram: number
    facebook: number
    facebookLink: number
    youtube: number
    youtubeLink: number
    role: number
    isConfirm: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    image?: true
    coverImage?: true
    password?: true
    about?: true
    twitter?: true
    twitterLink?: true
    instagramLink?: true
    instagram?: true
    facebook?: true
    facebookLink?: true
    youtube?: true
    youtubeLink?: true
    role?: true
    isConfirm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    image?: true
    coverImage?: true
    password?: true
    about?: true
    twitter?: true
    twitterLink?: true
    instagramLink?: true
    instagram?: true
    facebook?: true
    facebookLink?: true
    youtube?: true
    youtubeLink?: true
    role?: true
    isConfirm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    image?: true
    coverImage?: true
    password?: true
    about?: true
    twitter?: true
    twitterLink?: true
    instagramLink?: true
    instagram?: true
    facebook?: true
    facebookLink?: true
    youtube?: true
    youtubeLink?: true
    role?: true
    isConfirm?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    email: string
    image: string | null
    coverImage: string | null
    password: string
    about: string | null
    twitter: string | null
    twitterLink: string | null
    instagramLink: string | null
    instagram: string | null
    facebook: string | null
    facebookLink: string | null
    youtube: string | null
    youtubeLink: string | null
    role: $Enums.UserRole
    isConfirm: boolean
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    email?: boolean
    image?: boolean
    coverImage?: boolean
    password?: boolean
    about?: boolean
    twitter?: boolean
    twitterLink?: boolean
    instagramLink?: boolean
    instagram?: boolean
    facebook?: boolean
    facebookLink?: boolean
    youtube?: boolean
    youtubeLink?: boolean
    role?: boolean
    isConfirm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articles?: boolean | User$articlesArgs<ExtArgs>
    actuals?: boolean | User$actualsArgs<ExtArgs>
    contributions?: boolean | User$contributionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    image?: boolean
    coverImage?: boolean
    password?: boolean
    about?: boolean
    twitter?: boolean
    twitterLink?: boolean
    instagramLink?: boolean
    instagram?: boolean
    facebook?: boolean
    facebookLink?: boolean
    youtube?: boolean
    youtubeLink?: boolean
    role?: boolean
    isConfirm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | User$articlesArgs<ExtArgs>
    actuals?: boolean | User$actualsArgs<ExtArgs>
    contributions?: boolean | User$contributionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      articles: Prisma.$TextPayload<ExtArgs>[]
      actuals: Prisma.$ActualPayload<ExtArgs>[]
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      email: string
      image: string | null
      coverImage: string | null
      password: string
      about: string | null
      twitter: string | null
      twitterLink: string | null
      instagramLink: string | null
      instagram: string | null
      facebook: string | null
      facebookLink: string | null
      youtube: string | null
      youtubeLink: string | null
      role: $Enums.UserRole
      isConfirm: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    articles<T extends User$articlesArgs<ExtArgs> = {}>(args?: Subset<T, User$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'findMany'> | Null>;

    actuals<T extends User$actualsArgs<ExtArgs> = {}>(args?: Subset<T, User$actualsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'findMany'> | Null>;

    contributions<T extends User$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, User$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly coverImage: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly about: FieldRef<"User", 'String'>
    readonly twitter: FieldRef<"User", 'String'>
    readonly twitterLink: FieldRef<"User", 'String'>
    readonly instagramLink: FieldRef<"User", 'String'>
    readonly instagram: FieldRef<"User", 'String'>
    readonly facebook: FieldRef<"User", 'String'>
    readonly facebookLink: FieldRef<"User", 'String'>
    readonly youtube: FieldRef<"User", 'String'>
    readonly youtubeLink: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isConfirm: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.articles
   */
  export type User$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    cursor?: TextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }


  /**
   * User.actuals
   */
  export type User$actualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    where?: ActualWhereInput
    orderBy?: ActualOrderByWithRelationInput | ActualOrderByWithRelationInput[]
    cursor?: ActualWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActualScalarFieldEnum | ActualScalarFieldEnum[]
  }


  /**
   * User.contributions
   */
  export type User$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    seo: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    seo: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    seo: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    seo?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    seo?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    seo?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    seo: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seo?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articles?: boolean | Category$articlesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    seo?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Category$articlesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      articles: Prisma.$TextPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      seo: string
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    articles<T extends Category$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Category$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly seo: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.articles
   */
  export type Category$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    cursor?: TextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    comment: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    textId: string | null
    actualId: string | null
    magazineId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    comment: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    textId: string | null
    actualId: string | null
    magazineId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    comment: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    textId: number
    actualId: number
    magazineId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    comment?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    textId?: true
    actualId?: true
    magazineId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    comment?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    textId?: true
    actualId?: true
    magazineId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    comment?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    textId?: true
    actualId?: true
    magazineId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    comment: string
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
    textId: string | null
    actualId: string | null
    magazineId: string | null
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    textId?: boolean
    actualId?: boolean
    magazineId?: boolean
    text?: boolean | Comment$textArgs<ExtArgs>
    actual?: boolean | Comment$actualArgs<ExtArgs>
    magazine?: boolean | Comment$magazineArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    comment?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    textId?: boolean
    actualId?: boolean
    magazineId?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    text?: boolean | Comment$textArgs<ExtArgs>
    actual?: boolean | Comment$actualArgs<ExtArgs>
    magazine?: boolean | Comment$magazineArgs<ExtArgs>
  }


  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      text: Prisma.$TextPayload<ExtArgs> | null
      actual: Prisma.$ActualPayload<ExtArgs> | null
      magazine: Prisma.$MagazinePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comment: string
      name: string
      email: string
      createdAt: Date
      updatedAt: Date
      textId: string | null
      actualId: string | null
      magazineId: string | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }


  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    text<T extends Comment$textArgs<ExtArgs> = {}>(args?: Subset<T, Comment$textArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    actual<T extends Comment$actualArgs<ExtArgs> = {}>(args?: Subset<T, Comment$actualArgs<ExtArgs>>): Prisma__ActualClient<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    magazine<T extends Comment$magazineArgs<ExtArgs> = {}>(args?: Subset<T, Comment$magazineArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly comment: FieldRef<"Comment", 'String'>
    readonly name: FieldRef<"Comment", 'String'>
    readonly email: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly textId: FieldRef<"Comment", 'String'>
    readonly actualId: FieldRef<"Comment", 'String'>
    readonly magazineId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }


  /**
   * Comment.text
   */
  export type Comment$textArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
  }


  /**
   * Comment.actual
   */
  export type Comment$actualArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    where?: ActualWhereInput
  }


  /**
   * Comment.magazine
   */
  export type Comment$magazineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
    where?: MagazineWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
  }



  /**
   * Model Text
   */

  export type AggregateText = {
    _count: TextCountAggregateOutputType | null
    _avg: TextAvgAggregateOutputType | null
    _sum: TextSumAggregateOutputType | null
    _min: TextMinAggregateOutputType | null
    _max: TextMaxAggregateOutputType | null
  }

  export type TextAvgAggregateOutputType = {
    readCount: number | null
  }

  export type TextSumAggregateOutputType = {
    readCount: number | null
  }

  export type TextMinAggregateOutputType = {
    id: string | null
    title: string | null
    seo: string | null
    text: string | null
    note: string | null
    image: string | null
    readCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
    isSlider: boolean | null
  }

  export type TextMaxAggregateOutputType = {
    id: string | null
    title: string | null
    seo: string | null
    text: string | null
    note: string | null
    image: string | null
    readCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
    isSlider: boolean | null
  }

  export type TextCountAggregateOutputType = {
    id: number
    title: number
    seo: number
    text: number
    note: number
    image: number
    readCount: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    isSlider: number
    _all: number
  }


  export type TextAvgAggregateInputType = {
    readCount?: true
  }

  export type TextSumAggregateInputType = {
    readCount?: true
  }

  export type TextMinAggregateInputType = {
    id?: true
    title?: true
    seo?: true
    text?: true
    note?: true
    image?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    isSlider?: true
  }

  export type TextMaxAggregateInputType = {
    id?: true
    title?: true
    seo?: true
    text?: true
    note?: true
    image?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    isSlider?: true
  }

  export type TextCountAggregateInputType = {
    id?: true
    title?: true
    seo?: true
    text?: true
    note?: true
    image?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    isSlider?: true
    _all?: true
  }

  export type TextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Text to aggregate.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Texts
    **/
    _count?: true | TextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextMaxAggregateInputType
  }

  export type GetTextAggregateType<T extends TextAggregateArgs> = {
        [P in keyof T & keyof AggregateText]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateText[P]>
      : GetScalarType<T[P], AggregateText[P]>
  }




  export type TextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
    orderBy?: TextOrderByWithAggregationInput | TextOrderByWithAggregationInput[]
    by: TextScalarFieldEnum[] | TextScalarFieldEnum
    having?: TextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextCountAggregateInputType | true
    _avg?: TextAvgAggregateInputType
    _sum?: TextSumAggregateInputType
    _min?: TextMinAggregateInputType
    _max?: TextMaxAggregateInputType
  }

  export type TextGroupByOutputType = {
    id: string
    title: string
    seo: string
    text: string
    note: string | null
    image: string
    readCount: number
    createdAt: Date
    updatedAt: Date
    userId: string
    categoryId: string
    isSlider: boolean
    _count: TextCountAggregateOutputType | null
    _avg: TextAvgAggregateOutputType | null
    _sum: TextSumAggregateOutputType | null
    _min: TextMinAggregateOutputType | null
    _max: TextMaxAggregateOutputType | null
  }

  type GetTextGroupByPayload<T extends TextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextGroupByOutputType[P]>
            : GetScalarType<T[P], TextGroupByOutputType[P]>
        }
      >
    >


  export type TextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    seo?: boolean
    text?: boolean
    note?: boolean
    image?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    isSlider?: boolean
    comments?: boolean | Text$commentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    _count?: boolean | TextCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["text"]>

  export type TextSelectScalar = {
    id?: boolean
    title?: boolean
    seo?: boolean
    text?: boolean
    note?: boolean
    image?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    isSlider?: boolean
  }

  export type TextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Text$commentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    _count?: boolean | TextCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Text"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      seo: string
      text: string
      note: string | null
      image: string
      readCount: number
      createdAt: Date
      updatedAt: Date
      userId: string
      categoryId: string
      isSlider: boolean
    }, ExtArgs["result"]["text"]>
    composites: {}
  }


  type TextGetPayload<S extends boolean | null | undefined | TextDefaultArgs> = $Result.GetResult<Prisma.$TextPayload, S>

  type TextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TextFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TextCountAggregateInputType | true
    }

  export interface TextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Text'], meta: { name: 'Text' } }
    /**
     * Find zero or one Text that matches the filter.
     * @param {TextFindUniqueArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TextFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TextFindUniqueArgs<ExtArgs>>
    ): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Text that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TextFindUniqueOrThrowArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TextFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TextFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Text that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindFirstArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TextFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TextFindFirstArgs<ExtArgs>>
    ): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Text that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindFirstOrThrowArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TextFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TextFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Texts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Texts
     * const texts = await prisma.text.findMany()
     * 
     * // Get first 10 Texts
     * const texts = await prisma.text.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textWithIdOnly = await prisma.text.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TextFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TextFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Text.
     * @param {TextCreateArgs} args - Arguments to create a Text.
     * @example
     * // Create one Text
     * const Text = await prisma.text.create({
     *   data: {
     *     // ... data to create a Text
     *   }
     * })
     * 
    **/
    create<T extends TextCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TextCreateArgs<ExtArgs>>
    ): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Texts.
     *     @param {TextCreateManyArgs} args - Arguments to create many Texts.
     *     @example
     *     // Create many Texts
     *     const text = await prisma.text.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TextCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TextCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Text.
     * @param {TextDeleteArgs} args - Arguments to delete one Text.
     * @example
     * // Delete one Text
     * const Text = await prisma.text.delete({
     *   where: {
     *     // ... filter to delete one Text
     *   }
     * })
     * 
    **/
    delete<T extends TextDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TextDeleteArgs<ExtArgs>>
    ): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Text.
     * @param {TextUpdateArgs} args - Arguments to update one Text.
     * @example
     * // Update one Text
     * const text = await prisma.text.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TextUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TextUpdateArgs<ExtArgs>>
    ): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Texts.
     * @param {TextDeleteManyArgs} args - Arguments to filter Texts to delete.
     * @example
     * // Delete a few Texts
     * const { count } = await prisma.text.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TextDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TextDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Texts
     * const text = await prisma.text.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TextUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TextUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Text.
     * @param {TextUpsertArgs} args - Arguments to update or create a Text.
     * @example
     * // Update or create a Text
     * const text = await prisma.text.upsert({
     *   create: {
     *     // ... data to create a Text
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Text we want to update
     *   }
     * })
    **/
    upsert<T extends TextUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TextUpsertArgs<ExtArgs>>
    ): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextCountArgs} args - Arguments to filter Texts to count.
     * @example
     * // Count the number of Texts
     * const count = await prisma.text.count({
     *   where: {
     *     // ... the filter for the Texts we want to count
     *   }
     * })
    **/
    count<T extends TextCountArgs>(
      args?: Subset<T, TextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Text.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextAggregateArgs>(args: Subset<T, TextAggregateArgs>): Prisma.PrismaPromise<GetTextAggregateType<T>>

    /**
     * Group by Text.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextGroupByArgs} args - Group by arguments.
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
      T extends TextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextGroupByArgs['orderBy'] }
        : { orderBy?: TextGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Text model
   */
  readonly fields: TextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Text.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comments<T extends Text$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Text$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Text model
   */ 
  interface TextFieldRefs {
    readonly id: FieldRef<"Text", 'String'>
    readonly title: FieldRef<"Text", 'String'>
    readonly seo: FieldRef<"Text", 'String'>
    readonly text: FieldRef<"Text", 'String'>
    readonly note: FieldRef<"Text", 'String'>
    readonly image: FieldRef<"Text", 'String'>
    readonly readCount: FieldRef<"Text", 'Int'>
    readonly createdAt: FieldRef<"Text", 'DateTime'>
    readonly updatedAt: FieldRef<"Text", 'DateTime'>
    readonly userId: FieldRef<"Text", 'String'>
    readonly categoryId: FieldRef<"Text", 'String'>
    readonly isSlider: FieldRef<"Text", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Text findUnique
   */
  export type TextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where: TextWhereUniqueInput
  }


  /**
   * Text findUniqueOrThrow
   */
  export type TextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where: TextWhereUniqueInput
  }


  /**
   * Text findFirst
   */
  export type TextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Texts.
     */
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }


  /**
   * Text findFirstOrThrow
   */
  export type TextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Texts.
     */
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }


  /**
   * Text findMany
   */
  export type TextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Texts to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }


  /**
   * Text create
   */
  export type TextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The data needed to create a Text.
     */
    data: XOR<TextCreateInput, TextUncheckedCreateInput>
  }


  /**
   * Text createMany
   */
  export type TextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Texts.
     */
    data: TextCreateManyInput | TextCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Text update
   */
  export type TextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The data needed to update a Text.
     */
    data: XOR<TextUpdateInput, TextUncheckedUpdateInput>
    /**
     * Choose, which Text to update.
     */
    where: TextWhereUniqueInput
  }


  /**
   * Text updateMany
   */
  export type TextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Texts.
     */
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyInput>
    /**
     * Filter which Texts to update
     */
    where?: TextWhereInput
  }


  /**
   * Text upsert
   */
  export type TextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The filter to search for the Text to update in case it exists.
     */
    where: TextWhereUniqueInput
    /**
     * In case the Text found by the `where` argument doesn't exist, create a new Text with this data.
     */
    create: XOR<TextCreateInput, TextUncheckedCreateInput>
    /**
     * In case the Text was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextUpdateInput, TextUncheckedUpdateInput>
  }


  /**
   * Text delete
   */
  export type TextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter which Text to delete.
     */
    where: TextWhereUniqueInput
  }


  /**
   * Text deleteMany
   */
  export type TextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Texts to delete
     */
    where?: TextWhereInput
  }


  /**
   * Text.comments
   */
  export type Text$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Text without action
   */
  export type TextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextInclude<ExtArgs> | null
  }



  /**
   * Model Actual
   */

  export type AggregateActual = {
    _count: ActualCountAggregateOutputType | null
    _avg: ActualAvgAggregateOutputType | null
    _sum: ActualSumAggregateOutputType | null
    _min: ActualMinAggregateOutputType | null
    _max: ActualMaxAggregateOutputType | null
  }

  export type ActualAvgAggregateOutputType = {
    readCount: number | null
  }

  export type ActualSumAggregateOutputType = {
    readCount: number | null
  }

  export type ActualMinAggregateOutputType = {
    id: string | null
    title: string | null
    seo: string | null
    text: string | null
    note: string | null
    image: string | null
    readCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ActualMaxAggregateOutputType = {
    id: string | null
    title: string | null
    seo: string | null
    text: string | null
    note: string | null
    image: string | null
    readCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ActualCountAggregateOutputType = {
    id: number
    title: number
    seo: number
    text: number
    note: number
    image: number
    readCount: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ActualAvgAggregateInputType = {
    readCount?: true
  }

  export type ActualSumAggregateInputType = {
    readCount?: true
  }

  export type ActualMinAggregateInputType = {
    id?: true
    title?: true
    seo?: true
    text?: true
    note?: true
    image?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ActualMaxAggregateInputType = {
    id?: true
    title?: true
    seo?: true
    text?: true
    note?: true
    image?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ActualCountAggregateInputType = {
    id?: true
    title?: true
    seo?: true
    text?: true
    note?: true
    image?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ActualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actual to aggregate.
     */
    where?: ActualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuals to fetch.
     */
    orderBy?: ActualOrderByWithRelationInput | ActualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actuals
    **/
    _count?: true | ActualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActualAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActualSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActualMaxAggregateInputType
  }

  export type GetActualAggregateType<T extends ActualAggregateArgs> = {
        [P in keyof T & keyof AggregateActual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActual[P]>
      : GetScalarType<T[P], AggregateActual[P]>
  }




  export type ActualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActualWhereInput
    orderBy?: ActualOrderByWithAggregationInput | ActualOrderByWithAggregationInput[]
    by: ActualScalarFieldEnum[] | ActualScalarFieldEnum
    having?: ActualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActualCountAggregateInputType | true
    _avg?: ActualAvgAggregateInputType
    _sum?: ActualSumAggregateInputType
    _min?: ActualMinAggregateInputType
    _max?: ActualMaxAggregateInputType
  }

  export type ActualGroupByOutputType = {
    id: string
    title: string
    seo: string
    text: string
    note: string | null
    image: string
    readCount: number
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ActualCountAggregateOutputType | null
    _avg: ActualAvgAggregateOutputType | null
    _sum: ActualSumAggregateOutputType | null
    _min: ActualMinAggregateOutputType | null
    _max: ActualMaxAggregateOutputType | null
  }

  type GetActualGroupByPayload<T extends ActualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActualGroupByOutputType[P]>
            : GetScalarType<T[P], ActualGroupByOutputType[P]>
        }
      >
    >


  export type ActualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    seo?: boolean
    text?: boolean
    note?: boolean
    image?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    comments?: boolean | Actual$commentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ActualCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actual"]>

  export type ActualSelectScalar = {
    id?: boolean
    title?: boolean
    seo?: boolean
    text?: boolean
    note?: boolean
    image?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ActualInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Actual$commentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ActualCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ActualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actual"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      seo: string
      text: string
      note: string | null
      image: string
      readCount: number
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["actual"]>
    composites: {}
  }


  type ActualGetPayload<S extends boolean | null | undefined | ActualDefaultArgs> = $Result.GetResult<Prisma.$ActualPayload, S>

  type ActualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActualFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ActualCountAggregateInputType | true
    }

  export interface ActualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actual'], meta: { name: 'Actual' } }
    /**
     * Find zero or one Actual that matches the filter.
     * @param {ActualFindUniqueArgs} args - Arguments to find a Actual
     * @example
     * // Get one Actual
     * const actual = await prisma.actual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActualFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActualFindUniqueArgs<ExtArgs>>
    ): Prisma__ActualClient<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Actual that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ActualFindUniqueOrThrowArgs} args - Arguments to find a Actual
     * @example
     * // Get one Actual
     * const actual = await prisma.actual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActualFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActualFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActualClient<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Actual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualFindFirstArgs} args - Arguments to find a Actual
     * @example
     * // Get one Actual
     * const actual = await prisma.actual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActualFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActualFindFirstArgs<ExtArgs>>
    ): Prisma__ActualClient<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Actual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualFindFirstOrThrowArgs} args - Arguments to find a Actual
     * @example
     * // Get one Actual
     * const actual = await prisma.actual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActualFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActualFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActualClient<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Actuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actuals
     * const actuals = await prisma.actual.findMany()
     * 
     * // Get first 10 Actuals
     * const actuals = await prisma.actual.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actualWithIdOnly = await prisma.actual.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActualFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActualFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Actual.
     * @param {ActualCreateArgs} args - Arguments to create a Actual.
     * @example
     * // Create one Actual
     * const Actual = await prisma.actual.create({
     *   data: {
     *     // ... data to create a Actual
     *   }
     * })
     * 
    **/
    create<T extends ActualCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActualCreateArgs<ExtArgs>>
    ): Prisma__ActualClient<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Actuals.
     *     @param {ActualCreateManyArgs} args - Arguments to create many Actuals.
     *     @example
     *     // Create many Actuals
     *     const actual = await prisma.actual.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActualCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActualCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Actual.
     * @param {ActualDeleteArgs} args - Arguments to delete one Actual.
     * @example
     * // Delete one Actual
     * const Actual = await prisma.actual.delete({
     *   where: {
     *     // ... filter to delete one Actual
     *   }
     * })
     * 
    **/
    delete<T extends ActualDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActualDeleteArgs<ExtArgs>>
    ): Prisma__ActualClient<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Actual.
     * @param {ActualUpdateArgs} args - Arguments to update one Actual.
     * @example
     * // Update one Actual
     * const actual = await prisma.actual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActualUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActualUpdateArgs<ExtArgs>>
    ): Prisma__ActualClient<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Actuals.
     * @param {ActualDeleteManyArgs} args - Arguments to filter Actuals to delete.
     * @example
     * // Delete a few Actuals
     * const { count } = await prisma.actual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActualDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActualDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actuals
     * const actual = await prisma.actual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActualUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActualUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Actual.
     * @param {ActualUpsertArgs} args - Arguments to update or create a Actual.
     * @example
     * // Update or create a Actual
     * const actual = await prisma.actual.upsert({
     *   create: {
     *     // ... data to create a Actual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actual we want to update
     *   }
     * })
    **/
    upsert<T extends ActualUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActualUpsertArgs<ExtArgs>>
    ): Prisma__ActualClient<$Result.GetResult<Prisma.$ActualPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Actuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualCountArgs} args - Arguments to filter Actuals to count.
     * @example
     * // Count the number of Actuals
     * const count = await prisma.actual.count({
     *   where: {
     *     // ... the filter for the Actuals we want to count
     *   }
     * })
    **/
    count<T extends ActualCountArgs>(
      args?: Subset<T, ActualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActualAggregateArgs>(args: Subset<T, ActualAggregateArgs>): Prisma.PrismaPromise<GetActualAggregateType<T>>

    /**
     * Group by Actual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualGroupByArgs} args - Group by arguments.
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
      T extends ActualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActualGroupByArgs['orderBy'] }
        : { orderBy?: ActualGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actual model
   */
  readonly fields: ActualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comments<T extends Actual$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Actual$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Actual model
   */ 
  interface ActualFieldRefs {
    readonly id: FieldRef<"Actual", 'String'>
    readonly title: FieldRef<"Actual", 'String'>
    readonly seo: FieldRef<"Actual", 'String'>
    readonly text: FieldRef<"Actual", 'String'>
    readonly note: FieldRef<"Actual", 'String'>
    readonly image: FieldRef<"Actual", 'String'>
    readonly readCount: FieldRef<"Actual", 'Int'>
    readonly createdAt: FieldRef<"Actual", 'DateTime'>
    readonly updatedAt: FieldRef<"Actual", 'DateTime'>
    readonly userId: FieldRef<"Actual", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Actual findUnique
   */
  export type ActualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    /**
     * Filter, which Actual to fetch.
     */
    where: ActualWhereUniqueInput
  }


  /**
   * Actual findUniqueOrThrow
   */
  export type ActualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    /**
     * Filter, which Actual to fetch.
     */
    where: ActualWhereUniqueInput
  }


  /**
   * Actual findFirst
   */
  export type ActualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    /**
     * Filter, which Actual to fetch.
     */
    where?: ActualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuals to fetch.
     */
    orderBy?: ActualOrderByWithRelationInput | ActualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actuals.
     */
    cursor?: ActualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actuals.
     */
    distinct?: ActualScalarFieldEnum | ActualScalarFieldEnum[]
  }


  /**
   * Actual findFirstOrThrow
   */
  export type ActualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    /**
     * Filter, which Actual to fetch.
     */
    where?: ActualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuals to fetch.
     */
    orderBy?: ActualOrderByWithRelationInput | ActualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actuals.
     */
    cursor?: ActualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actuals.
     */
    distinct?: ActualScalarFieldEnum | ActualScalarFieldEnum[]
  }


  /**
   * Actual findMany
   */
  export type ActualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    /**
     * Filter, which Actuals to fetch.
     */
    where?: ActualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuals to fetch.
     */
    orderBy?: ActualOrderByWithRelationInput | ActualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actuals.
     */
    cursor?: ActualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuals.
     */
    skip?: number
    distinct?: ActualScalarFieldEnum | ActualScalarFieldEnum[]
  }


  /**
   * Actual create
   */
  export type ActualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    /**
     * The data needed to create a Actual.
     */
    data: XOR<ActualCreateInput, ActualUncheckedCreateInput>
  }


  /**
   * Actual createMany
   */
  export type ActualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actuals.
     */
    data: ActualCreateManyInput | ActualCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Actual update
   */
  export type ActualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    /**
     * The data needed to update a Actual.
     */
    data: XOR<ActualUpdateInput, ActualUncheckedUpdateInput>
    /**
     * Choose, which Actual to update.
     */
    where: ActualWhereUniqueInput
  }


  /**
   * Actual updateMany
   */
  export type ActualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actuals.
     */
    data: XOR<ActualUpdateManyMutationInput, ActualUncheckedUpdateManyInput>
    /**
     * Filter which Actuals to update
     */
    where?: ActualWhereInput
  }


  /**
   * Actual upsert
   */
  export type ActualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    /**
     * The filter to search for the Actual to update in case it exists.
     */
    where: ActualWhereUniqueInput
    /**
     * In case the Actual found by the `where` argument doesn't exist, create a new Actual with this data.
     */
    create: XOR<ActualCreateInput, ActualUncheckedCreateInput>
    /**
     * In case the Actual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActualUpdateInput, ActualUncheckedUpdateInput>
  }


  /**
   * Actual delete
   */
  export type ActualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
    /**
     * Filter which Actual to delete.
     */
    where: ActualWhereUniqueInput
  }


  /**
   * Actual deleteMany
   */
  export type ActualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actuals to delete
     */
    where?: ActualWhereInput
  }


  /**
   * Actual.comments
   */
  export type Actual$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Actual without action
   */
  export type ActualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actual
     */
    select?: ActualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActualInclude<ExtArgs> | null
  }



  /**
   * Model Contribution
   */

  export type AggregateContribution = {
    _count: ContributionCountAggregateOutputType | null
    _min: ContributionMinAggregateOutputType | null
    _max: ContributionMaxAggregateOutputType | null
  }

  export type ContributionMinAggregateOutputType = {
    id: string | null
    title: string | null
    startPage: string | null
    endPage: string | null
    file: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    magazineId: string | null
  }

  export type ContributionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    startPage: string | null
    endPage: string | null
    file: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    magazineId: string | null
  }

  export type ContributionCountAggregateOutputType = {
    id: number
    title: number
    startPage: number
    endPage: number
    file: number
    createdAt: number
    updatedAt: number
    userId: number
    magazineId: number
    _all: number
  }


  export type ContributionMinAggregateInputType = {
    id?: true
    title?: true
    startPage?: true
    endPage?: true
    file?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    magazineId?: true
  }

  export type ContributionMaxAggregateInputType = {
    id?: true
    title?: true
    startPage?: true
    endPage?: true
    file?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    magazineId?: true
  }

  export type ContributionCountAggregateInputType = {
    id?: true
    title?: true
    startPage?: true
    endPage?: true
    file?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    magazineId?: true
    _all?: true
  }

  export type ContributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contribution to aggregate.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contributions
    **/
    _count?: true | ContributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContributionMaxAggregateInputType
  }

  export type GetContributionAggregateType<T extends ContributionAggregateArgs> = {
        [P in keyof T & keyof AggregateContribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContribution[P]>
      : GetScalarType<T[P], AggregateContribution[P]>
  }




  export type ContributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithAggregationInput | ContributionOrderByWithAggregationInput[]
    by: ContributionScalarFieldEnum[] | ContributionScalarFieldEnum
    having?: ContributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContributionCountAggregateInputType | true
    _min?: ContributionMinAggregateInputType
    _max?: ContributionMaxAggregateInputType
  }

  export type ContributionGroupByOutputType = {
    id: string
    title: string
    startPage: string
    endPage: string
    file: string
    createdAt: Date
    updatedAt: Date
    userId: string
    magazineId: string
    _count: ContributionCountAggregateOutputType | null
    _min: ContributionMinAggregateOutputType | null
    _max: ContributionMaxAggregateOutputType | null
  }

  type GetContributionGroupByPayload<T extends ContributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContributionGroupByOutputType[P]>
            : GetScalarType<T[P], ContributionGroupByOutputType[P]>
        }
      >
    >


  export type ContributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startPage?: boolean
    endPage?: boolean
    file?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    magazineId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    magazine?: boolean | MagazineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>

  export type ContributionSelectScalar = {
    id?: boolean
    title?: boolean
    startPage?: boolean
    endPage?: boolean
    file?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    magazineId?: boolean
  }

  export type ContributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    magazine?: boolean | MagazineDefaultArgs<ExtArgs>
  }


  export type $ContributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contribution"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      magazine: Prisma.$MagazinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      startPage: string
      endPage: string
      file: string
      createdAt: Date
      updatedAt: Date
      userId: string
      magazineId: string
    }, ExtArgs["result"]["contribution"]>
    composites: {}
  }


  type ContributionGetPayload<S extends boolean | null | undefined | ContributionDefaultArgs> = $Result.GetResult<Prisma.$ContributionPayload, S>

  type ContributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContributionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ContributionCountAggregateInputType | true
    }

  export interface ContributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contribution'], meta: { name: 'Contribution' } }
    /**
     * Find zero or one Contribution that matches the filter.
     * @param {ContributionFindUniqueArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContributionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContributionFindUniqueArgs<ExtArgs>>
    ): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contribution that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContributionFindUniqueOrThrowArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContributionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContributionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindFirstArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContributionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContributionFindFirstArgs<ExtArgs>>
    ): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindFirstOrThrowArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContributionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContributionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contributions
     * const contributions = await prisma.contribution.findMany()
     * 
     * // Get first 10 Contributions
     * const contributions = await prisma.contribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contributionWithIdOnly = await prisma.contribution.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContributionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContributionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contribution.
     * @param {ContributionCreateArgs} args - Arguments to create a Contribution.
     * @example
     * // Create one Contribution
     * const Contribution = await prisma.contribution.create({
     *   data: {
     *     // ... data to create a Contribution
     *   }
     * })
     * 
    **/
    create<T extends ContributionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContributionCreateArgs<ExtArgs>>
    ): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contributions.
     *     @param {ContributionCreateManyArgs} args - Arguments to create many Contributions.
     *     @example
     *     // Create many Contributions
     *     const contribution = await prisma.contribution.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContributionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContributionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contribution.
     * @param {ContributionDeleteArgs} args - Arguments to delete one Contribution.
     * @example
     * // Delete one Contribution
     * const Contribution = await prisma.contribution.delete({
     *   where: {
     *     // ... filter to delete one Contribution
     *   }
     * })
     * 
    **/
    delete<T extends ContributionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContributionDeleteArgs<ExtArgs>>
    ): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contribution.
     * @param {ContributionUpdateArgs} args - Arguments to update one Contribution.
     * @example
     * // Update one Contribution
     * const contribution = await prisma.contribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContributionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContributionUpdateArgs<ExtArgs>>
    ): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contributions.
     * @param {ContributionDeleteManyArgs} args - Arguments to filter Contributions to delete.
     * @example
     * // Delete a few Contributions
     * const { count } = await prisma.contribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContributionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContributionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contributions
     * const contribution = await prisma.contribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContributionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContributionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contribution.
     * @param {ContributionUpsertArgs} args - Arguments to update or create a Contribution.
     * @example
     * // Update or create a Contribution
     * const contribution = await prisma.contribution.upsert({
     *   create: {
     *     // ... data to create a Contribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contribution we want to update
     *   }
     * })
    **/
    upsert<T extends ContributionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContributionUpsertArgs<ExtArgs>>
    ): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionCountArgs} args - Arguments to filter Contributions to count.
     * @example
     * // Count the number of Contributions
     * const count = await prisma.contribution.count({
     *   where: {
     *     // ... the filter for the Contributions we want to count
     *   }
     * })
    **/
    count<T extends ContributionCountArgs>(
      args?: Subset<T, ContributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContributionAggregateArgs>(args: Subset<T, ContributionAggregateArgs>): Prisma.PrismaPromise<GetContributionAggregateType<T>>

    /**
     * Group by Contribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionGroupByArgs} args - Group by arguments.
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
      T extends ContributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContributionGroupByArgs['orderBy'] }
        : { orderBy?: ContributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contribution model
   */
  readonly fields: ContributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    magazine<T extends MagazineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MagazineDefaultArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contribution model
   */ 
  interface ContributionFieldRefs {
    readonly id: FieldRef<"Contribution", 'String'>
    readonly title: FieldRef<"Contribution", 'String'>
    readonly startPage: FieldRef<"Contribution", 'String'>
    readonly endPage: FieldRef<"Contribution", 'String'>
    readonly file: FieldRef<"Contribution", 'String'>
    readonly createdAt: FieldRef<"Contribution", 'DateTime'>
    readonly updatedAt: FieldRef<"Contribution", 'DateTime'>
    readonly userId: FieldRef<"Contribution", 'String'>
    readonly magazineId: FieldRef<"Contribution", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Contribution findUnique
   */
  export type ContributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where: ContributionWhereUniqueInput
  }


  /**
   * Contribution findUniqueOrThrow
   */
  export type ContributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where: ContributionWhereUniqueInput
  }


  /**
   * Contribution findFirst
   */
  export type ContributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }


  /**
   * Contribution findFirstOrThrow
   */
  export type ContributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }


  /**
   * Contribution findMany
   */
  export type ContributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contributions to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }


  /**
   * Contribution create
   */
  export type ContributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The data needed to create a Contribution.
     */
    data: XOR<ContributionCreateInput, ContributionUncheckedCreateInput>
  }


  /**
   * Contribution createMany
   */
  export type ContributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contributions.
     */
    data: ContributionCreateManyInput | ContributionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Contribution update
   */
  export type ContributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The data needed to update a Contribution.
     */
    data: XOR<ContributionUpdateInput, ContributionUncheckedUpdateInput>
    /**
     * Choose, which Contribution to update.
     */
    where: ContributionWhereUniqueInput
  }


  /**
   * Contribution updateMany
   */
  export type ContributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contributions.
     */
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyInput>
    /**
     * Filter which Contributions to update
     */
    where?: ContributionWhereInput
  }


  /**
   * Contribution upsert
   */
  export type ContributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The filter to search for the Contribution to update in case it exists.
     */
    where: ContributionWhereUniqueInput
    /**
     * In case the Contribution found by the `where` argument doesn't exist, create a new Contribution with this data.
     */
    create: XOR<ContributionCreateInput, ContributionUncheckedCreateInput>
    /**
     * In case the Contribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContributionUpdateInput, ContributionUncheckedUpdateInput>
  }


  /**
   * Contribution delete
   */
  export type ContributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter which Contribution to delete.
     */
    where: ContributionWhereUniqueInput
  }


  /**
   * Contribution deleteMany
   */
  export type ContributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contributions to delete
     */
    where?: ContributionWhereInput
  }


  /**
   * Contribution without action
   */
  export type ContributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
  }



  /**
   * Model Magazine
   */

  export type AggregateMagazine = {
    _count: MagazineCountAggregateOutputType | null
    _avg: MagazineAvgAggregateOutputType | null
    _sum: MagazineSumAggregateOutputType | null
    _min: MagazineMinAggregateOutputType | null
    _max: MagazineMaxAggregateOutputType | null
  }

  export type MagazineAvgAggregateOutputType = {
    readCount: number | null
  }

  export type MagazineSumAggregateOutputType = {
    readCount: number | null
  }

  export type MagazineMinAggregateOutputType = {
    id: string | null
    title: string | null
    seo: string | null
    file: string | null
    image: string | null
    desc: string | null
    readCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MagazineMaxAggregateOutputType = {
    id: string | null
    title: string | null
    seo: string | null
    file: string | null
    image: string | null
    desc: string | null
    readCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MagazineCountAggregateOutputType = {
    id: number
    title: number
    seo: number
    file: number
    image: number
    desc: number
    readCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MagazineAvgAggregateInputType = {
    readCount?: true
  }

  export type MagazineSumAggregateInputType = {
    readCount?: true
  }

  export type MagazineMinAggregateInputType = {
    id?: true
    title?: true
    seo?: true
    file?: true
    image?: true
    desc?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MagazineMaxAggregateInputType = {
    id?: true
    title?: true
    seo?: true
    file?: true
    image?: true
    desc?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MagazineCountAggregateInputType = {
    id?: true
    title?: true
    seo?: true
    file?: true
    image?: true
    desc?: true
    readCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MagazineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Magazine to aggregate.
     */
    where?: MagazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Magazines to fetch.
     */
    orderBy?: MagazineOrderByWithRelationInput | MagazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MagazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Magazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Magazines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Magazines
    **/
    _count?: true | MagazineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MagazineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MagazineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MagazineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MagazineMaxAggregateInputType
  }

  export type GetMagazineAggregateType<T extends MagazineAggregateArgs> = {
        [P in keyof T & keyof AggregateMagazine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMagazine[P]>
      : GetScalarType<T[P], AggregateMagazine[P]>
  }




  export type MagazineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MagazineWhereInput
    orderBy?: MagazineOrderByWithAggregationInput | MagazineOrderByWithAggregationInput[]
    by: MagazineScalarFieldEnum[] | MagazineScalarFieldEnum
    having?: MagazineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MagazineCountAggregateInputType | true
    _avg?: MagazineAvgAggregateInputType
    _sum?: MagazineSumAggregateInputType
    _min?: MagazineMinAggregateInputType
    _max?: MagazineMaxAggregateInputType
  }

  export type MagazineGroupByOutputType = {
    id: string
    title: string
    seo: string
    file: string
    image: string
    desc: string | null
    readCount: number
    createdAt: Date
    updatedAt: Date
    _count: MagazineCountAggregateOutputType | null
    _avg: MagazineAvgAggregateOutputType | null
    _sum: MagazineSumAggregateOutputType | null
    _min: MagazineMinAggregateOutputType | null
    _max: MagazineMaxAggregateOutputType | null
  }

  type GetMagazineGroupByPayload<T extends MagazineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MagazineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MagazineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MagazineGroupByOutputType[P]>
            : GetScalarType<T[P], MagazineGroupByOutputType[P]>
        }
      >
    >


  export type MagazineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    seo?: boolean
    file?: boolean
    image?: boolean
    desc?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments?: boolean | Magazine$commentsArgs<ExtArgs>
    contributions?: boolean | Magazine$contributionsArgs<ExtArgs>
    _count?: boolean | MagazineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["magazine"]>

  export type MagazineSelectScalar = {
    id?: boolean
    title?: boolean
    seo?: boolean
    file?: boolean
    image?: boolean
    desc?: boolean
    readCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MagazineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Magazine$commentsArgs<ExtArgs>
    contributions?: boolean | Magazine$contributionsArgs<ExtArgs>
    _count?: boolean | MagazineCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MagazinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Magazine"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      seo: string
      file: string
      image: string
      desc: string | null
      readCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["magazine"]>
    composites: {}
  }


  type MagazineGetPayload<S extends boolean | null | undefined | MagazineDefaultArgs> = $Result.GetResult<Prisma.$MagazinePayload, S>

  type MagazineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MagazineFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MagazineCountAggregateInputType | true
    }

  export interface MagazineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Magazine'], meta: { name: 'Magazine' } }
    /**
     * Find zero or one Magazine that matches the filter.
     * @param {MagazineFindUniqueArgs} args - Arguments to find a Magazine
     * @example
     * // Get one Magazine
     * const magazine = await prisma.magazine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MagazineFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MagazineFindUniqueArgs<ExtArgs>>
    ): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Magazine that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MagazineFindUniqueOrThrowArgs} args - Arguments to find a Magazine
     * @example
     * // Get one Magazine
     * const magazine = await prisma.magazine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MagazineFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MagazineFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Magazine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineFindFirstArgs} args - Arguments to find a Magazine
     * @example
     * // Get one Magazine
     * const magazine = await prisma.magazine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MagazineFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MagazineFindFirstArgs<ExtArgs>>
    ): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Magazine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineFindFirstOrThrowArgs} args - Arguments to find a Magazine
     * @example
     * // Get one Magazine
     * const magazine = await prisma.magazine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MagazineFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MagazineFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Magazines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Magazines
     * const magazines = await prisma.magazine.findMany()
     * 
     * // Get first 10 Magazines
     * const magazines = await prisma.magazine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const magazineWithIdOnly = await prisma.magazine.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MagazineFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MagazineFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Magazine.
     * @param {MagazineCreateArgs} args - Arguments to create a Magazine.
     * @example
     * // Create one Magazine
     * const Magazine = await prisma.magazine.create({
     *   data: {
     *     // ... data to create a Magazine
     *   }
     * })
     * 
    **/
    create<T extends MagazineCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MagazineCreateArgs<ExtArgs>>
    ): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Magazines.
     *     @param {MagazineCreateManyArgs} args - Arguments to create many Magazines.
     *     @example
     *     // Create many Magazines
     *     const magazine = await prisma.magazine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MagazineCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MagazineCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Magazine.
     * @param {MagazineDeleteArgs} args - Arguments to delete one Magazine.
     * @example
     * // Delete one Magazine
     * const Magazine = await prisma.magazine.delete({
     *   where: {
     *     // ... filter to delete one Magazine
     *   }
     * })
     * 
    **/
    delete<T extends MagazineDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MagazineDeleteArgs<ExtArgs>>
    ): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Magazine.
     * @param {MagazineUpdateArgs} args - Arguments to update one Magazine.
     * @example
     * // Update one Magazine
     * const magazine = await prisma.magazine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MagazineUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MagazineUpdateArgs<ExtArgs>>
    ): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Magazines.
     * @param {MagazineDeleteManyArgs} args - Arguments to filter Magazines to delete.
     * @example
     * // Delete a few Magazines
     * const { count } = await prisma.magazine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MagazineDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MagazineDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Magazines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Magazines
     * const magazine = await prisma.magazine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MagazineUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MagazineUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Magazine.
     * @param {MagazineUpsertArgs} args - Arguments to update or create a Magazine.
     * @example
     * // Update or create a Magazine
     * const magazine = await prisma.magazine.upsert({
     *   create: {
     *     // ... data to create a Magazine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Magazine we want to update
     *   }
     * })
    **/
    upsert<T extends MagazineUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MagazineUpsertArgs<ExtArgs>>
    ): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Magazines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineCountArgs} args - Arguments to filter Magazines to count.
     * @example
     * // Count the number of Magazines
     * const count = await prisma.magazine.count({
     *   where: {
     *     // ... the filter for the Magazines we want to count
     *   }
     * })
    **/
    count<T extends MagazineCountArgs>(
      args?: Subset<T, MagazineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MagazineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Magazine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MagazineAggregateArgs>(args: Subset<T, MagazineAggregateArgs>): Prisma.PrismaPromise<GetMagazineAggregateType<T>>

    /**
     * Group by Magazine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineGroupByArgs} args - Group by arguments.
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
      T extends MagazineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MagazineGroupByArgs['orderBy'] }
        : { orderBy?: MagazineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MagazineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMagazineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Magazine model
   */
  readonly fields: MagazineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Magazine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MagazineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comments<T extends Magazine$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Magazine$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    contributions<T extends Magazine$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, Magazine$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Magazine model
   */ 
  interface MagazineFieldRefs {
    readonly id: FieldRef<"Magazine", 'String'>
    readonly title: FieldRef<"Magazine", 'String'>
    readonly seo: FieldRef<"Magazine", 'String'>
    readonly file: FieldRef<"Magazine", 'String'>
    readonly image: FieldRef<"Magazine", 'String'>
    readonly desc: FieldRef<"Magazine", 'String'>
    readonly readCount: FieldRef<"Magazine", 'Int'>
    readonly createdAt: FieldRef<"Magazine", 'DateTime'>
    readonly updatedAt: FieldRef<"Magazine", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Magazine findUnique
   */
  export type MagazineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter, which Magazine to fetch.
     */
    where: MagazineWhereUniqueInput
  }


  /**
   * Magazine findUniqueOrThrow
   */
  export type MagazineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter, which Magazine to fetch.
     */
    where: MagazineWhereUniqueInput
  }


  /**
   * Magazine findFirst
   */
  export type MagazineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter, which Magazine to fetch.
     */
    where?: MagazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Magazines to fetch.
     */
    orderBy?: MagazineOrderByWithRelationInput | MagazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Magazines.
     */
    cursor?: MagazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Magazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Magazines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Magazines.
     */
    distinct?: MagazineScalarFieldEnum | MagazineScalarFieldEnum[]
  }


  /**
   * Magazine findFirstOrThrow
   */
  export type MagazineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter, which Magazine to fetch.
     */
    where?: MagazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Magazines to fetch.
     */
    orderBy?: MagazineOrderByWithRelationInput | MagazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Magazines.
     */
    cursor?: MagazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Magazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Magazines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Magazines.
     */
    distinct?: MagazineScalarFieldEnum | MagazineScalarFieldEnum[]
  }


  /**
   * Magazine findMany
   */
  export type MagazineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter, which Magazines to fetch.
     */
    where?: MagazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Magazines to fetch.
     */
    orderBy?: MagazineOrderByWithRelationInput | MagazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Magazines.
     */
    cursor?: MagazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Magazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Magazines.
     */
    skip?: number
    distinct?: MagazineScalarFieldEnum | MagazineScalarFieldEnum[]
  }


  /**
   * Magazine create
   */
  export type MagazineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * The data needed to create a Magazine.
     */
    data: XOR<MagazineCreateInput, MagazineUncheckedCreateInput>
  }


  /**
   * Magazine createMany
   */
  export type MagazineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Magazines.
     */
    data: MagazineCreateManyInput | MagazineCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Magazine update
   */
  export type MagazineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * The data needed to update a Magazine.
     */
    data: XOR<MagazineUpdateInput, MagazineUncheckedUpdateInput>
    /**
     * Choose, which Magazine to update.
     */
    where: MagazineWhereUniqueInput
  }


  /**
   * Magazine updateMany
   */
  export type MagazineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Magazines.
     */
    data: XOR<MagazineUpdateManyMutationInput, MagazineUncheckedUpdateManyInput>
    /**
     * Filter which Magazines to update
     */
    where?: MagazineWhereInput
  }


  /**
   * Magazine upsert
   */
  export type MagazineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * The filter to search for the Magazine to update in case it exists.
     */
    where: MagazineWhereUniqueInput
    /**
     * In case the Magazine found by the `where` argument doesn't exist, create a new Magazine with this data.
     */
    create: XOR<MagazineCreateInput, MagazineUncheckedCreateInput>
    /**
     * In case the Magazine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MagazineUpdateInput, MagazineUncheckedUpdateInput>
  }


  /**
   * Magazine delete
   */
  export type MagazineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter which Magazine to delete.
     */
    where: MagazineWhereUniqueInput
  }


  /**
   * Magazine deleteMany
   */
  export type MagazineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Magazines to delete
     */
    where?: MagazineWhereInput
  }


  /**
   * Magazine.comments
   */
  export type Magazine$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Magazine.contributions
   */
  export type Magazine$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }


  /**
   * Magazine without action
   */
  export type MagazineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MagazineInclude<ExtArgs> | null
  }



  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    showReadCount: boolean | null
    twitter: string | null
    twitterLink: string | null
    instagram: string | null
    instagramLink: string | null
    patreon: string | null
    about_us: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    showReadCount: boolean | null
    twitter: string | null
    twitterLink: string | null
    instagram: string | null
    instagramLink: string | null
    patreon: string | null
    about_us: string | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    showReadCount: number
    twitter: number
    twitterLink: number
    instagram: number
    instagramLink: number
    patreon: number
    about_us: number
    _all: number
  }


  export type SettingsMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    showReadCount?: true
    twitter?: true
    twitterLink?: true
    instagram?: true
    instagramLink?: true
    patreon?: true
    about_us?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    showReadCount?: true
    twitter?: true
    twitterLink?: true
    instagram?: true
    instagramLink?: true
    patreon?: true
    about_us?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    showReadCount?: true
    twitter?: true
    twitterLink?: true
    instagram?: true
    instagramLink?: true
    patreon?: true
    about_us?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    email: string | null
    phone: string | null
    showReadCount: boolean | null
    twitter: string | null
    twitterLink: string | null
    instagram: string | null
    instagramLink: string | null
    patreon: string | null
    about_us: string | null
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    showReadCount?: boolean
    twitter?: boolean
    twitterLink?: boolean
    instagram?: boolean
    instagramLink?: boolean
    patreon?: boolean
    about_us?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    showReadCount?: boolean
    twitter?: boolean
    twitterLink?: boolean
    instagram?: boolean
    instagramLink?: boolean
    patreon?: boolean
    about_us?: boolean
  }


  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      phone: string | null
      showReadCount: boolean | null
      twitter: string | null
      twitterLink: string | null
      instagram: string | null
      instagramLink: string | null
      patreon: string | null
      about_us: string | null
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }


  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SettingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Settings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SettingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SettingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
    **/
    create<T extends SettingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Settings.
     *     @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     *     @example
     *     // Create many Settings
     *     const settings = await prisma.settings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SettingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
    **/
    delete<T extends SettingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SettingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SettingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SettingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
    **/
    upsert<T extends SettingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Settings model
   */ 
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly email: FieldRef<"Settings", 'String'>
    readonly phone: FieldRef<"Settings", 'String'>
    readonly showReadCount: FieldRef<"Settings", 'Boolean'>
    readonly twitter: FieldRef<"Settings", 'String'>
    readonly twitterLink: FieldRef<"Settings", 'String'>
    readonly instagram: FieldRef<"Settings", 'String'>
    readonly instagramLink: FieldRef<"Settings", 'String'>
    readonly patreon: FieldRef<"Settings", 'String'>
    readonly about_us: FieldRef<"Settings", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }


  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }


  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }


  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }


  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }


  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data?: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }


  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }


  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
  }


  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }


  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }


  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
  }


  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    image: 'image',
    coverImage: 'coverImage',
    password: 'password',
    about: 'about',
    twitter: 'twitter',
    twitterLink: 'twitterLink',
    instagramLink: 'instagramLink',
    instagram: 'instagram',
    facebook: 'facebook',
    facebookLink: 'facebookLink',
    youtube: 'youtube',
    youtubeLink: 'youtubeLink',
    role: 'role',
    isConfirm: 'isConfirm',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    seo: 'seo',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    textId: 'textId',
    actualId: 'actualId',
    magazineId: 'magazineId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const TextScalarFieldEnum: {
    id: 'id',
    title: 'title',
    seo: 'seo',
    text: 'text',
    note: 'note',
    image: 'image',
    readCount: 'readCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId',
    isSlider: 'isSlider'
  };

  export type TextScalarFieldEnum = (typeof TextScalarFieldEnum)[keyof typeof TextScalarFieldEnum]


  export const ActualScalarFieldEnum: {
    id: 'id',
    title: 'title',
    seo: 'seo',
    text: 'text',
    note: 'note',
    image: 'image',
    readCount: 'readCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ActualScalarFieldEnum = (typeof ActualScalarFieldEnum)[keyof typeof ActualScalarFieldEnum]


  export const ContributionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startPage: 'startPage',
    endPage: 'endPage',
    file: 'file',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    magazineId: 'magazineId'
  };

  export type ContributionScalarFieldEnum = (typeof ContributionScalarFieldEnum)[keyof typeof ContributionScalarFieldEnum]


  export const MagazineScalarFieldEnum: {
    id: 'id',
    title: 'title',
    seo: 'seo',
    file: 'file',
    image: 'image',
    desc: 'desc',
    readCount: 'readCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MagazineScalarFieldEnum = (typeof MagazineScalarFieldEnum)[keyof typeof MagazineScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    showReadCount: 'showReadCount',
    twitter: 'twitter',
    twitterLink: 'twitterLink',
    instagram: 'instagram',
    instagramLink: 'instagramLink',
    patreon: 'patreon',
    about_us: 'about_us'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    coverImage?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    twitterLink?: StringNullableFilter<"User"> | string | null
    instagramLink?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    facebookLink?: StringNullableFilter<"User"> | string | null
    youtube?: StringNullableFilter<"User"> | string | null
    youtubeLink?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isConfirm?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    articles?: TextListRelationFilter
    actuals?: ActualListRelationFilter
    contributions?: ContributionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    password?: SortOrder
    about?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    twitterLink?: SortOrderInput | SortOrder
    instagramLink?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    facebookLink?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    youtubeLink?: SortOrderInput | SortOrder
    role?: SortOrder
    isConfirm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articles?: TextOrderByRelationAggregateInput
    actuals?: ActualOrderByRelationAggregateInput
    contributions?: ContributionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    coverImage?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    twitterLink?: StringNullableFilter<"User"> | string | null
    instagramLink?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    facebookLink?: StringNullableFilter<"User"> | string | null
    youtube?: StringNullableFilter<"User"> | string | null
    youtubeLink?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isConfirm?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    articles?: TextListRelationFilter
    actuals?: ActualListRelationFilter
    contributions?: ContributionListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    password?: SortOrder
    about?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    twitterLink?: SortOrderInput | SortOrder
    instagramLink?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    facebookLink?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    youtubeLink?: SortOrderInput | SortOrder
    role?: SortOrder
    isConfirm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    about?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitterLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    instagramLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"User"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"User"> | string | null
    facebookLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    youtube?: StringNullableWithAggregatesFilter<"User"> | string | null
    youtubeLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isConfirm?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    seo?: StringFilter<"Category"> | string
    image?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    articles?: TextListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seo?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articles?: TextOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    seo?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    image?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    articles?: TextListRelationFilter
  }, "id" | "name" | "seo">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    seo?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    seo?: StringWithAggregatesFilter<"Category"> | string
    image?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    comment?: StringFilter<"Comment"> | string
    name?: StringFilter<"Comment"> | string
    email?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    textId?: StringNullableFilter<"Comment"> | string | null
    actualId?: StringNullableFilter<"Comment"> | string | null
    magazineId?: StringNullableFilter<"Comment"> | string | null
    text?: XOR<TextNullableRelationFilter, TextWhereInput> | null
    actual?: XOR<ActualNullableRelationFilter, ActualWhereInput> | null
    magazine?: XOR<MagazineNullableRelationFilter, MagazineWhereInput> | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    textId?: SortOrderInput | SortOrder
    actualId?: SortOrderInput | SortOrder
    magazineId?: SortOrderInput | SortOrder
    text?: TextOrderByWithRelationInput
    actual?: ActualOrderByWithRelationInput
    magazine?: MagazineOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    comment?: StringFilter<"Comment"> | string
    name?: StringFilter<"Comment"> | string
    email?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    textId?: StringNullableFilter<"Comment"> | string | null
    actualId?: StringNullableFilter<"Comment"> | string | null
    magazineId?: StringNullableFilter<"Comment"> | string | null
    text?: XOR<TextNullableRelationFilter, TextWhereInput> | null
    actual?: XOR<ActualNullableRelationFilter, ActualWhereInput> | null
    magazine?: XOR<MagazineNullableRelationFilter, MagazineWhereInput> | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    textId?: SortOrderInput | SortOrder
    actualId?: SortOrderInput | SortOrder
    magazineId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    comment?: StringWithAggregatesFilter<"Comment"> | string
    name?: StringWithAggregatesFilter<"Comment"> | string
    email?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    textId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    actualId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    magazineId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type TextWhereInput = {
    AND?: TextWhereInput | TextWhereInput[]
    OR?: TextWhereInput[]
    NOT?: TextWhereInput | TextWhereInput[]
    id?: StringFilter<"Text"> | string
    title?: StringFilter<"Text"> | string
    seo?: StringFilter<"Text"> | string
    text?: StringFilter<"Text"> | string
    note?: StringNullableFilter<"Text"> | string | null
    image?: StringFilter<"Text"> | string
    readCount?: IntFilter<"Text"> | number
    createdAt?: DateTimeFilter<"Text"> | Date | string
    updatedAt?: DateTimeFilter<"Text"> | Date | string
    userId?: StringFilter<"Text"> | string
    categoryId?: StringFilter<"Text"> | string
    isSlider?: BoolFilter<"Text"> | boolean
    comments?: CommentListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type TextOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    text?: SortOrder
    note?: SortOrderInput | SortOrder
    image?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    isSlider?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type TextWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    seo?: string
    AND?: TextWhereInput | TextWhereInput[]
    OR?: TextWhereInput[]
    NOT?: TextWhereInput | TextWhereInput[]
    text?: StringFilter<"Text"> | string
    note?: StringNullableFilter<"Text"> | string | null
    image?: StringFilter<"Text"> | string
    readCount?: IntFilter<"Text"> | number
    createdAt?: DateTimeFilter<"Text"> | Date | string
    updatedAt?: DateTimeFilter<"Text"> | Date | string
    userId?: StringFilter<"Text"> | string
    categoryId?: StringFilter<"Text"> | string
    isSlider?: BoolFilter<"Text"> | boolean
    comments?: CommentListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "id" | "title" | "seo">

  export type TextOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    text?: SortOrder
    note?: SortOrderInput | SortOrder
    image?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    isSlider?: SortOrder
    _count?: TextCountOrderByAggregateInput
    _avg?: TextAvgOrderByAggregateInput
    _max?: TextMaxOrderByAggregateInput
    _min?: TextMinOrderByAggregateInput
    _sum?: TextSumOrderByAggregateInput
  }

  export type TextScalarWhereWithAggregatesInput = {
    AND?: TextScalarWhereWithAggregatesInput | TextScalarWhereWithAggregatesInput[]
    OR?: TextScalarWhereWithAggregatesInput[]
    NOT?: TextScalarWhereWithAggregatesInput | TextScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Text"> | string
    title?: StringWithAggregatesFilter<"Text"> | string
    seo?: StringWithAggregatesFilter<"Text"> | string
    text?: StringWithAggregatesFilter<"Text"> | string
    note?: StringNullableWithAggregatesFilter<"Text"> | string | null
    image?: StringWithAggregatesFilter<"Text"> | string
    readCount?: IntWithAggregatesFilter<"Text"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Text"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Text"> | Date | string
    userId?: StringWithAggregatesFilter<"Text"> | string
    categoryId?: StringWithAggregatesFilter<"Text"> | string
    isSlider?: BoolWithAggregatesFilter<"Text"> | boolean
  }

  export type ActualWhereInput = {
    AND?: ActualWhereInput | ActualWhereInput[]
    OR?: ActualWhereInput[]
    NOT?: ActualWhereInput | ActualWhereInput[]
    id?: StringFilter<"Actual"> | string
    title?: StringFilter<"Actual"> | string
    seo?: StringFilter<"Actual"> | string
    text?: StringFilter<"Actual"> | string
    note?: StringNullableFilter<"Actual"> | string | null
    image?: StringFilter<"Actual"> | string
    readCount?: IntFilter<"Actual"> | number
    createdAt?: DateTimeFilter<"Actual"> | Date | string
    updatedAt?: DateTimeFilter<"Actual"> | Date | string
    userId?: StringFilter<"Actual"> | string
    comments?: CommentListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ActualOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    text?: SortOrder
    note?: SortOrderInput | SortOrder
    image?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ActualWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    seo?: string
    AND?: ActualWhereInput | ActualWhereInput[]
    OR?: ActualWhereInput[]
    NOT?: ActualWhereInput | ActualWhereInput[]
    text?: StringFilter<"Actual"> | string
    note?: StringNullableFilter<"Actual"> | string | null
    image?: StringFilter<"Actual"> | string
    readCount?: IntFilter<"Actual"> | number
    createdAt?: DateTimeFilter<"Actual"> | Date | string
    updatedAt?: DateTimeFilter<"Actual"> | Date | string
    userId?: StringFilter<"Actual"> | string
    comments?: CommentListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "title" | "seo">

  export type ActualOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    text?: SortOrder
    note?: SortOrderInput | SortOrder
    image?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ActualCountOrderByAggregateInput
    _avg?: ActualAvgOrderByAggregateInput
    _max?: ActualMaxOrderByAggregateInput
    _min?: ActualMinOrderByAggregateInput
    _sum?: ActualSumOrderByAggregateInput
  }

  export type ActualScalarWhereWithAggregatesInput = {
    AND?: ActualScalarWhereWithAggregatesInput | ActualScalarWhereWithAggregatesInput[]
    OR?: ActualScalarWhereWithAggregatesInput[]
    NOT?: ActualScalarWhereWithAggregatesInput | ActualScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Actual"> | string
    title?: StringWithAggregatesFilter<"Actual"> | string
    seo?: StringWithAggregatesFilter<"Actual"> | string
    text?: StringWithAggregatesFilter<"Actual"> | string
    note?: StringNullableWithAggregatesFilter<"Actual"> | string | null
    image?: StringWithAggregatesFilter<"Actual"> | string
    readCount?: IntWithAggregatesFilter<"Actual"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Actual"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Actual"> | Date | string
    userId?: StringWithAggregatesFilter<"Actual"> | string
  }

  export type ContributionWhereInput = {
    AND?: ContributionWhereInput | ContributionWhereInput[]
    OR?: ContributionWhereInput[]
    NOT?: ContributionWhereInput | ContributionWhereInput[]
    id?: StringFilter<"Contribution"> | string
    title?: StringFilter<"Contribution"> | string
    startPage?: StringFilter<"Contribution"> | string
    endPage?: StringFilter<"Contribution"> | string
    file?: StringFilter<"Contribution"> | string
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
    userId?: StringFilter<"Contribution"> | string
    magazineId?: StringFilter<"Contribution"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    magazine?: XOR<MagazineRelationFilter, MagazineWhereInput>
  }

  export type ContributionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startPage?: SortOrder
    endPage?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    magazineId?: SortOrder
    user?: UserOrderByWithRelationInput
    magazine?: MagazineOrderByWithRelationInput
  }

  export type ContributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContributionWhereInput | ContributionWhereInput[]
    OR?: ContributionWhereInput[]
    NOT?: ContributionWhereInput | ContributionWhereInput[]
    title?: StringFilter<"Contribution"> | string
    startPage?: StringFilter<"Contribution"> | string
    endPage?: StringFilter<"Contribution"> | string
    file?: StringFilter<"Contribution"> | string
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
    userId?: StringFilter<"Contribution"> | string
    magazineId?: StringFilter<"Contribution"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    magazine?: XOR<MagazineRelationFilter, MagazineWhereInput>
  }, "id">

  export type ContributionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startPage?: SortOrder
    endPage?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    magazineId?: SortOrder
    _count?: ContributionCountOrderByAggregateInput
    _max?: ContributionMaxOrderByAggregateInput
    _min?: ContributionMinOrderByAggregateInput
  }

  export type ContributionScalarWhereWithAggregatesInput = {
    AND?: ContributionScalarWhereWithAggregatesInput | ContributionScalarWhereWithAggregatesInput[]
    OR?: ContributionScalarWhereWithAggregatesInput[]
    NOT?: ContributionScalarWhereWithAggregatesInput | ContributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contribution"> | string
    title?: StringWithAggregatesFilter<"Contribution"> | string
    startPage?: StringWithAggregatesFilter<"Contribution"> | string
    endPage?: StringWithAggregatesFilter<"Contribution"> | string
    file?: StringWithAggregatesFilter<"Contribution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
    userId?: StringWithAggregatesFilter<"Contribution"> | string
    magazineId?: StringWithAggregatesFilter<"Contribution"> | string
  }

  export type MagazineWhereInput = {
    AND?: MagazineWhereInput | MagazineWhereInput[]
    OR?: MagazineWhereInput[]
    NOT?: MagazineWhereInput | MagazineWhereInput[]
    id?: StringFilter<"Magazine"> | string
    title?: StringFilter<"Magazine"> | string
    seo?: StringFilter<"Magazine"> | string
    file?: StringFilter<"Magazine"> | string
    image?: StringFilter<"Magazine"> | string
    desc?: StringNullableFilter<"Magazine"> | string | null
    readCount?: IntFilter<"Magazine"> | number
    createdAt?: DateTimeFilter<"Magazine"> | Date | string
    updatedAt?: DateTimeFilter<"Magazine"> | Date | string
    comments?: CommentListRelationFilter
    contributions?: ContributionListRelationFilter
  }

  export type MagazineOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    file?: SortOrder
    image?: SortOrder
    desc?: SortOrderInput | SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    contributions?: ContributionOrderByRelationAggregateInput
  }

  export type MagazineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    seo?: string
    AND?: MagazineWhereInput | MagazineWhereInput[]
    OR?: MagazineWhereInput[]
    NOT?: MagazineWhereInput | MagazineWhereInput[]
    file?: StringFilter<"Magazine"> | string
    image?: StringFilter<"Magazine"> | string
    desc?: StringNullableFilter<"Magazine"> | string | null
    readCount?: IntFilter<"Magazine"> | number
    createdAt?: DateTimeFilter<"Magazine"> | Date | string
    updatedAt?: DateTimeFilter<"Magazine"> | Date | string
    comments?: CommentListRelationFilter
    contributions?: ContributionListRelationFilter
  }, "id" | "title" | "seo">

  export type MagazineOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    file?: SortOrder
    image?: SortOrder
    desc?: SortOrderInput | SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MagazineCountOrderByAggregateInput
    _avg?: MagazineAvgOrderByAggregateInput
    _max?: MagazineMaxOrderByAggregateInput
    _min?: MagazineMinOrderByAggregateInput
    _sum?: MagazineSumOrderByAggregateInput
  }

  export type MagazineScalarWhereWithAggregatesInput = {
    AND?: MagazineScalarWhereWithAggregatesInput | MagazineScalarWhereWithAggregatesInput[]
    OR?: MagazineScalarWhereWithAggregatesInput[]
    NOT?: MagazineScalarWhereWithAggregatesInput | MagazineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Magazine"> | string
    title?: StringWithAggregatesFilter<"Magazine"> | string
    seo?: StringWithAggregatesFilter<"Magazine"> | string
    file?: StringWithAggregatesFilter<"Magazine"> | string
    image?: StringWithAggregatesFilter<"Magazine"> | string
    desc?: StringNullableWithAggregatesFilter<"Magazine"> | string | null
    readCount?: IntWithAggregatesFilter<"Magazine"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Magazine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Magazine"> | Date | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    email?: StringNullableFilter<"Settings"> | string | null
    phone?: StringNullableFilter<"Settings"> | string | null
    showReadCount?: BoolNullableFilter<"Settings"> | boolean | null
    twitter?: StringNullableFilter<"Settings"> | string | null
    twitterLink?: StringNullableFilter<"Settings"> | string | null
    instagram?: StringNullableFilter<"Settings"> | string | null
    instagramLink?: StringNullableFilter<"Settings"> | string | null
    patreon?: StringNullableFilter<"Settings"> | string | null
    about_us?: StringNullableFilter<"Settings"> | string | null
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    showReadCount?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    twitterLink?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    instagramLink?: SortOrderInput | SortOrder
    patreon?: SortOrderInput | SortOrder
    about_us?: SortOrderInput | SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    email?: StringNullableFilter<"Settings"> | string | null
    phone?: StringNullableFilter<"Settings"> | string | null
    showReadCount?: BoolNullableFilter<"Settings"> | boolean | null
    twitter?: StringNullableFilter<"Settings"> | string | null
    twitterLink?: StringNullableFilter<"Settings"> | string | null
    instagram?: StringNullableFilter<"Settings"> | string | null
    instagramLink?: StringNullableFilter<"Settings"> | string | null
    patreon?: StringNullableFilter<"Settings"> | string | null
    about_us?: StringNullableFilter<"Settings"> | string | null
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    showReadCount?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    twitterLink?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    instagramLink?: SortOrderInput | SortOrder
    patreon?: SortOrderInput | SortOrder
    about_us?: SortOrderInput | SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    email?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    showReadCount?: BoolNullableWithAggregatesFilter<"Settings"> | boolean | null
    twitter?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    twitterLink?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    instagramLink?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    patreon?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    about_us?: StringNullableWithAggregatesFilter<"Settings"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    image?: string | null
    coverImage?: string | null
    password: string
    about?: string | null
    twitter?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    instagram?: string | null
    facebook?: string | null
    facebookLink?: string | null
    youtube?: string | null
    youtubeLink?: string | null
    role?: $Enums.UserRole
    isConfirm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: TextCreateNestedManyWithoutUserInput
    actuals?: ActualCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    image?: string | null
    coverImage?: string | null
    password: string
    about?: string | null
    twitter?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    instagram?: string | null
    facebook?: string | null
    facebookLink?: string | null
    youtube?: string | null
    youtubeLink?: string | null
    role?: $Enums.UserRole
    isConfirm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: TextUncheckedCreateNestedManyWithoutUserInput
    actuals?: ActualUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isConfirm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: TextUpdateManyWithoutUserNestedInput
    actuals?: ActualUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isConfirm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: TextUncheckedUpdateManyWithoutUserNestedInput
    actuals?: ActualUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    email: string
    image?: string | null
    coverImage?: string | null
    password: string
    about?: string | null
    twitter?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    instagram?: string | null
    facebook?: string | null
    facebookLink?: string | null
    youtube?: string | null
    youtubeLink?: string | null
    role?: $Enums.UserRole
    isConfirm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isConfirm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isConfirm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    seo: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: TextCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    seo: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: TextUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: TextUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: TextUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    seo: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedOneWithoutCommentsInput
    actual?: ActualCreateNestedOneWithoutCommentsInput
    magazine?: MagazineCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    textId?: string | null
    actualId?: string | null
    magazineId?: string | null
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateOneWithoutCommentsNestedInput
    actual?: ActualUpdateOneWithoutCommentsNestedInput
    magazine?: MagazineUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    textId?: NullableStringFieldUpdateOperationsInput | string | null
    actualId?: NullableStringFieldUpdateOperationsInput | string | null
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    textId?: string | null
    actualId?: string | null
    magazineId?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    textId?: NullableStringFieldUpdateOperationsInput | string | null
    actualId?: NullableStringFieldUpdateOperationsInput | string | null
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextCreateInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isSlider?: boolean
    comments?: CommentCreateNestedManyWithoutTextInput
    user: UserCreateNestedOneWithoutArticlesInput
    category: CategoryCreateNestedOneWithoutArticlesInput
  }

  export type TextUncheckedCreateInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
    isSlider?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutTextInput
  }

  export type TextUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutTextNestedInput
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    category?: CategoryUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type TextUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutTextNestedInput
  }

  export type TextCreateManyInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
    isSlider?: boolean
  }

  export type TextUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TextUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActualCreateInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutActualInput
    user: UserCreateNestedOneWithoutActualsInput
  }

  export type ActualUncheckedCreateInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    comments?: CommentUncheckedCreateNestedManyWithoutActualInput
  }

  export type ActualUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutActualNestedInput
    user?: UserUpdateOneRequiredWithoutActualsNestedInput
  }

  export type ActualUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutActualNestedInput
  }

  export type ActualCreateManyInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ActualUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActualUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributionCreateInput = {
    id?: string
    title: string
    startPage: string
    endPage: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContributionsInput
    magazine: MagazineCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateInput = {
    id?: string
    title: string
    startPage: string
    endPage: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    magazineId: string
  }

  export type ContributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startPage?: StringFieldUpdateOperationsInput | string
    endPage?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContributionsNestedInput
    magazine?: MagazineUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startPage?: StringFieldUpdateOperationsInput | string
    endPage?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    magazineId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributionCreateManyInput = {
    id?: string
    title: string
    startPage: string
    endPage: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    magazineId: string
  }

  export type ContributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startPage?: StringFieldUpdateOperationsInput | string
    endPage?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startPage?: StringFieldUpdateOperationsInput | string
    endPage?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    magazineId?: StringFieldUpdateOperationsInput | string
  }

  export type MagazineCreateInput = {
    id?: string
    title: string
    seo: string
    file: string
    image: string
    desc?: string | null
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutMagazineInput
    contributions?: ContributionCreateNestedManyWithoutMagazineInput
  }

  export type MagazineUncheckedCreateInput = {
    id?: string
    title: string
    seo: string
    file: string
    image: string
    desc?: string | null
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutMagazineInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutMagazineInput
  }

  export type MagazineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutMagazineNestedInput
    contributions?: ContributionUpdateManyWithoutMagazineNestedInput
  }

  export type MagazineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutMagazineNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutMagazineNestedInput
  }

  export type MagazineCreateManyInput = {
    id?: string
    title: string
    seo: string
    file: string
    image: string
    desc?: string | null
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MagazineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagazineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    showReadCount?: boolean | null
    twitter?: string | null
    twitterLink?: string | null
    instagram?: string | null
    instagramLink?: string | null
    patreon?: string | null
    about_us?: string | null
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    showReadCount?: boolean | null
    twitter?: string | null
    twitterLink?: string | null
    instagram?: string | null
    instagramLink?: string | null
    patreon?: string | null
    about_us?: string | null
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    showReadCount?: NullableBoolFieldUpdateOperationsInput | boolean | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    patreon?: NullableStringFieldUpdateOperationsInput | string | null
    about_us?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    showReadCount?: NullableBoolFieldUpdateOperationsInput | boolean | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    patreon?: NullableStringFieldUpdateOperationsInput | string | null
    about_us?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsCreateManyInput = {
    id?: string
    email?: string | null
    phone?: string | null
    showReadCount?: boolean | null
    twitter?: string | null
    twitterLink?: string | null
    instagram?: string | null
    instagramLink?: string | null
    patreon?: string | null
    about_us?: string | null
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    showReadCount?: NullableBoolFieldUpdateOperationsInput | boolean | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    patreon?: NullableStringFieldUpdateOperationsInput | string | null
    about_us?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    showReadCount?: NullableBoolFieldUpdateOperationsInput | boolean | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    patreon?: NullableStringFieldUpdateOperationsInput | string | null
    about_us?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TextListRelationFilter = {
    every?: TextWhereInput
    some?: TextWhereInput
    none?: TextWhereInput
  }

  export type ActualListRelationFilter = {
    every?: ActualWhereInput
    some?: ActualWhereInput
    none?: ActualWhereInput
  }

  export type ContributionListRelationFilter = {
    every?: ContributionWhereInput
    some?: ContributionWhereInput
    none?: ContributionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TextOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActualOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    image?: SortOrder
    coverImage?: SortOrder
    password?: SortOrder
    about?: SortOrder
    twitter?: SortOrder
    twitterLink?: SortOrder
    instagramLink?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    facebookLink?: SortOrder
    youtube?: SortOrder
    youtubeLink?: SortOrder
    role?: SortOrder
    isConfirm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    image?: SortOrder
    coverImage?: SortOrder
    password?: SortOrder
    about?: SortOrder
    twitter?: SortOrder
    twitterLink?: SortOrder
    instagramLink?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    facebookLink?: SortOrder
    youtube?: SortOrder
    youtubeLink?: SortOrder
    role?: SortOrder
    isConfirm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    image?: SortOrder
    coverImage?: SortOrder
    password?: SortOrder
    about?: SortOrder
    twitter?: SortOrder
    twitterLink?: SortOrder
    instagramLink?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    facebookLink?: SortOrder
    youtube?: SortOrder
    youtubeLink?: SortOrder
    role?: SortOrder
    isConfirm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seo?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seo?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seo?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TextNullableRelationFilter = {
    is?: TextWhereInput | null
    isNot?: TextWhereInput | null
  }

  export type ActualNullableRelationFilter = {
    is?: ActualWhereInput | null
    isNot?: ActualWhereInput | null
  }

  export type MagazineNullableRelationFilter = {
    is?: MagazineWhereInput | null
    isNot?: MagazineWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    textId?: SortOrder
    actualId?: SortOrder
    magazineId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    textId?: SortOrder
    actualId?: SortOrder
    magazineId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    textId?: SortOrder
    actualId?: SortOrder
    magazineId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TextCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    text?: SortOrder
    note?: SortOrder
    image?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    isSlider?: SortOrder
  }

  export type TextAvgOrderByAggregateInput = {
    readCount?: SortOrder
  }

  export type TextMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    text?: SortOrder
    note?: SortOrder
    image?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    isSlider?: SortOrder
  }

  export type TextMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    text?: SortOrder
    note?: SortOrder
    image?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    isSlider?: SortOrder
  }

  export type TextSumOrderByAggregateInput = {
    readCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ActualCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    text?: SortOrder
    note?: SortOrder
    image?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ActualAvgOrderByAggregateInput = {
    readCount?: SortOrder
  }

  export type ActualMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    text?: SortOrder
    note?: SortOrder
    image?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ActualMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    text?: SortOrder
    note?: SortOrder
    image?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ActualSumOrderByAggregateInput = {
    readCount?: SortOrder
  }

  export type MagazineRelationFilter = {
    is?: MagazineWhereInput
    isNot?: MagazineWhereInput
  }

  export type ContributionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startPage?: SortOrder
    endPage?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    magazineId?: SortOrder
  }

  export type ContributionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startPage?: SortOrder
    endPage?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    magazineId?: SortOrder
  }

  export type ContributionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startPage?: SortOrder
    endPage?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    magazineId?: SortOrder
  }

  export type MagazineCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    file?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MagazineAvgOrderByAggregateInput = {
    readCount?: SortOrder
  }

  export type MagazineMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    file?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MagazineMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    seo?: SortOrder
    file?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    readCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MagazineSumOrderByAggregateInput = {
    readCount?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    showReadCount?: SortOrder
    twitter?: SortOrder
    twitterLink?: SortOrder
    instagram?: SortOrder
    instagramLink?: SortOrder
    patreon?: SortOrder
    about_us?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    showReadCount?: SortOrder
    twitter?: SortOrder
    twitterLink?: SortOrder
    instagram?: SortOrder
    instagramLink?: SortOrder
    patreon?: SortOrder
    about_us?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    showReadCount?: SortOrder
    twitter?: SortOrder
    twitterLink?: SortOrder
    instagram?: SortOrder
    instagramLink?: SortOrder
    patreon?: SortOrder
    about_us?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TextCreateNestedManyWithoutUserInput = {
    create?: XOR<TextCreateWithoutUserInput, TextUncheckedCreateWithoutUserInput> | TextCreateWithoutUserInput[] | TextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TextCreateOrConnectWithoutUserInput | TextCreateOrConnectWithoutUserInput[]
    createMany?: TextCreateManyUserInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type ActualCreateNestedManyWithoutUserInput = {
    create?: XOR<ActualCreateWithoutUserInput, ActualUncheckedCreateWithoutUserInput> | ActualCreateWithoutUserInput[] | ActualUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActualCreateOrConnectWithoutUserInput | ActualCreateOrConnectWithoutUserInput[]
    createMany?: ActualCreateManyUserInputEnvelope
    connect?: ActualWhereUniqueInput | ActualWhereUniqueInput[]
  }

  export type ContributionCreateNestedManyWithoutUserInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type TextUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TextCreateWithoutUserInput, TextUncheckedCreateWithoutUserInput> | TextCreateWithoutUserInput[] | TextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TextCreateOrConnectWithoutUserInput | TextCreateOrConnectWithoutUserInput[]
    createMany?: TextCreateManyUserInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type ActualUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActualCreateWithoutUserInput, ActualUncheckedCreateWithoutUserInput> | ActualCreateWithoutUserInput[] | ActualUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActualCreateOrConnectWithoutUserInput | ActualCreateOrConnectWithoutUserInput[]
    createMany?: ActualCreateManyUserInputEnvelope
    connect?: ActualWhereUniqueInput | ActualWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TextUpdateManyWithoutUserNestedInput = {
    create?: XOR<TextCreateWithoutUserInput, TextUncheckedCreateWithoutUserInput> | TextCreateWithoutUserInput[] | TextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TextCreateOrConnectWithoutUserInput | TextCreateOrConnectWithoutUserInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutUserInput | TextUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TextCreateManyUserInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutUserInput | TextUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TextUpdateManyWithWhereWithoutUserInput | TextUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type ActualUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActualCreateWithoutUserInput, ActualUncheckedCreateWithoutUserInput> | ActualCreateWithoutUserInput[] | ActualUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActualCreateOrConnectWithoutUserInput | ActualCreateOrConnectWithoutUserInput[]
    upsert?: ActualUpsertWithWhereUniqueWithoutUserInput | ActualUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActualCreateManyUserInputEnvelope
    set?: ActualWhereUniqueInput | ActualWhereUniqueInput[]
    disconnect?: ActualWhereUniqueInput | ActualWhereUniqueInput[]
    delete?: ActualWhereUniqueInput | ActualWhereUniqueInput[]
    connect?: ActualWhereUniqueInput | ActualWhereUniqueInput[]
    update?: ActualUpdateWithWhereUniqueWithoutUserInput | ActualUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActualUpdateManyWithWhereWithoutUserInput | ActualUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActualScalarWhereInput | ActualScalarWhereInput[]
  }

  export type ContributionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutUserInput | ContributionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutUserInput | ContributionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutUserInput | ContributionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type TextUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TextCreateWithoutUserInput, TextUncheckedCreateWithoutUserInput> | TextCreateWithoutUserInput[] | TextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TextCreateOrConnectWithoutUserInput | TextCreateOrConnectWithoutUserInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutUserInput | TextUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TextCreateManyUserInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutUserInput | TextUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TextUpdateManyWithWhereWithoutUserInput | TextUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type ActualUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActualCreateWithoutUserInput, ActualUncheckedCreateWithoutUserInput> | ActualCreateWithoutUserInput[] | ActualUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActualCreateOrConnectWithoutUserInput | ActualCreateOrConnectWithoutUserInput[]
    upsert?: ActualUpsertWithWhereUniqueWithoutUserInput | ActualUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActualCreateManyUserInputEnvelope
    set?: ActualWhereUniqueInput | ActualWhereUniqueInput[]
    disconnect?: ActualWhereUniqueInput | ActualWhereUniqueInput[]
    delete?: ActualWhereUniqueInput | ActualWhereUniqueInput[]
    connect?: ActualWhereUniqueInput | ActualWhereUniqueInput[]
    update?: ActualUpdateWithWhereUniqueWithoutUserInput | ActualUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActualUpdateManyWithWhereWithoutUserInput | ActualUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActualScalarWhereInput | ActualScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutUserInput | ContributionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutUserInput | ContributionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutUserInput | ContributionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type TextCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TextCreateWithoutCategoryInput, TextUncheckedCreateWithoutCategoryInput> | TextCreateWithoutCategoryInput[] | TextUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCategoryInput | TextCreateOrConnectWithoutCategoryInput[]
    createMany?: TextCreateManyCategoryInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type TextUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TextCreateWithoutCategoryInput, TextUncheckedCreateWithoutCategoryInput> | TextCreateWithoutCategoryInput[] | TextUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCategoryInput | TextCreateOrConnectWithoutCategoryInput[]
    createMany?: TextCreateManyCategoryInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type TextUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TextCreateWithoutCategoryInput, TextUncheckedCreateWithoutCategoryInput> | TextCreateWithoutCategoryInput[] | TextUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCategoryInput | TextCreateOrConnectWithoutCategoryInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutCategoryInput | TextUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TextCreateManyCategoryInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutCategoryInput | TextUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TextUpdateManyWithWhereWithoutCategoryInput | TextUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type TextUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TextCreateWithoutCategoryInput, TextUncheckedCreateWithoutCategoryInput> | TextCreateWithoutCategoryInput[] | TextUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCategoryInput | TextCreateOrConnectWithoutCategoryInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutCategoryInput | TextUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TextCreateManyCategoryInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutCategoryInput | TextUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TextUpdateManyWithWhereWithoutCategoryInput | TextUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type TextCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TextCreateWithoutCommentsInput, TextUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TextCreateOrConnectWithoutCommentsInput
    connect?: TextWhereUniqueInput
  }

  export type ActualCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ActualCreateWithoutCommentsInput, ActualUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ActualCreateOrConnectWithoutCommentsInput
    connect?: ActualWhereUniqueInput
  }

  export type MagazineCreateNestedOneWithoutCommentsInput = {
    create?: XOR<MagazineCreateWithoutCommentsInput, MagazineUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MagazineCreateOrConnectWithoutCommentsInput
    connect?: MagazineWhereUniqueInput
  }

  export type TextUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<TextCreateWithoutCommentsInput, TextUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TextCreateOrConnectWithoutCommentsInput
    upsert?: TextUpsertWithoutCommentsInput
    disconnect?: TextWhereInput | boolean
    delete?: TextWhereInput | boolean
    connect?: TextWhereUniqueInput
    update?: XOR<XOR<TextUpdateToOneWithWhereWithoutCommentsInput, TextUpdateWithoutCommentsInput>, TextUncheckedUpdateWithoutCommentsInput>
  }

  export type ActualUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<ActualCreateWithoutCommentsInput, ActualUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ActualCreateOrConnectWithoutCommentsInput
    upsert?: ActualUpsertWithoutCommentsInput
    disconnect?: ActualWhereInput | boolean
    delete?: ActualWhereInput | boolean
    connect?: ActualWhereUniqueInput
    update?: XOR<XOR<ActualUpdateToOneWithWhereWithoutCommentsInput, ActualUpdateWithoutCommentsInput>, ActualUncheckedUpdateWithoutCommentsInput>
  }

  export type MagazineUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<MagazineCreateWithoutCommentsInput, MagazineUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MagazineCreateOrConnectWithoutCommentsInput
    upsert?: MagazineUpsertWithoutCommentsInput
    disconnect?: MagazineWhereInput | boolean
    delete?: MagazineWhereInput | boolean
    connect?: MagazineWhereUniqueInput
    update?: XOR<XOR<MagazineUpdateToOneWithWhereWithoutCommentsInput, MagazineUpdateWithoutCommentsInput>, MagazineUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentCreateNestedManyWithoutTextInput = {
    create?: XOR<CommentCreateWithoutTextInput, CommentUncheckedCreateWithoutTextInput> | CommentCreateWithoutTextInput[] | CommentUncheckedCreateWithoutTextInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTextInput | CommentCreateOrConnectWithoutTextInput[]
    createMany?: CommentCreateManyTextInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutArticlesInput = {
    create?: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput
    connect?: CategoryWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutTextInput = {
    create?: XOR<CommentCreateWithoutTextInput, CommentUncheckedCreateWithoutTextInput> | CommentCreateWithoutTextInput[] | CommentUncheckedCreateWithoutTextInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTextInput | CommentCreateOrConnectWithoutTextInput[]
    createMany?: CommentCreateManyTextInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUpdateManyWithoutTextNestedInput = {
    create?: XOR<CommentCreateWithoutTextInput, CommentUncheckedCreateWithoutTextInput> | CommentCreateWithoutTextInput[] | CommentUncheckedCreateWithoutTextInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTextInput | CommentCreateOrConnectWithoutTextInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTextInput | CommentUpsertWithWhereUniqueWithoutTextInput[]
    createMany?: CommentCreateManyTextInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTextInput | CommentUpdateWithWhereUniqueWithoutTextInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTextInput | CommentUpdateManyWithWhereWithoutTextInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type CategoryUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput
    upsert?: CategoryUpsertWithoutArticlesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutArticlesInput, CategoryUpdateWithoutArticlesInput>, CategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type CommentUncheckedUpdateManyWithoutTextNestedInput = {
    create?: XOR<CommentCreateWithoutTextInput, CommentUncheckedCreateWithoutTextInput> | CommentCreateWithoutTextInput[] | CommentUncheckedCreateWithoutTextInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTextInput | CommentCreateOrConnectWithoutTextInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTextInput | CommentUpsertWithWhereUniqueWithoutTextInput[]
    createMany?: CommentCreateManyTextInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTextInput | CommentUpdateWithWhereUniqueWithoutTextInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTextInput | CommentUpdateManyWithWhereWithoutTextInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentCreateNestedManyWithoutActualInput = {
    create?: XOR<CommentCreateWithoutActualInput, CommentUncheckedCreateWithoutActualInput> | CommentCreateWithoutActualInput[] | CommentUncheckedCreateWithoutActualInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutActualInput | CommentCreateOrConnectWithoutActualInput[]
    createMany?: CommentCreateManyActualInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutActualsInput = {
    create?: XOR<UserCreateWithoutActualsInput, UserUncheckedCreateWithoutActualsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActualsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutActualInput = {
    create?: XOR<CommentCreateWithoutActualInput, CommentUncheckedCreateWithoutActualInput> | CommentCreateWithoutActualInput[] | CommentUncheckedCreateWithoutActualInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutActualInput | CommentCreateOrConnectWithoutActualInput[]
    createMany?: CommentCreateManyActualInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUpdateManyWithoutActualNestedInput = {
    create?: XOR<CommentCreateWithoutActualInput, CommentUncheckedCreateWithoutActualInput> | CommentCreateWithoutActualInput[] | CommentUncheckedCreateWithoutActualInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutActualInput | CommentCreateOrConnectWithoutActualInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutActualInput | CommentUpsertWithWhereUniqueWithoutActualInput[]
    createMany?: CommentCreateManyActualInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutActualInput | CommentUpdateWithWhereUniqueWithoutActualInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutActualInput | CommentUpdateManyWithWhereWithoutActualInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutActualsNestedInput = {
    create?: XOR<UserCreateWithoutActualsInput, UserUncheckedCreateWithoutActualsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActualsInput
    upsert?: UserUpsertWithoutActualsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActualsInput, UserUpdateWithoutActualsInput>, UserUncheckedUpdateWithoutActualsInput>
  }

  export type CommentUncheckedUpdateManyWithoutActualNestedInput = {
    create?: XOR<CommentCreateWithoutActualInput, CommentUncheckedCreateWithoutActualInput> | CommentCreateWithoutActualInput[] | CommentUncheckedCreateWithoutActualInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutActualInput | CommentCreateOrConnectWithoutActualInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutActualInput | CommentUpsertWithWhereUniqueWithoutActualInput[]
    createMany?: CommentCreateManyActualInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutActualInput | CommentUpdateWithWhereUniqueWithoutActualInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutActualInput | CommentUpdateManyWithWhereWithoutActualInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContributionsInput = {
    create?: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContributionsInput
    connect?: UserWhereUniqueInput
  }

  export type MagazineCreateNestedOneWithoutContributionsInput = {
    create?: XOR<MagazineCreateWithoutContributionsInput, MagazineUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: MagazineCreateOrConnectWithoutContributionsInput
    connect?: MagazineWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContributionsInput
    upsert?: UserUpsertWithoutContributionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContributionsInput, UserUpdateWithoutContributionsInput>, UserUncheckedUpdateWithoutContributionsInput>
  }

  export type MagazineUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: XOR<MagazineCreateWithoutContributionsInput, MagazineUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: MagazineCreateOrConnectWithoutContributionsInput
    upsert?: MagazineUpsertWithoutContributionsInput
    connect?: MagazineWhereUniqueInput
    update?: XOR<XOR<MagazineUpdateToOneWithWhereWithoutContributionsInput, MagazineUpdateWithoutContributionsInput>, MagazineUncheckedUpdateWithoutContributionsInput>
  }

  export type CommentCreateNestedManyWithoutMagazineInput = {
    create?: XOR<CommentCreateWithoutMagazineInput, CommentUncheckedCreateWithoutMagazineInput> | CommentCreateWithoutMagazineInput[] | CommentUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMagazineInput | CommentCreateOrConnectWithoutMagazineInput[]
    createMany?: CommentCreateManyMagazineInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ContributionCreateNestedManyWithoutMagazineInput = {
    create?: XOR<ContributionCreateWithoutMagazineInput, ContributionUncheckedCreateWithoutMagazineInput> | ContributionCreateWithoutMagazineInput[] | ContributionUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutMagazineInput | ContributionCreateOrConnectWithoutMagazineInput[]
    createMany?: ContributionCreateManyMagazineInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutMagazineInput = {
    create?: XOR<CommentCreateWithoutMagazineInput, CommentUncheckedCreateWithoutMagazineInput> | CommentCreateWithoutMagazineInput[] | CommentUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMagazineInput | CommentCreateOrConnectWithoutMagazineInput[]
    createMany?: CommentCreateManyMagazineInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutMagazineInput = {
    create?: XOR<ContributionCreateWithoutMagazineInput, ContributionUncheckedCreateWithoutMagazineInput> | ContributionCreateWithoutMagazineInput[] | ContributionUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutMagazineInput | ContributionCreateOrConnectWithoutMagazineInput[]
    createMany?: ContributionCreateManyMagazineInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type CommentUpdateManyWithoutMagazineNestedInput = {
    create?: XOR<CommentCreateWithoutMagazineInput, CommentUncheckedCreateWithoutMagazineInput> | CommentCreateWithoutMagazineInput[] | CommentUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMagazineInput | CommentCreateOrConnectWithoutMagazineInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMagazineInput | CommentUpsertWithWhereUniqueWithoutMagazineInput[]
    createMany?: CommentCreateManyMagazineInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMagazineInput | CommentUpdateWithWhereUniqueWithoutMagazineInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMagazineInput | CommentUpdateManyWithWhereWithoutMagazineInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ContributionUpdateManyWithoutMagazineNestedInput = {
    create?: XOR<ContributionCreateWithoutMagazineInput, ContributionUncheckedCreateWithoutMagazineInput> | ContributionCreateWithoutMagazineInput[] | ContributionUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutMagazineInput | ContributionCreateOrConnectWithoutMagazineInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutMagazineInput | ContributionUpsertWithWhereUniqueWithoutMagazineInput[]
    createMany?: ContributionCreateManyMagazineInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutMagazineInput | ContributionUpdateWithWhereUniqueWithoutMagazineInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutMagazineInput | ContributionUpdateManyWithWhereWithoutMagazineInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutMagazineNestedInput = {
    create?: XOR<CommentCreateWithoutMagazineInput, CommentUncheckedCreateWithoutMagazineInput> | CommentCreateWithoutMagazineInput[] | CommentUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMagazineInput | CommentCreateOrConnectWithoutMagazineInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMagazineInput | CommentUpsertWithWhereUniqueWithoutMagazineInput[]
    createMany?: CommentCreateManyMagazineInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMagazineInput | CommentUpdateWithWhereUniqueWithoutMagazineInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMagazineInput | CommentUpdateManyWithWhereWithoutMagazineInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutMagazineNestedInput = {
    create?: XOR<ContributionCreateWithoutMagazineInput, ContributionUncheckedCreateWithoutMagazineInput> | ContributionCreateWithoutMagazineInput[] | ContributionUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutMagazineInput | ContributionCreateOrConnectWithoutMagazineInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutMagazineInput | ContributionUpsertWithWhereUniqueWithoutMagazineInput[]
    createMany?: ContributionCreateManyMagazineInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutMagazineInput | ContributionUpdateWithWhereUniqueWithoutMagazineInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutMagazineInput | ContributionUpdateManyWithWhereWithoutMagazineInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TextCreateWithoutUserInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isSlider?: boolean
    comments?: CommentCreateNestedManyWithoutTextInput
    category: CategoryCreateNestedOneWithoutArticlesInput
  }

  export type TextUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    isSlider?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutTextInput
  }

  export type TextCreateOrConnectWithoutUserInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutUserInput, TextUncheckedCreateWithoutUserInput>
  }

  export type TextCreateManyUserInputEnvelope = {
    data: TextCreateManyUserInput | TextCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActualCreateWithoutUserInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutActualInput
  }

  export type ActualUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutActualInput
  }

  export type ActualCreateOrConnectWithoutUserInput = {
    where: ActualWhereUniqueInput
    create: XOR<ActualCreateWithoutUserInput, ActualUncheckedCreateWithoutUserInput>
  }

  export type ActualCreateManyUserInputEnvelope = {
    data: ActualCreateManyUserInput | ActualCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContributionCreateWithoutUserInput = {
    id?: string
    title: string
    startPage: string
    endPage: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    magazine: MagazineCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    startPage: string
    endPage: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    magazineId: string
  }

  export type ContributionCreateOrConnectWithoutUserInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput>
  }

  export type ContributionCreateManyUserInputEnvelope = {
    data: ContributionCreateManyUserInput | ContributionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TextUpsertWithWhereUniqueWithoutUserInput = {
    where: TextWhereUniqueInput
    update: XOR<TextUpdateWithoutUserInput, TextUncheckedUpdateWithoutUserInput>
    create: XOR<TextCreateWithoutUserInput, TextUncheckedCreateWithoutUserInput>
  }

  export type TextUpdateWithWhereUniqueWithoutUserInput = {
    where: TextWhereUniqueInput
    data: XOR<TextUpdateWithoutUserInput, TextUncheckedUpdateWithoutUserInput>
  }

  export type TextUpdateManyWithWhereWithoutUserInput = {
    where: TextScalarWhereInput
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyWithoutUserInput>
  }

  export type TextScalarWhereInput = {
    AND?: TextScalarWhereInput | TextScalarWhereInput[]
    OR?: TextScalarWhereInput[]
    NOT?: TextScalarWhereInput | TextScalarWhereInput[]
    id?: StringFilter<"Text"> | string
    title?: StringFilter<"Text"> | string
    seo?: StringFilter<"Text"> | string
    text?: StringFilter<"Text"> | string
    note?: StringNullableFilter<"Text"> | string | null
    image?: StringFilter<"Text"> | string
    readCount?: IntFilter<"Text"> | number
    createdAt?: DateTimeFilter<"Text"> | Date | string
    updatedAt?: DateTimeFilter<"Text"> | Date | string
    userId?: StringFilter<"Text"> | string
    categoryId?: StringFilter<"Text"> | string
    isSlider?: BoolFilter<"Text"> | boolean
  }

  export type ActualUpsertWithWhereUniqueWithoutUserInput = {
    where: ActualWhereUniqueInput
    update: XOR<ActualUpdateWithoutUserInput, ActualUncheckedUpdateWithoutUserInput>
    create: XOR<ActualCreateWithoutUserInput, ActualUncheckedCreateWithoutUserInput>
  }

  export type ActualUpdateWithWhereUniqueWithoutUserInput = {
    where: ActualWhereUniqueInput
    data: XOR<ActualUpdateWithoutUserInput, ActualUncheckedUpdateWithoutUserInput>
  }

  export type ActualUpdateManyWithWhereWithoutUserInput = {
    where: ActualScalarWhereInput
    data: XOR<ActualUpdateManyMutationInput, ActualUncheckedUpdateManyWithoutUserInput>
  }

  export type ActualScalarWhereInput = {
    AND?: ActualScalarWhereInput | ActualScalarWhereInput[]
    OR?: ActualScalarWhereInput[]
    NOT?: ActualScalarWhereInput | ActualScalarWhereInput[]
    id?: StringFilter<"Actual"> | string
    title?: StringFilter<"Actual"> | string
    seo?: StringFilter<"Actual"> | string
    text?: StringFilter<"Actual"> | string
    note?: StringNullableFilter<"Actual"> | string | null
    image?: StringFilter<"Actual"> | string
    readCount?: IntFilter<"Actual"> | number
    createdAt?: DateTimeFilter<"Actual"> | Date | string
    updatedAt?: DateTimeFilter<"Actual"> | Date | string
    userId?: StringFilter<"Actual"> | string
  }

  export type ContributionUpsertWithWhereUniqueWithoutUserInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutUserInput, ContributionUncheckedUpdateWithoutUserInput>
    create: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutUserInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutUserInput, ContributionUncheckedUpdateWithoutUserInput>
  }

  export type ContributionUpdateManyWithWhereWithoutUserInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutUserInput>
  }

  export type ContributionScalarWhereInput = {
    AND?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
    OR?: ContributionScalarWhereInput[]
    NOT?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
    id?: StringFilter<"Contribution"> | string
    title?: StringFilter<"Contribution"> | string
    startPage?: StringFilter<"Contribution"> | string
    endPage?: StringFilter<"Contribution"> | string
    file?: StringFilter<"Contribution"> | string
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
    userId?: StringFilter<"Contribution"> | string
    magazineId?: StringFilter<"Contribution"> | string
  }

  export type TextCreateWithoutCategoryInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isSlider?: boolean
    comments?: CommentCreateNestedManyWithoutTextInput
    user: UserCreateNestedOneWithoutArticlesInput
  }

  export type TextUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    isSlider?: boolean
    comments?: CommentUncheckedCreateNestedManyWithoutTextInput
  }

  export type TextCreateOrConnectWithoutCategoryInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutCategoryInput, TextUncheckedCreateWithoutCategoryInput>
  }

  export type TextCreateManyCategoryInputEnvelope = {
    data: TextCreateManyCategoryInput | TextCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TextUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TextWhereUniqueInput
    update: XOR<TextUpdateWithoutCategoryInput, TextUncheckedUpdateWithoutCategoryInput>
    create: XOR<TextCreateWithoutCategoryInput, TextUncheckedCreateWithoutCategoryInput>
  }

  export type TextUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TextWhereUniqueInput
    data: XOR<TextUpdateWithoutCategoryInput, TextUncheckedUpdateWithoutCategoryInput>
  }

  export type TextUpdateManyWithWhereWithoutCategoryInput = {
    where: TextScalarWhereInput
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TextCreateWithoutCommentsInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isSlider?: boolean
    user: UserCreateNestedOneWithoutArticlesInput
    category: CategoryCreateNestedOneWithoutArticlesInput
  }

  export type TextUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
    isSlider?: boolean
  }

  export type TextCreateOrConnectWithoutCommentsInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutCommentsInput, TextUncheckedCreateWithoutCommentsInput>
  }

  export type ActualCreateWithoutCommentsInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutActualsInput
  }

  export type ActualUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ActualCreateOrConnectWithoutCommentsInput = {
    where: ActualWhereUniqueInput
    create: XOR<ActualCreateWithoutCommentsInput, ActualUncheckedCreateWithoutCommentsInput>
  }

  export type MagazineCreateWithoutCommentsInput = {
    id?: string
    title: string
    seo: string
    file: string
    image: string
    desc?: string | null
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionCreateNestedManyWithoutMagazineInput
  }

  export type MagazineUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    seo: string
    file: string
    image: string
    desc?: string | null
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionUncheckedCreateNestedManyWithoutMagazineInput
  }

  export type MagazineCreateOrConnectWithoutCommentsInput = {
    where: MagazineWhereUniqueInput
    create: XOR<MagazineCreateWithoutCommentsInput, MagazineUncheckedCreateWithoutCommentsInput>
  }

  export type TextUpsertWithoutCommentsInput = {
    update: XOR<TextUpdateWithoutCommentsInput, TextUncheckedUpdateWithoutCommentsInput>
    create: XOR<TextCreateWithoutCommentsInput, TextUncheckedCreateWithoutCommentsInput>
    where?: TextWhereInput
  }

  export type TextUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TextWhereInput
    data: XOR<TextUpdateWithoutCommentsInput, TextUncheckedUpdateWithoutCommentsInput>
  }

  export type TextUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    category?: CategoryUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type TextUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActualUpsertWithoutCommentsInput = {
    update: XOR<ActualUpdateWithoutCommentsInput, ActualUncheckedUpdateWithoutCommentsInput>
    create: XOR<ActualCreateWithoutCommentsInput, ActualUncheckedCreateWithoutCommentsInput>
    where?: ActualWhereInput
  }

  export type ActualUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ActualWhereInput
    data: XOR<ActualUpdateWithoutCommentsInput, ActualUncheckedUpdateWithoutCommentsInput>
  }

  export type ActualUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActualsNestedInput
  }

  export type ActualUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MagazineUpsertWithoutCommentsInput = {
    update: XOR<MagazineUpdateWithoutCommentsInput, MagazineUncheckedUpdateWithoutCommentsInput>
    create: XOR<MagazineCreateWithoutCommentsInput, MagazineUncheckedCreateWithoutCommentsInput>
    where?: MagazineWhereInput
  }

  export type MagazineUpdateToOneWithWhereWithoutCommentsInput = {
    where?: MagazineWhereInput
    data: XOR<MagazineUpdateWithoutCommentsInput, MagazineUncheckedUpdateWithoutCommentsInput>
  }

  export type MagazineUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUpdateManyWithoutMagazineNestedInput
  }

  export type MagazineUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUncheckedUpdateManyWithoutMagazineNestedInput
  }

  export type CommentCreateWithoutTextInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    actual?: ActualCreateNestedOneWithoutCommentsInput
    magazine?: MagazineCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutTextInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    actualId?: string | null
    magazineId?: string | null
  }

  export type CommentCreateOrConnectWithoutTextInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTextInput, CommentUncheckedCreateWithoutTextInput>
  }

  export type CommentCreateManyTextInputEnvelope = {
    data: CommentCreateManyTextInput | CommentCreateManyTextInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutArticlesInput = {
    id?: string
    name: string
    username: string
    email: string
    image?: string | null
    coverImage?: string | null
    password: string
    about?: string | null
    twitter?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    instagram?: string | null
    facebook?: string | null
    facebookLink?: string | null
    youtube?: string | null
    youtubeLink?: string | null
    role?: $Enums.UserRole
    isConfirm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    actuals?: ActualCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
    username: string
    email: string
    image?: string | null
    coverImage?: string | null
    password: string
    about?: string | null
    twitter?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    instagram?: string | null
    facebook?: string | null
    facebookLink?: string | null
    youtube?: string | null
    youtubeLink?: string | null
    role?: $Enums.UserRole
    isConfirm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    actuals?: ActualUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type CategoryCreateWithoutArticlesInput = {
    id?: string
    name: string
    seo: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
    seo: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutArticlesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutTextInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTextInput, CommentUncheckedUpdateWithoutTextInput>
    create: XOR<CommentCreateWithoutTextInput, CommentUncheckedCreateWithoutTextInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTextInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTextInput, CommentUncheckedUpdateWithoutTextInput>
  }

  export type CommentUpdateManyWithWhereWithoutTextInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTextInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    comment?: StringFilter<"Comment"> | string
    name?: StringFilter<"Comment"> | string
    email?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    textId?: StringNullableFilter<"Comment"> | string | null
    actualId?: StringNullableFilter<"Comment"> | string | null
    magazineId?: StringNullableFilter<"Comment"> | string | null
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isConfirm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actuals?: ActualUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isConfirm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actuals?: ActualUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutArticlesInput = {
    update: XOR<CategoryUpdateWithoutArticlesInput, CategoryUncheckedUpdateWithoutArticlesInput>
    create: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutArticlesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutArticlesInput, CategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type CategoryUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateWithoutActualInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedOneWithoutCommentsInput
    magazine?: MagazineCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutActualInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    textId?: string | null
    magazineId?: string | null
  }

  export type CommentCreateOrConnectWithoutActualInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutActualInput, CommentUncheckedCreateWithoutActualInput>
  }

  export type CommentCreateManyActualInputEnvelope = {
    data: CommentCreateManyActualInput | CommentCreateManyActualInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutActualsInput = {
    id?: string
    name: string
    username: string
    email: string
    image?: string | null
    coverImage?: string | null
    password: string
    about?: string | null
    twitter?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    instagram?: string | null
    facebook?: string | null
    facebookLink?: string | null
    youtube?: string | null
    youtubeLink?: string | null
    role?: $Enums.UserRole
    isConfirm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: TextCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActualsInput = {
    id?: string
    name: string
    username: string
    email: string
    image?: string | null
    coverImage?: string | null
    password: string
    about?: string | null
    twitter?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    instagram?: string | null
    facebook?: string | null
    facebookLink?: string | null
    youtube?: string | null
    youtubeLink?: string | null
    role?: $Enums.UserRole
    isConfirm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: TextUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActualsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActualsInput, UserUncheckedCreateWithoutActualsInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutActualInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutActualInput, CommentUncheckedUpdateWithoutActualInput>
    create: XOR<CommentCreateWithoutActualInput, CommentUncheckedCreateWithoutActualInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutActualInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutActualInput, CommentUncheckedUpdateWithoutActualInput>
  }

  export type CommentUpdateManyWithWhereWithoutActualInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutActualInput>
  }

  export type UserUpsertWithoutActualsInput = {
    update: XOR<UserUpdateWithoutActualsInput, UserUncheckedUpdateWithoutActualsInput>
    create: XOR<UserCreateWithoutActualsInput, UserUncheckedCreateWithoutActualsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActualsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActualsInput, UserUncheckedUpdateWithoutActualsInput>
  }

  export type UserUpdateWithoutActualsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isConfirm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: TextUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActualsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isConfirm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: TextUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutContributionsInput = {
    id?: string
    name: string
    username: string
    email: string
    image?: string | null
    coverImage?: string | null
    password: string
    about?: string | null
    twitter?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    instagram?: string | null
    facebook?: string | null
    facebookLink?: string | null
    youtube?: string | null
    youtubeLink?: string | null
    role?: $Enums.UserRole
    isConfirm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: TextCreateNestedManyWithoutUserInput
    actuals?: ActualCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContributionsInput = {
    id?: string
    name: string
    username: string
    email: string
    image?: string | null
    coverImage?: string | null
    password: string
    about?: string | null
    twitter?: string | null
    twitterLink?: string | null
    instagramLink?: string | null
    instagram?: string | null
    facebook?: string | null
    facebookLink?: string | null
    youtube?: string | null
    youtubeLink?: string | null
    role?: $Enums.UserRole
    isConfirm?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: TextUncheckedCreateNestedManyWithoutUserInput
    actuals?: ActualUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContributionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
  }

  export type MagazineCreateWithoutContributionsInput = {
    id?: string
    title: string
    seo: string
    file: string
    image: string
    desc?: string | null
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutMagazineInput
  }

  export type MagazineUncheckedCreateWithoutContributionsInput = {
    id?: string
    title: string
    seo: string
    file: string
    image: string
    desc?: string | null
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutMagazineInput
  }

  export type MagazineCreateOrConnectWithoutContributionsInput = {
    where: MagazineWhereUniqueInput
    create: XOR<MagazineCreateWithoutContributionsInput, MagazineUncheckedCreateWithoutContributionsInput>
  }

  export type UserUpsertWithoutContributionsInput = {
    update: XOR<UserUpdateWithoutContributionsInput, UserUncheckedUpdateWithoutContributionsInput>
    create: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContributionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContributionsInput, UserUncheckedUpdateWithoutContributionsInput>
  }

  export type UserUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isConfirm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: TextUpdateManyWithoutUserNestedInput
    actuals?: ActualUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagramLink?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeLink?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isConfirm?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: TextUncheckedUpdateManyWithoutUserNestedInput
    actuals?: ActualUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MagazineUpsertWithoutContributionsInput = {
    update: XOR<MagazineUpdateWithoutContributionsInput, MagazineUncheckedUpdateWithoutContributionsInput>
    create: XOR<MagazineCreateWithoutContributionsInput, MagazineUncheckedCreateWithoutContributionsInput>
    where?: MagazineWhereInput
  }

  export type MagazineUpdateToOneWithWhereWithoutContributionsInput = {
    where?: MagazineWhereInput
    data: XOR<MagazineUpdateWithoutContributionsInput, MagazineUncheckedUpdateWithoutContributionsInput>
  }

  export type MagazineUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutMagazineNestedInput
  }

  export type MagazineUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutMagazineNestedInput
  }

  export type CommentCreateWithoutMagazineInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedOneWithoutCommentsInput
    actual?: ActualCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutMagazineInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    textId?: string | null
    actualId?: string | null
  }

  export type CommentCreateOrConnectWithoutMagazineInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutMagazineInput, CommentUncheckedCreateWithoutMagazineInput>
  }

  export type CommentCreateManyMagazineInputEnvelope = {
    data: CommentCreateManyMagazineInput | CommentCreateManyMagazineInput[]
    skipDuplicates?: boolean
  }

  export type ContributionCreateWithoutMagazineInput = {
    id?: string
    title: string
    startPage: string
    endPage: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutMagazineInput = {
    id?: string
    title: string
    startPage: string
    endPage: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ContributionCreateOrConnectWithoutMagazineInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutMagazineInput, ContributionUncheckedCreateWithoutMagazineInput>
  }

  export type ContributionCreateManyMagazineInputEnvelope = {
    data: ContributionCreateManyMagazineInput | ContributionCreateManyMagazineInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutMagazineInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutMagazineInput, CommentUncheckedUpdateWithoutMagazineInput>
    create: XOR<CommentCreateWithoutMagazineInput, CommentUncheckedCreateWithoutMagazineInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutMagazineInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutMagazineInput, CommentUncheckedUpdateWithoutMagazineInput>
  }

  export type CommentUpdateManyWithWhereWithoutMagazineInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutMagazineInput>
  }

  export type ContributionUpsertWithWhereUniqueWithoutMagazineInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutMagazineInput, ContributionUncheckedUpdateWithoutMagazineInput>
    create: XOR<ContributionCreateWithoutMagazineInput, ContributionUncheckedCreateWithoutMagazineInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutMagazineInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutMagazineInput, ContributionUncheckedUpdateWithoutMagazineInput>
  }

  export type ContributionUpdateManyWithWhereWithoutMagazineInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutMagazineInput>
  }

  export type TextCreateManyUserInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    isSlider?: boolean
  }

  export type ActualCreateManyUserInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateManyUserInput = {
    id?: string
    title: string
    startPage: string
    endPage: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    magazineId: string
  }

  export type TextUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutTextNestedInput
    category?: CategoryUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type TextUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutTextNestedInput
  }

  export type TextUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActualUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutActualNestedInput
  }

  export type ActualUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutActualNestedInput
  }

  export type ActualUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startPage?: StringFieldUpdateOperationsInput | string
    endPage?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    magazine?: MagazineUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startPage?: StringFieldUpdateOperationsInput | string
    endPage?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    magazineId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startPage?: StringFieldUpdateOperationsInput | string
    endPage?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    magazineId?: StringFieldUpdateOperationsInput | string
  }

  export type TextCreateManyCategoryInput = {
    id?: string
    title: string
    seo: string
    text: string
    note?: string | null
    image: string
    readCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    isSlider?: boolean
  }

  export type TextUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUpdateManyWithoutTextNestedInput
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type TextUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentUncheckedUpdateManyWithoutTextNestedInput
  }

  export type TextUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seo?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    isSlider?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentCreateManyTextInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    actualId?: string | null
    magazineId?: string | null
  }

  export type CommentUpdateWithoutTextInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actual?: ActualUpdateOneWithoutCommentsNestedInput
    magazine?: MagazineUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutTextInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actualId?: NullableStringFieldUpdateOperationsInput | string | null
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutTextInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actualId?: NullableStringFieldUpdateOperationsInput | string | null
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyActualInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    textId?: string | null
    magazineId?: string | null
  }

  export type CommentUpdateWithoutActualInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateOneWithoutCommentsNestedInput
    magazine?: MagazineUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutActualInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    textId?: NullableStringFieldUpdateOperationsInput | string | null
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutActualInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    textId?: NullableStringFieldUpdateOperationsInput | string | null
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyMagazineInput = {
    id?: string
    comment: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    textId?: string | null
    actualId?: string | null
  }

  export type ContributionCreateManyMagazineInput = {
    id?: string
    title: string
    startPage: string
    endPage: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CommentUpdateWithoutMagazineInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateOneWithoutCommentsNestedInput
    actual?: ActualUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutMagazineInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    textId?: NullableStringFieldUpdateOperationsInput | string | null
    actualId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutMagazineInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    textId?: NullableStringFieldUpdateOperationsInput | string | null
    actualId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContributionUpdateWithoutMagazineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startPage?: StringFieldUpdateOperationsInput | string
    endPage?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutMagazineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startPage?: StringFieldUpdateOperationsInput | string
    endPage?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributionUncheckedUpdateManyWithoutMagazineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startPage?: StringFieldUpdateOperationsInput | string
    endPage?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TextCountOutputTypeDefaultArgs instead
     */
    export type TextCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TextCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActualCountOutputTypeDefaultArgs instead
     */
    export type ActualCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActualCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MagazineCountOutputTypeDefaultArgs instead
     */
    export type MagazineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MagazineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TextDefaultArgs instead
     */
    export type TextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TextDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActualDefaultArgs instead
     */
    export type ActualArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActualDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContributionDefaultArgs instead
     */
    export type ContributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContributionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MagazineDefaultArgs instead
     */
    export type MagazineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MagazineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingsDefaultArgs instead
     */
    export type SettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingsDefaultArgs<ExtArgs>

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