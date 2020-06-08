module.exports = (req, res, next) => {
    if(/(.*)(candidates)(.*)/.test(req.originalUrl)){
        console.log(`!!!Nie Usuwam Pragma z ${req.originalUrl}`);
    } else {
        res.removeHeader('Pragma');
        res.header('Cache-Control', 'public, max-age=31536000');
        console.log(`Usuwam Pragma z ${req.originalUrl}`);        
    };
    next();
}