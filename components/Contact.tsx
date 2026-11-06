"use client";

import { FormEvent, useState } from "react";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  LoaderCircle,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your message. Please try again."
        );
      }

      setStatus({
        type: "success",
        message: "Your message was submitted successfully. Thank you!",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { personal, contact } = portfolioData;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">CONTACT</p>

          <h2 className="heading">
            Let's build something{" "}
            <span className="gradient-text">meaningful.</span>
          </h2>

          <p className="section-description">
            Have a project, opportunity, or idea to discuss? Send me a
            message. I would be glad to connect.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="card h-full">
              <Mail className="mb-5 text-teal-400" size={30} />

              <h3 className="text-2xl font-semibold">
                Get in touch
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Whether you are interested in web development,
                engineering, collaboration, or professional
                opportunities, feel free to reach out.
              </p>

              <a
                href={`mailto:${personal.email}`}
                className="mt-8 inline-flex items-center gap-2 font-medium text-teal-400 hover:text-teal-300"
              >
                {personal.email}
                <ArrowUpRight size={17} />
              </a>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-xl border border-white/10 p-3 transition hover:border-teal-400"
                >
                  <Github size={20} />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-xl border border-white/10 p-3 transition hover:border-teal-400"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-teal-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-teal-400"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                maxLength={150}
                value={form.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-teal-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Your message
              </label>

              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-teal-400"
              />
            </div>

            {/* Honeypot field for basic spam protection */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className={
                  status.type === "success"
                    ? "text-sm text-teal-400"
                    : "text-sm text-red-400"
                }
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="animate-spin" size={18} />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send size={18} />
                </>
              )}
            </button>

            <p className="text-xs leading-6 text-gray-500">
              Your message will be sent through the portfolio contact
              service. Email delivery requires the service configuration
              to be completed.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
      }
