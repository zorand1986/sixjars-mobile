import React from "react";
import { View, Text, StatusBar } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  appBackgroundColorPrimary,
  mediumHorizontalPadding,
  primaryBackground,
  smallVerticalMargin,
  smallHorizontalMargin,
  errorText,
  labelText,
  largeMarginBottom,
  fullWidth,
  alignments,
  xlMarginTop,
  textInputContainer,
} from "../styles/commonStyles";

import BasicTextInput from "../components/BasicTextInput";
import Button from "../components/Button";

const schema = yup.object({
  name: yup.string().required("This field is required."),
  username: yup
    .string()
    .min(5, "Username must be atleast 5 character long.")
    .required("This field is required."),
  password: yup
    .string()
    .min(5, "Password must be atleast 5 character long.")
    .required("This field is required."),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("This field is required."),
});

const Signup = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log(data);

  return (
    <View
      style={[
        alignments.flex,
        appBackgroundColorPrimary,
        mediumHorizontalPadding]}
    >
      <StatusBar barStyle="light-content" />
      {/* <Text style={basicHeadline}>Signup</Text> */}
      <View style={[textInputContainer, xlMarginTop]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={labelText}>Name</Text>
              <BasicTextInput
                error={errors.name}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="name"
          defaultValue=""
        />
        {errors.name && <Text style={errorText}>{errors?.name?.message}</Text>}
      </View>
      <View style={textInputContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={labelText}>Username</Text>
              <BasicTextInput
                error={errors.username}
                placeholder="Username"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="username"
          defaultValue=""
        />
        {errors.username
        && <Text style={errorText}>{errors?.username?.message}</Text>}
      </View>
      <View style={textInputContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={labelText}>Password</Text>
              <BasicTextInput
                error={errors.password}
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="password"
          defaultValue=""
        />
        {errors.password
         && <Text style={errorText}>{errors?.password?.message}</Text>}
      </View>
      <View style={[largeMarginBottom, fullWidth]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={labelText}>Confirm password</Text>
              <BasicTextInput
                error={errors.confirm}
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="confirm"
          defaultValue=""
        />
        {errors.confirm
        && <Text style={errorText}>{errors?.confirm?.message}</Text>}
      </View>
      <View style={[alignments.row, alignments.justifyEnd]}>
        <Button
          color={primaryBackground}
          style={[smallVerticalMargin, smallHorizontalMargin]}
          onPress={handleSubmit(onSubmit)}
          title="Sign up"
        />
      </View>
    </View>
  );
};

export default Signup;
