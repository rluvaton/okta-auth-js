/* eslint-disable @typescript-eslint/no-non-null-assertion */
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */
import {
  OktaAuth,
  OktaAuthOptions,
  OktaAuthHttpInterface,
  HttpAPI,
  OktaAuthIdxOptions,
  IdxStorageManagerInterface,
  IdxAPI,
  TokenAPI
} from '@okta/okta-auth-js/idx';
import { expectType, expectAssignable, expectError } from 'tsd';

const options: OktaAuthOptions = {};
const authClient = new OktaAuth(options);

// includes Http
expectAssignable<OktaAuthHttpInterface>(authClient);
expectType<HttpAPI>(authClient.http);

// includes OAuth
expectType<TokenAPI>(authClient.token);

// has IDX
expectType<OktaAuthIdxOptions>(authClient.options);
expectType<OktaAuthOptions>(authClient.options); // test alias
expectType<IdxAPI>(authClient.idx);
expectType<IdxStorageManagerInterface>(authClient.storageManager);

// does not include Authn
expectError<undefined>(authClient.authn);
