/**
 * 로깅 미들웨어
 * 모든 HTTP 요청을 콘솔에 로깅
 */

/**
 * 요청 로깅 미들웨어
 * @param {Object} req - Express request 객체
 * @param {Object} res - Express response 객체
 * @param {Function} next - 다음 미들웨어로 이동
 */
function logger(req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;

    console.log(`[${timestamp}] ${method} ${url}`);

    next();
}

module.exports = logger;