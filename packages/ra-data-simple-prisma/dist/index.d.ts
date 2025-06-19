import { PrismaClient } from '@prisma/client';
import { DynamicClientExtensionThis } from '@prisma/client/runtime/library';
import { DataProvider } from 'react-admin';
import { CreateAxiosDefaults, AxiosInterceptorOptions } from 'axios';

interface PaginationPayload {
    page: number;
    perPage: number;
}
interface SortPayload {
    field: string;
    order: "ASC" | "DESC";
}
type Identifier = string | number;
interface RaRecord<IdentifierType extends Identifier = Identifier> extends Record<string, any> {
    id: IdentifierType;
}
interface GetListParams {
    pagination?: PaginationPayload;
    sort?: SortPayload;
    filter?: any;
    meta?: any;
    signal?: AbortSignal;
}
interface DeleteParams<RecordType extends RaRecord = any> {
    id: RecordType["id"];
    previousData?: RecordType;
    meta?: any;
}
interface DeleteManyParams<RecordType extends RaRecord = any> {
    ids: RecordType["id"][];
    meta?: any;
}
interface CreateParams<T = any> {
    data: Partial<T>;
    meta?: any;
}
interface GetOneParams<RecordType extends RaRecord = any> {
    id: RecordType["id"];
    meta?: any;
    signal?: AbortSignal;
}
interface GetManyReferenceParams {
    target: string;
    id: Identifier;
    pagination: PaginationPayload;
    sort: SortPayload;
    filter: any;
    meta?: any;
    signal?: AbortSignal;
}
interface GetManyParams<RecordType extends RaRecord = any> {
    ids: RecordType["id"][];
    meta?: any;
    signal?: AbortSignal;
}
interface UpdateManyParams<T = any> {
    ids: Identifier[];
    data: Partial<T>;
    meta?: any;
}
interface UpdateParams<RecordType extends RaRecord = any> {
    id: RecordType["id"];
    data: Partial<RecordType>;
    previousData: RecordType;
    meta?: any;
}

interface QueryFunctionContext {
    signal?: AbortSignal;
}
interface UserIdentity {
    id: Identifier;
    fullName?: string;
    avatar?: string;
    [key: string]: any;
}
type AuthRedirectResult = {
    redirectTo?: string | false;
    logoutOnFailure?: boolean;
};
type AuthProvider = {
    login: (params: any) => Promise<{
        redirectTo?: string | boolean;
    } | void | any>;
    logout: (params: any) => Promise<void | false | string>;
    checkAuth: (params: any & QueryFunctionContext) => Promise<void>;
    checkError: (error: any) => Promise<void>;
    getIdentity?: (params?: QueryFunctionContext) => Promise<UserIdentity>;
    getPermissions?: (params: any & QueryFunctionContext) => Promise<any>;
    handleCallback?: (params?: QueryFunctionContext) => Promise<AuthRedirectResult | void | any>;
    canAccess?: <RecordType extends Record<string, any> = Record<string, any>>(params: QueryFunctionContext & {
        action: string;
        resource: string;
        record?: RecordType;
    }) => Promise<boolean>;
    [key: string]: any;
    supportAbortSignal?: boolean;
};

type AuditOptions = {
    model: {
        create: Function;
    };
    authProvider: AuthProvider;
    columns?: {
        id?: string;
        date?: string;
        resource?: string;
        action?: string;
        payload?: string;
        author?: string;
    };
    enabledForAction?: {
        create?: boolean;
        update?: boolean;
        delete?: boolean;
    };
    enabledResources?: string[];
};
declare const defaultAuditOptions: Pick<AuditOptions, "columns" | "enabledForAction">;
type AuditActions = "create" | "update" | "delete";

