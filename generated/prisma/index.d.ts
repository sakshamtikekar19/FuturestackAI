
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Domain
 * 
 */
export type Domain = $Result.DefaultSelection<Prisma.$DomainPayload>
/**
 * Model Scan
 * 
 */
export type Scan = $Result.DefaultSelection<Prisma.$ScanPayload>
/**
 * Model PromptResponse
 * 
 */
export type PromptResponse = $Result.DefaultSelection<Prisma.$PromptResponsePayload>
/**
 * Model ScanReport
 * 
 */
export type ScanReport = $Result.DefaultSelection<Prisma.$ScanReportPayload>
/**
 * Model RecommendationAction
 * 
 */
export type RecommendationAction = $Result.DefaultSelection<Prisma.$RecommendationActionPayload>
/**
 * Model Competitor
 * 
 */
export type Competitor = $Result.DefaultSelection<Prisma.$CompetitorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.domain`: Exposes CRUD operations for the **Domain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Domains
    * const domains = await prisma.domain.findMany()
    * ```
    */
  get domain(): Prisma.DomainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scan`: Exposes CRUD operations for the **Scan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scans
    * const scans = await prisma.scan.findMany()
    * ```
    */
  get scan(): Prisma.ScanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promptResponse`: Exposes CRUD operations for the **PromptResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptResponses
    * const promptResponses = await prisma.promptResponse.findMany()
    * ```
    */
  get promptResponse(): Prisma.PromptResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scanReport`: Exposes CRUD operations for the **ScanReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScanReports
    * const scanReports = await prisma.scanReport.findMany()
    * ```
    */
  get scanReport(): Prisma.ScanReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendationAction`: Exposes CRUD operations for the **RecommendationAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecommendationActions
    * const recommendationActions = await prisma.recommendationAction.findMany()
    * ```
    */
  get recommendationAction(): Prisma.RecommendationActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitor`: Exposes CRUD operations for the **Competitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitors
    * const competitors = await prisma.competitor.findMany()
    * ```
    */
  get competitor(): Prisma.CompetitorDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Organization: 'Organization',
    Domain: 'Domain',
    Scan: 'Scan',
    PromptResponse: 'PromptResponse',
    ScanReport: 'ScanReport',
    RecommendationAction: 'RecommendationAction',
    Competitor: 'Competitor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "domain" | "scan" | "promptResponse" | "scanReport" | "recommendationAction" | "competitor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Domain: {
        payload: Prisma.$DomainPayload<ExtArgs>
        fields: Prisma.DomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findFirst: {
            args: Prisma.DomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findMany: {
            args: Prisma.DomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          create: {
            args: Prisma.DomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          createMany: {
            args: Prisma.DomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          delete: {
            args: Prisma.DomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          update: {
            args: Prisma.DomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          deleteMany: {
            args: Prisma.DomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DomainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          upsert: {
            args: Prisma.DomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          aggregate: {
            args: Prisma.DomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDomain>
          }
          groupBy: {
            args: Prisma.DomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<DomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainCountArgs<ExtArgs>
            result: $Utils.Optional<DomainCountAggregateOutputType> | number
          }
        }
      }
      Scan: {
        payload: Prisma.$ScanPayload<ExtArgs>
        fields: Prisma.ScanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          findFirst: {
            args: Prisma.ScanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          findMany: {
            args: Prisma.ScanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[]
          }
          create: {
            args: Prisma.ScanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          createMany: {
            args: Prisma.ScanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[]
          }
          delete: {
            args: Prisma.ScanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          update: {
            args: Prisma.ScanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          deleteMany: {
            args: Prisma.ScanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[]
          }
          upsert: {
            args: Prisma.ScanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          aggregate: {
            args: Prisma.ScanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScan>
          }
          groupBy: {
            args: Prisma.ScanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanCountArgs<ExtArgs>
            result: $Utils.Optional<ScanCountAggregateOutputType> | number
          }
        }
      }
      PromptResponse: {
        payload: Prisma.$PromptResponsePayload<ExtArgs>
        fields: Prisma.PromptResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          findFirst: {
            args: Prisma.PromptResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          findMany: {
            args: Prisma.PromptResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>[]
          }
          create: {
            args: Prisma.PromptResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          createMany: {
            args: Prisma.PromptResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>[]
          }
          delete: {
            args: Prisma.PromptResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          update: {
            args: Prisma.PromptResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          deleteMany: {
            args: Prisma.PromptResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>[]
          }
          upsert: {
            args: Prisma.PromptResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          aggregate: {
            args: Prisma.PromptResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptResponse>
          }
          groupBy: {
            args: Prisma.PromptResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptResponseCountArgs<ExtArgs>
            result: $Utils.Optional<PromptResponseCountAggregateOutputType> | number
          }
        }
      }
      ScanReport: {
        payload: Prisma.$ScanReportPayload<ExtArgs>
        fields: Prisma.ScanReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload>
          }
          findFirst: {
            args: Prisma.ScanReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload>
          }
          findMany: {
            args: Prisma.ScanReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload>[]
          }
          create: {
            args: Prisma.ScanReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload>
          }
          createMany: {
            args: Prisma.ScanReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScanReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload>[]
          }
          delete: {
            args: Prisma.ScanReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload>
          }
          update: {
            args: Prisma.ScanReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload>
          }
          deleteMany: {
            args: Prisma.ScanReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScanReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload>[]
          }
          upsert: {
            args: Prisma.ScanReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanReportPayload>
          }
          aggregate: {
            args: Prisma.ScanReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScanReport>
          }
          groupBy: {
            args: Prisma.ScanReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanReportCountArgs<ExtArgs>
            result: $Utils.Optional<ScanReportCountAggregateOutputType> | number
          }
        }
      }
      RecommendationAction: {
        payload: Prisma.$RecommendationActionPayload<ExtArgs>
        fields: Prisma.RecommendationActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload>
          }
          findFirst: {
            args: Prisma.RecommendationActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload>
          }
          findMany: {
            args: Prisma.RecommendationActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload>[]
          }
          create: {
            args: Prisma.RecommendationActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload>
          }
          createMany: {
            args: Prisma.RecommendationActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload>[]
          }
          delete: {
            args: Prisma.RecommendationActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload>
          }
          update: {
            args: Prisma.RecommendationActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendationActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload>[]
          }
          upsert: {
            args: Prisma.RecommendationActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationActionPayload>
          }
          aggregate: {
            args: Prisma.RecommendationActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendationAction>
          }
          groupBy: {
            args: Prisma.RecommendationActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationActionCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationActionCountAggregateOutputType> | number
          }
        }
      }
      Competitor: {
        payload: Prisma.$CompetitorPayload<ExtArgs>
        fields: Prisma.CompetitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          findFirst: {
            args: Prisma.CompetitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          findMany: {
            args: Prisma.CompetitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[]
          }
          create: {
            args: Prisma.CompetitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          createMany: {
            args: Prisma.CompetitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[]
          }
          delete: {
            args: Prisma.CompetitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          update: {
            args: Prisma.CompetitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          deleteMany: {
            args: Prisma.CompetitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[]
          }
          upsert: {
            args: Prisma.CompetitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          aggregate: {
            args: Prisma.CompetitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitor>
          }
          groupBy: {
            args: Prisma.CompetitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitorCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitorCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    domain?: DomainOmit
    scan?: ScanOmit
    promptResponse?: PromptResponseOmit
    scanReport?: ScanReportOmit
    recommendationAction?: RecommendationActionOmit
    competitor?: CompetitorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    domains: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domains?: boolean | OrganizationCountOutputTypeCountDomainsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountDomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
  }


  /**
   * Count Type DomainCountOutputType
   */

  export type DomainCountOutputType = {
    scans: number
    recommendationActions: number
    competitors: number
  }

  export type DomainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scans?: boolean | DomainCountOutputTypeCountScansArgs
    recommendationActions?: boolean | DomainCountOutputTypeCountRecommendationActionsArgs
    competitors?: boolean | DomainCountOutputTypeCountCompetitorsArgs
  }

  // Custom InputTypes
  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCountOutputType
     */
    select?: DomainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountScansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanWhereInput
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountRecommendationActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationActionWhereInput
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountCompetitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitorWhereInput
  }


  /**
   * Count Type ScanCountOutputType
   */

  export type ScanCountOutputType = {
    promptResponses: number
  }

  export type ScanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promptResponses?: boolean | ScanCountOutputTypeCountPromptResponsesArgs
  }

  // Custom InputTypes
  /**
   * ScanCountOutputType without action
   */
  export type ScanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCountOutputType
     */
    select?: ScanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScanCountOutputType without action
   */
  export type ScanCountOutputTypeCountPromptResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    domains?: boolean | Organization$domainsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domains?: boolean | Organization$domainsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      domains: Prisma.$DomainPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domains<T extends Organization$domainsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$domainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.domains
   */
  export type Organization$domainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    cursor?: DomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Domain
   */

  export type AggregateDomain = {
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  export type DomainMinAggregateOutputType = {
    id: string | null
    url: string | null
    organizationId: string | null
    createdAt: Date | null
  }

  export type DomainMaxAggregateOutputType = {
    id: string | null
    url: string | null
    organizationId: string | null
    createdAt: Date | null
  }

  export type DomainCountAggregateOutputType = {
    id: number
    url: number
    organizationId: number
    createdAt: number
    _all: number
  }


  export type DomainMinAggregateInputType = {
    id?: true
    url?: true
    organizationId?: true
    createdAt?: true
  }

  export type DomainMaxAggregateInputType = {
    id?: true
    url?: true
    organizationId?: true
    createdAt?: true
  }

  export type DomainCountAggregateInputType = {
    id?: true
    url?: true
    organizationId?: true
    createdAt?: true
    _all?: true
  }

  export type DomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domain to aggregate.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Domains
    **/
    _count?: true | DomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainMaxAggregateInputType
  }

  export type GetDomainAggregateType<T extends DomainAggregateArgs> = {
        [P in keyof T & keyof AggregateDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomain[P]>
      : GetScalarType<T[P], AggregateDomain[P]>
  }




  export type DomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithAggregationInput | DomainOrderByWithAggregationInput[]
    by: DomainScalarFieldEnum[] | DomainScalarFieldEnum
    having?: DomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainCountAggregateInputType | true
    _min?: DomainMinAggregateInputType
    _max?: DomainMaxAggregateInputType
  }

  export type DomainGroupByOutputType = {
    id: string
    url: string
    organizationId: string
    createdAt: Date
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  type GetDomainGroupByPayload<T extends DomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainGroupByOutputType[P]>
            : GetScalarType<T[P], DomainGroupByOutputType[P]>
        }
      >
    >


  export type DomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    organizationId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    scans?: boolean | Domain$scansArgs<ExtArgs>
    recommendationActions?: boolean | Domain$recommendationActionsArgs<ExtArgs>
    competitors?: boolean | Domain$competitorsArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    organizationId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    organizationId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectScalar = {
    id?: boolean
    url?: boolean
    organizationId?: boolean
    createdAt?: boolean
  }

  export type DomainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "organizationId" | "createdAt", ExtArgs["result"]["domain"]>
  export type DomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    scans?: boolean | Domain$scansArgs<ExtArgs>
    recommendationActions?: boolean | Domain$recommendationActionsArgs<ExtArgs>
    competitors?: boolean | Domain$competitorsArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type DomainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $DomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Domain"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      scans: Prisma.$ScanPayload<ExtArgs>[]
      recommendationActions: Prisma.$RecommendationActionPayload<ExtArgs>[]
      competitors: Prisma.$CompetitorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      organizationId: string
      createdAt: Date
    }, ExtArgs["result"]["domain"]>
    composites: {}
  }

  type DomainGetPayload<S extends boolean | null | undefined | DomainDefaultArgs> = $Result.GetResult<Prisma.$DomainPayload, S>

  type DomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DomainCountAggregateInputType | true
    }

  export interface DomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Domain'], meta: { name: 'Domain' } }
    /**
     * Find zero or one Domain that matches the filter.
     * @param {DomainFindUniqueArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DomainFindUniqueArgs>(args: SelectSubset<T, DomainFindUniqueArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Domain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DomainFindUniqueOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DomainFindUniqueOrThrowArgs>(args: SelectSubset<T, DomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DomainFindFirstArgs>(args?: SelectSubset<T, DomainFindFirstArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Domain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DomainFindFirstOrThrowArgs>(args?: SelectSubset<T, DomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Domains
     * const domains = await prisma.domain.findMany()
     * 
     * // Get first 10 Domains
     * const domains = await prisma.domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainWithIdOnly = await prisma.domain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DomainFindManyArgs>(args?: SelectSubset<T, DomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Domain.
     * @param {DomainCreateArgs} args - Arguments to create a Domain.
     * @example
     * // Create one Domain
     * const Domain = await prisma.domain.create({
     *   data: {
     *     // ... data to create a Domain
     *   }
     * })
     * 
     */
    create<T extends DomainCreateArgs>(args: SelectSubset<T, DomainCreateArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Domains.
     * @param {DomainCreateManyArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DomainCreateManyArgs>(args?: SelectSubset<T, DomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Domains and returns the data saved in the database.
     * @param {DomainCreateManyAndReturnArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Domains and only return the `id`
     * const domainWithIdOnly = await prisma.domain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DomainCreateManyAndReturnArgs>(args?: SelectSubset<T, DomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Domain.
     * @param {DomainDeleteArgs} args - Arguments to delete one Domain.
     * @example
     * // Delete one Domain
     * const Domain = await prisma.domain.delete({
     *   where: {
     *     // ... filter to delete one Domain
     *   }
     * })
     * 
     */
    delete<T extends DomainDeleteArgs>(args: SelectSubset<T, DomainDeleteArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Domain.
     * @param {DomainUpdateArgs} args - Arguments to update one Domain.
     * @example
     * // Update one Domain
     * const domain = await prisma.domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DomainUpdateArgs>(args: SelectSubset<T, DomainUpdateArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Domains.
     * @param {DomainDeleteManyArgs} args - Arguments to filter Domains to delete.
     * @example
     * // Delete a few Domains
     * const { count } = await prisma.domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DomainDeleteManyArgs>(args?: SelectSubset<T, DomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DomainUpdateManyArgs>(args: SelectSubset<T, DomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains and returns the data updated in the database.
     * @param {DomainUpdateManyAndReturnArgs} args - Arguments to update many Domains.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Domains and only return the `id`
     * const domainWithIdOnly = await prisma.domain.updateManyAndReturn({
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
    updateManyAndReturn<T extends DomainUpdateManyAndReturnArgs>(args: SelectSubset<T, DomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Domain.
     * @param {DomainUpsertArgs} args - Arguments to update or create a Domain.
     * @example
     * // Update or create a Domain
     * const domain = await prisma.domain.upsert({
     *   create: {
     *     // ... data to create a Domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Domain we want to update
     *   }
     * })
     */
    upsert<T extends DomainUpsertArgs>(args: SelectSubset<T, DomainUpsertArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCountArgs} args - Arguments to filter Domains to count.
     * @example
     * // Count the number of Domains
     * const count = await prisma.domain.count({
     *   where: {
     *     // ... the filter for the Domains we want to count
     *   }
     * })
    **/
    count<T extends DomainCountArgs>(
      args?: Subset<T, DomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DomainAggregateArgs>(args: Subset<T, DomainAggregateArgs>): Prisma.PrismaPromise<GetDomainAggregateType<T>>

    /**
     * Group by Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainGroupByArgs} args - Group by arguments.
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
      T extends DomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainGroupByArgs['orderBy'] }
        : { orderBy?: DomainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Domain model
   */
  readonly fields: DomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Domain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scans<T extends Domain$scansArgs<ExtArgs> = {}>(args?: Subset<T, Domain$scansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendationActions<T extends Domain$recommendationActionsArgs<ExtArgs> = {}>(args?: Subset<T, Domain$recommendationActionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    competitors<T extends Domain$competitorsArgs<ExtArgs> = {}>(args?: Subset<T, Domain$competitorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Domain model
   */
  interface DomainFieldRefs {
    readonly id: FieldRef<"Domain", 'String'>
    readonly url: FieldRef<"Domain", 'String'>
    readonly organizationId: FieldRef<"Domain", 'String'>
    readonly createdAt: FieldRef<"Domain", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Domain findUnique
   */
  export type DomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findUniqueOrThrow
   */
  export type DomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findFirst
   */
  export type DomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findFirstOrThrow
   */
  export type DomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findMany
   */
  export type DomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domains to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain create
   */
  export type DomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to create a Domain.
     */
    data: XOR<DomainCreateInput, DomainUncheckedCreateInput>
  }

  /**
   * Domain createMany
   */
  export type DomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Domain createManyAndReturn
   */
  export type DomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Domain update
   */
  export type DomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to update a Domain.
     */
    data: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
    /**
     * Choose, which Domain to update.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain updateMany
   */
  export type DomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to update.
     */
    limit?: number
  }

  /**
   * Domain updateManyAndReturn
   */
  export type DomainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Domain upsert
   */
  export type DomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The filter to search for the Domain to update in case it exists.
     */
    where: DomainWhereUniqueInput
    /**
     * In case the Domain found by the `where` argument doesn't exist, create a new Domain with this data.
     */
    create: XOR<DomainCreateInput, DomainUncheckedCreateInput>
    /**
     * In case the Domain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
  }

  /**
   * Domain delete
   */
  export type DomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter which Domain to delete.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain deleteMany
   */
  export type DomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domains to delete
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to delete.
     */
    limit?: number
  }

  /**
   * Domain.scans
   */
  export type Domain$scansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    where?: ScanWhereInput
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    cursor?: ScanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Domain.recommendationActions
   */
  export type Domain$recommendationActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
    where?: RecommendationActionWhereInput
    orderBy?: RecommendationActionOrderByWithRelationInput | RecommendationActionOrderByWithRelationInput[]
    cursor?: RecommendationActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationActionScalarFieldEnum | RecommendationActionScalarFieldEnum[]
  }

  /**
   * Domain.competitors
   */
  export type Domain$competitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    where?: CompetitorWhereInput
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    cursor?: CompetitorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Domain without action
   */
  export type DomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
  }


  /**
   * Model Scan
   */

  export type AggregateScan = {
    _count: ScanCountAggregateOutputType | null
    _avg: ScanAvgAggregateOutputType | null
    _sum: ScanSumAggregateOutputType | null
    _min: ScanMinAggregateOutputType | null
    _max: ScanMaxAggregateOutputType | null
  }

  export type ScanAvgAggregateOutputType = {
    visibilityScore: number | null
    presenceScore: number | null
    recommendationStrength: number | null
    trendScore: number | null
  }

  export type ScanSumAggregateOutputType = {
    visibilityScore: number | null
    presenceScore: number | null
    recommendationStrength: number | null
    trendScore: number | null
  }

  export type ScanMinAggregateOutputType = {
    id: string | null
    domainId: string | null
    status: string | null
    visibilityScore: number | null
    presenceScore: number | null
    recommendationStrength: number | null
    trendScore: number | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ScanMaxAggregateOutputType = {
    id: string | null
    domainId: string | null
    status: string | null
    visibilityScore: number | null
    presenceScore: number | null
    recommendationStrength: number | null
    trendScore: number | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ScanCountAggregateOutputType = {
    id: number
    domainId: number
    status: number
    visibilityScore: number
    presenceScore: number
    recommendationStrength: number
    trendScore: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type ScanAvgAggregateInputType = {
    visibilityScore?: true
    presenceScore?: true
    recommendationStrength?: true
    trendScore?: true
  }

  export type ScanSumAggregateInputType = {
    visibilityScore?: true
    presenceScore?: true
    recommendationStrength?: true
    trendScore?: true
  }

  export type ScanMinAggregateInputType = {
    id?: true
    domainId?: true
    status?: true
    visibilityScore?: true
    presenceScore?: true
    recommendationStrength?: true
    trendScore?: true
    createdAt?: true
    completedAt?: true
  }

  export type ScanMaxAggregateInputType = {
    id?: true
    domainId?: true
    status?: true
    visibilityScore?: true
    presenceScore?: true
    recommendationStrength?: true
    trendScore?: true
    createdAt?: true
    completedAt?: true
  }

  export type ScanCountAggregateInputType = {
    id?: true
    domainId?: true
    status?: true
    visibilityScore?: true
    presenceScore?: true
    recommendationStrength?: true
    trendScore?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type ScanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scan to aggregate.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scans
    **/
    _count?: true | ScanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanMaxAggregateInputType
  }

  export type GetScanAggregateType<T extends ScanAggregateArgs> = {
        [P in keyof T & keyof AggregateScan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScan[P]>
      : GetScalarType<T[P], AggregateScan[P]>
  }




  export type ScanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanWhereInput
    orderBy?: ScanOrderByWithAggregationInput | ScanOrderByWithAggregationInput[]
    by: ScanScalarFieldEnum[] | ScanScalarFieldEnum
    having?: ScanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanCountAggregateInputType | true
    _avg?: ScanAvgAggregateInputType
    _sum?: ScanSumAggregateInputType
    _min?: ScanMinAggregateInputType
    _max?: ScanMaxAggregateInputType
  }

  export type ScanGroupByOutputType = {
    id: string
    domainId: string
    status: string
    visibilityScore: number | null
    presenceScore: number | null
    recommendationStrength: number | null
    trendScore: number | null
    createdAt: Date
    completedAt: Date | null
    _count: ScanCountAggregateOutputType | null
    _avg: ScanAvgAggregateOutputType | null
    _sum: ScanSumAggregateOutputType | null
    _min: ScanMinAggregateOutputType | null
    _max: ScanMaxAggregateOutputType | null
  }

  type GetScanGroupByPayload<T extends ScanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanGroupByOutputType[P]>
            : GetScalarType<T[P], ScanGroupByOutputType[P]>
        }
      >
    >


  export type ScanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    status?: boolean
    visibilityScore?: boolean
    presenceScore?: boolean
    recommendationStrength?: boolean
    trendScore?: boolean
    createdAt?: boolean
    completedAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    promptResponses?: boolean | Scan$promptResponsesArgs<ExtArgs>
    report?: boolean | Scan$reportArgs<ExtArgs>
    _count?: boolean | ScanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scan"]>

  export type ScanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    status?: boolean
    visibilityScore?: boolean
    presenceScore?: boolean
    recommendationStrength?: boolean
    trendScore?: boolean
    createdAt?: boolean
    completedAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scan"]>

  export type ScanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    status?: boolean
    visibilityScore?: boolean
    presenceScore?: boolean
    recommendationStrength?: boolean
    trendScore?: boolean
    createdAt?: boolean
    completedAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scan"]>

  export type ScanSelectScalar = {
    id?: boolean
    domainId?: boolean
    status?: boolean
    visibilityScore?: boolean
    presenceScore?: boolean
    recommendationStrength?: boolean
    trendScore?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type ScanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domainId" | "status" | "visibilityScore" | "presenceScore" | "recommendationStrength" | "trendScore" | "createdAt" | "completedAt", ExtArgs["result"]["scan"]>
  export type ScanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    promptResponses?: boolean | Scan$promptResponsesArgs<ExtArgs>
    report?: boolean | Scan$reportArgs<ExtArgs>
    _count?: boolean | ScanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }
  export type ScanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }

  export type $ScanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scan"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
      promptResponses: Prisma.$PromptResponsePayload<ExtArgs>[]
      report: Prisma.$ScanReportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domainId: string
      status: string
      visibilityScore: number | null
      presenceScore: number | null
      recommendationStrength: number | null
      trendScore: number | null
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["scan"]>
    composites: {}
  }

  type ScanGetPayload<S extends boolean | null | undefined | ScanDefaultArgs> = $Result.GetResult<Prisma.$ScanPayload, S>

  type ScanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanCountAggregateInputType | true
    }

  export interface ScanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scan'], meta: { name: 'Scan' } }
    /**
     * Find zero or one Scan that matches the filter.
     * @param {ScanFindUniqueArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanFindUniqueArgs>(args: SelectSubset<T, ScanFindUniqueArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanFindUniqueOrThrowArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindFirstArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanFindFirstArgs>(args?: SelectSubset<T, ScanFindFirstArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindFirstOrThrowArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scans
     * const scans = await prisma.scan.findMany()
     * 
     * // Get first 10 Scans
     * const scans = await prisma.scan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanWithIdOnly = await prisma.scan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanFindManyArgs>(args?: SelectSubset<T, ScanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scan.
     * @param {ScanCreateArgs} args - Arguments to create a Scan.
     * @example
     * // Create one Scan
     * const Scan = await prisma.scan.create({
     *   data: {
     *     // ... data to create a Scan
     *   }
     * })
     * 
     */
    create<T extends ScanCreateArgs>(args: SelectSubset<T, ScanCreateArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scans.
     * @param {ScanCreateManyArgs} args - Arguments to create many Scans.
     * @example
     * // Create many Scans
     * const scan = await prisma.scan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanCreateManyArgs>(args?: SelectSubset<T, ScanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scans and returns the data saved in the database.
     * @param {ScanCreateManyAndReturnArgs} args - Arguments to create many Scans.
     * @example
     * // Create many Scans
     * const scan = await prisma.scan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scans and only return the `id`
     * const scanWithIdOnly = await prisma.scan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScanCreateManyAndReturnArgs>(args?: SelectSubset<T, ScanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scan.
     * @param {ScanDeleteArgs} args - Arguments to delete one Scan.
     * @example
     * // Delete one Scan
     * const Scan = await prisma.scan.delete({
     *   where: {
     *     // ... filter to delete one Scan
     *   }
     * })
     * 
     */
    delete<T extends ScanDeleteArgs>(args: SelectSubset<T, ScanDeleteArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scan.
     * @param {ScanUpdateArgs} args - Arguments to update one Scan.
     * @example
     * // Update one Scan
     * const scan = await prisma.scan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanUpdateArgs>(args: SelectSubset<T, ScanUpdateArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scans.
     * @param {ScanDeleteManyArgs} args - Arguments to filter Scans to delete.
     * @example
     * // Delete a few Scans
     * const { count } = await prisma.scan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanDeleteManyArgs>(args?: SelectSubset<T, ScanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scans
     * const scan = await prisma.scan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanUpdateManyArgs>(args: SelectSubset<T, ScanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scans and returns the data updated in the database.
     * @param {ScanUpdateManyAndReturnArgs} args - Arguments to update many Scans.
     * @example
     * // Update many Scans
     * const scan = await prisma.scan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scans and only return the `id`
     * const scanWithIdOnly = await prisma.scan.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScanUpdateManyAndReturnArgs>(args: SelectSubset<T, ScanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scan.
     * @param {ScanUpsertArgs} args - Arguments to update or create a Scan.
     * @example
     * // Update or create a Scan
     * const scan = await prisma.scan.upsert({
     *   create: {
     *     // ... data to create a Scan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scan we want to update
     *   }
     * })
     */
    upsert<T extends ScanUpsertArgs>(args: SelectSubset<T, ScanUpsertArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCountArgs} args - Arguments to filter Scans to count.
     * @example
     * // Count the number of Scans
     * const count = await prisma.scan.count({
     *   where: {
     *     // ... the filter for the Scans we want to count
     *   }
     * })
    **/
    count<T extends ScanCountArgs>(
      args?: Subset<T, ScanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScanAggregateArgs>(args: Subset<T, ScanAggregateArgs>): Prisma.PrismaPromise<GetScanAggregateType<T>>

    /**
     * Group by Scan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanGroupByArgs} args - Group by arguments.
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
      T extends ScanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanGroupByArgs['orderBy'] }
        : { orderBy?: ScanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scan model
   */
  readonly fields: ScanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    promptResponses<T extends Scan$promptResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Scan$promptResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends Scan$reportArgs<ExtArgs> = {}>(args?: Subset<T, Scan$reportArgs<ExtArgs>>): Prisma__ScanReportClient<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Scan model
   */
  interface ScanFieldRefs {
    readonly id: FieldRef<"Scan", 'String'>
    readonly domainId: FieldRef<"Scan", 'String'>
    readonly status: FieldRef<"Scan", 'String'>
    readonly visibilityScore: FieldRef<"Scan", 'Float'>
    readonly presenceScore: FieldRef<"Scan", 'Float'>
    readonly recommendationStrength: FieldRef<"Scan", 'Float'>
    readonly trendScore: FieldRef<"Scan", 'Float'>
    readonly createdAt: FieldRef<"Scan", 'DateTime'>
    readonly completedAt: FieldRef<"Scan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scan findUnique
   */
  export type ScanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan findUniqueOrThrow
   */
  export type ScanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan findFirst
   */
  export type ScanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan findFirstOrThrow
   */
  export type ScanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan findMany
   */
  export type ScanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scans to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan create
   */
  export type ScanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The data needed to create a Scan.
     */
    data: XOR<ScanCreateInput, ScanUncheckedCreateInput>
  }

  /**
   * Scan createMany
   */
  export type ScanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scans.
     */
    data: ScanCreateManyInput | ScanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scan createManyAndReturn
   */
  export type ScanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * The data used to create many Scans.
     */
    data: ScanCreateManyInput | ScanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scan update
   */
  export type ScanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The data needed to update a Scan.
     */
    data: XOR<ScanUpdateInput, ScanUncheckedUpdateInput>
    /**
     * Choose, which Scan to update.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan updateMany
   */
  export type ScanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scans.
     */
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyInput>
    /**
     * Filter which Scans to update
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to update.
     */
    limit?: number
  }

  /**
   * Scan updateManyAndReturn
   */
  export type ScanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * The data used to update Scans.
     */
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyInput>
    /**
     * Filter which Scans to update
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scan upsert
   */
  export type ScanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The filter to search for the Scan to update in case it exists.
     */
    where: ScanWhereUniqueInput
    /**
     * In case the Scan found by the `where` argument doesn't exist, create a new Scan with this data.
     */
    create: XOR<ScanCreateInput, ScanUncheckedCreateInput>
    /**
     * In case the Scan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanUpdateInput, ScanUncheckedUpdateInput>
  }

  /**
   * Scan delete
   */
  export type ScanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter which Scan to delete.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan deleteMany
   */
  export type ScanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scans to delete
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to delete.
     */
    limit?: number
  }

  /**
   * Scan.promptResponses
   */
  export type Scan$promptResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    where?: PromptResponseWhereInput
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    cursor?: PromptResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * Scan.report
   */
  export type Scan$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
    where?: ScanReportWhereInput
  }

  /**
   * Scan without action
   */
  export type ScanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
  }


  /**
   * Model PromptResponse
   */

  export type AggregatePromptResponse = {
    _count: PromptResponseCountAggregateOutputType | null
    _avg: PromptResponseAvgAggregateOutputType | null
    _sum: PromptResponseSumAggregateOutputType | null
    _min: PromptResponseMinAggregateOutputType | null
    _max: PromptResponseMaxAggregateOutputType | null
  }

  export type PromptResponseAvgAggregateOutputType = {
    openai_processing_time: number | null
    gemini_processing_time: number | null
  }

  export type PromptResponseSumAggregateOutputType = {
    openai_processing_time: number | null
    gemini_processing_time: number | null
  }

  export type PromptResponseMinAggregateOutputType = {
    id: string | null
    scanId: string | null
    promptId: string | null
    openai_raw_response: string | null
    gemini_raw_response: string | null
    openai_processing_time: number | null
    gemini_processing_time: number | null
    openai_status: string | null
    gemini_status: string | null
  }

  export type PromptResponseMaxAggregateOutputType = {
    id: string | null
    scanId: string | null
    promptId: string | null
    openai_raw_response: string | null
    gemini_raw_response: string | null
    openai_processing_time: number | null
    gemini_processing_time: number | null
    openai_status: string | null
    gemini_status: string | null
  }

  export type PromptResponseCountAggregateOutputType = {
    id: number
    scanId: number
    promptId: number
    openai_raw_response: number
    gemini_raw_response: number
    openai_normalized_json: number
    gemini_normalized_json: number
    openai_processing_time: number
    gemini_processing_time: number
    openai_status: number
    gemini_status: number
    _all: number
  }


  export type PromptResponseAvgAggregateInputType = {
    openai_processing_time?: true
    gemini_processing_time?: true
  }

  export type PromptResponseSumAggregateInputType = {
    openai_processing_time?: true
    gemini_processing_time?: true
  }

  export type PromptResponseMinAggregateInputType = {
    id?: true
    scanId?: true
    promptId?: true
    openai_raw_response?: true
    gemini_raw_response?: true
    openai_processing_time?: true
    gemini_processing_time?: true
    openai_status?: true
    gemini_status?: true
  }

  export type PromptResponseMaxAggregateInputType = {
    id?: true
    scanId?: true
    promptId?: true
    openai_raw_response?: true
    gemini_raw_response?: true
    openai_processing_time?: true
    gemini_processing_time?: true
    openai_status?: true
    gemini_status?: true
  }

  export type PromptResponseCountAggregateInputType = {
    id?: true
    scanId?: true
    promptId?: true
    openai_raw_response?: true
    gemini_raw_response?: true
    openai_normalized_json?: true
    gemini_normalized_json?: true
    openai_processing_time?: true
    gemini_processing_time?: true
    openai_status?: true
    gemini_status?: true
    _all?: true
  }

  export type PromptResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptResponse to aggregate.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptResponses
    **/
    _count?: true | PromptResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptResponseMaxAggregateInputType
  }

  export type GetPromptResponseAggregateType<T extends PromptResponseAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptResponse[P]>
      : GetScalarType<T[P], AggregatePromptResponse[P]>
  }




  export type PromptResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptResponseWhereInput
    orderBy?: PromptResponseOrderByWithAggregationInput | PromptResponseOrderByWithAggregationInput[]
    by: PromptResponseScalarFieldEnum[] | PromptResponseScalarFieldEnum
    having?: PromptResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptResponseCountAggregateInputType | true
    _avg?: PromptResponseAvgAggregateInputType
    _sum?: PromptResponseSumAggregateInputType
    _min?: PromptResponseMinAggregateInputType
    _max?: PromptResponseMaxAggregateInputType
  }

  export type PromptResponseGroupByOutputType = {
    id: string
    scanId: string
    promptId: string
    openai_raw_response: string | null
    gemini_raw_response: string | null
    openai_normalized_json: JsonValue | null
    gemini_normalized_json: JsonValue | null
    openai_processing_time: number | null
    gemini_processing_time: number | null
    openai_status: string | null
    gemini_status: string | null
    _count: PromptResponseCountAggregateOutputType | null
    _avg: PromptResponseAvgAggregateOutputType | null
    _sum: PromptResponseSumAggregateOutputType | null
    _min: PromptResponseMinAggregateOutputType | null
    _max: PromptResponseMaxAggregateOutputType | null
  }

  type GetPromptResponseGroupByPayload<T extends PromptResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptResponseGroupByOutputType[P]>
            : GetScalarType<T[P], PromptResponseGroupByOutputType[P]>
        }
      >
    >


  export type PromptResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    promptId?: boolean
    openai_raw_response?: boolean
    gemini_raw_response?: boolean
    openai_normalized_json?: boolean
    gemini_normalized_json?: boolean
    openai_processing_time?: boolean
    gemini_processing_time?: boolean
    openai_status?: boolean
    gemini_status?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptResponse"]>

  export type PromptResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    promptId?: boolean
    openai_raw_response?: boolean
    gemini_raw_response?: boolean
    openai_normalized_json?: boolean
    gemini_normalized_json?: boolean
    openai_processing_time?: boolean
    gemini_processing_time?: boolean
    openai_status?: boolean
    gemini_status?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptResponse"]>

  export type PromptResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    promptId?: boolean
    openai_raw_response?: boolean
    gemini_raw_response?: boolean
    openai_normalized_json?: boolean
    gemini_normalized_json?: boolean
    openai_processing_time?: boolean
    gemini_processing_time?: boolean
    openai_status?: boolean
    gemini_status?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptResponse"]>

  export type PromptResponseSelectScalar = {
    id?: boolean
    scanId?: boolean
    promptId?: boolean
    openai_raw_response?: boolean
    gemini_raw_response?: boolean
    openai_normalized_json?: boolean
    gemini_normalized_json?: boolean
    openai_processing_time?: boolean
    gemini_processing_time?: boolean
    openai_status?: boolean
    gemini_status?: boolean
  }

  export type PromptResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scanId" | "promptId" | "openai_raw_response" | "gemini_raw_response" | "openai_normalized_json" | "gemini_normalized_json" | "openai_processing_time" | "gemini_processing_time" | "openai_status" | "gemini_status", ExtArgs["result"]["promptResponse"]>
  export type PromptResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }
  export type PromptResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }
  export type PromptResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }

  export type $PromptResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptResponse"
    objects: {
      scan: Prisma.$ScanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scanId: string
      promptId: string
      openai_raw_response: string | null
      gemini_raw_response: string | null
      openai_normalized_json: Prisma.JsonValue | null
      gemini_normalized_json: Prisma.JsonValue | null
      openai_processing_time: number | null
      gemini_processing_time: number | null
      openai_status: string | null
      gemini_status: string | null
    }, ExtArgs["result"]["promptResponse"]>
    composites: {}
  }

  type PromptResponseGetPayload<S extends boolean | null | undefined | PromptResponseDefaultArgs> = $Result.GetResult<Prisma.$PromptResponsePayload, S>

  type PromptResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptResponseCountAggregateInputType | true
    }

  export interface PromptResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptResponse'], meta: { name: 'PromptResponse' } }
    /**
     * Find zero or one PromptResponse that matches the filter.
     * @param {PromptResponseFindUniqueArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptResponseFindUniqueArgs>(args: SelectSubset<T, PromptResponseFindUniqueArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromptResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptResponseFindUniqueOrThrowArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseFindFirstArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptResponseFindFirstArgs>(args?: SelectSubset<T, PromptResponseFindFirstArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseFindFirstOrThrowArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromptResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptResponses
     * const promptResponses = await prisma.promptResponse.findMany()
     * 
     * // Get first 10 PromptResponses
     * const promptResponses = await prisma.promptResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptResponseWithIdOnly = await prisma.promptResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptResponseFindManyArgs>(args?: SelectSubset<T, PromptResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromptResponse.
     * @param {PromptResponseCreateArgs} args - Arguments to create a PromptResponse.
     * @example
     * // Create one PromptResponse
     * const PromptResponse = await prisma.promptResponse.create({
     *   data: {
     *     // ... data to create a PromptResponse
     *   }
     * })
     * 
     */
    create<T extends PromptResponseCreateArgs>(args: SelectSubset<T, PromptResponseCreateArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromptResponses.
     * @param {PromptResponseCreateManyArgs} args - Arguments to create many PromptResponses.
     * @example
     * // Create many PromptResponses
     * const promptResponse = await prisma.promptResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptResponseCreateManyArgs>(args?: SelectSubset<T, PromptResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptResponses and returns the data saved in the database.
     * @param {PromptResponseCreateManyAndReturnArgs} args - Arguments to create many PromptResponses.
     * @example
     * // Create many PromptResponses
     * const promptResponse = await prisma.promptResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptResponses and only return the `id`
     * const promptResponseWithIdOnly = await prisma.promptResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromptResponse.
     * @param {PromptResponseDeleteArgs} args - Arguments to delete one PromptResponse.
     * @example
     * // Delete one PromptResponse
     * const PromptResponse = await prisma.promptResponse.delete({
     *   where: {
     *     // ... filter to delete one PromptResponse
     *   }
     * })
     * 
     */
    delete<T extends PromptResponseDeleteArgs>(args: SelectSubset<T, PromptResponseDeleteArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromptResponse.
     * @param {PromptResponseUpdateArgs} args - Arguments to update one PromptResponse.
     * @example
     * // Update one PromptResponse
     * const promptResponse = await prisma.promptResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptResponseUpdateArgs>(args: SelectSubset<T, PromptResponseUpdateArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromptResponses.
     * @param {PromptResponseDeleteManyArgs} args - Arguments to filter PromptResponses to delete.
     * @example
     * // Delete a few PromptResponses
     * const { count } = await prisma.promptResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptResponseDeleteManyArgs>(args?: SelectSubset<T, PromptResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptResponses
     * const promptResponse = await prisma.promptResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptResponseUpdateManyArgs>(args: SelectSubset<T, PromptResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptResponses and returns the data updated in the database.
     * @param {PromptResponseUpdateManyAndReturnArgs} args - Arguments to update many PromptResponses.
     * @example
     * // Update many PromptResponses
     * const promptResponse = await prisma.promptResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromptResponses and only return the `id`
     * const promptResponseWithIdOnly = await prisma.promptResponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromptResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromptResponse.
     * @param {PromptResponseUpsertArgs} args - Arguments to update or create a PromptResponse.
     * @example
     * // Update or create a PromptResponse
     * const promptResponse = await prisma.promptResponse.upsert({
     *   create: {
     *     // ... data to create a PromptResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptResponse we want to update
     *   }
     * })
     */
    upsert<T extends PromptResponseUpsertArgs>(args: SelectSubset<T, PromptResponseUpsertArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromptResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseCountArgs} args - Arguments to filter PromptResponses to count.
     * @example
     * // Count the number of PromptResponses
     * const count = await prisma.promptResponse.count({
     *   where: {
     *     // ... the filter for the PromptResponses we want to count
     *   }
     * })
    **/
    count<T extends PromptResponseCountArgs>(
      args?: Subset<T, PromptResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptResponseAggregateArgs>(args: Subset<T, PromptResponseAggregateArgs>): Prisma.PrismaPromise<GetPromptResponseAggregateType<T>>

    /**
     * Group by PromptResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseGroupByArgs} args - Group by arguments.
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
      T extends PromptResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptResponseGroupByArgs['orderBy'] }
        : { orderBy?: PromptResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptResponse model
   */
  readonly fields: PromptResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scan<T extends ScanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScanDefaultArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PromptResponse model
   */
  interface PromptResponseFieldRefs {
    readonly id: FieldRef<"PromptResponse", 'String'>
    readonly scanId: FieldRef<"PromptResponse", 'String'>
    readonly promptId: FieldRef<"PromptResponse", 'String'>
    readonly openai_raw_response: FieldRef<"PromptResponse", 'String'>
    readonly gemini_raw_response: FieldRef<"PromptResponse", 'String'>
    readonly openai_normalized_json: FieldRef<"PromptResponse", 'Json'>
    readonly gemini_normalized_json: FieldRef<"PromptResponse", 'Json'>
    readonly openai_processing_time: FieldRef<"PromptResponse", 'Int'>
    readonly gemini_processing_time: FieldRef<"PromptResponse", 'Int'>
    readonly openai_status: FieldRef<"PromptResponse", 'String'>
    readonly gemini_status: FieldRef<"PromptResponse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PromptResponse findUnique
   */
  export type PromptResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse findUniqueOrThrow
   */
  export type PromptResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse findFirst
   */
  export type PromptResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptResponses.
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptResponses.
     */
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * PromptResponse findFirstOrThrow
   */
  export type PromptResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptResponses.
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptResponses.
     */
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * PromptResponse findMany
   */
  export type PromptResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponses to fetch.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptResponses.
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptResponses.
     */
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * PromptResponse create
   */
  export type PromptResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a PromptResponse.
     */
    data: XOR<PromptResponseCreateInput, PromptResponseUncheckedCreateInput>
  }

  /**
   * PromptResponse createMany
   */
  export type PromptResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptResponses.
     */
    data: PromptResponseCreateManyInput | PromptResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptResponse createManyAndReturn
   */
  export type PromptResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * The data used to create many PromptResponses.
     */
    data: PromptResponseCreateManyInput | PromptResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptResponse update
   */
  export type PromptResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a PromptResponse.
     */
    data: XOR<PromptResponseUpdateInput, PromptResponseUncheckedUpdateInput>
    /**
     * Choose, which PromptResponse to update.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse updateMany
   */
  export type PromptResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptResponses.
     */
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyInput>
    /**
     * Filter which PromptResponses to update
     */
    where?: PromptResponseWhereInput
    /**
     * Limit how many PromptResponses to update.
     */
    limit?: number
  }

  /**
   * PromptResponse updateManyAndReturn
   */
  export type PromptResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * The data used to update PromptResponses.
     */
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyInput>
    /**
     * Filter which PromptResponses to update
     */
    where?: PromptResponseWhereInput
    /**
     * Limit how many PromptResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptResponse upsert
   */
  export type PromptResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the PromptResponse to update in case it exists.
     */
    where: PromptResponseWhereUniqueInput
    /**
     * In case the PromptResponse found by the `where` argument doesn't exist, create a new PromptResponse with this data.
     */
    create: XOR<PromptResponseCreateInput, PromptResponseUncheckedCreateInput>
    /**
     * In case the PromptResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptResponseUpdateInput, PromptResponseUncheckedUpdateInput>
  }

  /**
   * PromptResponse delete
   */
  export type PromptResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter which PromptResponse to delete.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse deleteMany
   */
  export type PromptResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptResponses to delete
     */
    where?: PromptResponseWhereInput
    /**
     * Limit how many PromptResponses to delete.
     */
    limit?: number
  }

  /**
   * PromptResponse without action
   */
  export type PromptResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
  }


  /**
   * Model ScanReport
   */

  export type AggregateScanReport = {
    _count: ScanReportCountAggregateOutputType | null
    _min: ScanReportMinAggregateOutputType | null
    _max: ScanReportMaxAggregateOutputType | null
  }

  export type ScanReportMinAggregateOutputType = {
    id: string | null
    scanId: string | null
  }

  export type ScanReportMaxAggregateOutputType = {
    id: string | null
    scanId: string | null
  }

  export type ScanReportCountAggregateOutputType = {
    id: number
    scanId: number
    openaiFindings: number
    geminiFindings: number
    brandMentions: number
    competitorMentions: number
    visibilityScoreBreakdown: number
    sovBreakdown: number
    recommendationBreakdown: number
    confidenceScores: number
    _all: number
  }


  export type ScanReportMinAggregateInputType = {
    id?: true
    scanId?: true
  }

  export type ScanReportMaxAggregateInputType = {
    id?: true
    scanId?: true
  }

  export type ScanReportCountAggregateInputType = {
    id?: true
    scanId?: true
    openaiFindings?: true
    geminiFindings?: true
    brandMentions?: true
    competitorMentions?: true
    visibilityScoreBreakdown?: true
    sovBreakdown?: true
    recommendationBreakdown?: true
    confidenceScores?: true
    _all?: true
  }

  export type ScanReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanReport to aggregate.
     */
    where?: ScanReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanReports to fetch.
     */
    orderBy?: ScanReportOrderByWithRelationInput | ScanReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScanReports
    **/
    _count?: true | ScanReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanReportMaxAggregateInputType
  }

  export type GetScanReportAggregateType<T extends ScanReportAggregateArgs> = {
        [P in keyof T & keyof AggregateScanReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScanReport[P]>
      : GetScalarType<T[P], AggregateScanReport[P]>
  }




  export type ScanReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanReportWhereInput
    orderBy?: ScanReportOrderByWithAggregationInput | ScanReportOrderByWithAggregationInput[]
    by: ScanReportScalarFieldEnum[] | ScanReportScalarFieldEnum
    having?: ScanReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanReportCountAggregateInputType | true
    _min?: ScanReportMinAggregateInputType
    _max?: ScanReportMaxAggregateInputType
  }

  export type ScanReportGroupByOutputType = {
    id: string
    scanId: string
    openaiFindings: JsonValue
    geminiFindings: JsonValue
    brandMentions: JsonValue
    competitorMentions: JsonValue
    visibilityScoreBreakdown: JsonValue
    sovBreakdown: JsonValue
    recommendationBreakdown: JsonValue
    confidenceScores: JsonValue
    _count: ScanReportCountAggregateOutputType | null
    _min: ScanReportMinAggregateOutputType | null
    _max: ScanReportMaxAggregateOutputType | null
  }

  type GetScanReportGroupByPayload<T extends ScanReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanReportGroupByOutputType[P]>
            : GetScalarType<T[P], ScanReportGroupByOutputType[P]>
        }
      >
    >


  export type ScanReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    openaiFindings?: boolean
    geminiFindings?: boolean
    brandMentions?: boolean
    competitorMentions?: boolean
    visibilityScoreBreakdown?: boolean
    sovBreakdown?: boolean
    recommendationBreakdown?: boolean
    confidenceScores?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanReport"]>

  export type ScanReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    openaiFindings?: boolean
    geminiFindings?: boolean
    brandMentions?: boolean
    competitorMentions?: boolean
    visibilityScoreBreakdown?: boolean
    sovBreakdown?: boolean
    recommendationBreakdown?: boolean
    confidenceScores?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanReport"]>

  export type ScanReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    openaiFindings?: boolean
    geminiFindings?: boolean
    brandMentions?: boolean
    competitorMentions?: boolean
    visibilityScoreBreakdown?: boolean
    sovBreakdown?: boolean
    recommendationBreakdown?: boolean
    confidenceScores?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanReport"]>

  export type ScanReportSelectScalar = {
    id?: boolean
    scanId?: boolean
    openaiFindings?: boolean
    geminiFindings?: boolean
    brandMentions?: boolean
    competitorMentions?: boolean
    visibilityScoreBreakdown?: boolean
    sovBreakdown?: boolean
    recommendationBreakdown?: boolean
    confidenceScores?: boolean
  }

  export type ScanReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scanId" | "openaiFindings" | "geminiFindings" | "brandMentions" | "competitorMentions" | "visibilityScoreBreakdown" | "sovBreakdown" | "recommendationBreakdown" | "confidenceScores", ExtArgs["result"]["scanReport"]>
  export type ScanReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }
  export type ScanReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }
  export type ScanReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
  }

  export type $ScanReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScanReport"
    objects: {
      scan: Prisma.$ScanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scanId: string
      openaiFindings: Prisma.JsonValue
      geminiFindings: Prisma.JsonValue
      brandMentions: Prisma.JsonValue
      competitorMentions: Prisma.JsonValue
      visibilityScoreBreakdown: Prisma.JsonValue
      sovBreakdown: Prisma.JsonValue
      recommendationBreakdown: Prisma.JsonValue
      confidenceScores: Prisma.JsonValue
    }, ExtArgs["result"]["scanReport"]>
    composites: {}
  }

  type ScanReportGetPayload<S extends boolean | null | undefined | ScanReportDefaultArgs> = $Result.GetResult<Prisma.$ScanReportPayload, S>

  type ScanReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanReportCountAggregateInputType | true
    }

  export interface ScanReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScanReport'], meta: { name: 'ScanReport' } }
    /**
     * Find zero or one ScanReport that matches the filter.
     * @param {ScanReportFindUniqueArgs} args - Arguments to find a ScanReport
     * @example
     * // Get one ScanReport
     * const scanReport = await prisma.scanReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanReportFindUniqueArgs>(args: SelectSubset<T, ScanReportFindUniqueArgs<ExtArgs>>): Prisma__ScanReportClient<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScanReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanReportFindUniqueOrThrowArgs} args - Arguments to find a ScanReport
     * @example
     * // Get one ScanReport
     * const scanReport = await prisma.scanReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanReportClient<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanReportFindFirstArgs} args - Arguments to find a ScanReport
     * @example
     * // Get one ScanReport
     * const scanReport = await prisma.scanReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanReportFindFirstArgs>(args?: SelectSubset<T, ScanReportFindFirstArgs<ExtArgs>>): Prisma__ScanReportClient<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanReportFindFirstOrThrowArgs} args - Arguments to find a ScanReport
     * @example
     * // Get one ScanReport
     * const scanReport = await prisma.scanReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanReportClient<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScanReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScanReports
     * const scanReports = await prisma.scanReport.findMany()
     * 
     * // Get first 10 ScanReports
     * const scanReports = await prisma.scanReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanReportWithIdOnly = await prisma.scanReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanReportFindManyArgs>(args?: SelectSubset<T, ScanReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScanReport.
     * @param {ScanReportCreateArgs} args - Arguments to create a ScanReport.
     * @example
     * // Create one ScanReport
     * const ScanReport = await prisma.scanReport.create({
     *   data: {
     *     // ... data to create a ScanReport
     *   }
     * })
     * 
     */
    create<T extends ScanReportCreateArgs>(args: SelectSubset<T, ScanReportCreateArgs<ExtArgs>>): Prisma__ScanReportClient<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScanReports.
     * @param {ScanReportCreateManyArgs} args - Arguments to create many ScanReports.
     * @example
     * // Create many ScanReports
     * const scanReport = await prisma.scanReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanReportCreateManyArgs>(args?: SelectSubset<T, ScanReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScanReports and returns the data saved in the database.
     * @param {ScanReportCreateManyAndReturnArgs} args - Arguments to create many ScanReports.
     * @example
     * // Create many ScanReports
     * const scanReport = await prisma.scanReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScanReports and only return the `id`
     * const scanReportWithIdOnly = await prisma.scanReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScanReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ScanReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScanReport.
     * @param {ScanReportDeleteArgs} args - Arguments to delete one ScanReport.
     * @example
     * // Delete one ScanReport
     * const ScanReport = await prisma.scanReport.delete({
     *   where: {
     *     // ... filter to delete one ScanReport
     *   }
     * })
     * 
     */
    delete<T extends ScanReportDeleteArgs>(args: SelectSubset<T, ScanReportDeleteArgs<ExtArgs>>): Prisma__ScanReportClient<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScanReport.
     * @param {ScanReportUpdateArgs} args - Arguments to update one ScanReport.
     * @example
     * // Update one ScanReport
     * const scanReport = await prisma.scanReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanReportUpdateArgs>(args: SelectSubset<T, ScanReportUpdateArgs<ExtArgs>>): Prisma__ScanReportClient<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScanReports.
     * @param {ScanReportDeleteManyArgs} args - Arguments to filter ScanReports to delete.
     * @example
     * // Delete a few ScanReports
     * const { count } = await prisma.scanReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanReportDeleteManyArgs>(args?: SelectSubset<T, ScanReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScanReports
     * const scanReport = await prisma.scanReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanReportUpdateManyArgs>(args: SelectSubset<T, ScanReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanReports and returns the data updated in the database.
     * @param {ScanReportUpdateManyAndReturnArgs} args - Arguments to update many ScanReports.
     * @example
     * // Update many ScanReports
     * const scanReport = await prisma.scanReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScanReports and only return the `id`
     * const scanReportWithIdOnly = await prisma.scanReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScanReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ScanReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScanReport.
     * @param {ScanReportUpsertArgs} args - Arguments to update or create a ScanReport.
     * @example
     * // Update or create a ScanReport
     * const scanReport = await prisma.scanReport.upsert({
     *   create: {
     *     // ... data to create a ScanReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScanReport we want to update
     *   }
     * })
     */
    upsert<T extends ScanReportUpsertArgs>(args: SelectSubset<T, ScanReportUpsertArgs<ExtArgs>>): Prisma__ScanReportClient<$Result.GetResult<Prisma.$ScanReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScanReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanReportCountArgs} args - Arguments to filter ScanReports to count.
     * @example
     * // Count the number of ScanReports
     * const count = await prisma.scanReport.count({
     *   where: {
     *     // ... the filter for the ScanReports we want to count
     *   }
     * })
    **/
    count<T extends ScanReportCountArgs>(
      args?: Subset<T, ScanReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScanReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScanReportAggregateArgs>(args: Subset<T, ScanReportAggregateArgs>): Prisma.PrismaPromise<GetScanReportAggregateType<T>>

    /**
     * Group by ScanReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanReportGroupByArgs} args - Group by arguments.
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
      T extends ScanReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanReportGroupByArgs['orderBy'] }
        : { orderBy?: ScanReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScanReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScanReport model
   */
  readonly fields: ScanReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScanReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scan<T extends ScanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScanDefaultArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScanReport model
   */
  interface ScanReportFieldRefs {
    readonly id: FieldRef<"ScanReport", 'String'>
    readonly scanId: FieldRef<"ScanReport", 'String'>
    readonly openaiFindings: FieldRef<"ScanReport", 'Json'>
    readonly geminiFindings: FieldRef<"ScanReport", 'Json'>
    readonly brandMentions: FieldRef<"ScanReport", 'Json'>
    readonly competitorMentions: FieldRef<"ScanReport", 'Json'>
    readonly visibilityScoreBreakdown: FieldRef<"ScanReport", 'Json'>
    readonly sovBreakdown: FieldRef<"ScanReport", 'Json'>
    readonly recommendationBreakdown: FieldRef<"ScanReport", 'Json'>
    readonly confidenceScores: FieldRef<"ScanReport", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ScanReport findUnique
   */
  export type ScanReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
    /**
     * Filter, which ScanReport to fetch.
     */
    where: ScanReportWhereUniqueInput
  }

  /**
   * ScanReport findUniqueOrThrow
   */
  export type ScanReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
    /**
     * Filter, which ScanReport to fetch.
     */
    where: ScanReportWhereUniqueInput
  }

  /**
   * ScanReport findFirst
   */
  export type ScanReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
    /**
     * Filter, which ScanReport to fetch.
     */
    where?: ScanReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanReports to fetch.
     */
    orderBy?: ScanReportOrderByWithRelationInput | ScanReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanReports.
     */
    cursor?: ScanReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanReports.
     */
    distinct?: ScanReportScalarFieldEnum | ScanReportScalarFieldEnum[]
  }

  /**
   * ScanReport findFirstOrThrow
   */
  export type ScanReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
    /**
     * Filter, which ScanReport to fetch.
     */
    where?: ScanReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanReports to fetch.
     */
    orderBy?: ScanReportOrderByWithRelationInput | ScanReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanReports.
     */
    cursor?: ScanReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanReports.
     */
    distinct?: ScanReportScalarFieldEnum | ScanReportScalarFieldEnum[]
  }

  /**
   * ScanReport findMany
   */
  export type ScanReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
    /**
     * Filter, which ScanReports to fetch.
     */
    where?: ScanReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanReports to fetch.
     */
    orderBy?: ScanReportOrderByWithRelationInput | ScanReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScanReports.
     */
    cursor?: ScanReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanReports.
     */
    distinct?: ScanReportScalarFieldEnum | ScanReportScalarFieldEnum[]
  }

  /**
   * ScanReport create
   */
  export type ScanReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
    /**
     * The data needed to create a ScanReport.
     */
    data: XOR<ScanReportCreateInput, ScanReportUncheckedCreateInput>
  }

  /**
   * ScanReport createMany
   */
  export type ScanReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScanReports.
     */
    data: ScanReportCreateManyInput | ScanReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScanReport createManyAndReturn
   */
  export type ScanReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * The data used to create many ScanReports.
     */
    data: ScanReportCreateManyInput | ScanReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScanReport update
   */
  export type ScanReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
    /**
     * The data needed to update a ScanReport.
     */
    data: XOR<ScanReportUpdateInput, ScanReportUncheckedUpdateInput>
    /**
     * Choose, which ScanReport to update.
     */
    where: ScanReportWhereUniqueInput
  }

  /**
   * ScanReport updateMany
   */
  export type ScanReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScanReports.
     */
    data: XOR<ScanReportUpdateManyMutationInput, ScanReportUncheckedUpdateManyInput>
    /**
     * Filter which ScanReports to update
     */
    where?: ScanReportWhereInput
    /**
     * Limit how many ScanReports to update.
     */
    limit?: number
  }

  /**
   * ScanReport updateManyAndReturn
   */
  export type ScanReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * The data used to update ScanReports.
     */
    data: XOR<ScanReportUpdateManyMutationInput, ScanReportUncheckedUpdateManyInput>
    /**
     * Filter which ScanReports to update
     */
    where?: ScanReportWhereInput
    /**
     * Limit how many ScanReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScanReport upsert
   */
  export type ScanReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
    /**
     * The filter to search for the ScanReport to update in case it exists.
     */
    where: ScanReportWhereUniqueInput
    /**
     * In case the ScanReport found by the `where` argument doesn't exist, create a new ScanReport with this data.
     */
    create: XOR<ScanReportCreateInput, ScanReportUncheckedCreateInput>
    /**
     * In case the ScanReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanReportUpdateInput, ScanReportUncheckedUpdateInput>
  }

  /**
   * ScanReport delete
   */
  export type ScanReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
    /**
     * Filter which ScanReport to delete.
     */
    where: ScanReportWhereUniqueInput
  }

  /**
   * ScanReport deleteMany
   */
  export type ScanReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanReports to delete
     */
    where?: ScanReportWhereInput
    /**
     * Limit how many ScanReports to delete.
     */
    limit?: number
  }

  /**
   * ScanReport without action
   */
  export type ScanReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanReport
     */
    select?: ScanReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanReport
     */
    omit?: ScanReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanReportInclude<ExtArgs> | null
  }


  /**
   * Model RecommendationAction
   */

  export type AggregateRecommendationAction = {
    _count: RecommendationActionCountAggregateOutputType | null
    _min: RecommendationActionMinAggregateOutputType | null
    _max: RecommendationActionMaxAggregateOutputType | null
  }

  export type RecommendationActionMinAggregateOutputType = {
    id: string | null
    domainId: string | null
    title: string | null
    description: string | null
    impact: string | null
    platform: string | null
    isCompleted: boolean | null
  }

  export type RecommendationActionMaxAggregateOutputType = {
    id: string | null
    domainId: string | null
    title: string | null
    description: string | null
    impact: string | null
    platform: string | null
    isCompleted: boolean | null
  }

  export type RecommendationActionCountAggregateOutputType = {
    id: number
    domainId: number
    title: number
    description: number
    impact: number
    platform: number
    isCompleted: number
    _all: number
  }


  export type RecommendationActionMinAggregateInputType = {
    id?: true
    domainId?: true
    title?: true
    description?: true
    impact?: true
    platform?: true
    isCompleted?: true
  }

  export type RecommendationActionMaxAggregateInputType = {
    id?: true
    domainId?: true
    title?: true
    description?: true
    impact?: true
    platform?: true
    isCompleted?: true
  }

  export type RecommendationActionCountAggregateInputType = {
    id?: true
    domainId?: true
    title?: true
    description?: true
    impact?: true
    platform?: true
    isCompleted?: true
    _all?: true
  }

  export type RecommendationActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendationAction to aggregate.
     */
    where?: RecommendationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationActions to fetch.
     */
    orderBy?: RecommendationActionOrderByWithRelationInput | RecommendationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecommendationActions
    **/
    _count?: true | RecommendationActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationActionMaxAggregateInputType
  }

  export type GetRecommendationActionAggregateType<T extends RecommendationActionAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendationAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendationAction[P]>
      : GetScalarType<T[P], AggregateRecommendationAction[P]>
  }




  export type RecommendationActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationActionWhereInput
    orderBy?: RecommendationActionOrderByWithAggregationInput | RecommendationActionOrderByWithAggregationInput[]
    by: RecommendationActionScalarFieldEnum[] | RecommendationActionScalarFieldEnum
    having?: RecommendationActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationActionCountAggregateInputType | true
    _min?: RecommendationActionMinAggregateInputType
    _max?: RecommendationActionMaxAggregateInputType
  }

  export type RecommendationActionGroupByOutputType = {
    id: string
    domainId: string
    title: string
    description: string
    impact: string
    platform: string
    isCompleted: boolean
    _count: RecommendationActionCountAggregateOutputType | null
    _min: RecommendationActionMinAggregateOutputType | null
    _max: RecommendationActionMaxAggregateOutputType | null
  }

  type GetRecommendationActionGroupByPayload<T extends RecommendationActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationActionGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationActionGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    title?: boolean
    description?: boolean
    impact?: boolean
    platform?: boolean
    isCompleted?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendationAction"]>

  export type RecommendationActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    title?: boolean
    description?: boolean
    impact?: boolean
    platform?: boolean
    isCompleted?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendationAction"]>

  export type RecommendationActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    title?: boolean
    description?: boolean
    impact?: boolean
    platform?: boolean
    isCompleted?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendationAction"]>

  export type RecommendationActionSelectScalar = {
    id?: boolean
    domainId?: boolean
    title?: boolean
    description?: boolean
    impact?: boolean
    platform?: boolean
    isCompleted?: boolean
  }

  export type RecommendationActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domainId" | "title" | "description" | "impact" | "platform" | "isCompleted", ExtArgs["result"]["recommendationAction"]>
  export type RecommendationActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }
  export type RecommendationActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }
  export type RecommendationActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }

  export type $RecommendationActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecommendationAction"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domainId: string
      title: string
      description: string
      impact: string
      platform: string
      isCompleted: boolean
    }, ExtArgs["result"]["recommendationAction"]>
    composites: {}
  }

  type RecommendationActionGetPayload<S extends boolean | null | undefined | RecommendationActionDefaultArgs> = $Result.GetResult<Prisma.$RecommendationActionPayload, S>

  type RecommendationActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendationActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendationActionCountAggregateInputType | true
    }

  export interface RecommendationActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecommendationAction'], meta: { name: 'RecommendationAction' } }
    /**
     * Find zero or one RecommendationAction that matches the filter.
     * @param {RecommendationActionFindUniqueArgs} args - Arguments to find a RecommendationAction
     * @example
     * // Get one RecommendationAction
     * const recommendationAction = await prisma.recommendationAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationActionFindUniqueArgs>(args: SelectSubset<T, RecommendationActionFindUniqueArgs<ExtArgs>>): Prisma__RecommendationActionClient<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecommendationAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationActionFindUniqueOrThrowArgs} args - Arguments to find a RecommendationAction
     * @example
     * // Get one RecommendationAction
     * const recommendationAction = await prisma.recommendationAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationActionFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationActionClient<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecommendationAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationActionFindFirstArgs} args - Arguments to find a RecommendationAction
     * @example
     * // Get one RecommendationAction
     * const recommendationAction = await prisma.recommendationAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationActionFindFirstArgs>(args?: SelectSubset<T, RecommendationActionFindFirstArgs<ExtArgs>>): Prisma__RecommendationActionClient<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecommendationAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationActionFindFirstOrThrowArgs} args - Arguments to find a RecommendationAction
     * @example
     * // Get one RecommendationAction
     * const recommendationAction = await prisma.recommendationAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationActionFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationActionClient<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecommendationActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecommendationActions
     * const recommendationActions = await prisma.recommendationAction.findMany()
     * 
     * // Get first 10 RecommendationActions
     * const recommendationActions = await prisma.recommendationAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationActionWithIdOnly = await prisma.recommendationAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationActionFindManyArgs>(args?: SelectSubset<T, RecommendationActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecommendationAction.
     * @param {RecommendationActionCreateArgs} args - Arguments to create a RecommendationAction.
     * @example
     * // Create one RecommendationAction
     * const RecommendationAction = await prisma.recommendationAction.create({
     *   data: {
     *     // ... data to create a RecommendationAction
     *   }
     * })
     * 
     */
    create<T extends RecommendationActionCreateArgs>(args: SelectSubset<T, RecommendationActionCreateArgs<ExtArgs>>): Prisma__RecommendationActionClient<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecommendationActions.
     * @param {RecommendationActionCreateManyArgs} args - Arguments to create many RecommendationActions.
     * @example
     * // Create many RecommendationActions
     * const recommendationAction = await prisma.recommendationAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationActionCreateManyArgs>(args?: SelectSubset<T, RecommendationActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecommendationActions and returns the data saved in the database.
     * @param {RecommendationActionCreateManyAndReturnArgs} args - Arguments to create many RecommendationActions.
     * @example
     * // Create many RecommendationActions
     * const recommendationAction = await prisma.recommendationAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecommendationActions and only return the `id`
     * const recommendationActionWithIdOnly = await prisma.recommendationAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationActionCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecommendationAction.
     * @param {RecommendationActionDeleteArgs} args - Arguments to delete one RecommendationAction.
     * @example
     * // Delete one RecommendationAction
     * const RecommendationAction = await prisma.recommendationAction.delete({
     *   where: {
     *     // ... filter to delete one RecommendationAction
     *   }
     * })
     * 
     */
    delete<T extends RecommendationActionDeleteArgs>(args: SelectSubset<T, RecommendationActionDeleteArgs<ExtArgs>>): Prisma__RecommendationActionClient<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecommendationAction.
     * @param {RecommendationActionUpdateArgs} args - Arguments to update one RecommendationAction.
     * @example
     * // Update one RecommendationAction
     * const recommendationAction = await prisma.recommendationAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationActionUpdateArgs>(args: SelectSubset<T, RecommendationActionUpdateArgs<ExtArgs>>): Prisma__RecommendationActionClient<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecommendationActions.
     * @param {RecommendationActionDeleteManyArgs} args - Arguments to filter RecommendationActions to delete.
     * @example
     * // Delete a few RecommendationActions
     * const { count } = await prisma.recommendationAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationActionDeleteManyArgs>(args?: SelectSubset<T, RecommendationActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendationActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecommendationActions
     * const recommendationAction = await prisma.recommendationAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationActionUpdateManyArgs>(args: SelectSubset<T, RecommendationActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendationActions and returns the data updated in the database.
     * @param {RecommendationActionUpdateManyAndReturnArgs} args - Arguments to update many RecommendationActions.
     * @example
     * // Update many RecommendationActions
     * const recommendationAction = await prisma.recommendationAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecommendationActions and only return the `id`
     * const recommendationActionWithIdOnly = await prisma.recommendationAction.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecommendationActionUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendationActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecommendationAction.
     * @param {RecommendationActionUpsertArgs} args - Arguments to update or create a RecommendationAction.
     * @example
     * // Update or create a RecommendationAction
     * const recommendationAction = await prisma.recommendationAction.upsert({
     *   create: {
     *     // ... data to create a RecommendationAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecommendationAction we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationActionUpsertArgs>(args: SelectSubset<T, RecommendationActionUpsertArgs<ExtArgs>>): Prisma__RecommendationActionClient<$Result.GetResult<Prisma.$RecommendationActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecommendationActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationActionCountArgs} args - Arguments to filter RecommendationActions to count.
     * @example
     * // Count the number of RecommendationActions
     * const count = await prisma.recommendationAction.count({
     *   where: {
     *     // ... the filter for the RecommendationActions we want to count
     *   }
     * })
    **/
    count<T extends RecommendationActionCountArgs>(
      args?: Subset<T, RecommendationActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecommendationAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendationActionAggregateArgs>(args: Subset<T, RecommendationActionAggregateArgs>): Prisma.PrismaPromise<GetRecommendationActionAggregateType<T>>

    /**
     * Group by RecommendationAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationActionGroupByArgs} args - Group by arguments.
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
      T extends RecommendationActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationActionGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecommendationActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecommendationAction model
   */
  readonly fields: RecommendationActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecommendationAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecommendationAction model
   */
  interface RecommendationActionFieldRefs {
    readonly id: FieldRef<"RecommendationAction", 'String'>
    readonly domainId: FieldRef<"RecommendationAction", 'String'>
    readonly title: FieldRef<"RecommendationAction", 'String'>
    readonly description: FieldRef<"RecommendationAction", 'String'>
    readonly impact: FieldRef<"RecommendationAction", 'String'>
    readonly platform: FieldRef<"RecommendationAction", 'String'>
    readonly isCompleted: FieldRef<"RecommendationAction", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RecommendationAction findUnique
   */
  export type RecommendationActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationAction to fetch.
     */
    where: RecommendationActionWhereUniqueInput
  }

  /**
   * RecommendationAction findUniqueOrThrow
   */
  export type RecommendationActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationAction to fetch.
     */
    where: RecommendationActionWhereUniqueInput
  }

  /**
   * RecommendationAction findFirst
   */
  export type RecommendationActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationAction to fetch.
     */
    where?: RecommendationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationActions to fetch.
     */
    orderBy?: RecommendationActionOrderByWithRelationInput | RecommendationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendationActions.
     */
    cursor?: RecommendationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationActions.
     */
    distinct?: RecommendationActionScalarFieldEnum | RecommendationActionScalarFieldEnum[]
  }

  /**
   * RecommendationAction findFirstOrThrow
   */
  export type RecommendationActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationAction to fetch.
     */
    where?: RecommendationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationActions to fetch.
     */
    orderBy?: RecommendationActionOrderByWithRelationInput | RecommendationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendationActions.
     */
    cursor?: RecommendationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationActions.
     */
    distinct?: RecommendationActionScalarFieldEnum | RecommendationActionScalarFieldEnum[]
  }

  /**
   * RecommendationAction findMany
   */
  export type RecommendationActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationActions to fetch.
     */
    where?: RecommendationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationActions to fetch.
     */
    orderBy?: RecommendationActionOrderByWithRelationInput | RecommendationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecommendationActions.
     */
    cursor?: RecommendationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationActions.
     */
    distinct?: RecommendationActionScalarFieldEnum | RecommendationActionScalarFieldEnum[]
  }

  /**
   * RecommendationAction create
   */
  export type RecommendationActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
    /**
     * The data needed to create a RecommendationAction.
     */
    data: XOR<RecommendationActionCreateInput, RecommendationActionUncheckedCreateInput>
  }

  /**
   * RecommendationAction createMany
   */
  export type RecommendationActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecommendationActions.
     */
    data: RecommendationActionCreateManyInput | RecommendationActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecommendationAction createManyAndReturn
   */
  export type RecommendationActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * The data used to create many RecommendationActions.
     */
    data: RecommendationActionCreateManyInput | RecommendationActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecommendationAction update
   */
  export type RecommendationActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
    /**
     * The data needed to update a RecommendationAction.
     */
    data: XOR<RecommendationActionUpdateInput, RecommendationActionUncheckedUpdateInput>
    /**
     * Choose, which RecommendationAction to update.
     */
    where: RecommendationActionWhereUniqueInput
  }

  /**
   * RecommendationAction updateMany
   */
  export type RecommendationActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecommendationActions.
     */
    data: XOR<RecommendationActionUpdateManyMutationInput, RecommendationActionUncheckedUpdateManyInput>
    /**
     * Filter which RecommendationActions to update
     */
    where?: RecommendationActionWhereInput
    /**
     * Limit how many RecommendationActions to update.
     */
    limit?: number
  }

  /**
   * RecommendationAction updateManyAndReturn
   */
  export type RecommendationActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * The data used to update RecommendationActions.
     */
    data: XOR<RecommendationActionUpdateManyMutationInput, RecommendationActionUncheckedUpdateManyInput>
    /**
     * Filter which RecommendationActions to update
     */
    where?: RecommendationActionWhereInput
    /**
     * Limit how many RecommendationActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecommendationAction upsert
   */
  export type RecommendationActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
    /**
     * The filter to search for the RecommendationAction to update in case it exists.
     */
    where: RecommendationActionWhereUniqueInput
    /**
     * In case the RecommendationAction found by the `where` argument doesn't exist, create a new RecommendationAction with this data.
     */
    create: XOR<RecommendationActionCreateInput, RecommendationActionUncheckedCreateInput>
    /**
     * In case the RecommendationAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationActionUpdateInput, RecommendationActionUncheckedUpdateInput>
  }

  /**
   * RecommendationAction delete
   */
  export type RecommendationActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
    /**
     * Filter which RecommendationAction to delete.
     */
    where: RecommendationActionWhereUniqueInput
  }

  /**
   * RecommendationAction deleteMany
   */
  export type RecommendationActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendationActions to delete
     */
    where?: RecommendationActionWhereInput
    /**
     * Limit how many RecommendationActions to delete.
     */
    limit?: number
  }

  /**
   * RecommendationAction without action
   */
  export type RecommendationActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationAction
     */
    select?: RecommendationActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationAction
     */
    omit?: RecommendationActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationActionInclude<ExtArgs> | null
  }


  /**
   * Model Competitor
   */

  export type AggregateCompetitor = {
    _count: CompetitorCountAggregateOutputType | null
    _min: CompetitorMinAggregateOutputType | null
    _max: CompetitorMaxAggregateOutputType | null
  }

  export type CompetitorMinAggregateOutputType = {
    id: string | null
    domainId: string | null
    url: string | null
    createdAt: Date | null
  }

  export type CompetitorMaxAggregateOutputType = {
    id: string | null
    domainId: string | null
    url: string | null
    createdAt: Date | null
  }

  export type CompetitorCountAggregateOutputType = {
    id: number
    domainId: number
    url: number
    createdAt: number
    _all: number
  }


  export type CompetitorMinAggregateInputType = {
    id?: true
    domainId?: true
    url?: true
    createdAt?: true
  }

  export type CompetitorMaxAggregateInputType = {
    id?: true
    domainId?: true
    url?: true
    createdAt?: true
  }

  export type CompetitorCountAggregateInputType = {
    id?: true
    domainId?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type CompetitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitor to aggregate.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitors
    **/
    _count?: true | CompetitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitorMaxAggregateInputType
  }

  export type GetCompetitorAggregateType<T extends CompetitorAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitor[P]>
      : GetScalarType<T[P], AggregateCompetitor[P]>
  }




  export type CompetitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitorWhereInput
    orderBy?: CompetitorOrderByWithAggregationInput | CompetitorOrderByWithAggregationInput[]
    by: CompetitorScalarFieldEnum[] | CompetitorScalarFieldEnum
    having?: CompetitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitorCountAggregateInputType | true
    _min?: CompetitorMinAggregateInputType
    _max?: CompetitorMaxAggregateInputType
  }

  export type CompetitorGroupByOutputType = {
    id: string
    domainId: string
    url: string
    createdAt: Date
    _count: CompetitorCountAggregateOutputType | null
    _min: CompetitorMinAggregateOutputType | null
    _max: CompetitorMaxAggregateOutputType | null
  }

  type GetCompetitorGroupByPayload<T extends CompetitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitorGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitorGroupByOutputType[P]>
        }
      >
    >


  export type CompetitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    url?: boolean
    createdAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitor"]>

  export type CompetitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    url?: boolean
    createdAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitor"]>

  export type CompetitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    url?: boolean
    createdAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitor"]>

  export type CompetitorSelectScalar = {
    id?: boolean
    domainId?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type CompetitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domainId" | "url" | "createdAt", ExtArgs["result"]["competitor"]>
  export type CompetitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }
  export type CompetitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }
  export type CompetitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }

  export type $CompetitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competitor"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domainId: string
      url: string
      createdAt: Date
    }, ExtArgs["result"]["competitor"]>
    composites: {}
  }

  type CompetitorGetPayload<S extends boolean | null | undefined | CompetitorDefaultArgs> = $Result.GetResult<Prisma.$CompetitorPayload, S>

  type CompetitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitorCountAggregateInputType | true
    }

  export interface CompetitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competitor'], meta: { name: 'Competitor' } }
    /**
     * Find zero or one Competitor that matches the filter.
     * @param {CompetitorFindUniqueArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitorFindUniqueArgs>(args: SelectSubset<T, CompetitorFindUniqueArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitorFindUniqueOrThrowArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitorFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindFirstArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitorFindFirstArgs>(args?: SelectSubset<T, CompetitorFindFirstArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindFirstOrThrowArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitorFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitors
     * const competitors = await prisma.competitor.findMany()
     * 
     * // Get first 10 Competitors
     * const competitors = await prisma.competitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitorWithIdOnly = await prisma.competitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitorFindManyArgs>(args?: SelectSubset<T, CompetitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competitor.
     * @param {CompetitorCreateArgs} args - Arguments to create a Competitor.
     * @example
     * // Create one Competitor
     * const Competitor = await prisma.competitor.create({
     *   data: {
     *     // ... data to create a Competitor
     *   }
     * })
     * 
     */
    create<T extends CompetitorCreateArgs>(args: SelectSubset<T, CompetitorCreateArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitors.
     * @param {CompetitorCreateManyArgs} args - Arguments to create many Competitors.
     * @example
     * // Create many Competitors
     * const competitor = await prisma.competitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitorCreateManyArgs>(args?: SelectSubset<T, CompetitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitors and returns the data saved in the database.
     * @param {CompetitorCreateManyAndReturnArgs} args - Arguments to create many Competitors.
     * @example
     * // Create many Competitors
     * const competitor = await prisma.competitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitors and only return the `id`
     * const competitorWithIdOnly = await prisma.competitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitorCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competitor.
     * @param {CompetitorDeleteArgs} args - Arguments to delete one Competitor.
     * @example
     * // Delete one Competitor
     * const Competitor = await prisma.competitor.delete({
     *   where: {
     *     // ... filter to delete one Competitor
     *   }
     * })
     * 
     */
    delete<T extends CompetitorDeleteArgs>(args: SelectSubset<T, CompetitorDeleteArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competitor.
     * @param {CompetitorUpdateArgs} args - Arguments to update one Competitor.
     * @example
     * // Update one Competitor
     * const competitor = await prisma.competitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitorUpdateArgs>(args: SelectSubset<T, CompetitorUpdateArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitors.
     * @param {CompetitorDeleteManyArgs} args - Arguments to filter Competitors to delete.
     * @example
     * // Delete a few Competitors
     * const { count } = await prisma.competitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitorDeleteManyArgs>(args?: SelectSubset<T, CompetitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitors
     * const competitor = await prisma.competitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitorUpdateManyArgs>(args: SelectSubset<T, CompetitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitors and returns the data updated in the database.
     * @param {CompetitorUpdateManyAndReturnArgs} args - Arguments to update many Competitors.
     * @example
     * // Update many Competitors
     * const competitor = await prisma.competitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitors and only return the `id`
     * const competitorWithIdOnly = await prisma.competitor.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompetitorUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competitor.
     * @param {CompetitorUpsertArgs} args - Arguments to update or create a Competitor.
     * @example
     * // Update or create a Competitor
     * const competitor = await prisma.competitor.upsert({
     *   create: {
     *     // ... data to create a Competitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competitor we want to update
     *   }
     * })
     */
    upsert<T extends CompetitorUpsertArgs>(args: SelectSubset<T, CompetitorUpsertArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorCountArgs} args - Arguments to filter Competitors to count.
     * @example
     * // Count the number of Competitors
     * const count = await prisma.competitor.count({
     *   where: {
     *     // ... the filter for the Competitors we want to count
     *   }
     * })
    **/
    count<T extends CompetitorCountArgs>(
      args?: Subset<T, CompetitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitorAggregateArgs>(args: Subset<T, CompetitorAggregateArgs>): Prisma.PrismaPromise<GetCompetitorAggregateType<T>>

    /**
     * Group by Competitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorGroupByArgs} args - Group by arguments.
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
      T extends CompetitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitorGroupByArgs['orderBy'] }
        : { orderBy?: CompetitorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competitor model
   */
  readonly fields: CompetitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Competitor model
   */
  interface CompetitorFieldRefs {
    readonly id: FieldRef<"Competitor", 'String'>
    readonly domainId: FieldRef<"Competitor", 'String'>
    readonly url: FieldRef<"Competitor", 'String'>
    readonly createdAt: FieldRef<"Competitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Competitor findUnique
   */
  export type CompetitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor findUniqueOrThrow
   */
  export type CompetitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor findFirst
   */
  export type CompetitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitors.
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitors.
     */
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Competitor findFirstOrThrow
   */
  export type CompetitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitors.
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitors.
     */
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Competitor findMany
   */
  export type CompetitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitors to fetch.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitors.
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitors.
     */
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Competitor create
   */
  export type CompetitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Competitor.
     */
    data: XOR<CompetitorCreateInput, CompetitorUncheckedCreateInput>
  }

  /**
   * Competitor createMany
   */
  export type CompetitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitors.
     */
    data: CompetitorCreateManyInput | CompetitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competitor createManyAndReturn
   */
  export type CompetitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * The data used to create many Competitors.
     */
    data: CompetitorCreateManyInput | CompetitorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competitor update
   */
  export type CompetitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Competitor.
     */
    data: XOR<CompetitorUpdateInput, CompetitorUncheckedUpdateInput>
    /**
     * Choose, which Competitor to update.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor updateMany
   */
  export type CompetitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitors.
     */
    data: XOR<CompetitorUpdateManyMutationInput, CompetitorUncheckedUpdateManyInput>
    /**
     * Filter which Competitors to update
     */
    where?: CompetitorWhereInput
    /**
     * Limit how many Competitors to update.
     */
    limit?: number
  }

  /**
   * Competitor updateManyAndReturn
   */
  export type CompetitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * The data used to update Competitors.
     */
    data: XOR<CompetitorUpdateManyMutationInput, CompetitorUncheckedUpdateManyInput>
    /**
     * Filter which Competitors to update
     */
    where?: CompetitorWhereInput
    /**
     * Limit how many Competitors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competitor upsert
   */
  export type CompetitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Competitor to update in case it exists.
     */
    where: CompetitorWhereUniqueInput
    /**
     * In case the Competitor found by the `where` argument doesn't exist, create a new Competitor with this data.
     */
    create: XOR<CompetitorCreateInput, CompetitorUncheckedCreateInput>
    /**
     * In case the Competitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitorUpdateInput, CompetitorUncheckedUpdateInput>
  }

  /**
   * Competitor delete
   */
  export type CompetitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter which Competitor to delete.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor deleteMany
   */
  export type CompetitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitors to delete
     */
    where?: CompetitorWhereInput
    /**
     * Limit how many Competitors to delete.
     */
    limit?: number
  }

  /**
   * Competitor without action
   */
  export type CompetitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitor
     */
    omit?: CompetitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
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


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const DomainScalarFieldEnum: {
    id: 'id',
    url: 'url',
    organizationId: 'organizationId',
    createdAt: 'createdAt'
  };

  export type DomainScalarFieldEnum = (typeof DomainScalarFieldEnum)[keyof typeof DomainScalarFieldEnum]


  export const ScanScalarFieldEnum: {
    id: 'id',
    domainId: 'domainId',
    status: 'status',
    visibilityScore: 'visibilityScore',
    presenceScore: 'presenceScore',
    recommendationStrength: 'recommendationStrength',
    trendScore: 'trendScore',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type ScanScalarFieldEnum = (typeof ScanScalarFieldEnum)[keyof typeof ScanScalarFieldEnum]


  export const PromptResponseScalarFieldEnum: {
    id: 'id',
    scanId: 'scanId',
    promptId: 'promptId',
    openai_raw_response: 'openai_raw_response',
    gemini_raw_response: 'gemini_raw_response',
    openai_normalized_json: 'openai_normalized_json',
    gemini_normalized_json: 'gemini_normalized_json',
    openai_processing_time: 'openai_processing_time',
    gemini_processing_time: 'gemini_processing_time',
    openai_status: 'openai_status',
    gemini_status: 'gemini_status'
  };

  export type PromptResponseScalarFieldEnum = (typeof PromptResponseScalarFieldEnum)[keyof typeof PromptResponseScalarFieldEnum]


  export const ScanReportScalarFieldEnum: {
    id: 'id',
    scanId: 'scanId',
    openaiFindings: 'openaiFindings',
    geminiFindings: 'geminiFindings',
    brandMentions: 'brandMentions',
    competitorMentions: 'competitorMentions',
    visibilityScoreBreakdown: 'visibilityScoreBreakdown',
    sovBreakdown: 'sovBreakdown',
    recommendationBreakdown: 'recommendationBreakdown',
    confidenceScores: 'confidenceScores'
  };

  export type ScanReportScalarFieldEnum = (typeof ScanReportScalarFieldEnum)[keyof typeof ScanReportScalarFieldEnum]


  export const RecommendationActionScalarFieldEnum: {
    id: 'id',
    domainId: 'domainId',
    title: 'title',
    description: 'description',
    impact: 'impact',
    platform: 'platform',
    isCompleted: 'isCompleted'
  };

  export type RecommendationActionScalarFieldEnum = (typeof RecommendationActionScalarFieldEnum)[keyof typeof RecommendationActionScalarFieldEnum]


  export const CompetitorScalarFieldEnum: {
    id: 'id',
    domainId: 'domainId',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type CompetitorScalarFieldEnum = (typeof CompetitorScalarFieldEnum)[keyof typeof CompetitorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    domains?: DomainListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    domains?: DomainOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    domains?: DomainListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type DomainWhereInput = {
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    id?: StringFilter<"Domain"> | string
    url?: StringFilter<"Domain"> | string
    organizationId?: StringFilter<"Domain"> | string
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    scans?: ScanListRelationFilter
    recommendationActions?: RecommendationActionListRelationFilter
    competitors?: CompetitorListRelationFilter
  }

  export type DomainOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    scans?: ScanOrderByRelationAggregateInput
    recommendationActions?: RecommendationActionOrderByRelationAggregateInput
    competitors?: CompetitorOrderByRelationAggregateInput
  }

  export type DomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    url?: StringFilter<"Domain"> | string
    organizationId?: StringFilter<"Domain"> | string
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    scans?: ScanListRelationFilter
    recommendationActions?: RecommendationActionListRelationFilter
    competitors?: CompetitorListRelationFilter
  }, "id">

  export type DomainOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    _count?: DomainCountOrderByAggregateInput
    _max?: DomainMaxOrderByAggregateInput
    _min?: DomainMinOrderByAggregateInput
  }

  export type DomainScalarWhereWithAggregatesInput = {
    AND?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    OR?: DomainScalarWhereWithAggregatesInput[]
    NOT?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Domain"> | string
    url?: StringWithAggregatesFilter<"Domain"> | string
    organizationId?: StringWithAggregatesFilter<"Domain"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
  }

  export type ScanWhereInput = {
    AND?: ScanWhereInput | ScanWhereInput[]
    OR?: ScanWhereInput[]
    NOT?: ScanWhereInput | ScanWhereInput[]
    id?: StringFilter<"Scan"> | string
    domainId?: StringFilter<"Scan"> | string
    status?: StringFilter<"Scan"> | string
    visibilityScore?: FloatNullableFilter<"Scan"> | number | null
    presenceScore?: FloatNullableFilter<"Scan"> | number | null
    recommendationStrength?: FloatNullableFilter<"Scan"> | number | null
    trendScore?: FloatNullableFilter<"Scan"> | number | null
    createdAt?: DateTimeFilter<"Scan"> | Date | string
    completedAt?: DateTimeNullableFilter<"Scan"> | Date | string | null
    domain?: XOR<DomainScalarRelationFilter, DomainWhereInput>
    promptResponses?: PromptResponseListRelationFilter
    report?: XOR<ScanReportNullableScalarRelationFilter, ScanReportWhereInput> | null
  }

  export type ScanOrderByWithRelationInput = {
    id?: SortOrder
    domainId?: SortOrder
    status?: SortOrder
    visibilityScore?: SortOrderInput | SortOrder
    presenceScore?: SortOrderInput | SortOrder
    recommendationStrength?: SortOrderInput | SortOrder
    trendScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    domain?: DomainOrderByWithRelationInput
    promptResponses?: PromptResponseOrderByRelationAggregateInput
    report?: ScanReportOrderByWithRelationInput
  }

  export type ScanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScanWhereInput | ScanWhereInput[]
    OR?: ScanWhereInput[]
    NOT?: ScanWhereInput | ScanWhereInput[]
    domainId?: StringFilter<"Scan"> | string
    status?: StringFilter<"Scan"> | string
    visibilityScore?: FloatNullableFilter<"Scan"> | number | null
    presenceScore?: FloatNullableFilter<"Scan"> | number | null
    recommendationStrength?: FloatNullableFilter<"Scan"> | number | null
    trendScore?: FloatNullableFilter<"Scan"> | number | null
    createdAt?: DateTimeFilter<"Scan"> | Date | string
    completedAt?: DateTimeNullableFilter<"Scan"> | Date | string | null
    domain?: XOR<DomainScalarRelationFilter, DomainWhereInput>
    promptResponses?: PromptResponseListRelationFilter
    report?: XOR<ScanReportNullableScalarRelationFilter, ScanReportWhereInput> | null
  }, "id">

  export type ScanOrderByWithAggregationInput = {
    id?: SortOrder
    domainId?: SortOrder
    status?: SortOrder
    visibilityScore?: SortOrderInput | SortOrder
    presenceScore?: SortOrderInput | SortOrder
    recommendationStrength?: SortOrderInput | SortOrder
    trendScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ScanCountOrderByAggregateInput
    _avg?: ScanAvgOrderByAggregateInput
    _max?: ScanMaxOrderByAggregateInput
    _min?: ScanMinOrderByAggregateInput
    _sum?: ScanSumOrderByAggregateInput
  }

  export type ScanScalarWhereWithAggregatesInput = {
    AND?: ScanScalarWhereWithAggregatesInput | ScanScalarWhereWithAggregatesInput[]
    OR?: ScanScalarWhereWithAggregatesInput[]
    NOT?: ScanScalarWhereWithAggregatesInput | ScanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scan"> | string
    domainId?: StringWithAggregatesFilter<"Scan"> | string
    status?: StringWithAggregatesFilter<"Scan"> | string
    visibilityScore?: FloatNullableWithAggregatesFilter<"Scan"> | number | null
    presenceScore?: FloatNullableWithAggregatesFilter<"Scan"> | number | null
    recommendationStrength?: FloatNullableWithAggregatesFilter<"Scan"> | number | null
    trendScore?: FloatNullableWithAggregatesFilter<"Scan"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Scan"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Scan"> | Date | string | null
  }

  export type PromptResponseWhereInput = {
    AND?: PromptResponseWhereInput | PromptResponseWhereInput[]
    OR?: PromptResponseWhereInput[]
    NOT?: PromptResponseWhereInput | PromptResponseWhereInput[]
    id?: StringFilter<"PromptResponse"> | string
    scanId?: StringFilter<"PromptResponse"> | string
    promptId?: StringFilter<"PromptResponse"> | string
    openai_raw_response?: StringNullableFilter<"PromptResponse"> | string | null
    gemini_raw_response?: StringNullableFilter<"PromptResponse"> | string | null
    openai_normalized_json?: JsonNullableFilter<"PromptResponse">
    gemini_normalized_json?: JsonNullableFilter<"PromptResponse">
    openai_processing_time?: IntNullableFilter<"PromptResponse"> | number | null
    gemini_processing_time?: IntNullableFilter<"PromptResponse"> | number | null
    openai_status?: StringNullableFilter<"PromptResponse"> | string | null
    gemini_status?: StringNullableFilter<"PromptResponse"> | string | null
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
  }

  export type PromptResponseOrderByWithRelationInput = {
    id?: SortOrder
    scanId?: SortOrder
    promptId?: SortOrder
    openai_raw_response?: SortOrderInput | SortOrder
    gemini_raw_response?: SortOrderInput | SortOrder
    openai_normalized_json?: SortOrderInput | SortOrder
    gemini_normalized_json?: SortOrderInput | SortOrder
    openai_processing_time?: SortOrderInput | SortOrder
    gemini_processing_time?: SortOrderInput | SortOrder
    openai_status?: SortOrderInput | SortOrder
    gemini_status?: SortOrderInput | SortOrder
    scan?: ScanOrderByWithRelationInput
  }

  export type PromptResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptResponseWhereInput | PromptResponseWhereInput[]
    OR?: PromptResponseWhereInput[]
    NOT?: PromptResponseWhereInput | PromptResponseWhereInput[]
    scanId?: StringFilter<"PromptResponse"> | string
    promptId?: StringFilter<"PromptResponse"> | string
    openai_raw_response?: StringNullableFilter<"PromptResponse"> | string | null
    gemini_raw_response?: StringNullableFilter<"PromptResponse"> | string | null
    openai_normalized_json?: JsonNullableFilter<"PromptResponse">
    gemini_normalized_json?: JsonNullableFilter<"PromptResponse">
    openai_processing_time?: IntNullableFilter<"PromptResponse"> | number | null
    gemini_processing_time?: IntNullableFilter<"PromptResponse"> | number | null
    openai_status?: StringNullableFilter<"PromptResponse"> | string | null
    gemini_status?: StringNullableFilter<"PromptResponse"> | string | null
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
  }, "id">

  export type PromptResponseOrderByWithAggregationInput = {
    id?: SortOrder
    scanId?: SortOrder
    promptId?: SortOrder
    openai_raw_response?: SortOrderInput | SortOrder
    gemini_raw_response?: SortOrderInput | SortOrder
    openai_normalized_json?: SortOrderInput | SortOrder
    gemini_normalized_json?: SortOrderInput | SortOrder
    openai_processing_time?: SortOrderInput | SortOrder
    gemini_processing_time?: SortOrderInput | SortOrder
    openai_status?: SortOrderInput | SortOrder
    gemini_status?: SortOrderInput | SortOrder
    _count?: PromptResponseCountOrderByAggregateInput
    _avg?: PromptResponseAvgOrderByAggregateInput
    _max?: PromptResponseMaxOrderByAggregateInput
    _min?: PromptResponseMinOrderByAggregateInput
    _sum?: PromptResponseSumOrderByAggregateInput
  }

  export type PromptResponseScalarWhereWithAggregatesInput = {
    AND?: PromptResponseScalarWhereWithAggregatesInput | PromptResponseScalarWhereWithAggregatesInput[]
    OR?: PromptResponseScalarWhereWithAggregatesInput[]
    NOT?: PromptResponseScalarWhereWithAggregatesInput | PromptResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromptResponse"> | string
    scanId?: StringWithAggregatesFilter<"PromptResponse"> | string
    promptId?: StringWithAggregatesFilter<"PromptResponse"> | string
    openai_raw_response?: StringNullableWithAggregatesFilter<"PromptResponse"> | string | null
    gemini_raw_response?: StringNullableWithAggregatesFilter<"PromptResponse"> | string | null
    openai_normalized_json?: JsonNullableWithAggregatesFilter<"PromptResponse">
    gemini_normalized_json?: JsonNullableWithAggregatesFilter<"PromptResponse">
    openai_processing_time?: IntNullableWithAggregatesFilter<"PromptResponse"> | number | null
    gemini_processing_time?: IntNullableWithAggregatesFilter<"PromptResponse"> | number | null
    openai_status?: StringNullableWithAggregatesFilter<"PromptResponse"> | string | null
    gemini_status?: StringNullableWithAggregatesFilter<"PromptResponse"> | string | null
  }

  export type ScanReportWhereInput = {
    AND?: ScanReportWhereInput | ScanReportWhereInput[]
    OR?: ScanReportWhereInput[]
    NOT?: ScanReportWhereInput | ScanReportWhereInput[]
    id?: StringFilter<"ScanReport"> | string
    scanId?: StringFilter<"ScanReport"> | string
    openaiFindings?: JsonFilter<"ScanReport">
    geminiFindings?: JsonFilter<"ScanReport">
    brandMentions?: JsonFilter<"ScanReport">
    competitorMentions?: JsonFilter<"ScanReport">
    visibilityScoreBreakdown?: JsonFilter<"ScanReport">
    sovBreakdown?: JsonFilter<"ScanReport">
    recommendationBreakdown?: JsonFilter<"ScanReport">
    confidenceScores?: JsonFilter<"ScanReport">
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
  }

  export type ScanReportOrderByWithRelationInput = {
    id?: SortOrder
    scanId?: SortOrder
    openaiFindings?: SortOrder
    geminiFindings?: SortOrder
    brandMentions?: SortOrder
    competitorMentions?: SortOrder
    visibilityScoreBreakdown?: SortOrder
    sovBreakdown?: SortOrder
    recommendationBreakdown?: SortOrder
    confidenceScores?: SortOrder
    scan?: ScanOrderByWithRelationInput
  }

  export type ScanReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    scanId?: string
    AND?: ScanReportWhereInput | ScanReportWhereInput[]
    OR?: ScanReportWhereInput[]
    NOT?: ScanReportWhereInput | ScanReportWhereInput[]
    openaiFindings?: JsonFilter<"ScanReport">
    geminiFindings?: JsonFilter<"ScanReport">
    brandMentions?: JsonFilter<"ScanReport">
    competitorMentions?: JsonFilter<"ScanReport">
    visibilityScoreBreakdown?: JsonFilter<"ScanReport">
    sovBreakdown?: JsonFilter<"ScanReport">
    recommendationBreakdown?: JsonFilter<"ScanReport">
    confidenceScores?: JsonFilter<"ScanReport">
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
  }, "id" | "scanId">

  export type ScanReportOrderByWithAggregationInput = {
    id?: SortOrder
    scanId?: SortOrder
    openaiFindings?: SortOrder
    geminiFindings?: SortOrder
    brandMentions?: SortOrder
    competitorMentions?: SortOrder
    visibilityScoreBreakdown?: SortOrder
    sovBreakdown?: SortOrder
    recommendationBreakdown?: SortOrder
    confidenceScores?: SortOrder
    _count?: ScanReportCountOrderByAggregateInput
    _max?: ScanReportMaxOrderByAggregateInput
    _min?: ScanReportMinOrderByAggregateInput
  }

  export type ScanReportScalarWhereWithAggregatesInput = {
    AND?: ScanReportScalarWhereWithAggregatesInput | ScanReportScalarWhereWithAggregatesInput[]
    OR?: ScanReportScalarWhereWithAggregatesInput[]
    NOT?: ScanReportScalarWhereWithAggregatesInput | ScanReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScanReport"> | string
    scanId?: StringWithAggregatesFilter<"ScanReport"> | string
    openaiFindings?: JsonWithAggregatesFilter<"ScanReport">
    geminiFindings?: JsonWithAggregatesFilter<"ScanReport">
    brandMentions?: JsonWithAggregatesFilter<"ScanReport">
    competitorMentions?: JsonWithAggregatesFilter<"ScanReport">
    visibilityScoreBreakdown?: JsonWithAggregatesFilter<"ScanReport">
    sovBreakdown?: JsonWithAggregatesFilter<"ScanReport">
    recommendationBreakdown?: JsonWithAggregatesFilter<"ScanReport">
    confidenceScores?: JsonWithAggregatesFilter<"ScanReport">
  }

  export type RecommendationActionWhereInput = {
    AND?: RecommendationActionWhereInput | RecommendationActionWhereInput[]
    OR?: RecommendationActionWhereInput[]
    NOT?: RecommendationActionWhereInput | RecommendationActionWhereInput[]
    id?: StringFilter<"RecommendationAction"> | string
    domainId?: StringFilter<"RecommendationAction"> | string
    title?: StringFilter<"RecommendationAction"> | string
    description?: StringFilter<"RecommendationAction"> | string
    impact?: StringFilter<"RecommendationAction"> | string
    platform?: StringFilter<"RecommendationAction"> | string
    isCompleted?: BoolFilter<"RecommendationAction"> | boolean
    domain?: XOR<DomainScalarRelationFilter, DomainWhereInput>
  }

  export type RecommendationActionOrderByWithRelationInput = {
    id?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    impact?: SortOrder
    platform?: SortOrder
    isCompleted?: SortOrder
    domain?: DomainOrderByWithRelationInput
  }

  export type RecommendationActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecommendationActionWhereInput | RecommendationActionWhereInput[]
    OR?: RecommendationActionWhereInput[]
    NOT?: RecommendationActionWhereInput | RecommendationActionWhereInput[]
    domainId?: StringFilter<"RecommendationAction"> | string
    title?: StringFilter<"RecommendationAction"> | string
    description?: StringFilter<"RecommendationAction"> | string
    impact?: StringFilter<"RecommendationAction"> | string
    platform?: StringFilter<"RecommendationAction"> | string
    isCompleted?: BoolFilter<"RecommendationAction"> | boolean
    domain?: XOR<DomainScalarRelationFilter, DomainWhereInput>
  }, "id">

  export type RecommendationActionOrderByWithAggregationInput = {
    id?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    impact?: SortOrder
    platform?: SortOrder
    isCompleted?: SortOrder
    _count?: RecommendationActionCountOrderByAggregateInput
    _max?: RecommendationActionMaxOrderByAggregateInput
    _min?: RecommendationActionMinOrderByAggregateInput
  }

  export type RecommendationActionScalarWhereWithAggregatesInput = {
    AND?: RecommendationActionScalarWhereWithAggregatesInput | RecommendationActionScalarWhereWithAggregatesInput[]
    OR?: RecommendationActionScalarWhereWithAggregatesInput[]
    NOT?: RecommendationActionScalarWhereWithAggregatesInput | RecommendationActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecommendationAction"> | string
    domainId?: StringWithAggregatesFilter<"RecommendationAction"> | string
    title?: StringWithAggregatesFilter<"RecommendationAction"> | string
    description?: StringWithAggregatesFilter<"RecommendationAction"> | string
    impact?: StringWithAggregatesFilter<"RecommendationAction"> | string
    platform?: StringWithAggregatesFilter<"RecommendationAction"> | string
    isCompleted?: BoolWithAggregatesFilter<"RecommendationAction"> | boolean
  }

  export type CompetitorWhereInput = {
    AND?: CompetitorWhereInput | CompetitorWhereInput[]
    OR?: CompetitorWhereInput[]
    NOT?: CompetitorWhereInput | CompetitorWhereInput[]
    id?: StringFilter<"Competitor"> | string
    domainId?: StringFilter<"Competitor"> | string
    url?: StringFilter<"Competitor"> | string
    createdAt?: DateTimeFilter<"Competitor"> | Date | string
    domain?: XOR<DomainScalarRelationFilter, DomainWhereInput>
  }

  export type CompetitorOrderByWithRelationInput = {
    id?: SortOrder
    domainId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    domain?: DomainOrderByWithRelationInput
  }

  export type CompetitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetitorWhereInput | CompetitorWhereInput[]
    OR?: CompetitorWhereInput[]
    NOT?: CompetitorWhereInput | CompetitorWhereInput[]
    domainId?: StringFilter<"Competitor"> | string
    url?: StringFilter<"Competitor"> | string
    createdAt?: DateTimeFilter<"Competitor"> | Date | string
    domain?: XOR<DomainScalarRelationFilter, DomainWhereInput>
  }, "id">

  export type CompetitorOrderByWithAggregationInput = {
    id?: SortOrder
    domainId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    _count?: CompetitorCountOrderByAggregateInput
    _max?: CompetitorMaxOrderByAggregateInput
    _min?: CompetitorMinOrderByAggregateInput
  }

  export type CompetitorScalarWhereWithAggregatesInput = {
    AND?: CompetitorScalarWhereWithAggregatesInput | CompetitorScalarWhereWithAggregatesInput[]
    OR?: CompetitorScalarWhereWithAggregatesInput[]
    NOT?: CompetitorScalarWhereWithAggregatesInput | CompetitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Competitor"> | string
    domainId?: StringWithAggregatesFilter<"Competitor"> | string
    url?: StringWithAggregatesFilter<"Competitor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Competitor"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    domains?: DomainCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    domains?: DomainUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutDomainsInput
    scans?: ScanCreateNestedManyWithoutDomainInput
    recommendationActions?: RecommendationActionCreateNestedManyWithoutDomainInput
    competitors?: CompetitorCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateInput = {
    id?: string
    url: string
    organizationId: string
    createdAt?: Date | string
    scans?: ScanUncheckedCreateNestedManyWithoutDomainInput
    recommendationActions?: RecommendationActionUncheckedCreateNestedManyWithoutDomainInput
    competitors?: CompetitorUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDomainsNestedInput
    scans?: ScanUpdateManyWithoutDomainNestedInput
    recommendationActions?: RecommendationActionUpdateManyWithoutDomainNestedInput
    competitors?: CompetitorUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUncheckedUpdateManyWithoutDomainNestedInput
    recommendationActions?: RecommendationActionUncheckedUpdateManyWithoutDomainNestedInput
    competitors?: CompetitorUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateManyInput = {
    id?: string
    url: string
    organizationId: string
    createdAt?: Date | string
  }

  export type DomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanCreateInput = {
    id?: string
    status?: string
    visibilityScore?: number | null
    presenceScore?: number | null
    recommendationStrength?: number | null
    trendScore?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    domain: DomainCreateNestedOneWithoutScansInput
    promptResponses?: PromptResponseCreateNestedManyWithoutScanInput
    report?: ScanReportCreateNestedOneWithoutScanInput
  }

  export type ScanUncheckedCreateInput = {
    id?: string
    domainId: string
    status?: string
    visibilityScore?: number | null
    presenceScore?: number | null
    recommendationStrength?: number | null
    trendScore?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    promptResponses?: PromptResponseUncheckedCreateNestedManyWithoutScanInput
    report?: ScanReportUncheckedCreateNestedOneWithoutScanInput
  }

  export type ScanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    domain?: DomainUpdateOneRequiredWithoutScansNestedInput
    promptResponses?: PromptResponseUpdateManyWithoutScanNestedInput
    report?: ScanReportUpdateOneWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promptResponses?: PromptResponseUncheckedUpdateManyWithoutScanNestedInput
    report?: ScanReportUncheckedUpdateOneWithoutScanNestedInput
  }

  export type ScanCreateManyInput = {
    id?: string
    domainId: string
    status?: string
    visibilityScore?: number | null
    presenceScore?: number | null
    recommendationStrength?: number | null
    trendScore?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ScanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PromptResponseCreateInput = {
    id?: string
    promptId: string
    openai_raw_response?: string | null
    gemini_raw_response?: string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: number | null
    gemini_processing_time?: number | null
    openai_status?: string | null
    gemini_status?: string | null
    scan: ScanCreateNestedOneWithoutPromptResponsesInput
  }

  export type PromptResponseUncheckedCreateInput = {
    id?: string
    scanId: string
    promptId: string
    openai_raw_response?: string | null
    gemini_raw_response?: string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: number | null
    gemini_processing_time?: number | null
    openai_status?: string | null
    gemini_status?: string | null
  }

  export type PromptResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    openai_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    gemini_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    openai_status?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_status?: NullableStringFieldUpdateOperationsInput | string | null
    scan?: ScanUpdateOneRequiredWithoutPromptResponsesNestedInput
  }

  export type PromptResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    openai_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    gemini_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    openai_status?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromptResponseCreateManyInput = {
    id?: string
    scanId: string
    promptId: string
    openai_raw_response?: string | null
    gemini_raw_response?: string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: number | null
    gemini_processing_time?: number | null
    openai_status?: string | null
    gemini_status?: string | null
  }

  export type PromptResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    openai_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    gemini_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    openai_status?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromptResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    openai_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    gemini_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    openai_status?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScanReportCreateInput = {
    id?: string
    openaiFindings: JsonNullValueInput | InputJsonValue
    geminiFindings: JsonNullValueInput | InputJsonValue
    brandMentions: JsonNullValueInput | InputJsonValue
    competitorMentions: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown: JsonNullValueInput | InputJsonValue
    sovBreakdown: JsonNullValueInput | InputJsonValue
    recommendationBreakdown: JsonNullValueInput | InputJsonValue
    confidenceScores: JsonNullValueInput | InputJsonValue
    scan: ScanCreateNestedOneWithoutReportInput
  }

  export type ScanReportUncheckedCreateInput = {
    id?: string
    scanId: string
    openaiFindings: JsonNullValueInput | InputJsonValue
    geminiFindings: JsonNullValueInput | InputJsonValue
    brandMentions: JsonNullValueInput | InputJsonValue
    competitorMentions: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown: JsonNullValueInput | InputJsonValue
    sovBreakdown: JsonNullValueInput | InputJsonValue
    recommendationBreakdown: JsonNullValueInput | InputJsonValue
    confidenceScores: JsonNullValueInput | InputJsonValue
  }

  export type ScanReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    openaiFindings?: JsonNullValueInput | InputJsonValue
    geminiFindings?: JsonNullValueInput | InputJsonValue
    brandMentions?: JsonNullValueInput | InputJsonValue
    competitorMentions?: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown?: JsonNullValueInput | InputJsonValue
    sovBreakdown?: JsonNullValueInput | InputJsonValue
    recommendationBreakdown?: JsonNullValueInput | InputJsonValue
    confidenceScores?: JsonNullValueInput | InputJsonValue
    scan?: ScanUpdateOneRequiredWithoutReportNestedInput
  }

  export type ScanReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    openaiFindings?: JsonNullValueInput | InputJsonValue
    geminiFindings?: JsonNullValueInput | InputJsonValue
    brandMentions?: JsonNullValueInput | InputJsonValue
    competitorMentions?: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown?: JsonNullValueInput | InputJsonValue
    sovBreakdown?: JsonNullValueInput | InputJsonValue
    recommendationBreakdown?: JsonNullValueInput | InputJsonValue
    confidenceScores?: JsonNullValueInput | InputJsonValue
  }

  export type ScanReportCreateManyInput = {
    id?: string
    scanId: string
    openaiFindings: JsonNullValueInput | InputJsonValue
    geminiFindings: JsonNullValueInput | InputJsonValue
    brandMentions: JsonNullValueInput | InputJsonValue
    competitorMentions: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown: JsonNullValueInput | InputJsonValue
    sovBreakdown: JsonNullValueInput | InputJsonValue
    recommendationBreakdown: JsonNullValueInput | InputJsonValue
    confidenceScores: JsonNullValueInput | InputJsonValue
  }

  export type ScanReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    openaiFindings?: JsonNullValueInput | InputJsonValue
    geminiFindings?: JsonNullValueInput | InputJsonValue
    brandMentions?: JsonNullValueInput | InputJsonValue
    competitorMentions?: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown?: JsonNullValueInput | InputJsonValue
    sovBreakdown?: JsonNullValueInput | InputJsonValue
    recommendationBreakdown?: JsonNullValueInput | InputJsonValue
    confidenceScores?: JsonNullValueInput | InputJsonValue
  }

  export type ScanReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    openaiFindings?: JsonNullValueInput | InputJsonValue
    geminiFindings?: JsonNullValueInput | InputJsonValue
    brandMentions?: JsonNullValueInput | InputJsonValue
    competitorMentions?: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown?: JsonNullValueInput | InputJsonValue
    sovBreakdown?: JsonNullValueInput | InputJsonValue
    recommendationBreakdown?: JsonNullValueInput | InputJsonValue
    confidenceScores?: JsonNullValueInput | InputJsonValue
  }

  export type RecommendationActionCreateInput = {
    id?: string
    title: string
    description: string
    impact: string
    platform: string
    isCompleted?: boolean
    domain: DomainCreateNestedOneWithoutRecommendationActionsInput
  }

  export type RecommendationActionUncheckedCreateInput = {
    id?: string
    domainId: string
    title: string
    description: string
    impact: string
    platform: string
    isCompleted?: boolean
  }

  export type RecommendationActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    domain?: DomainUpdateOneRequiredWithoutRecommendationActionsNestedInput
  }

  export type RecommendationActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecommendationActionCreateManyInput = {
    id?: string
    domainId: string
    title: string
    description: string
    impact: string
    platform: string
    isCompleted?: boolean
  }

  export type RecommendationActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecommendationActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompetitorCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    domain: DomainCreateNestedOneWithoutCompetitorsInput
  }

  export type CompetitorUncheckedCreateInput = {
    id?: string
    domainId: string
    url: string
    createdAt?: Date | string
  }

  export type CompetitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutCompetitorsNestedInput
  }

  export type CompetitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorCreateManyInput = {
    id?: string
    domainId: string
    url: string
    createdAt?: Date | string
  }

  export type CompetitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DomainListRelationFilter = {
    every?: DomainWhereInput
    some?: DomainWhereInput
    none?: DomainWhereInput
  }

  export type DomainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
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

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type ScanListRelationFilter = {
    every?: ScanWhereInput
    some?: ScanWhereInput
    none?: ScanWhereInput
  }

  export type RecommendationActionListRelationFilter = {
    every?: RecommendationActionWhereInput
    some?: RecommendationActionWhereInput
    none?: RecommendationActionWhereInput
  }

  export type CompetitorListRelationFilter = {
    every?: CompetitorWhereInput
    some?: CompetitorWhereInput
    none?: CompetitorWhereInput
  }

  export type ScanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendationActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
  }

  export type DomainMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
  }

  export type DomainMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
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

  export type DomainScalarRelationFilter = {
    is?: DomainWhereInput
    isNot?: DomainWhereInput
  }

  export type PromptResponseListRelationFilter = {
    every?: PromptResponseWhereInput
    some?: PromptResponseWhereInput
    none?: PromptResponseWhereInput
  }

  export type ScanReportNullableScalarRelationFilter = {
    is?: ScanReportWhereInput | null
    isNot?: ScanReportWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PromptResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScanCountOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    status?: SortOrder
    visibilityScore?: SortOrder
    presenceScore?: SortOrder
    recommendationStrength?: SortOrder
    trendScore?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ScanAvgOrderByAggregateInput = {
    visibilityScore?: SortOrder
    presenceScore?: SortOrder
    recommendationStrength?: SortOrder
    trendScore?: SortOrder
  }

  export type ScanMaxOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    status?: SortOrder
    visibilityScore?: SortOrder
    presenceScore?: SortOrder
    recommendationStrength?: SortOrder
    trendScore?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ScanMinOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    status?: SortOrder
    visibilityScore?: SortOrder
    presenceScore?: SortOrder
    recommendationStrength?: SortOrder
    trendScore?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ScanSumOrderByAggregateInput = {
    visibilityScore?: SortOrder
    presenceScore?: SortOrder
    recommendationStrength?: SortOrder
    trendScore?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type ScanScalarRelationFilter = {
    is?: ScanWhereInput
    isNot?: ScanWhereInput
  }

  export type PromptResponseCountOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    promptId?: SortOrder
    openai_raw_response?: SortOrder
    gemini_raw_response?: SortOrder
    openai_normalized_json?: SortOrder
    gemini_normalized_json?: SortOrder
    openai_processing_time?: SortOrder
    gemini_processing_time?: SortOrder
    openai_status?: SortOrder
    gemini_status?: SortOrder
  }

  export type PromptResponseAvgOrderByAggregateInput = {
    openai_processing_time?: SortOrder
    gemini_processing_time?: SortOrder
  }

  export type PromptResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    promptId?: SortOrder
    openai_raw_response?: SortOrder
    gemini_raw_response?: SortOrder
    openai_processing_time?: SortOrder
    gemini_processing_time?: SortOrder
    openai_status?: SortOrder
    gemini_status?: SortOrder
  }

  export type PromptResponseMinOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    promptId?: SortOrder
    openai_raw_response?: SortOrder
    gemini_raw_response?: SortOrder
    openai_processing_time?: SortOrder
    gemini_processing_time?: SortOrder
    openai_status?: SortOrder
    gemini_status?: SortOrder
  }

  export type PromptResponseSumOrderByAggregateInput = {
    openai_processing_time?: SortOrder
    gemini_processing_time?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ScanReportCountOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    openaiFindings?: SortOrder
    geminiFindings?: SortOrder
    brandMentions?: SortOrder
    competitorMentions?: SortOrder
    visibilityScoreBreakdown?: SortOrder
    sovBreakdown?: SortOrder
    recommendationBreakdown?: SortOrder
    confidenceScores?: SortOrder
  }

  export type ScanReportMaxOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
  }

  export type ScanReportMinOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RecommendationActionCountOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    impact?: SortOrder
    platform?: SortOrder
    isCompleted?: SortOrder
  }

  export type RecommendationActionMaxOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    impact?: SortOrder
    platform?: SortOrder
    isCompleted?: SortOrder
  }

  export type RecommendationActionMinOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    impact?: SortOrder
    platform?: SortOrder
    isCompleted?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CompetitorCountOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitorMaxOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitorMinOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type DomainCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<DomainCreateWithoutOrganizationInput, DomainUncheckedCreateWithoutOrganizationInput> | DomainCreateWithoutOrganizationInput[] | DomainUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutOrganizationInput | DomainCreateOrConnectWithoutOrganizationInput[]
    createMany?: DomainCreateManyOrganizationInputEnvelope
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
  }

  export type DomainUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<DomainCreateWithoutOrganizationInput, DomainUncheckedCreateWithoutOrganizationInput> | DomainCreateWithoutOrganizationInput[] | DomainUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutOrganizationInput | DomainCreateOrConnectWithoutOrganizationInput[]
    createMany?: DomainCreateManyOrganizationInputEnvelope
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DomainUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<DomainCreateWithoutOrganizationInput, DomainUncheckedCreateWithoutOrganizationInput> | DomainCreateWithoutOrganizationInput[] | DomainUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutOrganizationInput | DomainCreateOrConnectWithoutOrganizationInput[]
    upsert?: DomainUpsertWithWhereUniqueWithoutOrganizationInput | DomainUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: DomainCreateManyOrganizationInputEnvelope
    set?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    disconnect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    delete?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    update?: DomainUpdateWithWhereUniqueWithoutOrganizationInput | DomainUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: DomainUpdateManyWithWhereWithoutOrganizationInput | DomainUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: DomainScalarWhereInput | DomainScalarWhereInput[]
  }

  export type DomainUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<DomainCreateWithoutOrganizationInput, DomainUncheckedCreateWithoutOrganizationInput> | DomainCreateWithoutOrganizationInput[] | DomainUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutOrganizationInput | DomainCreateOrConnectWithoutOrganizationInput[]
    upsert?: DomainUpsertWithWhereUniqueWithoutOrganizationInput | DomainUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: DomainCreateManyOrganizationInputEnvelope
    set?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    disconnect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    delete?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    update?: DomainUpdateWithWhereUniqueWithoutOrganizationInput | DomainUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: DomainUpdateManyWithWhereWithoutOrganizationInput | DomainUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: DomainScalarWhereInput | DomainScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutDomainsInput = {
    create?: XOR<OrganizationCreateWithoutDomainsInput, OrganizationUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDomainsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ScanCreateNestedManyWithoutDomainInput = {
    create?: XOR<ScanCreateWithoutDomainInput, ScanUncheckedCreateWithoutDomainInput> | ScanCreateWithoutDomainInput[] | ScanUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutDomainInput | ScanCreateOrConnectWithoutDomainInput[]
    createMany?: ScanCreateManyDomainInputEnvelope
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
  }

  export type RecommendationActionCreateNestedManyWithoutDomainInput = {
    create?: XOR<RecommendationActionCreateWithoutDomainInput, RecommendationActionUncheckedCreateWithoutDomainInput> | RecommendationActionCreateWithoutDomainInput[] | RecommendationActionUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: RecommendationActionCreateOrConnectWithoutDomainInput | RecommendationActionCreateOrConnectWithoutDomainInput[]
    createMany?: RecommendationActionCreateManyDomainInputEnvelope
    connect?: RecommendationActionWhereUniqueInput | RecommendationActionWhereUniqueInput[]
  }

  export type CompetitorCreateNestedManyWithoutDomainInput = {
    create?: XOR<CompetitorCreateWithoutDomainInput, CompetitorUncheckedCreateWithoutDomainInput> | CompetitorCreateWithoutDomainInput[] | CompetitorUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutDomainInput | CompetitorCreateOrConnectWithoutDomainInput[]
    createMany?: CompetitorCreateManyDomainInputEnvelope
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
  }

  export type ScanUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<ScanCreateWithoutDomainInput, ScanUncheckedCreateWithoutDomainInput> | ScanCreateWithoutDomainInput[] | ScanUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutDomainInput | ScanCreateOrConnectWithoutDomainInput[]
    createMany?: ScanCreateManyDomainInputEnvelope
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
  }

  export type RecommendationActionUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<RecommendationActionCreateWithoutDomainInput, RecommendationActionUncheckedCreateWithoutDomainInput> | RecommendationActionCreateWithoutDomainInput[] | RecommendationActionUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: RecommendationActionCreateOrConnectWithoutDomainInput | RecommendationActionCreateOrConnectWithoutDomainInput[]
    createMany?: RecommendationActionCreateManyDomainInputEnvelope
    connect?: RecommendationActionWhereUniqueInput | RecommendationActionWhereUniqueInput[]
  }

  export type CompetitorUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<CompetitorCreateWithoutDomainInput, CompetitorUncheckedCreateWithoutDomainInput> | CompetitorCreateWithoutDomainInput[] | CompetitorUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutDomainInput | CompetitorCreateOrConnectWithoutDomainInput[]
    createMany?: CompetitorCreateManyDomainInputEnvelope
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutDomainsNestedInput = {
    create?: XOR<OrganizationCreateWithoutDomainsInput, OrganizationUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDomainsInput
    upsert?: OrganizationUpsertWithoutDomainsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutDomainsInput, OrganizationUpdateWithoutDomainsInput>, OrganizationUncheckedUpdateWithoutDomainsInput>
  }

  export type ScanUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ScanCreateWithoutDomainInput, ScanUncheckedCreateWithoutDomainInput> | ScanCreateWithoutDomainInput[] | ScanUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutDomainInput | ScanCreateOrConnectWithoutDomainInput[]
    upsert?: ScanUpsertWithWhereUniqueWithoutDomainInput | ScanUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ScanCreateManyDomainInputEnvelope
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    update?: ScanUpdateWithWhereUniqueWithoutDomainInput | ScanUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ScanUpdateManyWithWhereWithoutDomainInput | ScanUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[]
  }

  export type RecommendationActionUpdateManyWithoutDomainNestedInput = {
    create?: XOR<RecommendationActionCreateWithoutDomainInput, RecommendationActionUncheckedCreateWithoutDomainInput> | RecommendationActionCreateWithoutDomainInput[] | RecommendationActionUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: RecommendationActionCreateOrConnectWithoutDomainInput | RecommendationActionCreateOrConnectWithoutDomainInput[]
    upsert?: RecommendationActionUpsertWithWhereUniqueWithoutDomainInput | RecommendationActionUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: RecommendationActionCreateManyDomainInputEnvelope
    set?: RecommendationActionWhereUniqueInput | RecommendationActionWhereUniqueInput[]
    disconnect?: RecommendationActionWhereUniqueInput | RecommendationActionWhereUniqueInput[]
    delete?: RecommendationActionWhereUniqueInput | RecommendationActionWhereUniqueInput[]
    connect?: RecommendationActionWhereUniqueInput | RecommendationActionWhereUniqueInput[]
    update?: RecommendationActionUpdateWithWhereUniqueWithoutDomainInput | RecommendationActionUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: RecommendationActionUpdateManyWithWhereWithoutDomainInput | RecommendationActionUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: RecommendationActionScalarWhereInput | RecommendationActionScalarWhereInput[]
  }

  export type CompetitorUpdateManyWithoutDomainNestedInput = {
    create?: XOR<CompetitorCreateWithoutDomainInput, CompetitorUncheckedCreateWithoutDomainInput> | CompetitorCreateWithoutDomainInput[] | CompetitorUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutDomainInput | CompetitorCreateOrConnectWithoutDomainInput[]
    upsert?: CompetitorUpsertWithWhereUniqueWithoutDomainInput | CompetitorUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: CompetitorCreateManyDomainInputEnvelope
    set?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    disconnect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    delete?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    update?: CompetitorUpdateWithWhereUniqueWithoutDomainInput | CompetitorUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: CompetitorUpdateManyWithWhereWithoutDomainInput | CompetitorUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
  }

  export type ScanUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ScanCreateWithoutDomainInput, ScanUncheckedCreateWithoutDomainInput> | ScanCreateWithoutDomainInput[] | ScanUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutDomainInput | ScanCreateOrConnectWithoutDomainInput[]
    upsert?: ScanUpsertWithWhereUniqueWithoutDomainInput | ScanUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ScanCreateManyDomainInputEnvelope
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    update?: ScanUpdateWithWhereUniqueWithoutDomainInput | ScanUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ScanUpdateManyWithWhereWithoutDomainInput | ScanUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[]
  }

  export type RecommendationActionUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<RecommendationActionCreateWithoutDomainInput, RecommendationActionUncheckedCreateWithoutDomainInput> | RecommendationActionCreateWithoutDomainInput[] | RecommendationActionUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: RecommendationActionCreateOrConnectWithoutDomainInput | RecommendationActionCreateOrConnectWithoutDomainInput[]
    upsert?: RecommendationActionUpsertWithWhereUniqueWithoutDomainInput | RecommendationActionUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: RecommendationActionCreateManyDomainInputEnvelope
    set?: RecommendationActionWhereUniqueInput | RecommendationActionWhereUniqueInput[]
    disconnect?: RecommendationActionWhereUniqueInput | RecommendationActionWhereUniqueInput[]
    delete?: RecommendationActionWhereUniqueInput | RecommendationActionWhereUniqueInput[]
    connect?: RecommendationActionWhereUniqueInput | RecommendationActionWhereUniqueInput[]
    update?: RecommendationActionUpdateWithWhereUniqueWithoutDomainInput | RecommendationActionUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: RecommendationActionUpdateManyWithWhereWithoutDomainInput | RecommendationActionUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: RecommendationActionScalarWhereInput | RecommendationActionScalarWhereInput[]
  }

  export type CompetitorUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<CompetitorCreateWithoutDomainInput, CompetitorUncheckedCreateWithoutDomainInput> | CompetitorCreateWithoutDomainInput[] | CompetitorUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutDomainInput | CompetitorCreateOrConnectWithoutDomainInput[]
    upsert?: CompetitorUpsertWithWhereUniqueWithoutDomainInput | CompetitorUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: CompetitorCreateManyDomainInputEnvelope
    set?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    disconnect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    delete?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    update?: CompetitorUpdateWithWhereUniqueWithoutDomainInput | CompetitorUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: CompetitorUpdateManyWithWhereWithoutDomainInput | CompetitorUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
  }

  export type DomainCreateNestedOneWithoutScansInput = {
    create?: XOR<DomainCreateWithoutScansInput, DomainUncheckedCreateWithoutScansInput>
    connectOrCreate?: DomainCreateOrConnectWithoutScansInput
    connect?: DomainWhereUniqueInput
  }

  export type PromptResponseCreateNestedManyWithoutScanInput = {
    create?: XOR<PromptResponseCreateWithoutScanInput, PromptResponseUncheckedCreateWithoutScanInput> | PromptResponseCreateWithoutScanInput[] | PromptResponseUncheckedCreateWithoutScanInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutScanInput | PromptResponseCreateOrConnectWithoutScanInput[]
    createMany?: PromptResponseCreateManyScanInputEnvelope
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
  }

  export type ScanReportCreateNestedOneWithoutScanInput = {
    create?: XOR<ScanReportCreateWithoutScanInput, ScanReportUncheckedCreateWithoutScanInput>
    connectOrCreate?: ScanReportCreateOrConnectWithoutScanInput
    connect?: ScanReportWhereUniqueInput
  }

  export type PromptResponseUncheckedCreateNestedManyWithoutScanInput = {
    create?: XOR<PromptResponseCreateWithoutScanInput, PromptResponseUncheckedCreateWithoutScanInput> | PromptResponseCreateWithoutScanInput[] | PromptResponseUncheckedCreateWithoutScanInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutScanInput | PromptResponseCreateOrConnectWithoutScanInput[]
    createMany?: PromptResponseCreateManyScanInputEnvelope
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
  }

  export type ScanReportUncheckedCreateNestedOneWithoutScanInput = {
    create?: XOR<ScanReportCreateWithoutScanInput, ScanReportUncheckedCreateWithoutScanInput>
    connectOrCreate?: ScanReportCreateOrConnectWithoutScanInput
    connect?: ScanReportWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DomainUpdateOneRequiredWithoutScansNestedInput = {
    create?: XOR<DomainCreateWithoutScansInput, DomainUncheckedCreateWithoutScansInput>
    connectOrCreate?: DomainCreateOrConnectWithoutScansInput
    upsert?: DomainUpsertWithoutScansInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutScansInput, DomainUpdateWithoutScansInput>, DomainUncheckedUpdateWithoutScansInput>
  }

  export type PromptResponseUpdateManyWithoutScanNestedInput = {
    create?: XOR<PromptResponseCreateWithoutScanInput, PromptResponseUncheckedCreateWithoutScanInput> | PromptResponseCreateWithoutScanInput[] | PromptResponseUncheckedCreateWithoutScanInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutScanInput | PromptResponseCreateOrConnectWithoutScanInput[]
    upsert?: PromptResponseUpsertWithWhereUniqueWithoutScanInput | PromptResponseUpsertWithWhereUniqueWithoutScanInput[]
    createMany?: PromptResponseCreateManyScanInputEnvelope
    set?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    disconnect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    delete?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    update?: PromptResponseUpdateWithWhereUniqueWithoutScanInput | PromptResponseUpdateWithWhereUniqueWithoutScanInput[]
    updateMany?: PromptResponseUpdateManyWithWhereWithoutScanInput | PromptResponseUpdateManyWithWhereWithoutScanInput[]
    deleteMany?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
  }

  export type ScanReportUpdateOneWithoutScanNestedInput = {
    create?: XOR<ScanReportCreateWithoutScanInput, ScanReportUncheckedCreateWithoutScanInput>
    connectOrCreate?: ScanReportCreateOrConnectWithoutScanInput
    upsert?: ScanReportUpsertWithoutScanInput
    disconnect?: ScanReportWhereInput | boolean
    delete?: ScanReportWhereInput | boolean
    connect?: ScanReportWhereUniqueInput
    update?: XOR<XOR<ScanReportUpdateToOneWithWhereWithoutScanInput, ScanReportUpdateWithoutScanInput>, ScanReportUncheckedUpdateWithoutScanInput>
  }

  export type PromptResponseUncheckedUpdateManyWithoutScanNestedInput = {
    create?: XOR<PromptResponseCreateWithoutScanInput, PromptResponseUncheckedCreateWithoutScanInput> | PromptResponseCreateWithoutScanInput[] | PromptResponseUncheckedCreateWithoutScanInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutScanInput | PromptResponseCreateOrConnectWithoutScanInput[]
    upsert?: PromptResponseUpsertWithWhereUniqueWithoutScanInput | PromptResponseUpsertWithWhereUniqueWithoutScanInput[]
    createMany?: PromptResponseCreateManyScanInputEnvelope
    set?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    disconnect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    delete?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    update?: PromptResponseUpdateWithWhereUniqueWithoutScanInput | PromptResponseUpdateWithWhereUniqueWithoutScanInput[]
    updateMany?: PromptResponseUpdateManyWithWhereWithoutScanInput | PromptResponseUpdateManyWithWhereWithoutScanInput[]
    deleteMany?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
  }

  export type ScanReportUncheckedUpdateOneWithoutScanNestedInput = {
    create?: XOR<ScanReportCreateWithoutScanInput, ScanReportUncheckedCreateWithoutScanInput>
    connectOrCreate?: ScanReportCreateOrConnectWithoutScanInput
    upsert?: ScanReportUpsertWithoutScanInput
    disconnect?: ScanReportWhereInput | boolean
    delete?: ScanReportWhereInput | boolean
    connect?: ScanReportWhereUniqueInput
    update?: XOR<XOR<ScanReportUpdateToOneWithWhereWithoutScanInput, ScanReportUpdateWithoutScanInput>, ScanReportUncheckedUpdateWithoutScanInput>
  }

  export type ScanCreateNestedOneWithoutPromptResponsesInput = {
    create?: XOR<ScanCreateWithoutPromptResponsesInput, ScanUncheckedCreateWithoutPromptResponsesInput>
    connectOrCreate?: ScanCreateOrConnectWithoutPromptResponsesInput
    connect?: ScanWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScanUpdateOneRequiredWithoutPromptResponsesNestedInput = {
    create?: XOR<ScanCreateWithoutPromptResponsesInput, ScanUncheckedCreateWithoutPromptResponsesInput>
    connectOrCreate?: ScanCreateOrConnectWithoutPromptResponsesInput
    upsert?: ScanUpsertWithoutPromptResponsesInput
    connect?: ScanWhereUniqueInput
    update?: XOR<XOR<ScanUpdateToOneWithWhereWithoutPromptResponsesInput, ScanUpdateWithoutPromptResponsesInput>, ScanUncheckedUpdateWithoutPromptResponsesInput>
  }

  export type ScanCreateNestedOneWithoutReportInput = {
    create?: XOR<ScanCreateWithoutReportInput, ScanUncheckedCreateWithoutReportInput>
    connectOrCreate?: ScanCreateOrConnectWithoutReportInput
    connect?: ScanWhereUniqueInput
  }

  export type ScanUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<ScanCreateWithoutReportInput, ScanUncheckedCreateWithoutReportInput>
    connectOrCreate?: ScanCreateOrConnectWithoutReportInput
    upsert?: ScanUpsertWithoutReportInput
    connect?: ScanWhereUniqueInput
    update?: XOR<XOR<ScanUpdateToOneWithWhereWithoutReportInput, ScanUpdateWithoutReportInput>, ScanUncheckedUpdateWithoutReportInput>
  }

  export type DomainCreateNestedOneWithoutRecommendationActionsInput = {
    create?: XOR<DomainCreateWithoutRecommendationActionsInput, DomainUncheckedCreateWithoutRecommendationActionsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutRecommendationActionsInput
    connect?: DomainWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DomainUpdateOneRequiredWithoutRecommendationActionsNestedInput = {
    create?: XOR<DomainCreateWithoutRecommendationActionsInput, DomainUncheckedCreateWithoutRecommendationActionsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutRecommendationActionsInput
    upsert?: DomainUpsertWithoutRecommendationActionsInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutRecommendationActionsInput, DomainUpdateWithoutRecommendationActionsInput>, DomainUncheckedUpdateWithoutRecommendationActionsInput>
  }

  export type DomainCreateNestedOneWithoutCompetitorsInput = {
    create?: XOR<DomainCreateWithoutCompetitorsInput, DomainUncheckedCreateWithoutCompetitorsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutCompetitorsInput
    connect?: DomainWhereUniqueInput
  }

  export type DomainUpdateOneRequiredWithoutCompetitorsNestedInput = {
    create?: XOR<DomainCreateWithoutCompetitorsInput, DomainUncheckedCreateWithoutCompetitorsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutCompetitorsInput
    upsert?: DomainUpsertWithoutCompetitorsInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutCompetitorsInput, DomainUpdateWithoutCompetitorsInput>, DomainUncheckedUpdateWithoutCompetitorsInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type DomainCreateWithoutOrganizationInput = {
    id?: string
    url: string
    createdAt?: Date | string
    scans?: ScanCreateNestedManyWithoutDomainInput
    recommendationActions?: RecommendationActionCreateNestedManyWithoutDomainInput
    competitors?: CompetitorCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutOrganizationInput = {
    id?: string
    url: string
    createdAt?: Date | string
    scans?: ScanUncheckedCreateNestedManyWithoutDomainInput
    recommendationActions?: RecommendationActionUncheckedCreateNestedManyWithoutDomainInput
    competitors?: CompetitorUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutOrganizationInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutOrganizationInput, DomainUncheckedCreateWithoutOrganizationInput>
  }

  export type DomainCreateManyOrganizationInputEnvelope = {
    data: DomainCreateManyOrganizationInput | DomainCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type DomainUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: DomainWhereUniqueInput
    update: XOR<DomainUpdateWithoutOrganizationInput, DomainUncheckedUpdateWithoutOrganizationInput>
    create: XOR<DomainCreateWithoutOrganizationInput, DomainUncheckedCreateWithoutOrganizationInput>
  }

  export type DomainUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: DomainWhereUniqueInput
    data: XOR<DomainUpdateWithoutOrganizationInput, DomainUncheckedUpdateWithoutOrganizationInput>
  }

  export type DomainUpdateManyWithWhereWithoutOrganizationInput = {
    where: DomainScalarWhereInput
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type DomainScalarWhereInput = {
    AND?: DomainScalarWhereInput | DomainScalarWhereInput[]
    OR?: DomainScalarWhereInput[]
    NOT?: DomainScalarWhereInput | DomainScalarWhereInput[]
    id?: StringFilter<"Domain"> | string
    url?: StringFilter<"Domain"> | string
    organizationId?: StringFilter<"Domain"> | string
    createdAt?: DateTimeFilter<"Domain"> | Date | string
  }

  export type OrganizationCreateWithoutDomainsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type OrganizationUncheckedCreateWithoutDomainsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type OrganizationCreateOrConnectWithoutDomainsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutDomainsInput, OrganizationUncheckedCreateWithoutDomainsInput>
  }

  export type ScanCreateWithoutDomainInput = {
    id?: string
    status?: string
    visibilityScore?: number | null
    presenceScore?: number | null
    recommendationStrength?: number | null
    trendScore?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    promptResponses?: PromptResponseCreateNestedManyWithoutScanInput
    report?: ScanReportCreateNestedOneWithoutScanInput
  }

  export type ScanUncheckedCreateWithoutDomainInput = {
    id?: string
    status?: string
    visibilityScore?: number | null
    presenceScore?: number | null
    recommendationStrength?: number | null
    trendScore?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    promptResponses?: PromptResponseUncheckedCreateNestedManyWithoutScanInput
    report?: ScanReportUncheckedCreateNestedOneWithoutScanInput
  }

  export type ScanCreateOrConnectWithoutDomainInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutDomainInput, ScanUncheckedCreateWithoutDomainInput>
  }

  export type ScanCreateManyDomainInputEnvelope = {
    data: ScanCreateManyDomainInput | ScanCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationActionCreateWithoutDomainInput = {
    id?: string
    title: string
    description: string
    impact: string
    platform: string
    isCompleted?: boolean
  }

  export type RecommendationActionUncheckedCreateWithoutDomainInput = {
    id?: string
    title: string
    description: string
    impact: string
    platform: string
    isCompleted?: boolean
  }

  export type RecommendationActionCreateOrConnectWithoutDomainInput = {
    where: RecommendationActionWhereUniqueInput
    create: XOR<RecommendationActionCreateWithoutDomainInput, RecommendationActionUncheckedCreateWithoutDomainInput>
  }

  export type RecommendationActionCreateManyDomainInputEnvelope = {
    data: RecommendationActionCreateManyDomainInput | RecommendationActionCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type CompetitorCreateWithoutDomainInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type CompetitorUncheckedCreateWithoutDomainInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type CompetitorCreateOrConnectWithoutDomainInput = {
    where: CompetitorWhereUniqueInput
    create: XOR<CompetitorCreateWithoutDomainInput, CompetitorUncheckedCreateWithoutDomainInput>
  }

  export type CompetitorCreateManyDomainInputEnvelope = {
    data: CompetitorCreateManyDomainInput | CompetitorCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutDomainsInput = {
    update: XOR<OrganizationUpdateWithoutDomainsInput, OrganizationUncheckedUpdateWithoutDomainsInput>
    create: XOR<OrganizationCreateWithoutDomainsInput, OrganizationUncheckedCreateWithoutDomainsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutDomainsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutDomainsInput, OrganizationUncheckedUpdateWithoutDomainsInput>
  }

  export type OrganizationUpdateWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanUpsertWithWhereUniqueWithoutDomainInput = {
    where: ScanWhereUniqueInput
    update: XOR<ScanUpdateWithoutDomainInput, ScanUncheckedUpdateWithoutDomainInput>
    create: XOR<ScanCreateWithoutDomainInput, ScanUncheckedCreateWithoutDomainInput>
  }

  export type ScanUpdateWithWhereUniqueWithoutDomainInput = {
    where: ScanWhereUniqueInput
    data: XOR<ScanUpdateWithoutDomainInput, ScanUncheckedUpdateWithoutDomainInput>
  }

  export type ScanUpdateManyWithWhereWithoutDomainInput = {
    where: ScanScalarWhereInput
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyWithoutDomainInput>
  }

  export type ScanScalarWhereInput = {
    AND?: ScanScalarWhereInput | ScanScalarWhereInput[]
    OR?: ScanScalarWhereInput[]
    NOT?: ScanScalarWhereInput | ScanScalarWhereInput[]
    id?: StringFilter<"Scan"> | string
    domainId?: StringFilter<"Scan"> | string
    status?: StringFilter<"Scan"> | string
    visibilityScore?: FloatNullableFilter<"Scan"> | number | null
    presenceScore?: FloatNullableFilter<"Scan"> | number | null
    recommendationStrength?: FloatNullableFilter<"Scan"> | number | null
    trendScore?: FloatNullableFilter<"Scan"> | number | null
    createdAt?: DateTimeFilter<"Scan"> | Date | string
    completedAt?: DateTimeNullableFilter<"Scan"> | Date | string | null
  }

  export type RecommendationActionUpsertWithWhereUniqueWithoutDomainInput = {
    where: RecommendationActionWhereUniqueInput
    update: XOR<RecommendationActionUpdateWithoutDomainInput, RecommendationActionUncheckedUpdateWithoutDomainInput>
    create: XOR<RecommendationActionCreateWithoutDomainInput, RecommendationActionUncheckedCreateWithoutDomainInput>
  }

  export type RecommendationActionUpdateWithWhereUniqueWithoutDomainInput = {
    where: RecommendationActionWhereUniqueInput
    data: XOR<RecommendationActionUpdateWithoutDomainInput, RecommendationActionUncheckedUpdateWithoutDomainInput>
  }

  export type RecommendationActionUpdateManyWithWhereWithoutDomainInput = {
    where: RecommendationActionScalarWhereInput
    data: XOR<RecommendationActionUpdateManyMutationInput, RecommendationActionUncheckedUpdateManyWithoutDomainInput>
  }

  export type RecommendationActionScalarWhereInput = {
    AND?: RecommendationActionScalarWhereInput | RecommendationActionScalarWhereInput[]
    OR?: RecommendationActionScalarWhereInput[]
    NOT?: RecommendationActionScalarWhereInput | RecommendationActionScalarWhereInput[]
    id?: StringFilter<"RecommendationAction"> | string
    domainId?: StringFilter<"RecommendationAction"> | string
    title?: StringFilter<"RecommendationAction"> | string
    description?: StringFilter<"RecommendationAction"> | string
    impact?: StringFilter<"RecommendationAction"> | string
    platform?: StringFilter<"RecommendationAction"> | string
    isCompleted?: BoolFilter<"RecommendationAction"> | boolean
  }

  export type CompetitorUpsertWithWhereUniqueWithoutDomainInput = {
    where: CompetitorWhereUniqueInput
    update: XOR<CompetitorUpdateWithoutDomainInput, CompetitorUncheckedUpdateWithoutDomainInput>
    create: XOR<CompetitorCreateWithoutDomainInput, CompetitorUncheckedCreateWithoutDomainInput>
  }

  export type CompetitorUpdateWithWhereUniqueWithoutDomainInput = {
    where: CompetitorWhereUniqueInput
    data: XOR<CompetitorUpdateWithoutDomainInput, CompetitorUncheckedUpdateWithoutDomainInput>
  }

  export type CompetitorUpdateManyWithWhereWithoutDomainInput = {
    where: CompetitorScalarWhereInput
    data: XOR<CompetitorUpdateManyMutationInput, CompetitorUncheckedUpdateManyWithoutDomainInput>
  }

  export type CompetitorScalarWhereInput = {
    AND?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
    OR?: CompetitorScalarWhereInput[]
    NOT?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
    id?: StringFilter<"Competitor"> | string
    domainId?: StringFilter<"Competitor"> | string
    url?: StringFilter<"Competitor"> | string
    createdAt?: DateTimeFilter<"Competitor"> | Date | string
  }

  export type DomainCreateWithoutScansInput = {
    id?: string
    url: string
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutDomainsInput
    recommendationActions?: RecommendationActionCreateNestedManyWithoutDomainInput
    competitors?: CompetitorCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutScansInput = {
    id?: string
    url: string
    organizationId: string
    createdAt?: Date | string
    recommendationActions?: RecommendationActionUncheckedCreateNestedManyWithoutDomainInput
    competitors?: CompetitorUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutScansInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutScansInput, DomainUncheckedCreateWithoutScansInput>
  }

  export type PromptResponseCreateWithoutScanInput = {
    id?: string
    promptId: string
    openai_raw_response?: string | null
    gemini_raw_response?: string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: number | null
    gemini_processing_time?: number | null
    openai_status?: string | null
    gemini_status?: string | null
  }

  export type PromptResponseUncheckedCreateWithoutScanInput = {
    id?: string
    promptId: string
    openai_raw_response?: string | null
    gemini_raw_response?: string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: number | null
    gemini_processing_time?: number | null
    openai_status?: string | null
    gemini_status?: string | null
  }

  export type PromptResponseCreateOrConnectWithoutScanInput = {
    where: PromptResponseWhereUniqueInput
    create: XOR<PromptResponseCreateWithoutScanInput, PromptResponseUncheckedCreateWithoutScanInput>
  }

  export type PromptResponseCreateManyScanInputEnvelope = {
    data: PromptResponseCreateManyScanInput | PromptResponseCreateManyScanInput[]
    skipDuplicates?: boolean
  }

  export type ScanReportCreateWithoutScanInput = {
    id?: string
    openaiFindings: JsonNullValueInput | InputJsonValue
    geminiFindings: JsonNullValueInput | InputJsonValue
    brandMentions: JsonNullValueInput | InputJsonValue
    competitorMentions: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown: JsonNullValueInput | InputJsonValue
    sovBreakdown: JsonNullValueInput | InputJsonValue
    recommendationBreakdown: JsonNullValueInput | InputJsonValue
    confidenceScores: JsonNullValueInput | InputJsonValue
  }

  export type ScanReportUncheckedCreateWithoutScanInput = {
    id?: string
    openaiFindings: JsonNullValueInput | InputJsonValue
    geminiFindings: JsonNullValueInput | InputJsonValue
    brandMentions: JsonNullValueInput | InputJsonValue
    competitorMentions: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown: JsonNullValueInput | InputJsonValue
    sovBreakdown: JsonNullValueInput | InputJsonValue
    recommendationBreakdown: JsonNullValueInput | InputJsonValue
    confidenceScores: JsonNullValueInput | InputJsonValue
  }

  export type ScanReportCreateOrConnectWithoutScanInput = {
    where: ScanReportWhereUniqueInput
    create: XOR<ScanReportCreateWithoutScanInput, ScanReportUncheckedCreateWithoutScanInput>
  }

  export type DomainUpsertWithoutScansInput = {
    update: XOR<DomainUpdateWithoutScansInput, DomainUncheckedUpdateWithoutScansInput>
    create: XOR<DomainCreateWithoutScansInput, DomainUncheckedCreateWithoutScansInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutScansInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutScansInput, DomainUncheckedUpdateWithoutScansInput>
  }

  export type DomainUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDomainsNestedInput
    recommendationActions?: RecommendationActionUpdateManyWithoutDomainNestedInput
    competitors?: CompetitorUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendationActions?: RecommendationActionUncheckedUpdateManyWithoutDomainNestedInput
    competitors?: CompetitorUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type PromptResponseUpsertWithWhereUniqueWithoutScanInput = {
    where: PromptResponseWhereUniqueInput
    update: XOR<PromptResponseUpdateWithoutScanInput, PromptResponseUncheckedUpdateWithoutScanInput>
    create: XOR<PromptResponseCreateWithoutScanInput, PromptResponseUncheckedCreateWithoutScanInput>
  }

  export type PromptResponseUpdateWithWhereUniqueWithoutScanInput = {
    where: PromptResponseWhereUniqueInput
    data: XOR<PromptResponseUpdateWithoutScanInput, PromptResponseUncheckedUpdateWithoutScanInput>
  }

  export type PromptResponseUpdateManyWithWhereWithoutScanInput = {
    where: PromptResponseScalarWhereInput
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyWithoutScanInput>
  }

  export type PromptResponseScalarWhereInput = {
    AND?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
    OR?: PromptResponseScalarWhereInput[]
    NOT?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
    id?: StringFilter<"PromptResponse"> | string
    scanId?: StringFilter<"PromptResponse"> | string
    promptId?: StringFilter<"PromptResponse"> | string
    openai_raw_response?: StringNullableFilter<"PromptResponse"> | string | null
    gemini_raw_response?: StringNullableFilter<"PromptResponse"> | string | null
    openai_normalized_json?: JsonNullableFilter<"PromptResponse">
    gemini_normalized_json?: JsonNullableFilter<"PromptResponse">
    openai_processing_time?: IntNullableFilter<"PromptResponse"> | number | null
    gemini_processing_time?: IntNullableFilter<"PromptResponse"> | number | null
    openai_status?: StringNullableFilter<"PromptResponse"> | string | null
    gemini_status?: StringNullableFilter<"PromptResponse"> | string | null
  }

  export type ScanReportUpsertWithoutScanInput = {
    update: XOR<ScanReportUpdateWithoutScanInput, ScanReportUncheckedUpdateWithoutScanInput>
    create: XOR<ScanReportCreateWithoutScanInput, ScanReportUncheckedCreateWithoutScanInput>
    where?: ScanReportWhereInput
  }

  export type ScanReportUpdateToOneWithWhereWithoutScanInput = {
    where?: ScanReportWhereInput
    data: XOR<ScanReportUpdateWithoutScanInput, ScanReportUncheckedUpdateWithoutScanInput>
  }

  export type ScanReportUpdateWithoutScanInput = {
    id?: StringFieldUpdateOperationsInput | string
    openaiFindings?: JsonNullValueInput | InputJsonValue
    geminiFindings?: JsonNullValueInput | InputJsonValue
    brandMentions?: JsonNullValueInput | InputJsonValue
    competitorMentions?: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown?: JsonNullValueInput | InputJsonValue
    sovBreakdown?: JsonNullValueInput | InputJsonValue
    recommendationBreakdown?: JsonNullValueInput | InputJsonValue
    confidenceScores?: JsonNullValueInput | InputJsonValue
  }

  export type ScanReportUncheckedUpdateWithoutScanInput = {
    id?: StringFieldUpdateOperationsInput | string
    openaiFindings?: JsonNullValueInput | InputJsonValue
    geminiFindings?: JsonNullValueInput | InputJsonValue
    brandMentions?: JsonNullValueInput | InputJsonValue
    competitorMentions?: JsonNullValueInput | InputJsonValue
    visibilityScoreBreakdown?: JsonNullValueInput | InputJsonValue
    sovBreakdown?: JsonNullValueInput | InputJsonValue
    recommendationBreakdown?: JsonNullValueInput | InputJsonValue
    confidenceScores?: JsonNullValueInput | InputJsonValue
  }

  export type ScanCreateWithoutPromptResponsesInput = {
    id?: string
    status?: string
    visibilityScore?: number | null
    presenceScore?: number | null
    recommendationStrength?: number | null
    trendScore?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    domain: DomainCreateNestedOneWithoutScansInput
    report?: ScanReportCreateNestedOneWithoutScanInput
  }

  export type ScanUncheckedCreateWithoutPromptResponsesInput = {
    id?: string
    domainId: string
    status?: string
    visibilityScore?: number | null
    presenceScore?: number | null
    recommendationStrength?: number | null
    trendScore?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    report?: ScanReportUncheckedCreateNestedOneWithoutScanInput
  }

  export type ScanCreateOrConnectWithoutPromptResponsesInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutPromptResponsesInput, ScanUncheckedCreateWithoutPromptResponsesInput>
  }

  export type ScanUpsertWithoutPromptResponsesInput = {
    update: XOR<ScanUpdateWithoutPromptResponsesInput, ScanUncheckedUpdateWithoutPromptResponsesInput>
    create: XOR<ScanCreateWithoutPromptResponsesInput, ScanUncheckedCreateWithoutPromptResponsesInput>
    where?: ScanWhereInput
  }

  export type ScanUpdateToOneWithWhereWithoutPromptResponsesInput = {
    where?: ScanWhereInput
    data: XOR<ScanUpdateWithoutPromptResponsesInput, ScanUncheckedUpdateWithoutPromptResponsesInput>
  }

  export type ScanUpdateWithoutPromptResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    domain?: DomainUpdateOneRequiredWithoutScansNestedInput
    report?: ScanReportUpdateOneWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateWithoutPromptResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ScanReportUncheckedUpdateOneWithoutScanNestedInput
  }

  export type ScanCreateWithoutReportInput = {
    id?: string
    status?: string
    visibilityScore?: number | null
    presenceScore?: number | null
    recommendationStrength?: number | null
    trendScore?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    domain: DomainCreateNestedOneWithoutScansInput
    promptResponses?: PromptResponseCreateNestedManyWithoutScanInput
  }

  export type ScanUncheckedCreateWithoutReportInput = {
    id?: string
    domainId: string
    status?: string
    visibilityScore?: number | null
    presenceScore?: number | null
    recommendationStrength?: number | null
    trendScore?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    promptResponses?: PromptResponseUncheckedCreateNestedManyWithoutScanInput
  }

  export type ScanCreateOrConnectWithoutReportInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutReportInput, ScanUncheckedCreateWithoutReportInput>
  }

  export type ScanUpsertWithoutReportInput = {
    update: XOR<ScanUpdateWithoutReportInput, ScanUncheckedUpdateWithoutReportInput>
    create: XOR<ScanCreateWithoutReportInput, ScanUncheckedCreateWithoutReportInput>
    where?: ScanWhereInput
  }

  export type ScanUpdateToOneWithWhereWithoutReportInput = {
    where?: ScanWhereInput
    data: XOR<ScanUpdateWithoutReportInput, ScanUncheckedUpdateWithoutReportInput>
  }

  export type ScanUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    domain?: DomainUpdateOneRequiredWithoutScansNestedInput
    promptResponses?: PromptResponseUpdateManyWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promptResponses?: PromptResponseUncheckedUpdateManyWithoutScanNestedInput
  }

  export type DomainCreateWithoutRecommendationActionsInput = {
    id?: string
    url: string
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutDomainsInput
    scans?: ScanCreateNestedManyWithoutDomainInput
    competitors?: CompetitorCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutRecommendationActionsInput = {
    id?: string
    url: string
    organizationId: string
    createdAt?: Date | string
    scans?: ScanUncheckedCreateNestedManyWithoutDomainInput
    competitors?: CompetitorUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutRecommendationActionsInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutRecommendationActionsInput, DomainUncheckedCreateWithoutRecommendationActionsInput>
  }

  export type DomainUpsertWithoutRecommendationActionsInput = {
    update: XOR<DomainUpdateWithoutRecommendationActionsInput, DomainUncheckedUpdateWithoutRecommendationActionsInput>
    create: XOR<DomainCreateWithoutRecommendationActionsInput, DomainUncheckedCreateWithoutRecommendationActionsInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutRecommendationActionsInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutRecommendationActionsInput, DomainUncheckedUpdateWithoutRecommendationActionsInput>
  }

  export type DomainUpdateWithoutRecommendationActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDomainsNestedInput
    scans?: ScanUpdateManyWithoutDomainNestedInput
    competitors?: CompetitorUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutRecommendationActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUncheckedUpdateManyWithoutDomainNestedInput
    competitors?: CompetitorUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateWithoutCompetitorsInput = {
    id?: string
    url: string
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutDomainsInput
    scans?: ScanCreateNestedManyWithoutDomainInput
    recommendationActions?: RecommendationActionCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutCompetitorsInput = {
    id?: string
    url: string
    organizationId: string
    createdAt?: Date | string
    scans?: ScanUncheckedCreateNestedManyWithoutDomainInput
    recommendationActions?: RecommendationActionUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutCompetitorsInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutCompetitorsInput, DomainUncheckedCreateWithoutCompetitorsInput>
  }

  export type DomainUpsertWithoutCompetitorsInput = {
    update: XOR<DomainUpdateWithoutCompetitorsInput, DomainUncheckedUpdateWithoutCompetitorsInput>
    create: XOR<DomainCreateWithoutCompetitorsInput, DomainUncheckedCreateWithoutCompetitorsInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutCompetitorsInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutCompetitorsInput, DomainUncheckedUpdateWithoutCompetitorsInput>
  }

  export type DomainUpdateWithoutCompetitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDomainsNestedInput
    scans?: ScanUpdateManyWithoutDomainNestedInput
    recommendationActions?: RecommendationActionUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutCompetitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUncheckedUpdateManyWithoutDomainNestedInput
    recommendationActions?: RecommendationActionUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateManyOrganizationInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type DomainUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUpdateManyWithoutDomainNestedInput
    recommendationActions?: RecommendationActionUpdateManyWithoutDomainNestedInput
    competitors?: CompetitorUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUncheckedUpdateManyWithoutDomainNestedInput
    recommendationActions?: RecommendationActionUncheckedUpdateManyWithoutDomainNestedInput
    competitors?: CompetitorUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanCreateManyDomainInput = {
    id?: string
    status?: string
    visibilityScore?: number | null
    presenceScore?: number | null
    recommendationStrength?: number | null
    trendScore?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type RecommendationActionCreateManyDomainInput = {
    id?: string
    title: string
    description: string
    impact: string
    platform: string
    isCompleted?: boolean
  }

  export type CompetitorCreateManyDomainInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type ScanUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promptResponses?: PromptResponseUpdateManyWithoutScanNestedInput
    report?: ScanReportUpdateOneWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promptResponses?: PromptResponseUncheckedUpdateManyWithoutScanNestedInput
    report?: ScanReportUncheckedUpdateOneWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    visibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    presenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendationStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    trendScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecommendationActionUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecommendationActionUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecommendationActionUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompetitorUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptResponseCreateManyScanInput = {
    id?: string
    promptId: string
    openai_raw_response?: string | null
    gemini_raw_response?: string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: number | null
    gemini_processing_time?: number | null
    openai_status?: string | null
    gemini_status?: string | null
  }

  export type PromptResponseUpdateWithoutScanInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    openai_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    gemini_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    openai_status?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromptResponseUncheckedUpdateWithoutScanInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    openai_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    gemini_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    openai_status?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromptResponseUncheckedUpdateManyWithoutScanInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    openai_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_raw_response?: NullableStringFieldUpdateOperationsInput | string | null
    openai_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    gemini_normalized_json?: NullableJsonNullValueInput | InputJsonValue
    openai_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    gemini_processing_time?: NullableIntFieldUpdateOperationsInput | number | null
    openai_status?: NullableStringFieldUpdateOperationsInput | string | null
    gemini_status?: NullableStringFieldUpdateOperationsInput | string | null
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