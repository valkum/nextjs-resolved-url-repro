import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function Page({ resolvedUrl, reqUrl }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    let router = useRouter();
    let reload = useCallback((x: string) => {
        router.replace(x);
        return null
    }, [router]);
    return (
        <main
        >
            <div style={{ display: "flex", flexDirection: 'column' }}>
                <span>getServerSideProps({"{resolvedUrl}"}) is: {resolvedUrl}</span>
                <span>getServerSideProps({"{req.url}"}) is: {reqUrl}</span>
                <span>useRouter asPath: {router.asPath}</span>
                <span>useRouter pathname: {router.pathname}</span>

                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => reload("/")}>
                    Reload using _next/data</button>

            </div>

        </main >
    );
}

Page.displayName = "Page";

export const getServerSideProps = (async (context) => {
    return {
        props: {
            resolvedUrl: context.resolvedUrl,
            reqUrl: context.req.url
        }
    }
}) satisfies GetServerSideProps<{ resolvedUrl: string, reqUrl: string | undefined }>
