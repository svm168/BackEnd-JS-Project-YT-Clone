// require('dotenv').config({path: './env'})       //This is completely perfect. Just reduces consistency of code.

import dotenv from 'dotenv';
import connectDB from "./db/index.js";      //Properly write entire file path even with extension even if it is index
                                            //file because they may cause errors.
dotenv.config({ path: './env' })

connectDB()