type RaPayload<T = string> = GetListRequest<T> | GetOneRequest<T> | GetManyRequest<T> | GetManyReferenceRequest<T> | CreateRequest<T> | UpdateRequest<T> | UpdateManyRequest<T> | DeleteRequest<T> | DeleteManyRequest<T>;
type GetListRequest<T = string> = {
    method: "getList";
    params: GetListParams;
    resource: T;
    model?: string;
};
type GetOneRequest<T = string> = {
    method: "getOne";
    params: GetOneParams;
    resource: T;
    model?: string;
};
type GetManyRequest<T = string> = {
    method: "getMany";
    params: GetManyParams;
    resource: T;
    model?: string;
};
type GetManyReferenceRequest<T = string> = {
    method: "getManyReference";
    params: GetManyReferenceParams;
    resource: T;
    model?: string;
};
type CreateRequest<T = string> = {
    method: "create";
    params: CreateParams;
    resource: T;
    model?: string;
};
type UpdateRequest<T = string> = {
    method: "update";
    params: UpdateParams;
    resource: T;
    model?: string;
};
type UpdateManyRequest<T = string> = {
    method: "updateMany";
    params: UpdateManyParams;
    resource: T;
    model?: string;
};
type DeleteRequest<T = string> = {
    method: "delete";
    params: DeleteParams;
    resource: T;
    model?: string;
};
type DeleteManyRequest<T = string> = {
    method: "deleteMany";
    params: DeleteManyParams;
    resource: T;
    model?: string;
};

declare const auditHandler: (request: RaPayload, options: AuditOptions, created?: any) => Promise<void>;
declare const createAuditEntry: (options: AuditOptions, request: RaPayload, id: any) => Promise<any>;

type PrismaClientOrDynamicClientExtension = PrismaClient | DynamicClientExtensionThis<{}, {
    params: {
        extArgs: {
            result: {};
            model: {};
            client: {};
            query: {};
        };
    };
    returns: {};
}, {}>;

type CreateArgs = {
    include?: object | null;
    select?: object | null;
};
type CreateOptions<Args extends CreateArgs = CreateArgs> = Args & {
    connect?: {
        [key: string]: string | {
            [key: string]: string | {
                [key: string]: string;
            };
        };
    };
    audit?: AuditOptions;
    debug?: boolean;
};
declare const createHandler: <Args extends CreateArgs>(req: CreateRequest, prismaClient: PrismaClientOrDynamicClientExtension, options?: CreateOptions<Omit<Args, "data">>) => Promise<{
    data: any;
}>;

type AxiosInterceptorFulfilled<V> = ((value: V) => V | Promise<V>) | null;
type AxiosInterceptorError = ((error: any) => any) | null;
declare const dataProvider: (endpoint: string, options?: {
    headers?: CreateAxiosDefaults["headers"];
    withCredentials?: boolean;
    resourceToModelMap?: Record<string, string>;
    axiosInterceptors?: {
        response?: {
            onFulfilled?: AxiosInterceptorFulfilled<any>;
            onRejected?: AxiosInterceptorError;
            options?: AxiosInterceptorOptions;
        }[];
        request?: {
            onFulfilled?: AxiosInterceptorFulfilled<any>;
            onRejected?: AxiosInterceptorError;
            options?: AxiosInterceptorOptions;
        }[];
    };
}) => DataProvider;

type DeleteOptions = {
    softDeleteField?: string;
    debug?: boolean;
    audit?: AuditOptions;
};
declare const deleteHandler: <W extends {
    include?: object | null;
    select?: object | null;
    where?: object | null;
}>(req: DeleteRequest, prismaClient: PrismaClientOrDynamicClientExtension, options?: DeleteOptions) => Promise<{
    data: any;
}>;

type FilterMode = "insensitive" | "default" | undefined;
type ExtractWhereOptions = {
    filterMode?: FilterMode;
    debug?: boolean;
};
declare const extractWhere: (req: GetListRequest | GetManyReferenceRequest, options?: ExtractWhereOptions) => {};

