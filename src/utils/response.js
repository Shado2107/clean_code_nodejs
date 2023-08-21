// response.js
function sendSuccess(res, data, message = 'Request successful') {
    res.status(200).json({
        success: true,
        data,
        message
    });
}

function sendError(res, statut=500,  message = 'Error' ){
    res.status(statut).json({
        success: false,
        message
    })
}

module.exports = {
    sendSuccess,
    sendError
};
