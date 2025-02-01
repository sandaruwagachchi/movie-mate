package com.hellonibm.loginbackend.response;

public class LoginResponse {

    private String message;
    private Boolean status;

    // 🔹 Default Constructor
    public LoginResponse() {
    }

    // 🔹 Corrected Constructor
    public LoginResponse(String message, boolean status) {
        this.message = message;
        this.status = status;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "message='" + message + '\'' +
                ", status=" + status +
                '}';
    }
}
