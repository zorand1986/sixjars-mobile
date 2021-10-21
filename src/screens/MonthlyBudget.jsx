import React from "react";
import { StatusBar, View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  alignments,
  appBackgroundColorPrimary,
  mediumHorizontalPadding,
  smallVerticalMargin,
  fullWidth,
  labelText,
  errorText,
  primaryBackground,
  smallHorizontalMargin,
} from "../styles/commonStyles";
import BasicTextInput from "../components/BasicTextInput";
import Button from "../components/Button";

const schema = yup.object({
  budget: yup
    .number("This field accepts only numeric inputs.")
    .required("This field is required."),
});

const MonthlyBudget = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
    // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log(data);
  return (
    <View style={[alignments.flex, appBackgroundColorPrimary,
      mediumHorizontalPadding]}
    >
      <StatusBar barStyle="light-content" />
      <View style={[smallVerticalMargin, fullWidth]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={labelText}>Your budget</Text>
              <BasicTextInput
                error={errors?.email}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
              />
            </>
          )}
          name="budget"
          defaultValue=""
        />
        {errors.budget
        && <Text style={errorText}>{errors?.budget?.message}</Text>}
      </View>
      <View style={[alignments.row, alignments.justifyEnd]}>
        <Button
          color={primaryBackground}
          style={[smallVerticalMargin, smallHorizontalMargin]}
          onPress={handleSubmit(onSubmit)}
          title="Add"
        />
      </View>
    </View>
  );
};

export default MonthlyBudget;
