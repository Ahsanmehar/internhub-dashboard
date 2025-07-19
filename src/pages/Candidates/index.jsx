import { useState } from "react";
import Table from "../../components/Table";
import SearchBar from "../../components/SearchBar";
import Modal from "../../components/Model";
import { initialCandidates } from "../../data/candidates";
import { Plus } from "lucide-react";
import FormInput from "../../components/FormInput";
import SelectField from "../../components/SelectFeild";

const internshipOptions = [
  { value: "Frontend Developer", label: "Frontend Developer" },
  { value: "Backend Developer", label: "Backend Developer" },
  { value: "UI/UX Designer", label: "UI/UX Designer" },
  { value: "Full Stack Developer", label: "Full Stack Developer" },
  { value: "Mobile App Developer", label: "Mobile App Developer" },
  { value: "Data Analyst", label: "Data Analyst" },
  { value: "Machine Learning Intern", label: "Machine Learning Intern" },
  { value: "Digital Marketing Intern", label: "Digital Marketing Intern" },
];

const statusOptions = [
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Approved",
    label: "Approved",
  },
  {
    value: "Rejected",
    label: "Rejected",
  },
];

const Candidates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [candidates, setCandidates] = useState(initialCandidates);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    internship: "Frontend Developer",
    status: "Pending",
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.internship) {
      newErrors.internship = "Please select an internship";
      isValid = false;
    }

    if (!formData.status) {
      newErrors.status = "Please select a status";
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

    const newCandidate = {
      id: candidates.length + 1,
      name: formData.name.trim(),
      email: formData.email.trim(),
      internship: formData.internship,
      status: formData.status,
    };

    setCandidates([...candidates, newCandidate]);

    setFormData({
      name: "",
      email: "",
      internship: "Frontend Developer",
      status: "Pending",
    });
    setErrors({});
    setIsModalOpen(false);
  };

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { key: "name", label: "Name", sortable: false },
    { key: "email", label: "Email", sortable: true },
    { key: "internship", label: "Applied Internship", sortable: false },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (value) => {
        let bgColor = "bg-gray-100 text-gray-800";
        if (value === "Approved") bgColor = "bg-green-100 text-green-800";
        if (value === "Rejected") bgColor = "bg-red-100 text-red-800";

        return (
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${bgColor}`}
          >
            {value}
          </span>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-y-3 lg:items-center mb-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">Candidates</h1>
          <p className="text-slate-black mt-2">
            Explore and manage profiles of candidates applying for internships.
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
            Add Candidate
          </button>
        </div>
      </div>

      <Table columns={columns} data={filteredCandidates} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setErrors({});
        }}
        title="Add New Candidate"
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            <FormInput
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter candidate name"
              error={errors.name}
              required
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter candidate email"
              error={errors.email}
              required
            />
            <SelectField
              label="Internship"
              name="internship"
              value={formData.internship}
              onChange={handleInputChange}
              options={internshipOptions}
              error={errors.internship}
              required={false}
            />
            <SelectField
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              options={statusOptions}
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
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/95 focus:outline-none focus:ring-2 focus:primary cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Candidates;
