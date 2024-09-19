const login = async (email, password) => {
  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response;
  } catch (error) {
    console.error("Error logging in:", error);
    return { ok: false };
  }
}

export { login }
