"use client";

import type React from "react";

import { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function InterviewForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission to Monday.com
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      const form = e.target as HTMLFormElement;
      form.reset();
      closeForm();
    }, 3000);
  };

  const closeForm = () => {
    const interviewForm = document.getElementById("interview-form");
    if (interviewForm) interviewForm.classList.add("hidden");
  };

  return (
    <div
      id="interview-form"
      className="fixed inset-0 z-50 flex items-center justify-center hidden"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        className="w-full max-w-md mx-4 relative rounded-lg border"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          className="glass-button absolute right-2 top-2 h-10 w-10 rounded-md flex items-center justify-center"
          onClick={closeForm}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-6">Schedule Your Interview</h3>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-xl font-medium mb-2">
                Application Submitted!
              </div>
              <p>
                We'll be in touch with you shortly to schedule your interview.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(4px)",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(4px)",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(4px)",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Sales Experience</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  placeholder="Tell us about your sales experience..."
                  style={{
                    minHeight: "100px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(4px)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="glass-button w-full h-10 px-4 py-2 rounded-md font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted regarding
                career opportunities.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
