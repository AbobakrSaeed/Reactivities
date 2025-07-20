import { z } from "zod";

const requiredString = (title) =>
  z
    .string({ required_error: `${title} is required.` })
    .min(1, { message: `${title} is required.` });

 const ActivitySchema = z.object({
  title: requiredString("Title"),
  description: requiredString("Description"),
  date: z.coerce.date({ required_error: "Date is required." }).min(new Date(), {
    message: "Date must be in the future.",
  }),
  category: requiredString("Category"),

  location: z.object({
    venue: requiredString("Venue"),
    city: z.string().optional(),
    latitude: z.coerce.number(),
    longitude: z.coerce.number(),
  }),
});

export default ActivitySchema;
