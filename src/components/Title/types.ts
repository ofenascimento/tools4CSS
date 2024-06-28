import React from "react";

export interface iTitle {
    title: string;
    info?: string | React.ReactElement;
    customTitleClassname?: string;
    customInfoClassname?: string;
}