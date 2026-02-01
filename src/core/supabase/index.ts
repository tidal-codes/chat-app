import { createClient } from "@supabase/supabase-js";

const SUPABSE_URL = "https://spkzzzuxyigqwtfyyjny.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ntvgxi-g5HsWmSQ3-7DGZg_A8gzjwmE";

const supabase = createClient(SUPABSE_URL, SUPABASE_ANON_KEY);

export default supabase;