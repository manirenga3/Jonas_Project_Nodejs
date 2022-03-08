/* eslint-disable */
import axios from 'axios';

import { showAlert } from './alerts.js';

// type is either 'Data' or 'Password'
export const updateData = async (data, type) => {
  try {
    console.log(`data---${data}`);
    console.log(`type---${type}`);
    const url =
      type === 'Data'
        ? '/api/v1/users/updateMe'
        : '/api/v1/users/updateMyPassword';

    console.log(`url---${url}`);
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type} updated successfully`);
      window.setTimeout(() => {
        location.assign('/me');
      }, 1000);
    }
  } catch (err) {
    console.log(`💥👋🎉${err}`);
    // showAlert('error', err);
  }
};
