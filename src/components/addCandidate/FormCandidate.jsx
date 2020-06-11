import React from "react";
import { connect } from "react-redux";
import { Form } from "react-final-form";
import { TextField, Radios } from "mui-rff";
import {
  setSelectedCandidate,
  setDictionary,
} from "data/actions/dictionary.actions.js";
import { Grid } from "@material-ui/core";
import API from "data/fetch";
import { useQuery } from "react-query";
import { queryCache } from "react-query";
import { useTranslation } from "react-i18next";

const FormCandidate = ({
  selectedCandidate,
  setSelectedCandidate,
  setDictionary,
}) => {
  const { t } = useTranslation();

  const { data: dictionary } = useQuery(
    "dictionary",
    API.dictionary.fetchAllDictionary
  );

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = t("Wprowadź nazwę!");
    }
    if (!values.categoryId) {
      errors.categoryId = t("Wybierz kategorię!");
    }
    return errors;
  };

  const formFields = [
    {
      size: 12,
      field: (
        <TextField
          label={t("Nazwa")}
          name="name"
          margin="none"
          required={true}
        />
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
            { label: t("Bio"), value: "0" },
            { label: t("Gabaryty"), value: "1" },
            { label: t("Papier"), value: "2" },
            { label: t("Szkło"), value: "3" },
            { label: t("Tworzywa sztuczne"), value: "4" },
            { label: t("Zmieszane"), value: "5" },
          ]}
        />
      ),
    },
    {
      size: 12,
      field: (
        <TextField
          rows={1}
          rowsMax={4}
          multiline
          label={t("Komentarz")}
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

    // setDictionary(result);
    API.dictionary.fetchAddEpression(result);
    API.dictionary.fetchDeleteCandidate(selectedCandidate.id);
    queryCache.refetchQueries("candidates").then((candidates) => {
      console.log({candidates})
      if (candidates.length > 0) setSelectedCandidate(candidates[0][0]);
    })
  };

  const handleDelete = async (e) => {
    // console.log({ selectedCandidate });
    API.dictionary
      .fetchDeleteCandidate(selectedCandidate.id)
      .then(function (defs) {
        // żeby pobrać wartości promise
        if (defs.status) {
          console.log({defs})
          // window.location.reload(false);
        } else {
          console.log({defs})
          queryCache.refetchQueries("candidates").then((candidates) => {
            console.log({candidates})
            if (candidates.length > 0) setSelectedCandidate(candidates[0][0]);
          })
          
        }
      });
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        name: selectedCandidate.name,
        id: selectedCandidate.id,
        description: selectedCandidate.description
          ? selectedCandidate.description
          : undefined,
        categoryId: selectedCandidate.categoryId
          ? selectedCandidate.categoryId.toString()
          : undefined,
      }}
      validate={validate}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <div className="naglowek" style={{ padding: 16 }}>
            {/* <Grid container alignItems="flex-start" spacing={2}> */}
            {formFields.map((item, idx) => (
              <Grid item xs={item.size} key={idx} className="odstep">
                {item.field}
              </Grid>
            ))}
            {/* </Grid> */}
          </div>
          <Grid item style={{ marginTop: 12 }}>
            <button
              className="button_w"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              {t("Resetuj")}
            </button>
            <button className="button_w" type="submit" disabled={submitting}>
              {t("Zatwierdź")}
            </button>
            <button
              color="secondary"
              className="button_w button_w_red"
              type="button"
              onClick={handleDelete}
            >
              {t("Usuń")}
            </button>
          </Grid>
          {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </form>
      )}
    />
  );
};

export default connect(
  (state) => {
    return {
      selectedCandidate: state.dictionary.selectedCandidate,
    };
  },
  {
    setSelectedCandidate,
    setDictionary,
  }
)(FormCandidate);
