// response.js
function sendSuccess(res, data, message = 'Request successful') {
    res.status(200).json({
        success: true,
        data,
        message
    });
}

module.exports = {
    sendSuccess
};
