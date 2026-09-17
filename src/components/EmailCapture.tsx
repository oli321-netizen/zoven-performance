"use client";

import { FormEvent, useId, useState } from "react";

export function EmailCapture() {
  const emailId = useId();
  const statusId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!valid) {
      setError("Enter a valid email address.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        id={statusId}
        role="status"
        aria-live="polite"
        className="border border-line px-5 py-4 text-sm text-foreground"
      >
        You&apos;re on the list. We&apos;ll write when ZOVEN is available in the
        UK.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-md flex-col gap-3"
      noValidate
    >
      <label htmlFor={emailId} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError("");
          }}
          placeholder="Email address"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? statusId : undefined}
          className="min-h-12 flex-1 border border-line bg-white px-4 text-sm text-foreground outline-none placeholder:text-neutral-400 focus-visible:border-foreground"
        />
        <button
          type="submit"
          className="min-h-12 bg-foreground px-6 text-sm font-medium tracking-wide text-background transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          Coming soon
        </button>
      </div>
      <p className="text-xs leading-5 text-muted">
        Frontend list only for now. No account is created. Contains caffeine.
      </p>
      {error ? (
        <p id={statusId} role="alert" className="text-sm text-foreground">
          {error}
        </p>
      ) : null}
    </form>
  );
}
