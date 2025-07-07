"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  try {
    const parsedData = contactFormSchema.parse(data);

    // In a real application, you would integrate with an email service like Resend or Formspree here.
    // For this example, we'll just log the data to the console.
    console.log("New contact form submission:", parsedData);

    // Simulate a successful submission
    return { success: true, message: "Form submitted successfully." };
  } catch (error) {
    console.error("Form submission error:", error);
    // In case of Zod validation error or other issues
    return { success: false, message: "Failed to submit form." };
  }
}
