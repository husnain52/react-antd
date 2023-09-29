import { call, put, takeEvery } from "redux-saga/effects";
import Axios from "axios";
import { fetchData, loader } from "views/Users/slice";
import { addNewUser } from "./slice";
import { API_ENDPOINT } from "common/utils";
import { message } from "antd";

let callAPI = async ({ url, method, payload }: any) => {
  return await Axios({
    url,
    method,
    data: payload,
  });
};

function* postNewUser({ payload }: any): Generator {
  const url = `${API_ENDPOINT}/users`;

  const loadingMessage = message.loading({
    content: "Submitting user details...",
    duration: 0,
  });
  try {
    const options = {
      mode: "cors",
      method: "POST",
    };

    const response = yield call(() =>
      callAPI({ url: url, method: options.method, payload })
    );

    console.log(response);
    loadingMessage();
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
    loadingMessage();
    message.error("There was an error submitting user details.")
  }
}

export default function* loginSaga() {
  yield takeEvery(addNewUser.type, postNewUser);
}
