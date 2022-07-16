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

export type Query = {
  __typename?: 'Query';
  course?: Maybe<Course>;
  courses: Array<Course>;
};


export type QueryCourseArgs = {
  id: Scalars['Int'];
};

export type GetCourseByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCourseByIdQuery = { __typename?: 'Query', course?: { __typename?: 'Course', name: string } | null };

export type Unnamed_1_MutationVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Mutation = { __typename?: 'Mutation', createCourse?: { __typename?: 'Course', name: string, instructor_id: number, semesters: Array<string> } | null };

export type GetCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoursesQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'Course', name: string }> };


export const GetCourseByIdDocument = gql`
    query getCourseByID($id: Int!) {
  course(id: $id) {
    name
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCourseByID(variables: GetCourseByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCourseByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCourseByIdQuery>(GetCourseByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCourseByID', 'query');
    },
    getCourses(variables?: GetCoursesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCoursesQuery>(GetCoursesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCourses', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;