import mongoose from "mongoose";

const callbackSchema = mongoose.Schema(
  {
    trxId: { type: String },
    json: { type: String },
    status: { type: String },
    code: { type: String },
    documentId: { type: String },
    signerName: { type: String },
    signerEmail: { type: String },
    email: { type: String },
    url: { type: String },
    documentFileName: { type: String },
    documentOwnerName: { type: String },
    documentOwnerEmail: { type: String },
    downloadUrl: { type: String },
  },
  { timestamps: true }
);

const Callback = mongoose.model("Callback", callbackSchema);
export default Callback;
