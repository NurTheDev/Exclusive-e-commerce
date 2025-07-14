import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Input from "../../../../comonComponent/Input.jsx";
import Button from "../../../../comonComponent/Button.jsx";
import { useAuth } from "../../../../hooks/useAuth.js";
import { setNewPassword, setNewEmail, updateProfileInfo } from "../../../../utils/updateUserInfo.js";

const EditProfile = ({user}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Parse user data
    const displayName = user?.displayName || "";
    const [firstName, lastName] = displayName.split(" ");

    // Form setup with default values
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm({
        defaultValues: {
            firstName: firstName || "",
            lastName: lastName || "",
            email: user?.email || "",
            address: user?.address || "",
            currentPassword: "",
            password: "",
            confirmPassword: ""
        }
    });

    // Watch password fields for validation
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    // Handle password update
    const handlePasswordUpdate = async (currentPassword, newPassword) => {
        try {
            await setNewPassword(currentPassword, newPassword);
            return { success: true, message: "Password updated successfully" };
        } catch (error) {
            return { success: false, message: error.message || "Failed to update password" };
        }
    };

    // Handle email update
    const handleEmailUpdate = async (currentPassword, newEmail) => {
        try {
            await setNewEmail(currentPassword, newEmail);
            return { success: true, message: "Email updated successfully" };
        } catch (error) {
            return { success: false, message: error.message || "Failed to update email" };
        }
    };

    // Handle profile update
    const handleProfileUpdate = async (firstName, lastName, address) => {
        try {
            const displayName = `${firstName} ${lastName}`;
            await updateProfileInfo(displayName, address);
            return { success: true, message: "Profile updated successfully" };
        } catch (error) {
            return { success: false, message: error.message || "Failed to update profile" };
        }
    };

    // Form submission handler
    const onSubmit = async (formData) => {
        setIsLoading(true);
        setMessage({ type: '', text: '' });

        const {
            firstName,
            lastName,
            email,
            address,
            currentPassword,
            password,
            confirmPassword
        } = formData;

        const updates = [];
        let hasErrors = false;

        try {
            // Validate password confirmation
            if (password && confirmPassword) {
                if (password !== confirmPassword) {
                    setMessage({ type: 'error', text: 'Passwords do not match' });
                    setIsLoading(false);
                    return;
                }

                if (!currentPassword) {
                    setMessage({ type: 'error', text: 'Current password is required to change password' });
                    setIsLoading(false);
                    return;
                }

                const passwordResult = await handlePasswordUpdate(currentPassword, password);
                updates.push(passwordResult);
                if (!passwordResult.success) hasErrors = true;
            }

            // Update email if changed
            if (email && email !== user?.email) {
                if (!currentPassword) {
                    setMessage({ type: 'error', text: 'Current password is required to change email' });
                    setIsLoading(false);
                    return;
                }

                const emailResult = await handleEmailUpdate(currentPassword, email);
                updates.push(emailResult);
                if (!emailResult.success) hasErrors = true;
            }

            // Update profile information
            const currentFirstName = user?.displayName?.split(" ")[0] || "";
            const currentLastName = user?.displayName?.split(" ")[1] || "";
            const currentAddress = user?.address || "";

            if (firstName !== currentFirstName ||
                lastName !== currentLastName ||
                address !== currentAddress) {

                const profileResult = await handleProfileUpdate(firstName, lastName, address);
                updates.push(profileResult);
                if (!profileResult.success) hasErrors = true;
            }

            // Handle results
            if (updates.length === 0) {
                setMessage({ type: 'info', text: 'No changes detected' });
            } else if (hasErrors) {
                const failedUpdate = updates.find(u => !u.success);
                setMessage({ type: 'error', text: failedUpdate.message });
            } else {
                setMessage({ type: 'success', text: 'Profile updated successfully!' });
                // Reset password fields
                reset({
                    ...formData,
                    currentPassword: "",
                    password: "",
                    confirmPassword: ""
                });
            }

        } catch (error) {
            console.error("Update process failed:", error);
            setMessage({ type: 'error', text: 'An unexpected error occurred' });
        } finally {
            setIsLoading(false);
        }
    };

    // Handle form reset
    const handleReset = () => {
        reset();
        setMessage({ type: '', text: '' });
    };

    // Clear message after 5 seconds
    useEffect(() => {
        if (message.text) {
            const timer = setTimeout(() => {
                setMessage({ type: '', text: '' });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="px-2 sm:px-4 md:px-8 max-w-2xl mx-auto">
            <h3 className="small-heading-semi-bold text-secondary2 mb-4">
                Edit Your Profile
            </h3>

            {/* Message Display */}
            {message.text && (
                <div className={`mt-4 mb-4 p-3 rounded border text-center ${
                    message.type === 'error' ? 'bg-red-100 border-red-300 text-red-700' :
                        message.type === 'success' ? 'bg-green-100 border-green-300 text-green-700' :
                            'bg-blue-100 border-blue-300 text-blue-700'
                }`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="mb-2">
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="First Name"
                            required={true}
                            register={register}
                            name="firstName"
                            className="w-full"
                        />
                        {errors.firstName && (
                            <span className="text-red-500 text-sm">First name is required</span>
                        )}
                    </div>

                    <div className="mb-2">
                        <Input
                            label="Last Name"
                            type="text"
                            placeholder="Last Name"
                            required={true}
                            register={register}
                            name="lastName"
                            className="w-full"
                        />
                        {errors.lastName && (
                            <span className="text-red-500 text-sm">Last name is required</span>
                        )}
                    </div>

                    <div className="mb-2">
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Email"
                            required={true}
                            register={register}
                            name="email"
                            className="w-full"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">Valid email is required</span>
                        )}
                    </div>

                    <div className="mb-2">
                        <Input
                            label="Address"
                            type="text"
                            placeholder="Address"
                            required={true}
                            register={register}
                            name="address"
                            className="w-full"
                        />
                        {errors.address && (
                            <span className="text-red-500 text-sm">Address is required</span>
                        )}
                    </div>
                </div>

                {/* Password Section */}
                <div className="mt-6">
                    <Input
                        type="password"
                        placeholder="Current Password"
                        register={register}
                        name="currentPassword"
                        label="Change Password"
                        className="w-full mb-3"
                    />

                    <Input
                        type="password"
                        placeholder="New Password"
                        register={register}
                        name="password"
                        className="w-full mb-3"
                    />

                    <Input
                        type="password"
                        placeholder="Confirm New Password"
                        register={register}
                        name="confirmPassword"
                        className="w-full mb-3"
                    />

                    {password && confirmPassword && password !== confirmPassword && (
                        <span className="text-red-500 text-sm">Passwords do not match</span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-end gap-4">
                    <Button
                        type="submit"
                        className="bg-secondary2 text-white w-full sm:w-auto"
                        btnText={isLoading ? "Saving..." : "Save Changes"}
                        disabled={isLoading}
                    />
                    <Button
                        type="button"
                        className="w-full sm:w-auto"
                        btnText="Cancel"
                        onClick={handleReset}
                    />
                </div>
            </form>
        </div>
    );
};

export default React.memo(EditProfile);
