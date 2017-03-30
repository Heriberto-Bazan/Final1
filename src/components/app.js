import React, { Component } from 'react';

import Nava from '../components1/nava';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book-detail';
import { Grid, Row, Col } from 'react-bootstrap';
export default class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
              <BookList />
          </Col>
          <Col xs={6} md={4}>
              <BookDetail />
          </Col>
          <Col xs={6} md={4}>
          <Nava />
          </Col>
        </Row>
      </Grid>

    );
  }
}
