import { getSafeCallbackPath, SIGN_IN_PATH } from "./index";
import { NextRequest, NextResponse } from "next/server";

function redirectToSignIn(request: NextRequest, pathname: string) {
    const signInUrl = new URL(SIGN_IN_PATH, request.url);

    signInUrl.searchParams.set(
        "callbackUrl",
        `${pathname}${request.nextUrl.search}`,
    );
    return NextResponse.redirect(signInUrl);
}

function getPostAuthRedirectPath(request: NextRequest): string {
    const callbackUrl = request.nextUrl.searchParams.get("callbackUrl");
    return getSafeCallbackPath(callbackUrl);
}


export async function handleAuthProxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname === "/") {
        return NextResponse.next();
    }

    const response = await fetch(
        new URL(
            "/api/auth/get-session",
            request.url,
        ),
        {
            headers: {
                cookie:
                    request.headers.get("cookie") ?? "",
            },
        },
    );

    const session = await response.json();

    if (pathname === SIGN_IN_PATH) {
        if (session?.user) {
            const redirectPath =
                getPostAuthRedirectPath(request);

            return NextResponse.redirect(
                new URL(
                    redirectPath,
                    request.url,
                ),
            );
        }

        return NextResponse.next();
    }

    if (!session?.user) {
        return redirectToSignIn(
            request,
            pathname,
        );
    }

    return NextResponse.next();
}