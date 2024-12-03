"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const EmployeeModal = ({
  triggerIcon: TriggerIcon,
  triggerText,
  title,
  description,
  onSubmit,
  defaultValues = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const employeeData = Object.fromEntries(formData.entries());
    onSubmit(employeeData);
    setIsOpen(false); // Close the modal after submission
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={`flex items-center justify-center ${
            TriggerIcon
              ? "flex bg-transparent hover:bg-gray-300 text-gray-700"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {TriggerIcon ? <TriggerIcon className="w-5 h-5" /> : triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              name="name"
              placeholder="Name"
              defaultValue={defaultValues.name || ""}
              required
            />
            <Input
              name="email"
              placeholder="Email"
              defaultValue={defaultValues.email || ""}
              required
            />
            <Input
              name="position"
              placeholder="Position"
              defaultValue={defaultValues.position || ""}
              required
            />
            <Input
              name="salary"
              placeholder="Salary"
              type="number"
              defaultValue={defaultValues.salary || ""}
              required
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white mt-5"
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeModal;
