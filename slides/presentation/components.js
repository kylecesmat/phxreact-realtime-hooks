import React, { createElement, Component } from 'react';
import PropTypes from 'prop-types';

import {
  Heading,
  Image,
  Code,
  CodePane,
  BlockQuote,
  Link,
  List,
  ListItem,
  Quote,
  S,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableBody,
  TableItem
} from 'spectacle';


const _Heading = size => ({ children }) => <Heading size={size}>{children}</Heading>;

const _S = type => ({ children }) => <S type={type}>{children}</S>;

const _CombineBlockQuote = ({ children }) => (
  <BlockQuote>
    <Quote>{children}</Quote>
  </BlockQuote>
);

const _CodePane = ({ children, language }) => (
  <CodePane theme="external" lang="javascript" source={children} />
);

export default {
  a: Link,
  blockquote: _CombineBlockQuote,
  code: _CodePane,
  del: _S('strikethrough'),
  em: _S('italic'),
  h1: _Heading(1),
  h2: _Heading(2),
  h3: _Heading(3),
  h4: _Heading(4),
  h5: _Heading(5),
  h6: _Heading(6),
  img: Image,
  codespan: Code,
  li: ListItem,
  p: Text,
  strong: _S('bold'),
  ul: List,
  table: Table,
  thead: TableHeader,
  th: TableHeaderItem,
  tbody: TableBody,
  tr: TableRow,
  td: TableItem
};