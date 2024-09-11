export const setSecureCookie = (res, name, token, domain, maxAge) =>{
    return res.cookie(name, token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        domain: domain,
        maxAge: maxAge,
    });
}