import { generateValuesFromStringArray } from "@graphixcollab/utils/generateValuesFromStringArray";

export const materials = generateValuesFromStringArray(
    "T-shirt",
    "Hoodie",
    "Sash",
    "Poster",
    "Sticker",
);

export const deliveryMethods = [
    {
        value: "pickup",
        label: "Pick-Up 📍",
        meta: "Pick up your order at our store",
    },
    {
        value: "ship",
        label: "Ship 📦",
        meta: "We'll ship it to ya!",
    },
];

export const services = generateValuesFromStringArray("Embroidery", "Print");

export const serviceContent = generateValuesFromStringArray(
    "🌅 Image",
    "👤 Name",
    "🅰 Initials",
    "💬 Quote",
);
