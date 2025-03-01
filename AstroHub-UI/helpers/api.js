const API_BASE_URL = "http://192.168.0.108:8000";

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/user/register/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.detail || "Registration failed");
        }
      
        return data;

    }
    catch(error) {
        throw error.response ? error.response.data : error;
    }
}
