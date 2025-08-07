import { toast } from "react-toastify";

const URL = "http://localhost:3000/api/auth/";

export async function createUser(user) {
  try {
    const response = await fetch(`${URL}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });

    if (!response.ok) {
      const data = await response.json();

      if (data.message == "User already exits") {
        toast.error("User already exits!");
      } else {
        toast.error("Error on sign up!");
      }
      return data;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function sendEmailVerificationCode(email) {
  try {
    const response = await fetch(`${URL}send-verification-code`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function verifyEmail(email, code) {
  try {
    const response = await fetch(`${URL}verify-verification-code`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        encodedEmail: email,
        providedCode: code,
      }),
    });

    if (!response.ok) {
      const data = await response.json();

      if (data.message == "User does not exists") {
        toast.error("User does not exists");
      } else if (data.message == "User already verified") {
        toast.error("User already verified");
      } else {
        toast.error("Error on email verification!");
      }
      return data;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function signIn(user) {
  try {
    const response = await fetch(`${URL}signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });

    if (!response.ok) {
      const data = await response.json();

      if (data.message == "User does not exists") {
        toast.error("User does not exists");
      } else if (data.message == "Invalid credentials") {
        toast.error("Invalid credentials");
      } else {
        toast.error("Error on sign in!");
      }

      return data;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
