"use client";
import { scan } from "react-scan/all-environments";
import { type JSX, useEffect } from "react";
export function ReactScan(): JSX.Element {
    useEffect(() => {
        if (process.env.NODE_ENV !== "development") {
            return;
        }
        scan({
            // enabled: true,
            // trackUnnecessaryRenders: true,
        });
    }, []);
    return <></>;
}
