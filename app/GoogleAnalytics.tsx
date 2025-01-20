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

const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

function Analytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname && GA_TRACKING_ID) {
            const url = pathname + searchParams.toString();
            window.gtag('config', GA_TRACKING_ID, {
                page_path: url,
            });
        }
    }, [pathname, searchParams]);

    return null;
}

export default function GoogleAnalytics() {
    if (!GA_TRACKING_ID) return null;

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
                }}
            />
            <Suspense fallback={null}>
                <Analytics />
            </Suspense>
        </>
    );
}

export type { GTagEvent, GTagConfigParams };