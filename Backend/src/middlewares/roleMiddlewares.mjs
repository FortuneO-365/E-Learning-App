export function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Forbidden: Admin access required' });
}

export function isAdminOrInstructor(req, res, next) {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'instructor')) {
    return next();
  }
  return res.status(403).json({ message: 'Forbidden: Admin or Instructor access required' });
}