import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable, onErrorResumeNext } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      alert("Invalid id!");
      this.router.navigate(["/products"]);
      return false;
    }
    return true;
  }
}
