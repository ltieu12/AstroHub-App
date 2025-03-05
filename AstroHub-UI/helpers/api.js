const API_BASE_URL = "http://192.168.2.25:8000";

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

export const loginUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/user/login/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.detail || "Login failed");
        }
      
        return data;

    }
    catch(error) {
        throw error.response ? error.response.data : error;
    }
}
