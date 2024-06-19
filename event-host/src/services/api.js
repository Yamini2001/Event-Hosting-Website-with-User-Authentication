const BASE_URL = "https://example.com/users"; // Replace with your actual base URL

export const login = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
