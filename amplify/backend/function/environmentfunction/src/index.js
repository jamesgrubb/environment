

exports.handler = async (event) => {

    const { count } = await JSON.parse(event.body)
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*"
     }, 
        body: JSON.stringify(count),
    }; 
    return response;
   
};
