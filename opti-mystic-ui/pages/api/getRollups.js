// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "@/util/supabase"

export default async function handler(req, res) {
    let { data: rollups, error }=await supabase
        .from('rollups')
        .select("*")
    res.status(200).json(rollups)
}