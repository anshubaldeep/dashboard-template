// import { z } from "zod";
import "./App.css";
import { DataTable } from "./components/ui/DataTable";
import Form from "./components/ui/Form";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useGetQuery } from "./lib/apiHooks";
import { useState } from "react";

// const formSchema = z.object({
//   name: z.string().nonempty("Name is required"),
//   email: z.string().email().nonempty("Email is required"),
//   gender: z.string().nonempty("Please select a value"),
//   terms: z.boolean().refine((val) => val === true, {
//     message: "You must agree to the terms and conditions",
//   }),
//   multiText: z.array(z.string()).refine((val) => val.length > 0, {
//     message: "You must enter at least one value",
//   }),
//   radio: z.string().refine((val) => val !== "", {
//     message: "You must select a radio option",
//   }),
// });

// Form Configuration
const formConfig = [
  {
    name: "username",
    label: "Username",
    type: "text",
    labelClassname: "text-left",
    placeholder: "Enter your name",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    labelClassname: "text-left",
    placeholder: "Enter your email",
  },
  {
    name: "website",
    label: "Website",
    type: "text",
    labelClassname: "text-left",
    placeholder: "Enter your email",
  },
  {
    name: "gender",
    label: "Select your gender",
    type: "select",
    labelClassname: "text-left",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
  },
  {
    name: "radio",
    label: "Radio Option",
    type: "radio",
    labelClassname: "text-left",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
  {
    name: "button",
    label: "Apply",
    type: "button",
    labelClassname: "text-left",
    buttonType: "submit",
    className: "bg-blue-500 hover:bg-blue-700 text-white w-36",
  },
];

function App() {
  const [filterString, setFilterString] = useState("");
  const rhfProps = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      website: "",
      gender: "",
      radio: "",
    },
  });

  const { data, isLoading } = useGetQuery(
    ["users", filterString],
    `https://jsonplaceholder.typicode.com/users${filterString}`
  );

  const handleSubmit = (data) => {
    const filterString = Object.entries(data).reduce((acc, [key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          return [...acc, `${key}=${value.join(",")}`];
        }
        return [...acc, `${key}=${value}`];
      }
      return acc;
    }, []);
    setFilterString(filterString !== "" ? `?${filterString.join("&")}` : "");
  };
  return (
    <div className="flex w-full gap-4">
      {isLoading && (
        <div className="w-full rounded border p-6 text-left">Loading...</div>
      )}
      {!isLoading && !data.length && (
        <div className="w-full rounded border p-6 text-left">No data found</div>
      )}
      {!isLoading && data.length && (
        <DataTable
          columns={[
            {
              header: "id",
              accessorKey: "id",
            },
            {
              header: "Name",
              accessorKey: "name",
            },
            {
              header: "Email",
              accessorKey: "email",
            },
            {
              header: "User Name",
              accessorKey: "username",
            },
            {
              header: "Phone",
              accessorKey: "phone",
            },
            {
              header: "Website",
              accessorKey: "website",
            },
          ]}
          data={data}
        />
      )}
      <div className="w-2/5 rounded border p-6 text-left">
        <h1 className="text-xl font-bold mb-4">Filters:</h1>
        <Form
          formConfig={formConfig}
          rhfProps={rhfProps}
          handleSubmit={handleSubmit}
          wrapperClass="gap-8 px-1"
        />
      </div>
    </div>
  );
}

export default App;
