import { Formik, Form, Field, ErrorMessage } from "formik";

const App = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            placeholder="enter your name"
            onChange={handleChange}
            type="text"
            name="name"
          />
          <ErrorMessage component="div" name="name" />
          <Field
            placeholder="enter your email"
            onChange={handleChange}
            type="email"
            name="email"
          />
          <ErrorMessage component="div" name="email" />
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default App;
