// Generated GraphQL types, do not edit manually.

import * as Types from '../../graphql/types';

export type AssetTableDefinitionFragment = {
  __typename: 'AssetNode';
  id: string;
  changedReasons: Array<Types.ChangeReason>;
  groupName: string | null;
  opNames: Array<string>;
  isSource: boolean;
  isObservable: boolean;
  isExecutable: boolean;
  computeKind: string | null;
  hasMaterializePermission: boolean;
  description: string | null;
  partitionDefinition: {__typename: 'PartitionDefinition'; description: string} | null;
  owners: Array<
    {__typename: 'TeamAssetOwner'; team: string} | {__typename: 'UserAssetOwner'; email: string}
  >;
  repository: {
    __typename: 'Repository';
    id: string;
    name: string;
    location: {__typename: 'RepositoryLocation'; id: string; name: string};
  };
};

export type AssetTableFragment = {
  __typename: 'Asset';
  id: string;
  key: {__typename: 'AssetKey'; path: Array<string>};
  definition: {
    __typename: 'AssetNode';
    id: string;
    changedReasons: Array<Types.ChangeReason>;
    groupName: string | null;
    opNames: Array<string>;
    isSource: boolean;
    isObservable: boolean;
    isExecutable: boolean;
    computeKind: string | null;
    hasMaterializePermission: boolean;
    description: string | null;
    partitionDefinition: {__typename: 'PartitionDefinition'; description: string} | null;
    owners: Array<
      {__typename: 'TeamAssetOwner'; team: string} | {__typename: 'UserAssetOwner'; email: string}
    >;
    repository: {
      __typename: 'Repository';
      id: string;
      name: string;
      location: {__typename: 'RepositoryLocation'; id: string; name: string};
    };
  } | null;
};
