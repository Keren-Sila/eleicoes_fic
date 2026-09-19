export function exigirLogin(req, res, next) {
    // if (!req.session.usuario) {
    //     res.status(401).json({ mensagem: 'Usuário não autenticado' });
    //     return;
    // }
    next();
}