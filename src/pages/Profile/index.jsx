import { useState } from "react";
import { User, Mail, Briefcase, Lock } from "lucide-react";
import FormInput from "../../components/FormInput";

export default function ProfilePage() {
  const userInfo = {
    name: "Ahsan Mehar",
    email: "Ahsanmeharj@gmail.com",
    role: "HR Manager",
    department: "Web Develper",
    joinDate: "January 2024",
    phone: "+92 3097230656",
  };

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validatePasswordForm = () => {
    const newErrors = {};

    if (!passwordData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!passwordData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (passwordData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }

    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePasswordForm()) {
      setSuccess("Password has been Changed");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">Profile</h1>
        <p className="text-slate-black mt-2">
          Edit your profile and manage your settings with ease.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="relative z-1 lg:col-span-2 bg-white rounded-lg border border-neutral shadow-sm p-6">
          <h2 className="text-lg font-semibold text-black mb-6">
            Profile Information
          </h2>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-medium">
              {getInitials(userInfo.name)}
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-slate-black">
                {userInfo.name}
              </h3>
              <p className="text-body">{userInfo.role}</p>
              <button className="mt-3 px-4 py-2 border border-neutral rounded-md text-sm font-medium text-slate-black hover:bg-gray-50">
                Change Photo
              </button>
            </div>
          </div>

          <div className="border-t border-neutral pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-body/80 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-body">Full Name</p>
                    <p className="text-slate-black">{userInfo.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-body/80 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-body">
                      Email Address
                    </p>
                    <p className="text-slate-black break-all">
                      {userInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-body/80 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-body">Role</p>
                    <p className="text-slate-black">{userInfo.role}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-body">Department</p>
                  <p className="text-slate-black">{userInfo.department}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-body">Phone Number</p>
                  <p className="text-slate-black">{userInfo.phone}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-body">Join Date</p>
                  <p className="text-slate-black">{userInfo.joinDate}</p>
                </div>
              </div>
            </div>

            <button className="mt-8 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/95 transition-colors">
              Edit Profile
            </button>
          </div>
          <div className="absolute bottom-0 right-0 z-[-1] opacity-30 lg:opacity-100">
            <svg
              width="364"
              height="201"
              viewBox="0 0 364 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                stroke="url(#paint0_linear_25:218)"
              />
              <path
                d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                stroke="url(#paint1_linear_25:218)"
              />
              <path
                d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                stroke="url(#paint2_linear_25:218)"
              />
              <path
                d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                stroke="url(#paint3_linear_25:218)"
              />
              <circle
                opacity="0.8"
                cx="214.505"
                cy="60.5054"
                r="49.7205"
                transform="rotate(-13.421 214.505 60.5054)"
                stroke="url(#paint4_linear_25:218)"
              />
              <circle
                cx="220"
                cy="63"
                r="43"
                fill="url(#paint5_radial_25:218)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_25:218"
                  x1="184.389"
                  y1="69.2405"
                  x2="184.389"
                  y2="212.24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0" />
                  <stop offset="1" stopColor="#4A6CF7" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_25:218"
                  x1="156.389"
                  y1="69.2405"
                  x2="156.389"
                  y2="212.24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0" />
                  <stop offset="1" stopColor="#4A6CF7" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_25:218"
                  x1="125.389"
                  y1="69.2405"
                  x2="125.389"
                  y2="212.24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0" />
                  <stop offset="1" stopColor="#4A6CF7" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_25:218"
                  x1="93.8507"
                  y1="67.2674"
                  x2="89.9278"
                  y2="210.214"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0" />
                  <stop offset="1" stopColor="#4A6CF7" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_25:218"
                  x1="214.505"
                  y1="10.2849"
                  x2="212.684"
                  y2="99.5816"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <radialGradient
                  id="paint5_radial_25:218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(220 63) rotate(90) scale(43)"
                >
                  <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.08" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Change Password */}
          <div className="bg-white rounded-lg border border-neutral shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-black mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5 text-body" />
              Change Password
            </h2>
            <h2 className="text-sm font-medium text-green-500 mb py-3 px-2 rounded-md bg-green-50 text-center">
              {success}
            </h2>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <FormInput
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                error={errors.currentPassword}
                placeholder="Enter current password"
              />

              <FormInput
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                error={errors.newPassword}
                placeholder="Enter new password"
              />

              <FormInput
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                error={errors.confirmPassword}
                placeholder="Confirm new password"
              />

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
              >
                Update Password
              </button>
            </form>
          </div>

          {/* Quick Links*/}

          <div className="bg-white rounded-lg border border-neutral shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-black mb-6">
              Quick Links
            </h2>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-primary/13 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-black">Job Postings</p>
                  <p className="text-sm text-body">
                    View and manage job listings
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-black">Candidates</p>
                  <p className="text-sm text-body">
                    Browse potential candidates
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-black">Reports</p>
                  <p className="text-sm text-body">View hiring analytics</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
