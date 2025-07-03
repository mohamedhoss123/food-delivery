
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class ResturantAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const request = context.switchToHttp().getRequest();
    return request.session.resturant?.id !== undefined;
  }
}
