import React from "react";
import {
  View, Text, StatusBar, Pressable,
} from "react-native";
import { gql, useMutation } from "@apollo/client";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BasicTextInput from "../components/BasicTextInput";
import Button from "../components/Button";
import {
  appBackgroundColorPrimary,
  flexCenterBasis,
  mediumHorizontalPadding,
  primaryBackground,
  secondaryBackground,
  mediumHorizontalMargin,
  largeVerticalMargin,
  basicText,
  basicHeadline,
  smallVerticalMargin,
  smallHorizontalMargin,
  alignments,
  smallMarginBottom,
  largeMarginBottom,
  textInputContainer,
  xlMarginTop,
  labelText,
  errorText,
} from "../styles/commonStyles";
import Facebook from "../../assets/Facebook.svg";
import Google from "../../assets/Google.svg";
import Divider from "../components/Divider";
import { AuthClient } from "../services/client";
import { LOGIN } from "../graphql/schema";

const schema = yup.object({
  email: yup
    .string()
    .min(5, "Username must be atleast 5 character long.")
    .required("This field is required."),
  password: yup
    .string()
    .min(5, "Password must be atleast 5 character long.")
    .required("This field is required."),
});

const LoginPage = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const handleLogin = async ({ email, password }) => {
    await login({ variables: { email, password } });

    if (error) {
      console.log("ERROR", { error });
    }
    if (loading) {
      console.log("LOADING......");
    }
    if (data) {
      console.log("DATA", { data });
    }
    navigation?.navigate("Home");
    // Insert into asyncStorage
    console.log({ data });
  };

  const handleForgotPassword = () => {
    navigation?.navigate("ForgotPassword");
  };

  return (
    <View
      style={[
        flexCenterBasis,
        appBackgroundColorPrimary,
        mediumHorizontalPadding]}
    >
      <StatusBar barStyle="light-content" />
      <Text style={basicHeadline}>Login</Text>
      <View style={[textInputContainer, xlMarginTop]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={labelText}>Email</Text>
              <BasicTextInput
                autoCapitalize="none"
                error={errors.email}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && <Text style={errorText}>{errors?.email?.message}</Text>}
      </View>
      <View style={textInputContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={labelText}>Password</Text>
              <BasicTextInput
                autoCapitalize="none"
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
      <Pressable
        style={[
          alignments.row,
          alignments.selfAlignEnd,
          largeMarginBottom,
        ]}
        onPress={handleForgotPassword}
      >
        <Text style={basicText}>ForgotPassword?</Text>
      </Pressable>
      <View style={alignments.row}>
        <Button
          color={secondaryBackground}
          style={[smallVerticalMargin, smallHorizontalMargin]}
          onPress={handleSubmit(handleLogin)}
          title="Login"
        />
        <Button
          color={primaryBackground}
          style={[smallVerticalMargin, smallHorizontalMargin]}
          onPress={handleLogin}
          title="Sign up"
        />
      </View>
      <View style={[alignments.row, largeVerticalMargin]}>
        <Divider />
        <Text
          style={[basicText, mediumHorizontalMargin]}
        >
          Or continue with
        </Text>
        <Divider />
      </View>
      <View style={alignments.row}>
        <Facebook
          width={35}
          height={35}
          style={{ margin: 10, marginRight: 5 }}
        />
        <Google width={35} height={35} style={{ margin: 10, marginLeft: 5 }} />
      </View>
    </View>
  );
};

export default LoginPage;
