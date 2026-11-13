// lib/lmsSso.ts
const LMS_LOGIN_URL = "https://learn.vartalang.in/auth/login";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface SsoCodeResponse {
  url: string;
}

export async function goToLms(): Promise<void> {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.assign(LMS_LOGIN_URL);
    return;
  }

  try {
    const response = await fetch(`${API_URL}/sso/code`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      window.location.assign(LMS_LOGIN_URL);
      return;
    }

    if (!response.ok) {
      throw new Error(`SSO request failed with status ${response.status}`);
    }

    const data = (await response.json()) as SsoCodeResponse;
    if (!data.url) {
      throw new Error("SSO response did not include a redirect URL");
    }

    window.location.assign(data.url);
  } catch (error) {
    console.error("Could not open the learning platform:", error);
    window.alert("Couldn't open the learning platform, please try again");
  }
}
