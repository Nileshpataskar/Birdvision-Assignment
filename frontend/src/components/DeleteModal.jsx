"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

const DeleteModal = ({ clicked, triggerIcon: TriggerIcon }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex bg-transparent hover:bg-gray-300 text-gray-700">
          <TriggerIcon className="w-5 h-5" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Delete Modal</DialogTitle>
        Are you sure you want to delete this employee?
        <DialogFooter>
          <Button onClick={clicked} className="bg-red-600g">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