type GetListArgs = {
    include?: object | null;
    select?: object | null;
    where?: object | null;
    orderBy?: object | null;
};
type GetListOptions<Args extends GetListArgs = GetListArgs> = Args & {
    noNullsOnSort?: string[];
    debug?: boolean;
    transformRow?: (row: any, rowIndex: number, rows: any[]) => any | Promise<any>;
    filterMode?: FilterMode;
    asTransaction?: boolean;
};
declare const getListHandler: <Args extends GetListArgs>(req: GetListRequest, prismaClient: PrismaClientOrDynamicClientExtension, options?: GetListOptions<Args>) => Promise<{
    data: any;
    total: any;
}>;

type UpdateArgs = {
    include?: object | null;
    select?: object | null;
};
type UpdateOptions<Args extends UpdateArgs = UpdateArgs> = Args & {
    debug?: boolean;
    skipFields?: {
        [key: string]: boolean;
    };
    allowOnlyFields?: {
        [key: string]: boolean;
    };
    set?: {
        [key: string]: string | {
            [key: string]: string | {
                [key: string]: string;
            };
        };
    };
    allowNestedUpdate?: {
        [key: string]: boolean;
    };
    allowNestedUpsert?: {
        [key: string]: boolean;
    };
    allowJsonUpdate?: {
        [key: string]: boolean;
    };
    audit?: AuditOptions;
};
declare const reduceData: (data: any, options: UpdateOptions) => {};
declare const updateHandler: <Args extends UpdateArgs>(req: UpdateRequest, prismaClient: PrismaClientOrDynamicClientExtension, options?: UpdateOptions<Omit<Args, "data" | "where">>) => Promise<{
    data: any;
}>;

type GetManyArgs = {
    include?: object | null;
    select?: object | null;
};
type GetManyOptions<Args extends GetManyArgs = GetManyArgs> = Args & {
    debug?: boolean;
    transformRow?: (data: any) => any | Promise<any>;
};
declare const getManyHandler: <Args extends GetManyArgs>(req: GetManyRequest, prismaClient: PrismaClientOrDynamicClientExtension, options?: GetManyOptions<Args>) => Promise<{
    data: any;
}>;

type GetManyRefernceArgs = {
    include?: object | null;
    select?: object | null;
};
type GetManyReferenceOptions<Args extends GetManyRefernceArgs = GetManyRefernceArgs> = Args & {
    debug?: boolean;
    transformRow?: (data: any) => any | Promise<any>;
    filterMode?: FilterMode;
    asTransaction?: boolean;
};
declare const getManyReferenceHandler: <Args extends GetManyRefernceArgs>(req: GetManyReferenceRequest, prismaClient: PrismaClientOrDynamicClientExtension, options?: GetManyReferenceOptions<Args>) => Promise<{
    data: any;
    total: any;
}>;

type GetOneArgs = {
    include?: object | null;
    select?: object | null;
};
type GetOneOptions<Args extends GetOneArgs = GetOneArgs> = Args & {
    debug?: boolean;
    transform?: (row: any) => any | Promise<any>;
};
declare const getOneHandler: <Args extends GetOneArgs>(req: GetOneRequest, prismaClient: PrismaClientOrDynamicClientExtension, options?: GetOneOptions<Omit<Args, "where">>) => Promise<{
    data: any;
}>;

declare const defaultHandler: (req: RaPayload, prismaClient: PrismaClientOrDynamicClientExtension, options?: {
    audit?: AuditOptions;
    create?: CreateOptions;
    delete?: DeleteOptions;
    getList?: GetListOptions;
    getMany?: GetManyOptions;
    getManyReference?: GetManyReferenceOptions;
    getOne?: GetOneOptions;
    update?: UpdateOptions;
}) => Promise<{
    data: any;
}>;

