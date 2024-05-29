"use strict";

exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "QUE PASA!",
        // input: event,
      },
      null,
      2
    ),
  };
};
