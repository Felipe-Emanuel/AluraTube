import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://evcnothedzfqefyounys.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y25vdGhlZHpmcWVmeW91bnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODM2MDUsImV4cCI6MTk4Mzg1OTYwNX0.r6hSrhUKKyDOy3-NbHz4KCaUoDuiLTkb6g6CB8O_xqI";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export const videoService = () => {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
    // getAllVideos() {
    //     return supabase.from("favorite").select("*");
    //   },
  };
};
