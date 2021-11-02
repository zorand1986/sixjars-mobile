import React, { useState } from "react";
import {
  StatusBar, View, Text,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PopupModal from "../components/PopupModal";
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
  mediumVerticalMargin,
  smallHorizontalPadding,
  colors,
} from "../styles/commonStyles";
import BasicTextInput from "../components/BasicTextInput";
import Button from "../components/Button";
import JarListItem from "../components/JarListItem";
import { mockJars } from "../data/mockData";

const schema = yup.object({
  expense: yup
    .number("This field accepts only numeric inputs.")
    .required("This field is required."),
  note: yup.string(),
  jar: yup
    .string()
    .required("You must put your expense in one of the jars."),
});

const AddExpense = () => {
  const [modalVisible, setModalVisible] = useState(-1);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  // eslint-disable-next-line no-console
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
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
              />
            </>
          )}
          name="expense"
          defaultValue=""
        />
        {errors.expense
              && <Text style={errorText}>{errors?.expense?.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <Text style={labelText}>SelectJar</Text>
              {mockJars.map((item) => (
                <JarListItem
                  selected={value === item?.code}
                  touchable
                  onPress={() => onChange(item?.code)}
                  item={item}
                  key={item?.id}
                  setModalVisible={(id) => setModalVisible(id)}
                />
              ))}
            </>
          )}
          name="jar"
          defaultValue=""
        />
        {<errors className="jar" />
              && <Text style={errorText}>{errors?.jar?.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={labelText}>Note</Text>
              <BasicTextInput
                error={errors?.note}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
              />
            </>
          )}
          name="note"
          defaultValue=""
        />
        {errors.note
              && <Text style={errorText}>{errors?.note?.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={[
              alignments.row,
              alignments.alignCenter,
              mediumVerticalMargin,
              { height: 51 }]}
            >
              <CheckBox
                onValueChange={onChange}
                value={value}
                onAnimationType="one-stroke"
                offAnimationType="one-stroke"
                onTintColor={colors.secondary}
                onCheckColor={colors.secondary}
              />
              <Text style={[
                labelText,
                alignments.selfAlignCenter,
                smallHorizontalPadding,
              ]}
              >
                Mark as unnecessary expense

              </Text>
            </View>
          )}
          name="unnecessary"
          defaultValue={false}
        />
        {errors.note
              && <Text style={errorText}>{errors?.note?.message}</Text>}
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

export default AddExpense;
