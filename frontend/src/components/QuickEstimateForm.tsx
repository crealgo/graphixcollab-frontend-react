import { ArrowForward, CheckCircleOutline } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { type FC } from "react";
import { ActionStack } from "./ActionStack";
import { Button } from "./Button";
import { Mark } from "./Mark";
import { useForm } from "./useForm";
import { FormHeader } from "./FormHeader";
import { renderFormAlert } from "@graphixcollab/utils/renderFormAlert";
import { getFormAction } from "@graphixcollab/utils/getFormAction";
import { FormSectionTitle } from "./FormSectionTitle";
import {
    deliveryMethods,
    materials,
    services,
} from "./__data__/serviceOptions";

// initiat google client

export const QuickEstimateForm: FC = () => {
    const formState = useForm();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();
        // alert("Form submitted! This is a placeholder action.");
    };

    return (
        <form
            name="quick-estimate-form"
            noValidate
            method="post"
            action={getFormAction("send-message/estimate-request")}
            encType="multipart/form-data"
            id="estimator-form"
            onSubmit={handleSubmit}
        >
            <FormHeader
                title={
                    <>
                        {"Get a quick "}
                        <Mark text color="magenta">
                            {"estimate"}
                        </Mark>
                        !
                    </>
                }
                instructions="Fill out the form below to get your quick estimate, and a step closer to getting your project started!"
            />
            <FormSectionTitle title="👋 Your Information" />
            <label htmlFor="name">
                {"Full Name"}
                <input
                    required
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Snow"
                />
            </label>
            <label htmlFor="email">
                {"Email"}
                <input
                    required
                    id="email"
                    type="text"
                    name="email"
                    placeholder="johnsnow@gmail.com"
                />
            </label>
            <FormSectionTitle title="⚙️ Service Request" />
            <label htmlFor="service">
                {"Service Type"}
                <select required id="service" name="service">
                    {services.map((service) => (
                        <option key={service.value} value={service.value}>
                            {service.label}
                        </option>
                    ))}
                </select>
            </label>
            <label htmlFor="material">
                {"Material Type"}
                <select required id="material" name="material">
                    {materials.map((material) => (
                        <option key={material.value} value={material.value}>
                            {material.label}
                        </option>
                    ))}
                </select>
            </label>
            <label htmlFor="quantity">
                {"Quantity"}
                <input
                    required
                    id="quantity"
                    type="number"
                    name="quantity"
                    defaultValue={10}
                    min={10}
                    max={9999}
                />
            </label>
            <label htmlFor="deadline">
                {"Deadline"}
                <input
                    required
                    id="deadline"
                    type="date"
                    name="deadline"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    aria-describedby="deadline-helper"
                />
                <small id="deadline-helper">
                    {"By default, we will assume 1 month from now."}
                </small>
            </label>
            <fieldset>
                <legend>{"Delivery Method"}</legend>
                {deliveryMethods.map((method) => (
                    <label
                        key={method.value}
                        htmlFor={`delivery-${method.value}`}
                    >
                        <input
                            required
                            type="radio"
                            id={`delivery-${method.value}`}
                            name="delivery"
                            value={method.value}
                        />
                        {method.label}
                    </label>
                ))}
            </fieldset>
            <FormSectionTitle title="📝 Additional Information" />
            <label htmlFor="artwork">
                {"Artwork File(s)"}
                <input
                    id="artwork"
                    type="file"
                    name="artwork"
                    multiple
                    accept=".gif,.jpeg,.jpg,.png,.pdf,.svg,.webp"
                />
                <small>
                    {
                        "Although this step is optional, uploading your artwork helps us come up with a more accurate estimate."
                    }
                </small>
            </label>
            <label htmlFor="terms">
                <input
                    required
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value="terms"
                />
                <span>
                    {"I agree to the "}
                    <a href="/terms/terms-and-conditions">
                        {"Terms and Conditions"}
                    </a>
                    {" and the "}
                    <a href="/terms/privacy-policy">{"Privacy Policy"}</a>
                    {"."}
                </span>
            </label>
            <input type="hidden" name="formType" value="estimate-request" />
            <input type="hidden" name="formVersion" value="v1" />
            <input type="hidden" name="formId" value="estimator-form" />
            <input type="hidden" name="formName" value="Estimator Form" />
            <input type="hidden" name="formSource" value="Estimator Block" />

            {formState.isSubmitted && renderFormAlert(formState.isSuccessful)}
            <ActionStack>
                <Button
                    color="secondary"
                    endIcon={
                        formState.isSubmitting ? (
                            <CircularProgress
                                size="inherit"
                                thickness={6}
                                sx={{ color: "white" }}
                            />
                        ) : (
                            <CheckCircleOutline />
                        )
                    }
                    type="submit"
                >
                    {formState.isSubmitting ? "Sending..." : "Get Estimate"}
                </Button>
                <Button
                    color="text"
                    href="mailto:graphixcollab@gmail.com"
                    endIcon={<ArrowForward />}
                >
                    Not sure? Contact us
                </Button>
            </ActionStack>
        </form>
    );
};
