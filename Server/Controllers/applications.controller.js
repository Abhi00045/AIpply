import supabase from "../lib/db.js";

// Helper to get authenticated user
const getAuthenticatedUser = async (req) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error || !user) return null;

  return user;
};


// 1️⃣ ADD APPLICATION
export const addNewRole = async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const { company, position, salary, status } = req.body;

    const { data, error } = await supabase
      .from("application_info")
      .insert({
        user_id: user.id,
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
    const user = await getAuthenticatedUser(req);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const { data, error } = await supabase
      .from("application_info")
      .select("*")
      .eq("user_id", user.id)
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
    const user = await getAuthenticatedUser(req);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const { id } = req.params;

    const { data, error } = await supabase
      .from("application_info")
      .update(req.body)
      .eq("id", id)
      .eq("user_id", user.id)
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
    const user = await getAuthenticatedUser(req);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const { id } = req.params;

    const { error } = await supabase
      .from("application_info")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);

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