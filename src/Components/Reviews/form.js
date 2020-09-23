import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Button, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

import { toast } from "../../utils/toasts";

class ReviewForm extends Component {
  state = {
    initialValues: {
      title: " ",
      excerpt: "",
      rating: "",
      public: "",
    },
  };

  render() {
    const state = this.state;
    return (
      <Formik
        enableReinitialize
        initialValues={state.initialValues}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          excerpt: Yup.string().required("You must add an excerpt"),
          rating: Yup.number().required("You mush add rating"),
          public: Yup.number().required("You musht choose Public or Draft"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <>
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col md={8}>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                    {errors.title && touched.title ? (
                      <div className="error">{errors.title}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Excerpt</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      you
                      name="excerpt"
                      value={values.excerpt}
                      onChange={handleChange}
                    />
                    <div className="error"></div>
                  </Form.Group>
                  <Form.Group>editor</Form.Group>
                  <div className="error"></div>

                  <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                      as="select"
                      name="rating"
                      value={values.rating}
                      onChange={handleChange}
                    >
                      <option value="" defaultValue>
                        Choose...
                      </option>
                      <option value="1">1 Star</option>
                      <option value="2">2 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="5">5 Stars</option>
                    </Form.Control>
                    <div className="error"></div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Public</Form.Label>
                    <Form.Control
                      as="select"
                      name="public"
                      value={values.public}
                      onChange={handleChange}
                    >
                      <option value="" defaultValue>
                        Choose...
                      </option>
                      <option value="1">Public</option>
                      <option value="0">Draft</option>
                    </Form.Control>
                    <div className="error"></div>
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled="">
                    Submit
                  </Button>
                </Col>
                <Col>
                  UPLOADER
                  <div className="error">Add an image please</div>
                </Col>
              </Form.Row>
            </Form>
          </>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  reviews: state.reviews,
});

export default connect(mapStateToProps)(ReviewForm);
