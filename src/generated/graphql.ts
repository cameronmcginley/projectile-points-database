import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** New point */
export type CreateNewPoint = {
  aka: Array<Scalars['String']>;
  cultural_period: Array<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  glacial_period: Array<Scalars['String']>;
  name: Scalars['String'];
  name_id: Scalars['String'];
  named_for?: InputMaybe<Scalars['String']>;
  namers: Array<Scalars['String']>;
  point_validity?: InputMaybe<Scalars['String']>;
  shape: Array<Scalars['String']>;
  short_for?: InputMaybe<Scalars['String']>;
  size: Array<Scalars['String']>;
  type_site?: InputMaybe<Scalars['String']>;
  year_identified?: InputMaybe<Scalars['Float']>;
  year_range_end?: InputMaybe<Scalars['Float']>;
  year_range_end_type?: InputMaybe<Scalars['String']>;
  year_range_start?: InputMaybe<Scalars['Float']>;
  year_range_start_type?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPoint?: Maybe<Point>;
};


export type MutationCreatePointArgs = {
  data: CreateNewPoint;
};

export type Point = {
  __typename?: 'Point';
  aka: Array<Scalars['String']>;
  cultural_period: Array<Scalars['String']>;
  culture: Array<Scalars['String']>;
  date_info?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  glacial_period: Array<Scalars['String']>;
  name: Scalars['String'];
  name_id: Scalars['ID'];
  named_for?: Maybe<Scalars['String']>;
  namers: Array<Scalars['String']>;
  phase: Array<Scalars['String']>;
  point_validity?: Maybe<Scalars['String']>;
  shape: Array<Scalars['String']>;
  short_for?: Maybe<Scalars['String']>;
  size: Array<Scalars['String']>;
  tradition: Array<Scalars['String']>;
  type_site?: Maybe<Scalars['String']>;
  year_identified?: Maybe<Scalars['Float']>;
  year_range_end?: Maybe<Scalars['Float']>;
  year_range_end_type?: Maybe<Scalars['String']>;
  year_range_start?: Maybe<Scalars['Float']>;
  year_range_start_type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  point?: Maybe<Point>;
  points: Array<Point>;
};


export type QueryPointArgs = {
  name_id: Scalars['String'];
};

export type GetPointByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetPointByNameQuery = { __typename?: 'Query', point?: { __typename?: 'Point', name: string, date_info?: string | null, culture: Array<string>, tradition: Array<string>, phase: Array<string>, glacial_period: Array<string>, cultural_period: Array<string>, description?: string | null, aka: Array<string>, year_range_start?: number | null, year_range_start_type?: string | null, year_range_end?: number | null, year_range_end_type?: string | null, namers: Array<string>, named_for?: string | null, year_identified?: number | null, type_site?: string | null } | null };

export type CreatePointMutationVariables = Exact<{
  name_id: Scalars['String'];
  name: Scalars['String'];
  shape: Array<Scalars['String']> | Scalars['String'];
  size: Array<Scalars['String']> | Scalars['String'];
  namers: Array<Scalars['String']> | Scalars['String'];
  named_for?: InputMaybe<Scalars['String']>;
  year_identified?: InputMaybe<Scalars['Float']>;
  type_site?: InputMaybe<Scalars['String']>;
  glacial_period: Array<Scalars['String']> | Scalars['String'];
  cultural_period: Array<Scalars['String']> | Scalars['String'];
  year_range_start?: InputMaybe<Scalars['Float']>;
  year_range_start_type?: InputMaybe<Scalars['String']>;
  year_range_end?: InputMaybe<Scalars['Float']>;
  year_range_end_type?: InputMaybe<Scalars['String']>;
  short_for?: InputMaybe<Scalars['String']>;
  aka: Array<Scalars['String']> | Scalars['String'];
  point_validity?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
}>;


export type CreatePointMutation = { __typename?: 'Mutation', createPoint?: { __typename?: 'Point', name_id: string, name: string, shape: Array<string>, size: Array<string>, namers: Array<string>, named_for?: string | null, year_identified?: number | null, type_site?: string | null, glacial_period: Array<string>, cultural_period: Array<string>, year_range_start?: number | null, year_range_start_type?: string | null, year_range_end?: number | null, year_range_end_type?: string | null, short_for?: string | null, aka: Array<string>, point_validity?: string | null, description?: string | null } | null };

export type GetPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPointsQuery = { __typename?: 'Query', points: Array<{ __typename?: 'Point', name: string, name_id: string, point_validity?: string | null, cultural_period: Array<string>, shape: Array<string>, size: Array<string> }> };


export const GetPointByNameDocument = gql`
    query getPointByName($name: String!) {
  point(name_id: $name) {
    name
    date_info
    culture
    tradition
    phase
    glacial_period
    cultural_period
    description
    aka
    year_range_start
    year_range_start_type
    year_range_end
    year_range_end_type
    namers
    named_for
    year_identified
    type_site
  }
}
    `;
export const CreatePointDocument = gql`
    mutation createPoint($name_id: String!, $name: String!, $shape: [String!]!, $size: [String!]!, $namers: [String!]!, $named_for: String, $year_identified: Float, $type_site: String, $glacial_period: [String!]!, $cultural_period: [String!]!, $year_range_start: Float, $year_range_start_type: String, $year_range_end: Float, $year_range_end_type: String, $short_for: String, $aka: [String!]!, $point_validity: String, $description: String) {
  createPoint(
    data: {name_id: $name_id, name: $name, shape: $shape, size: $size, namers: $namers, named_for: $named_for, year_identified: $year_identified, type_site: $type_site, glacial_period: $glacial_period, cultural_period: $cultural_period, year_range_start: $year_range_start, year_range_start_type: $year_range_start_type, year_range_end: $year_range_end, year_range_end_type: $year_range_end_type, short_for: $short_for, aka: $aka, point_validity: $point_validity, description: $description}
  ) {
    name_id
    name
    shape
    size
    namers
    named_for
    year_identified
    type_site
    glacial_period
    cultural_period
    year_range_start
    year_range_start_type
    year_range_end
    year_range_end_type
    short_for
    aka
    point_validity
    description
  }
}
    `;
export const GetPointsDocument = gql`
    query getPoints {
  points {
    name
    name_id
    point_validity
    cultural_period
    shape
    size
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPointByName(variables: GetPointByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPointByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPointByNameQuery>(GetPointByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPointByName', 'query');
    },
    createPoint(variables: CreatePointMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreatePointMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePointMutation>(CreatePointDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPoint', 'mutation');
    },
    getPoints(variables?: GetPointsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPointsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPointsQuery>(GetPointsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPoints', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;