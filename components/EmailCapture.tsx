"use client";

import { FormEvent, useId, useState } from "react";

export function EmailCapture() {
  const fieldId = useId();
  const statusId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done" | "invalid">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!valid) {
      setStatus("invalid");
      return;
    }
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p
        id={statusId}
        role="status"
        className="border border-ink px-5 py-4 text-sm text-ink"
      >
        You’re on the list. We’ll write when ZOVEN is available.
      </p>
    );
  }

  return (
    <form
      id="notify"
      onSubmit={onSubmit}
      className="w-full max-w-md"
      noValidate
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <label htmlFor={fieldId} className="sr-only">
          Email address
        </label>
        <input
          id={fieldId}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "invalid") setStatus("idle");
          }}
          placeholder="Email address"
          aria-invalid={status === "invalid"}
          aria-describedby={status === "invalid" ? statusId : undefined}
          className="min-h-12 flex-1 border border-ink bg-white px-4 text-sm text-ink placeholder:text-neutral-400"
        />
        <button
          type="submit"
          className="min-h-12 bg-ink px-5 text-[12px] font-medium uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-85"
        >
          Coming soon
        </button>
      </div>
      {status === "invalid" ? (
        <p id={statusId} role="alert" className="mt-2 text-sm text-mute">
          Enter a valid email address.
        </p>
      ) : (
        <p className="mt-2 text-xs text-mute">
          We’ll only write when ZOVEN is available. No account required.
        </p>
      )}
    </form>
  );
}
