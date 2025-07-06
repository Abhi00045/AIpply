import mongoose from "mongoose";
import { Schema } from "mongoose";

const profileInfoschema = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    fullName: { type: Schema.Types.fullName , ref: 'User', required: true },
    

})