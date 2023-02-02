/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Restauraunt } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RestaurauntUpdateFormInputValues = {
    name?: string;
    address?: string;
    image?: string;
    adminSub?: string;
};
export declare type RestaurauntUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    adminSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestaurauntUpdateFormOverridesProps = {
    RestaurauntUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    adminSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RestaurauntUpdateFormProps = React.PropsWithChildren<{
    overrides?: RestaurauntUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    restauraunt?: Restauraunt;
    onSubmit?: (fields: RestaurauntUpdateFormInputValues) => RestaurauntUpdateFormInputValues;
    onSuccess?: (fields: RestaurauntUpdateFormInputValues) => void;
    onError?: (fields: RestaurauntUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RestaurauntUpdateFormInputValues) => RestaurauntUpdateFormInputValues;
    onValidate?: RestaurauntUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RestaurauntUpdateForm(props: RestaurauntUpdateFormProps): React.ReactElement;
