import supabase from "../lib/db.js"

const TABLE = "job_postings";

const JobPosting = {
  async create(data) {
    const { data: result, error } = await supabase
      .from(TABLE)
      .insert([data])
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  async findAll() {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },
};

export default JobPosting;