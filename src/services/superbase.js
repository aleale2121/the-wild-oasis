import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yxoncbruyukyjvjnrlxs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4b25jYnJ1eXVreWp2am5ybHhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzMDE3NTcsImV4cCI6MjAzNDg3Nzc1N30.1D33WRYkSclO6tNLBZe7TZbrFEqNf5LENTdT0ap0VEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
