import { z } from 'zod'

export const pointSchema = z.object({
  id: z.number().optional(),
  latitude: z
    .string({
      required_error: 'Latitude is required',
    })
    .refine((value) => value.trim() !== '', {
      message: 'Latitude cannot be empty',
    }),
  longitude: z
    .string({
      required_error: 'Longitude is required',
    })
    .refine((value) => value.trim() !== '', {
      message: 'Longitude cannot be empty',
    }),
  title: z
    .string({
      required_error: 'Title is required',
    })
    .refine((value) => value.trim() !== '', {
      message: 'Title cannot be empty',
    }),
  description: z
    .string({
      required_error: 'Description is required',
    })
    .refine((value) => value.trim() !== '', {
      message: 'Description cannot be empty',
    }),
  image: z
    .string({
      required_error: 'Image is required',
    })
    .refine((value) => value.trim() !== '', {
      message: 'Image cannot be empty',
    }),
})

export type PointType = z.infer<typeof pointSchema>
