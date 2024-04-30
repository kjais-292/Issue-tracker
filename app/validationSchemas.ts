import { z } from "zod";

export const issueSchema = z.object({
    title: z.string().min(1, "Title is required").max(255), //Issue 2:zod validation not working and hence callout
    description: z.string().min(1, "Description is required")
});
