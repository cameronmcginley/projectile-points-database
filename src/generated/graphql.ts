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
  instructor: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  course?: Maybe<Course>;
  courses: Array<Course>;
};


export type QueryCourseArgs = {
  name: Scalars['String'];
};

export type CourseByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type CourseByNameQuery = { __typename?: 'Query', course?: { __typename?: 'Course', name: string, instructor: string } | null };

export type GetCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoursesQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'Course', name: string, instructor: string }> };


export const CourseByNameDocument = gql`
    query courseByName($name: String!) {
  course(name: $name) {
    name
    instructor
  }
}
    `;
export const GetCoursesDocument = gql`
    query getCourses {
  courses {
    name
    instructor
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    courseByName(variables: CourseByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CourseByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CourseByNameQuery>(CourseByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'courseByName', 'query');
    },
    getCourses(variables?: GetCoursesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCoursesQuery>(GetCoursesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCourses', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;