type DeleteManyOptions = {
    softDeleteField?: string;
    audit?: AuditOptions;
    debug?: boolean;
};
declare const deleteManyHandler: (req: DeleteManyRequest, prismaClient: PrismaClientOrDynamicClientExtension, options?: DeleteManyOptions) => Promise<{
    data: any[];
}>;

declare const extractOrderBy: (req: GetListRequest | GetManyReferenceRequest) => {};

declare const extractSkipTake: (req: GetListRequest | GetManyReferenceRequest) => {
    skip: any;
    take: any;
};

declare const getInfiniteListHandler: <Args extends GetListArgs>(req: GetListRequest, prismaClient: PrismaClientOrDynamicClientExtension, options?: GetListOptions<Args>) => Promise<{
    data: any;
    pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    };
}>;

/**
 * Checks if a specific field in the request has changed between previousData and data.
 * Throws an error if the field is not present in either previousData or data (should be null)
 *
 * @param req - The update request containing previousData and data.
 * @param field - The field to check for changes.
 * @param value - Optional value to compare against what the field has changed to
 * @returns true if the field has changed, false otherwise.
 * @throws RDSPError if the field is not present in previousData or data.
 */
declare const hasFieldChanged: (req: UpdateRequest, // for now, does not support updateMany (how can that be done?)
field: string, value?: any) => boolean;

declare const isExport: (req: GetListRequest) => boolean;

interface Permission<T> {
    /**
     * @default 'allow'
     */
    type?: "allow" | "deny";
    /**
     * List of actions to allow/deny for the resource
     * Can be a single action or an array of actions
     */
    action: Action | Action[];
    /**
     * Resource to allow/deny the actions on
     * This is ideally typed but is also of type string for joint resources ex. user.email
     */
    resource: T | "*";
    record?: any;
    /**
     * Field(s) to allow/deny the actions on
     * This is used for field-level permissions
     * Can be a single field or an array of fields
     */
    field?: string | string[];
}
type Action = "*" | "list" | "show" | "create" | "edit" | "delete" | "export";
declare const actions: Action[];
type Permissions<T> = Permission<T>[];

type ReactAdminFetchActions = "getOne" | "create" | "update" | "getList" | "getMany" | "getManyReference" | "updateMany" | "delete" | "deleteMany";
declare const fetchActionToAction: Record<ReactAdminFetchActions, Action>;
declare const canAccess: ({ action, permissions, resource, record, field, }: {
    action: Action;
    permissions: Permissions<any>;
    resource: string;
    record?: any;
    field?: string;
}) => boolean;

declare const updateManyHandler: <Args extends UpdateArgs>(req: UpdateManyRequest, prismaClient: PrismaClientOrDynamicClientExtension, options?: Omit<UpdateOptions<Args>, "select" | "include">) => Promise<{
    data: Identifier[];
}>;

export { type Action, type AuditActions, type AuditOptions, type CreateArgs, type CreateOptions, type CreateRequest, type DeleteManyOptions, type DeleteManyRequest, type DeleteOptions, type DeleteRequest, type ExtractWhereOptions, type FilterMode, type GetListArgs, type GetListOptions, type GetListRequest, type GetManyArgs, type GetManyOptions, type GetManyReferenceOptions, type GetManyReferenceRequest, type GetManyRefernceArgs, type GetManyRequest, type GetOneArgs, type GetOneOptions, type GetOneRequest, type Permission, type Permissions, type RaPayload, type ReactAdminFetchActions, type UpdateArgs, type UpdateManyRequest, type UpdateOptions, type UpdateRequest, actions, auditHandler, canAccess, createAuditEntry, createHandler, dataProvider, defaultAuditOptions, defaultHandler, deleteHandler, deleteManyHandler, extractOrderBy, extractSkipTake, extractWhere, fetchActionToAction, getInfiniteListHandler, getListHandler, getManyHandler, getManyReferenceHandler, getOneHandler, hasFieldChanged, isExport, reduceData, updateHandler, updateManyHandler };
