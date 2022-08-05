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

export type Course = {
  __typename?: 'Course';
  id: Scalars['ID'];
  instructor_id: Scalars['Float'];
  name: Scalars['String'];
  semesters: Array<Scalars['String']>;
};

/** New course */
export type CreateNewCourse = {
  instructor_id: Scalars['Float'];
  name: Scalars['String'];
  semesters: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCourse?: Maybe<Course>;
};


export type MutationCreateCourseArgs = {
  data: CreateNewCourse;
};

export type Point = {
  __typename?: 'Point';
  aka: Array<Scalars['String']>;
  cultural_period?: Maybe<Scalars['String']>;
  culture?: Maybe<Scalars['String']>;
  date_info?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  glacial_period?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  name_id: Scalars['ID'];
  named_for?: Maybe<Scalars['String']>;
  namers: Array<Scalars['String']>;
  phase?: Maybe<Scalars['String']>;
  point_validity?: Maybe<Scalars['String']>;
  shape?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  tradition?: Maybe<Scalars['String']>;
  type_site?: Maybe<Scalars['String']>;
  year_identified?: Maybe<Scalars['Float']>;
  year_range_end?: Maybe<Scalars['Float']>;
  year_range_end_type?: Maybe<Scalars['String']>;
  year_range_start?: Maybe<Scalars['Float']>;
  year_range_start_type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  course?: Maybe<Course>;
  courses: Array<Course>;
  point?: Maybe<Point>;
  points: Array<Point>;
};


export type QueryCourseArgs = {
  id: Scalars['Int'];
};


export type QueryPointArgs = {
  name_id: Scalars['String'];
};

export type GetCourseByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCourseByIdQuery = { __typename?: 'Query', course?: { __typename?: 'Course', name: string } | null };

export type CreateCourseMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse?: { __typename?: 'Course', name: string, instructor_id: number, semesters: Array<string> } | null };

export type GetCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoursesQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'Course', name: string }> };

export type GetPointByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetPointByNameQuery = { __typename?: 'Query', point?: { __typename?: 'Point', name: string, date_info?: string | null, culture?: string | null, tradition?: string | null, phase?: string | null, glacial_period?: string | null, cultural_period?: string | null, description?: string | null, aka: Array<string>, year_range_start?: number | null, year_range_start_type?: string | null, year_range_end?: number | null, year_range_end_type?: string | null, namers: Array<string>, named_for?: string | null, year_identified?: number | null, type_site?: string | null } | null };

export type GetPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPointsQuery = { __typename?: 'Query', points: Array<{ __typename?: 'Point', name: string, name_id: string, point_validity?: string | null, culture?: string | null, shape?: string | null, size?: string | null }> };


export const GetCourseByIdDocument = gql`
    query getCourseByID($id: Int!) {
  course(id: $id) {
    name
  }
}
    `;
export const CreateCourseDocument = gql`
    mutation createCourse {
  createCourse(
    data: {name: "Google Pixel", instructor_id: 1, semesters: ["FALL 2022"]}
  ) {
    name
    instructor_id
    semesters
  }
}
    `;
export const GetCoursesDocument = gql`
    query getCourses {
  courses {
    name
  }
}
    `;
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
export const GetPointsDocument = gql`
    query getPoints {
  points {
    name
    name_id
    point_validity
    culture
    shape
    size
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCourseByID(variables: GetCourseByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCourseByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCourseByIdQuery>(GetCourseByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCourseByID', 'query');
    },
    createCourse(variables?: CreateCourseMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateCourseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCourseMutation>(CreateCourseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCourse', 'mutation');
    },
    getCourses(variables?: GetCoursesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCoursesQuery>(GetCoursesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCourses', 'query');
    },
    getPointByName(variables: GetPointByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPointByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPointByNameQuery>(GetPointByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPointByName', 'query');
    },
    getPoints(variables?: GetPointsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPointsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPointsQuery>(GetPointsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPoints', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;