'use strict';
import axios from "~/configs/init.axios";

export const signUp = (data) => axios.post('/users', data);