import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const baseApiPath = environment.apiPath;
  req = req.clone({ url: `${baseApiPath}${req.url}` });
  return next(req);
};
