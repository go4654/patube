import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Patube";
  res.locals.routes = routes;
  res.locals.user = {
    id: 1,
    isAuthendicated: true,
  };
  next();
};
