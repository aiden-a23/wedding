import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

const RsvpSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  attending: z.boolean(),
  guests: z.number().int().nonnegative().optional().default(0),
})

type Rsvp = z.infer<typeof RsvpSchema>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let parsed: Rsvp
  try {
    parsed = RsvpSchema.parse(req.body)
  } catch (err) {
    return res.status(400).json({ error: 'Invalid request', details: (err as any).errors })
  }

  try {
    const { data, error } = await supabase
      .from('rsvps')
      .insert([{ name: parsed.name, email: parsed.email, attending: parsed.attending, guests: parsed.guests }])
      .select()
      .single()

    if (error) {
      throw error
    }

    return res.status(201).json({ success: true, rsvp: data })
  } catch (e) {
    return res.status(500).json({ error: 'Failed to save RSVP' })
  }
}