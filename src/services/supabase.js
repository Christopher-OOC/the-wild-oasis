import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pidazupzptjfnoqjajop.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZGF6dXB6cHRqZm5vcWpham9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NjcwNDMsImV4cCI6MjA3MjQ0MzA0M30.evWiG2ugBXhrxy7u7TD9uKkjEOIrLOroFL4GodtjVO4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
