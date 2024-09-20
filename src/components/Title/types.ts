import React from "react";

export interface iTitle {
    title: string | React.ReactNode;
    info?: string | React.ReactElement;
    customTitleClassname?: string;
    customInfoClassname?: string;
}