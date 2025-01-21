'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

type GTagConfigParams = {
    page_path?: string;
    page_title?: string;
    send_page_view?: boolean;
};

type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (
            command: 'config' | 'event' | 'js',
            targetId: string | Date,
            configOrEventParams?: GTagConfigParams | object
        ) => void;
    }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

function Analytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname && GA_TRACKING_ID && typeof window !== 'undefined') {
            const url = pathname + searchParams.toString();
            window.gtag('config', GA_TRACKING_ID, {
                page_path: url,
                anonymize_ip: true,
                allow_display_features: false
            });
        }
    }, [pathname, searchParams]);

    return null;
}

export default function GoogleAnalytics() {
    try {
        if (!GA_TRACKING_ID) {
            console.warn("Google Analytics tracking ID is missing.");
            return null;
        }
    } catch (error) {
        console.error("Google Analytics initialisation error:", error);
        return null;
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        anonymize_ip: true,
                        allow_display_features: false
                    });
                `}
            </Script>
            <Suspense fallback={null}>
                <Analytics />
            </Suspense>
        </>
    );
}

export type { GTagEvent, GTagConfigParams };