import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
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
import JarListItem from "../components/JarListItem";
import { mockJars } from "../data/mockData";
import PopupModal from "../components/PopupModal";
import { defaultJarValues } from "../data/Constants";
import { formatNumber } from "../services/simpleFunctions";

const schema = yup.object({
  expense: yup
    .number("This field accepts only numeric inputs.")
    .required("This field is required."),
  note: yup.string(),
  jar: yup
    .string()
    .required("You must put your expense in one of the jars."),
});

const AddBudget = () => {
  const [modalVisible, setModalVisible] = useState(-1);
  const [budgetValue, setBudgetValue] = useState(null);
  const {
    control, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  const handleCloseModal = () => {
    setModalVisible(-1);
  };
  return (
    <View style={[
      alignments.flex,
      appBackgroundColorPrimary,
      mediumHorizontalPadding]}
    >
      <PopupModal
        modalVisible={modalVisible > -1}
        onPress={handleCloseModal}
        item={mockJars[modalVisible]}
      />
      <StatusBar barStyle="light-content" />
      <View style={[smallVerticalMargin, fullWidth]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={labelText}>Add expense</Text>
              <BasicTextInput
                error={errors?.expense}
                onBlur={onBlur}
                onChangeText={((val) => {
                  setBudgetValue(val);
                  onChange();
                })}
                value={value}
                keyboardType="numeric"
              />
            </>
          )}
          name="budget"
          defaultValue=""
        />
        {errors.expense
              && <Text style={errorText}>{errors?.expense?.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <Text style={labelText}>Jars</Text>
              {Object.values(defaultJarValues).map((item) => {
                console.log({ item });
                return (
                  <JarListItem
                    selected={value === item?.code}
                    onPress={() => onChange(item?.code)}
                    item={item}
                    key={item?.id}
                    setModalVisible={(id) => setModalVisible(id)}
                    availableAmount={
                          formatNumber(budgetValue
                            * item?.progress)
                        }
                  />
                );
              })}
            </>
          )}
          name="jar"
          defaultValue=""
        />
        {<errors className="jar" />
              && <Text style={errorText}>{errors?.jar?.message}</Text>}
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

export default AddBudget;
