import { Identifier } from "./Http_types";
export interface QueryFunctionContext {
  signal?: AbortSignal;
}
export interface UserIdentity {
  id: Identifier;
  fullName?: string;
  avatar?: string;
  [key: string]: any;
}
export type AuthRedirectResult = {
  redirectTo?: string | false;
  logoutOnFailure?: boolean;
};
export type AuthProvider = {
  login: (
    params: any
  ) => Promise<{ redirectTo?: string | boolean } | void | any>;
  logout: (params: any) => Promise<void | false | string>;
  checkAuth: (params: any & QueryFunctionContext) => Promise<void>;
  checkError: (error: any) => Promise<void>;
  getIdentity?: (params?: QueryFunctionContext) => Promise<UserIdentity>;
  getPermissions?: (params: any & QueryFunctionContext) => Promise<any>;
  handleCallback?: (
    params?: QueryFunctionContext
  ) => Promise<AuthRedirectResult | void | any>;
  canAccess?: <RecordType extends Record<string, any> = Record<string, any>>(
    params: QueryFunctionContext & {
      action: string;
      resource: string;
      record?: RecordType;
    }
  ) => Promise<boolean>;
  [key: string]: any;
  supportAbortSignal?: boolean;
};
