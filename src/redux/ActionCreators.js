import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchRestaurants = () => (dispatch) => {
  dispatch(restaurantsLoading());

  return fetch(baseUrl + "restaurants")
    .then(
      (response) => {
        console.log(response);
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((restaurants) => dispatch(addRestaurants(restaurants)))
    .catch((error) => dispatch(restaurantsFailed(error.message)));
};

export const restaurantsLoading = () => ({
  type: ActionTypes.RESTAURANTS_LOADING,
});

export const restaurantsFailed = (errMess) => ({
  type: ActionTypes.RESTAURANTS_FAILED,
  payload: errMess,
});

export const addRestaurants = (restaurants) => ({
  type: ActionTypes.ADD_RESTAURANTS,
  payload: restaurants,
});

//

export const fetchRequests = () => (dispatch) => {
  return fetch(baseUrl + "requests")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((requests) => dispatch(addRequests(requests)))
    .catch((error) => dispatch(requestsFailed(error.message)));
};

export const requestsFailed = (errMess) => ({
  type: ActionTypes.REQUESTS_FAILED,
  payload: errMess,
});

export const addRequests = (requests) => ({
  type: ActionTypes.ADD_REQUESTS,
  payload: requests,
});

export const addRequest = (request) => ({
  type: ActionTypes.ADD_REQUEST,
  payload: request,
});

export const postRequest =
  (requestId, title, firstName, lastName, phoneNum, email, message) =>
  (dispatch) => {
    const newRequest = {
      requestId,
      title,
      firstName,
      lastName,
      phoneNum,
      email,
      message,
    };
    newRequest.date = new Date().toISOString();

    return fetch(baseUrl + "requests", {
      method: "POST",
      body: JSON.stringify(newRequest),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              `Error ${response.status}: ${response.statusText}`
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(addRequest(response)))
      .catch((error) => {
        console.log("post request", error.message);
        alert("Your request could not be posted\nError: " + error.message);
      });
  };

export const fetchServices = () => (dispatch) => {
  dispatch(servicesLoading());

  return fetch(baseUrl + "services")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((services) => dispatch(addServices(services)))
    .catch((error) => dispatch(servicesFailed(error.message)));
};

export const servicesLoading = () => ({
  type: ActionTypes.SERVICES_LOADING,
});

export const servicesFailed = (errMess) => ({
  type: ActionTypes.SERVICES_FAILED,
  payload: errMess,
});

export const addServices = (services) => ({
  type: ActionTypes.ADD_SERVICES,
  payload: services,
});

export const fetchRestaurantsFl = () => (dispatch) => {
  dispatch(restaurantsFlLoading());
  return fetch(baseUrl + "restaurantsFl")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((restaurantsFl) => dispatch(addRestaurantsFl(restaurantsFl)))
    .catch((error) => dispatch(restaurantsFlFailed(error.message)));
};

export const restaurantsFlLoading = () => ({
  type: ActionTypes.RESTAURANTSFL_LOADING,
});

export const restaurantsFlFailed = (errMess) => ({
  type: ActionTypes.RESTAURANTSFL_FAILED,
  payload: errMess,
});

export const addRestaurantsFl = (restaurantsFl) => ({
  type: ActionTypes.ADD_RESTAURANTSFL,
  payload: restaurantsFl,
});

export const postContactMessage =
  (firstName, lastName, phoneNum, email, agree, contactType, message) =>
  (dispatch) => {
    const newMessage = {
      firstName,
      lastName,
      phoneNum,
      email,
      agree,
      contactType,
      message,
    };
    newMessage.date = new Date().toISOString();
    return fetch(baseUrl + "message", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: { "Content-Type": "application/json" },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              `Error ${response.status}: ${response.statusText}`
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) =>
        alert(
          `Thank you for contacting us\nwe will review and get back to you by ${response.contactType} ASAP!`
        )
      )
      .catch((error) => {
        console.log("post message", error.message);
        alert("Your message could not be sent\nError: " + error.message);
      });
  };

export const fetchExamples = () => (dispatch) => {
  dispatch(examplesLoading());
  return fetch(baseUrl + "examples")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((examples) => dispatch(addExamples(examples)))
    .catch((error) => dispatch(examplesFailed(error.message)));
};

export const examplesLoading = () => ({
  type: ActionTypes.EXAMPLES_LOADING,
});

export const examplesFailed = (errMess) => ({
  type: ActionTypes.EXAMPLES_FAILED,
  payload: errMess,
});

export const addExamples = (examples) => ({
  type: ActionTypes.ADD_EXAMPLES,
  payload: examples,
});
