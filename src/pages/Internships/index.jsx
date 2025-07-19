import { useState } from "react";
import Modal from "../../components/Model";
import { initialInternships } from "../../data/internships";
import { Plus, Briefcase, Calendar, DollarSign, Layers } from "lucide-react";
import FormInput from "../../components/FormInput";
import SelectField from "../../components/SelectFeild";
import SearchBar from "../../components/SearchBar";

const openCloseOptions = [
  {
    value: "Open",
    label: "Open",
  },
  {
    value: "Closed",
    label: "Closed",
  },
];

const Internships = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [internships, setInternships] = useState(initialInternships);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    department: "",
    duration: "",
    stipend: "",
    status: "Open",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
      isValid = false;
    } else if (formData.title.trim().length < 5) {
      newErrors.title = "Title must be at least 5 characters";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters";
      isValid = false;
    }

    if (!formData.department.trim()) {
      newErrors.department = "Department is required";
      isValid = false;
    }

    if (!formData.duration) {
      newErrors.duration = "Duration is required";
      isValid = false;
    } else if (isNaN(formData.duration) || Number(formData.duration) <= 0) {
      newErrors.duration = "Please enter a valid duration";
      isValid = false;
    }

    if (!formData.stipend) {
      newErrors.stipend = "Stipend is required";
      isValid = false;
    } else if (isNaN(formData.stipend) || Number(formData.stipend) <= 0) {
      newErrors.stipend = "Please enter a valid stipend amount";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newInternship = {
      id: internships.length + 1,
      title: formData.title.trim(),
      description: formData.description.trim(),
      department: formData.department.trim(),
      duration: `${formData.duration} weeks`,
      stipend: `$${formData.stipend}`,
      status: formData.status,
      icon: Briefcase,
    };

    setInternships([...internships, newInternship]);

    setFormData({
      title: "",
      description: "",
      department: "",
      duration: "",
      stipend: "",
      status: "Open",
    });
    setErrors({});
    setIsModalOpen(false);
  };

  const filteredInternships = internships.filter(
    (internship) =>
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">Internships</h1>
          <p className="text-slate-black mt-2">
            Post new opportunities or browse available internships for potential
            hires.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <SearchBar
            placeholder="Search candidates..."
            value={searchTerm}
            onChange={setSearchTerm}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center whitespace-nowrap px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/98 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
          >
            <Plus className="w-4 h-4 mr-2" />
            Post New Internship
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInternships.map((internship) => (
          <div
            key={internship.id}
            className="bg-white rounded-2xl border border-neutral shadow-sm p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="flex items-center text-slate-black font-semibold text-lg gap-2">
                <internship.icon
                  strokeWidth={1.5}
                  size={20}
                  className="text-primary"
                />
                {internship.title}
              </h3>

              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full select-none ${
                  internship.status === "Open"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {internship.status}
              </span>
            </div>

            <p className="text-body text-sm leading-relaxed mb-6 line-clamp-2">
              {internship.description}
            </p>

            <div className="grid grid-cols-3 gap-6 text-slate-black text-sm font-medium">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span>{internship.duration}</span>
              </div>

              <div className="flex items-center gap-2">
                <DollarSign size={18} className="text-primary" />
                <span>{internship.stipend}</span>
              </div>

              <div className="flex items-center gap-2">
                <Layers size={18} className="text-primary" />
                <span>{internship.department}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setErrors({});
        }}
        title="Post New Internship"
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            <FormInput
              label="Title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Frontend Developer"
              error={errors.title}
              required
            />
            <div>
              <label
                htmlFor="description"
                className="block mb-3 mr-2 text-sm font-medium text-body"
              >
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                rows={3}
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Briefly summarize the internship role..."
                className={`w-full px-4 py-3 border text-body placeholder:text-sm font-normal bg-white rounded-md outline-none focus:ring-1 transition-all duration-300 ${
                  errors.description
                    ? "border-red-500 focus:ring-red-500"
                    : "border-body/50 focus:border-primary"
                }`}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description}
                </p>
              )}
            </div>
            <FormInput
              label="Department"
              name="department"
              type="text"
              value={formData.department}
              onChange={handleInputChange}
              placeholder="e.g., Software Development"
              error={errors.department}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="Duration (weeks)"
                name="duration"
                type="number"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="e.g., 12"
                error={errors.duration}
                required
                min="1"
              />
              <FormInput
                label="Stipend"
                name="stipend"
                type="number"
                value={formData.stipend}
                onChange={handleInputChange}
                placeholder="e.g., 1000"
                error={errors.stipend}
                required
                min="0"
              />
            </div>

            <SelectField
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              options={openCloseOptions}
              error={errors.status}
              required={false}
            />

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  setErrors({});
                }}
                className="px-4 py-2 border border-body/50 rounded-md shadow-sm text-sm font-medium text-body hover:bg-neutral/30 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              >
                Post Internship
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Internships;
