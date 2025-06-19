import {
  CreateParams,
  DeleteManyParams,
  DeleteParams,
  GetListParams,
  GetManyParams,
  GetManyReferenceParams,
  GetOneParams,
  UpdateManyParams,
  UpdateParams,
  RaRecord,
  Identifier,
} from "./Http_types";
import { QueryFunctionContext } from "./AuthProvider_types";
export class HttpError extends Error {
  status;
  body;
  constructor(message, status, body: any = null) {
    super(message);
    this.status = status;
    this.body = body;
    Object.setPrototypeOf(this, HttpError.prototype);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
    this.stack = new Error().stack;
  }
}
interface GetOneResult<RecordType extends RaRecord = any> {
  data: RecordType;
  meta?: any;
}
interface GetManyResult<RecordType extends RaRecord = any> {
  data: RecordType[];
  meta?: any;
}
interface UpdateResult<RecordType extends RaRecord = any> {
  data: RecordType;
  meta?: any;
}
interface UpdateManyResult<RecordType extends RaRecord = any> {
  data?: RecordType["id"][];
  meta?: any;
}
interface CreateResult<RecordType extends RaRecord = any> {
  data: RecordType;
  meta?: any;
}
interface DeleteResult<RecordType extends RaRecord = any> {
  data: RecordType;
  meta?: any;
}

interface DeleteManyResult<RecordType extends RaRecord = any> {
  data?: RecordType["id"][];
  meta?: any;
}
interface GetManyReferenceResult<RecordType extends RaRecord = any> {
  data: RecordType[];
  total?: number;
  pageInfo?: {
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
  };
  meta?: any;
}
interface GetListResult<RecordType extends RaRecord = any> {
  data: RecordType[];
  total?: number;
  pageInfo?: {
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
  };
  meta?: any;
}
export type DataProvider<ResourceType extends string = string> = {
  getList: <RecordType extends RaRecord = any>(
    resource: ResourceType,
    params: GetListParams & QueryFunctionContext
  ) => Promise<GetListResult<RecordType>>;

  getOne: <RecordType extends RaRecord = any>(
    resource: ResourceType,
    params: GetOneParams<RecordType> & QueryFunctionContext
  ) => Promise<GetOneResult<RecordType>>;

  getMany: <RecordType extends RaRecord = any>(
    resource: ResourceType,
    params: GetManyParams<RecordType> & QueryFunctionContext
  ) => Promise<GetManyResult<RecordType>>;

  getManyReference: <RecordType extends RaRecord = any>(
    resource: ResourceType,
    params: GetManyReferenceParams & QueryFunctionContext
  ) => Promise<GetManyReferenceResult<RecordType>>;

  update: <RecordType extends RaRecord = any>(
    resource: ResourceType,
    params: UpdateParams
  ) => Promise<UpdateResult<RecordType>>;

  updateMany: <RecordType extends RaRecord = any>(
    resource: ResourceType,
    params: UpdateManyParams
  ) => Promise<UpdateManyResult<RecordType>>;

  create: <
    RecordType extends Omit<RaRecord, "id"> = any,
    ResultRecordType extends RaRecord = RecordType & { id: Identifier }
  >(
    resource: ResourceType,
    params: CreateParams
  ) => Promise<CreateResult<ResultRecordType>>;

  delete: <RecordType extends RaRecord = any>(
    resource: ResourceType,
    params: DeleteParams<RecordType>
  ) => Promise<DeleteResult<RecordType>>;

  deleteMany: <RecordType extends RaRecord = any>(
    resource: ResourceType,
    params: DeleteManyParams<RecordType>
  ) => Promise<DeleteManyResult<RecordType>>;

  [key: string]: any;
  supportAbortSignal?: boolean;
};
