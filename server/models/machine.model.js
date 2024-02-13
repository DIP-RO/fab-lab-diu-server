import mongoose from "mongoose";

const machinerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Available", "In Use", "Maintenance"],
      default: "Available",
    },
    location: {
      type: String,
      required: true,
    },
    lastMaintenanceDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Machinery = mongoose.model("Machinery", machinerySchema);

export default Machinery;
