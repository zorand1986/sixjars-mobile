import React from "react";
import { View, Text, StatusBar } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import BasicTextInput from "../components/BasicTextInput";
import Button from "../components/Button";

import {
    fullWidth, 
    primaryBackground, 
    smallVerticalMargin, 
    smallHorizontalMargin, 
    labelText, 
    appBackgroundColorPrimary, 
    mediumHorizontalPadding, 
    basicText, 
    errorText,
    largeMarginTop,
    xlMarginTop, 
    alignments} from "../styles/commonStyles";

const schema = yup.object({
    email: yup.string().email("The email format is not valid.").required("This field is required."),
  });

const ForgotPassword = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

      const onSubmit = data => console.log(data);

    return (
        <View style={[ alignments.flex, appBackgroundColorPrimary, mediumHorizontalPadding]}>
            <StatusBar barStyle={"light-content"} />
            {/* <Text style={basicHeadline}>Forgot Password</Text> */}
            <Text style={[basicText, xlMarginTop]}>Please enter your email address to reset your password.</Text>
             <View style={[smallVerticalMargin, fullWidth]}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                    <Text style={labelText}>Email</Text>
                    <BasicTextInput 
                        error={errors?.email}
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
            <View style={[alignments.row, alignments.justifyEnd]}>
                <Button 
                color={primaryBackground} 
                style={[smallVerticalMargin, smallHorizontalMargin]} 
                onPress={handleSubmit(onSubmit)} title="Confirm"
                />
            </View>
        </View>
    );
};

export default ForgotPassword;