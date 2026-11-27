
"use client";

import { useEffect } from "react";

const BACKEND_URLS = [
    "https://vl-job-scraper.onrender.com/",
    "https://vl-lms-backend.onrender.com/",
    "https://api.vartalang.in/",
];

export default function BackendHealthCheck() {
    useEffect(() => {
        const checkBackends = async () => {
            await Promise.allSettled(
                BACKEND_URLS.map(async (url) => {
                    try {
                        const response = await fetch(url, {
                            method: "GET",
                            cache: "no-store",
                        });

                        console.log(
                            `[Backend Check] ${url}: ${response.status}`
                        );
                    } catch (error) {
                        console.error(`[Backend Check Failed] ${url}`, error);
                    }
                })
            );
        };

        checkBackends();
    }, []);

    return null;
}
