"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Input } from "./ui/input";
import EmployeeModal from "./EmployeeModal";
import { DeleteIcon, Edit, Trash, Trash2 } from "lucide-react";
import { MdDelete } from "react-icons/md";
import { Toast } from "./ui/toast";
import { toast } from "@/hooks/use-toast";
import DeleteModal from "./DeleteModal";
const ShowEmployees = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/employees");
      console.log("res", res.data);

      setData(res.data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Fetch Failed",
        description: "Could not load employees. Please try again later.",
      });
      console.error("Error fetching employees:", error);
    }
  };

  const filteredEmployees = data.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      setData(data.filter((emp) => emp.id !== id));

      toast({
        variant: "success",
        title: "Deleted Successfully",
        description: "The employee has been removed.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Deletion Failed",
        description: "Could not delete the employee. Please try again.",
      });
      console.error("Error deleting employee:", error);
    }
  };

  const AddEmployee = async (employeeData) => {
    try {
      await axios.post(`http://localhost:5000/employees/`, employeeData);

      fetchEmployees();

      toast({
        variant: "success",
        title: "Employee Added",
        message: "Employee added successfully.",
        duration: 3000,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const EditEmployee = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:5000/employees/${id}`, updatedData);
      fetchEmployees();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">All Employees</h1>
        <div className="flex justify-between items-center mt-4">
          <Input
            type="text"
            placeholder="Search employees"
            className="w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <EmployeeModal
            triggerText="Add Employee" // Text trigger
            title="Add Employee"
            description="Fill in the details to add a new employee."
            onSubmit={AddEmployee}
          />
        </div>
      </header>

      <Table className="w-full">
        <TableHeader className="bg-gray-100 border-b">
          <TableRow>
            <TableHead className="px-4 py-3">Id</TableHead>
            <TableHead className="px-4 py-3">Emp Id</TableHead>
            <TableHead className="px-4 py-3">Name</TableHead>
            <TableHead className="px-4 py-3">Email</TableHead>
            <TableHead className="px-4 py-3">Position</TableHead>
            <TableHead className="px-4 py-3">Salary</TableHead>
            <TableHead className="px-4 py-3">Date</TableHead>
            <TableHead className="text-center px-4 py-3">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody
          className=""
          style={{ scrollbarWidth: "thin", scrollbarColor: "#a1a1aa #e5e7eb" }}
        >
          {filteredEmployees.map((emp, index) => (
            <TableRow key={emp.id} className="hover:bg-gray-200 cursor-auto">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{emp.id}</TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.position}</TableCell>
              <TableCell>{emp.salary}</TableCell>
              <TableCell>
                {new Date(emp.date_created).toLocaleDateString()}
              </TableCell>
              <TableCell className="flex items-center gap-5">
                <EmployeeModal
                  triggerIcon={Edit}
                  title="Edit Employee"
                  description="Update the details below."
                  onSubmit={(updatedData) => EditEmployee(emp.id, updatedData)}
                  defaultValues={emp}
                />

                {/* <Button
                  variant="ghost"
                  className="flex items-center justify-center shadow hover:bg-gray-300 text-gray-700"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  <Trash2 className="flex bg-transparent   w-5 h-5" />
                </Button> */}
                <DeleteModal
                  triggerIcon={Trash2}
                  clicked={() => deleteEmployee(emp.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ShowEmployees;
