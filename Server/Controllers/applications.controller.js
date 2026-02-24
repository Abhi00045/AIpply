import supabase from "../lib/db.js"

// 1️⃣ ADD APPLICATION
export const addNewRole = async (req, res) => {
  try {
    const { company, position, salary, status } = req.body;

    const { data, error } = await supabase
      .from("application_info")
      .insert({
        company,
        position,
        salary,
        status
      })
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ success: true, data });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add application",
      error: error.message,
    });
  }
};


// 2️⃣ GET ALL APPLICATIONS (auto filtered by RLS)
export const getApplications = async (req, res) => {
  try {

    const { data, error } = await supabase
      .from("application_info")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.status(200).json({ success: true, data });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching data",
      error: error.message
    });
  }
};


// 3️⃣ UPDATE APPLICATION
export const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("application_info")
      .update(req.body)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    res.status(200).json({ success: true, data });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Update failed",
      error: error.message
    });
  }
};


// 4️⃣ DELETE APPLICATION
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("application_info")
      .delete()
      .eq("id", id);

    if (error) throw error;

    res.status(200).json({
      success: true,
      message: "Application deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Delete failed",
      error: error.message
    });
  }
};