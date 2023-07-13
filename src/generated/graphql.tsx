import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Lyrics = {
  __typename?: 'Lyrics';
  _id: Scalars['ID']['output'];
  album: Scalars['String']['output'];
  content: Scalars['String']['output'];
  cover: Scalars['String']['output'];
  description: Scalars['String']['output'];
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
  year: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addSongLyrics: Lyrics;
  updateLyrics: Scalars['Boolean']['output'];
};


export type MutationAddSongLyricsArgs = {
  data: AddLyricsInput;
};


export type MutationUpdateLyricsArgs = {
  data: UpdateLyricsInput;
};

export type Query = {
  __typename?: 'Query';
  getLyrics: Array<Lyrics>;
  getLyricsByName: Lyrics;
};


export type QueryGetLyricsByNameArgs = {
  name: Scalars['String']['input'];
};

export type AddLyricsInput = {
  album: Scalars['String']['input'];
  content: Scalars['String']['input'];
  cover: Scalars['String']['input'];
  description: Scalars['String']['input'];
  language: Scalars['String']['input'];
  name: Scalars['String']['input'];
  title: Scalars['String']['input'];
  year: Scalars['String']['input'];
};

export type UpdateLyricsInput = {
  album?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  newName?: InputMaybe<Scalars['String']['input']>;
  oldName: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type LyricsQueryVariables = Exact<{ [key: string]: never; }>;


export type LyricsQuery = { __typename?: 'Query', getLyrics: Array<{ __typename?: 'Lyrics', name: string, title: string, album: string, language: string, year: string, description: string, cover: string }> };

export type LyricsByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type LyricsByNameQuery = { __typename?: 'Query', getLyricsByName: { __typename?: 'Lyrics', title: string, album: string, language: string, year: string, description: string, cover: string, content: string } };


export const LyricsDocument = gql`
    query Lyrics {
  getLyrics {
    name
    title
    album
    language
    year
    description
    cover
  }
}
    `;

/**
 * __useLyricsQuery__
 *
 * To run a query within a React component, call `useLyricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLyricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLyricsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLyricsQuery(baseOptions?: Apollo.QueryHookOptions<LyricsQuery, LyricsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LyricsQuery, LyricsQueryVariables>(LyricsDocument, options);
      }
export function useLyricsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LyricsQuery, LyricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LyricsQuery, LyricsQueryVariables>(LyricsDocument, options);
        }
export type LyricsQueryHookResult = ReturnType<typeof useLyricsQuery>;
export type LyricsLazyQueryHookResult = ReturnType<typeof useLyricsLazyQuery>;
export type LyricsQueryResult = Apollo.QueryResult<LyricsQuery, LyricsQueryVariables>;
export const LyricsByNameDocument = gql`
    query LyricsByName($name: String!) {
  getLyricsByName(name: $name) {
    title
    album
    language
    year
    description
    cover
    content
  }
}
    `;

/**
 * __useLyricsByNameQuery__
 *
 * To run a query within a React component, call `useLyricsByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useLyricsByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLyricsByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useLyricsByNameQuery(baseOptions: Apollo.QueryHookOptions<LyricsByNameQuery, LyricsByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LyricsByNameQuery, LyricsByNameQueryVariables>(LyricsByNameDocument, options);
      }
export function useLyricsByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LyricsByNameQuery, LyricsByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LyricsByNameQuery, LyricsByNameQueryVariables>(LyricsByNameDocument, options);
        }
export type LyricsByNameQueryHookResult = ReturnType<typeof useLyricsByNameQuery>;
export type LyricsByNameLazyQueryHookResult = ReturnType<typeof useLyricsByNameLazyQuery>;
export type LyricsByNameQueryResult = Apollo.QueryResult<LyricsByNameQuery, LyricsByNameQueryVariables>;