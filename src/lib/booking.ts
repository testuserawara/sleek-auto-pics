import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const opt = (max: number) =>
  z.string().trim().max(max).optional().transform((v) => v || null);

export const bookingSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: opt(40),
  car: z.string().trim().min(1, "Please enter your car").max(150),
  shoot_type: z.string().trim().min(1).max(50),
  preferred_timing: opt(200),
  location: opt(200),
  message: opt(2000),
});

export async function submitBooking(input: Record<string, string>) {
  const parsed = bookingSchema.safeParse(input);
  if (!parsed.success) throw new Error(parsed.error.issues[0]?.message ?? "Invalid form");
  const { error } = await supabase.from("booking_requests").insert(parsed.data);
  if (error) throw new Error("Could not send your request. Please try again.");
}
