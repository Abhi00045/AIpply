import supabase from "../lib/db.js";

// 1️⃣ ADD APPLICATION
export const addNewRole = async (req, res) => {
  try {
    const { company, position, salary, status } = req.body;

    // 🔥 Get logged-in user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const { data, error } = await supabase
      .from("application_info")
      .insert({
        user_id: user.id, // ✅ real user id
        company,
        position,
        salary,
        status,
      })
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({
      success: true,
      data,
    });

  } catch (error) {
    console.error("ADD ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// 2️⃣ GET ALL APPLICATIONS
export const getApplications = async (req, res) => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const { data, error } = await supabase
      .from("application_info")
      .select("*")
      .eq("user_id", user.id) // ✅ only fetch user's records
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    console.error("FETCH ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
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

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    console.error("UPDATE ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
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
      message: "Application deleted",
    });

  } catch (error) {
    console.error("DELETE ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};