import React from "react";
import { connect } from "react-redux";
import { Form } from "react-final-form";
import { TextField, Radios } from "mui-rff";
import {
  setSelectedCandidate,
  setDictionary,
} from "data/actions/dictionary.actions.js";
import { Paper, Grid, Button } from "@material-ui/core";
import API from "data/fetch";

const FormCandidate = ({
  selectedCandidate,
  categories,
  dictionary,
  setSelectedCandidate,
  setDictionary,
}) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Wprowadź nazwę!";
    }
    if (!values.categoryId) {
      errors.categoryId = "Wybierz kategorię!";
    }
    return errors;
  };

  const formFields = [
    {
      size: 12,
      field: (
        <TextField label="Nazwa" name="name" margin="none" required={true} />
      ),
    },
    {
      size: 12,
      field: (
        <Radios
          name="categoryId"
          formControlProps={{ margin: "none" }}
          radioGroupProps={{ row: true }}
          data={[
            { label: "Bio", value: "0" },
            { label: "Gabaryty", value: "1" },
            { label: "Papier", value: "2" },
            { label: "Szkło", value: "3" },
            { label: "Tworzywa sztuczne", value: "4" },
            { label: "Zmieszane", value: "5" },
          ]}
        />
      ),
    },
    {
      size: 12,
      field: (
        <TextField
          rows={2}
          rowsMax={4}
          multiline
          label="Komentarz"
          name="description"
          margin="none"
          required={false}
        />
      ),
    },
  ];

  const onSubmit = (e) => {
    const result = e;
    result.id =
      dictionary.reduce(function (prev, current) {
        // znajduje max
        return prev.id > current.id ? prev : current;
      }).id + 1;
    result.categoryId = parseInt(e.categoryId, 10); // zamienia string na int

    setDictionary(result);
    API.dictionary.fetchAddEpression(result);
    console.log({ result });
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ name: selectedCandidate.name, id: selectedCandidate.id }}
      validate={validate}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Paper style={{ padding: 16 }}>
            {/* <Grid container alignItems="flex-start" spacing={2}> */}
            {formFields.map((item, idx) => (
              <Grid item xs={item.size} key={idx} className="odstep">
                {item.field}
              </Grid>
            ))}
            {/* </Grid> */}
          </Paper>
          <Grid item style={{ marginTop: 16 }}>
            <Button
              className="button_w"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Resetuj
            </Button>
            <Button className="button_w" type="submit" disabled={submitting}>
              Zatwierdź
            </Button>
          </Grid>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
};

export default connect(
  (state) => {
    return {
      categories: state.dictionary.categories,
      dictionary: state.dictionary.dictionary,
      selectedCandidate: state.dictionary.selectedCandidate,
    };
  },
  {
    setSelectedCandidate,
    setDictionary,
  }
)(FormCandidate);
