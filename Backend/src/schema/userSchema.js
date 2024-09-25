import { Schema } from "mongoose";

export let userSchema = Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "First Name field is required"],
    minLength: [1, "First Name must be at least 4 character long"],
    maxLength: [20, "First Name must be at most 20 character"],
    validate: (value) => {
      if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
        throw new Error("Only alphabet and space is allowed.");
      }
    },
  },

  lastName: {
    type: String,
    trim: true,
    required: [true, "Last Name field is required"],
    minLength: [1, "Last Name must be at least 4 character long"],
    maxLength: [20, "Last Name must be at most 20 character"],

    validate: (value) => {
      if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
        throw new Error("Only alphabet and space is allowed.");
      }
    },
  },
  dob: {
    type: Date,
  },

  password: {
    type: String,
    validate: {
      validator: function (value) {
        return /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(
          value
        );
      },
      message:
        "Password must contain at least 8 characters, one uppercase letter, one number, and one special character.",
    },
  },

  email: {
    type: String,
    unique: true,
    validate: (value) => {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        throw new Error("email is wrong.");
      }
    },
  },
});
