import "./libraryForm.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// InputField Component
const InputField = ({ label, type, name, placeholder, value, onChange, required }) => (
    <div className="form-field">
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
);

// SelectField Component
const SelectField = ({ label, name, value, options, onChange, required }) => (
    <div className="form-field">
        <label htmlFor={name}>{label}</label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
        >
            <option value="">Select {label}</option>
            {options.map((option, idx) => (
                <option key={idx} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

// Main Form Component
const LibraryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        studentNumber: "",
        month: "",
        day: "",
        year: "",
    });

    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate form data
    const validateForm = () => {
        if (!formData.studentNumber) {
            alert("Student Number is required");
            return false;
        }
        return true;
    };

    // Reset form data
    const resetForm = () => {
        setFormData({
            name: "",
            studentNumber: "",
            month: "",
            day: "",
            year: "",
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        console.log(formData);

        // Navigate to the next page after submission
        navigate("/nextPage");

        // Reset form data after submission
        resetForm();
    };

    return (
        <div className="form-box">
            <div className="form-card">
                <h1>PUPBC LIBRARY</h1>
                <p style={{ fontStyle: "italic" }}>Nothing is pleasanter than exploring a library</p>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <InputField
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    {/* Student Number */}
                    <InputField
                        label="Student Number"
                        type="text"
                        name="studentNumber"
                        placeholder="Enter your Student Number"
                        value={formData.studentNumber}
                        onChange={handleChange}
                        required
                    />

                    {/* Month */}
                    <SelectField
                        label="Month"
                        name="month"
                        value={formData.month}
                        onChange={handleChange}
                        required
                        options={[
                            { value: "1", label: "January" },
                            { value: "2", label: "February" },
                            { value: "3", label: "March" },
                            { value: "4", label: "April" },
                            { value: "5", label: "May" },
                            { value: "6", label: "June" },
                            { value: "7", label: "July" },
                            { value: "8", label: "August" },
                            { value: "9", label: "September" },
                            { value: "10", label: "October" },
                            { value: "11", label: "November" },
                            { value: "12", label: "December" },
                        ]}
                    />

                    {/* Day */}
                    <SelectField
                        label="Day"
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                        required
                        options={Array.from({ length: 31 }, (_, i) => ({
                            value: (i + 1).toString(),
                            label: (i + 1).toString(),
                        }))}
                    />

                    {/* Year */}
                    <SelectField
                        label="Year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                        options={Array.from({ length: 100 }, (_, i) => ({
                            value: (i + 1920).toString(),
                            label: (i + 1920).toString(),
                        }))}
                    />

                    <button type="submit" className="Enter-btn">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LibraryForm;
