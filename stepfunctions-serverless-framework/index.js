module.exports.firstFunction = async (event) => {
  console.log("Passing the event as it is to second state")
  return event
};

module.exports.secondFunction = async (event) => {
  event.secondFunctionData = "This data has entered second function"
  print(event)
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};
