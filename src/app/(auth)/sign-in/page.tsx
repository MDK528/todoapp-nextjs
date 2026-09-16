import Image from "next/image"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldSet } from "@/components/ui/field"
import { GithubSignInForm } from "@/features/auth/components/github-signin-form"

export const metadata: Metadata = {
    title: "Sign in",
    description: "Sign into loop"
}

type SigninPageProps = {
    searchParams: Promise<{ callbackUrl?: string }>
}

export default async function SigninPage({ searchParams }: SigninPageProps) {
    const { callbackUrl } = await searchParams

    return (
        <Card className="border-border/80 bg-muted/90 shadow-sm">
            <CardHeader className="items-center text-center">
                <div className="mb-6 flex justify-center pt-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-mono text-xs">
                        ✓
                    </span>
                </div>
                <CardTitle className="text-base">Welcome back</CardTitle>
                <CardDescription>
                    Sign in with GitHub to take notes.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <FieldSet>
                    <FieldGroup>
                        <Field>
                            <GithubSignInForm callbackUrl={callbackUrl} />
                            <FieldDescription className="text-center text-[12px]">
                                We only request the permissions needed to identify your
                                account. You can revoke access anytime from GitHub settings.
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </CardContent>
        </Card>
    )
}