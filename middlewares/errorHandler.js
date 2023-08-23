const error404Handler = (req, res, next) => {
    res.status(404).send({ message: '404 - Route ' + '[' + req.url + ']' + ' Not found.' });
}

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ 'message': err.message });
}

module.exports = { error404Handler, errorHandler };