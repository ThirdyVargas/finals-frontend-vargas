import "./libraryForm.css";
import React, { useState } from "react";

const LibraryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        studentNumber: "",
        month: "",
        day: "",
        year: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if studentNumber is empty
        if (!formData.studentNumber) {
            alert("Student Number is required");
            return;
        }

        console.log(formData);

        // Clear form data
        setFormData({
            name: "",
            studentNumber: "",
            month: "",
            day: "",
            year: "",
        });
    };

    const handleButtonClick = () => {
        if (!formData){
            alert("Need to Sign in first!");
        };
    };

    return (
        <div className="form-box">
            <div className="form-card">
                <h1>PUPBC LIBRARY</h1>
                <p style={{ fontStyle: "italic" }}>Nothing is pleasanter than exploring a library</p>
                <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Student Number */}
                    <div className="form-field">
                        <label htmlFor="studentNumber">Student Number</label>
                        <input
                            type="text"
                            id="studentNumber"
                            name="studentNumber" // Fix the name attribute here
                            placeholder="Enter your Student Number"
                            value={formData.studentNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Month */}
                    <div className="form-field">
                        <label htmlFor="month">Month</label>
                        <select
                            id="month"
                            name="month"
                            value={formData.month}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Birth Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>

                    {/* Day */}
                    <div className="form-field">
                        <label htmlFor="day">Day</label>
                        <select
                            id="day"
                            name="day"
                            value={formData.day}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Birth Day</option>
                            {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Year */}
                    <div className="form-field">
                        <label htmlFor="year">Year</label>
                        <select
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Birth Year</option>
                            {Array.from({ length: 100 }, (_, i) => (
                                <option key={i + 1920} value={i + 1920}>
                                    {i + 1920}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="Enter-btn"
                        onClick={handleButtonClick} // Attach the function to the button
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LibraryForm;