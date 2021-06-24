
import {Action} from 'redux';
import axios, {Method} from 'axios';
import { StudentsList } from '../../model/studentsList';

export function* request({
  method,
  url,
}: {
  method: Method;
  url: string;
}): Generator<unknown, any, any> {
  return yield axios({method, url})
    .then(res => {
      return res.data;
    })
    .catch((err) => {
      console.log("ERR",err)
      return null;
    });
}

export function* getListStudents(action: Action) {
  const {url, setData} = action.payload;
  const response: Array<StudentsList> = yield request({
    method: 'GET',
    url: url,
  });
  // null kia
  console.log("Data",response);
  if (response) {
    if (setData && typeof setData === 'function') {
      setData(response);
    }
  }
}

