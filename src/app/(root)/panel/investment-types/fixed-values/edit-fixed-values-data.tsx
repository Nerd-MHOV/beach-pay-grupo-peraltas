import React from "react";
import DialogEditFixedValues from "./dialog-edit-fixed-values";
import { FixedValuesForm } from "./form-edit-fixed-values";
import { getFixedValues } from "./actions";

const EditFixedValuesData = async () => {
  const fixedValuesData = await getFixedValues();

  const fixedValues: FixedValuesForm = {
    km: fixedValuesData.find((fv) => fv.id === "km")?.value || 0,
    association:
      fixedValuesData.find((fv) => fv.id === "association")?.value || 0,
    association_student:
      fixedValuesData.find((fv) => fv.id === "association_student")?.value || 0,
    lesson: fixedValuesData.find((fv) => fv.id === "lesson")?.value || 0,
    lesson_associated:
      fixedValuesData.find((fv) => fv.id === "lesson_associated")?.value || 0,
  };

  return <DialogEditFixedValues fixedValues={fixedValues} />;
};

export default EditFixedValuesData;
