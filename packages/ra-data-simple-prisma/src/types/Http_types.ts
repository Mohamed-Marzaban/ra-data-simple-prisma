export interface PaginationPayload {
  page: number;
  perPage: number;
}
export interface SortPayload {
  field: string;
  order: "ASC" | "DESC";
}
export type Identifier = string | number;

export interface RaRecord<IdentifierType extends Identifier = Identifier>
  extends Record<string, any> {
  id: IdentifierType;
}
export interface GetListParams {
  pagination?: PaginationPayload;
  sort?: SortPayload;
  filter?: any;
  meta?: any;
  signal?: AbortSignal;
}

export interface DeleteParams<RecordType extends RaRecord = any> {
  id: RecordType["id"];
  previousData?: RecordType;
  meta?: any;
}
export interface DeleteManyParams<RecordType extends RaRecord = any> {
  ids: RecordType["id"][];
  meta?: any;
}

export interface CreateParams<T = any> {
  data: Partial<T>;
  meta?: any;
}

export interface GetOneParams<RecordType extends RaRecord = any> {
  id: RecordType["id"];
  meta?: any;
  signal?: AbortSignal;
}
export interface GetManyReferenceParams {
  target: string;
  id: Identifier;
  pagination: PaginationPayload;
  sort: SortPayload;
  filter: any;
  meta?: any;
  signal?: AbortSignal;
}

export interface GetManyParams<RecordType extends RaRecord = any> {
  ids: RecordType["id"][];
  meta?: any;
  signal?: AbortSignal;
}

export interface UpdateManyParams<T = any> {
  ids: Identifier[];
  data: Partial<T>;
  meta?: any;
}
export interface UpdateParams<RecordType extends RaRecord = any> {
  id: RecordType["id"];
  data: Partial<RecordType>;
  previousData: RecordType;
  meta?: any;
}
