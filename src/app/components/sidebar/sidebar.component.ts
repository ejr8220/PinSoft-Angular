import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/general",
    title: "Generales",
    rtlTitle: "الرموز",
    icon: "icon-notes",
    class: ""
  },
  {
    path: "/seguridad",
    title: "Seguridad",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Contabilidad",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/inventarios",
    title: "Inventarios",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/Ventas",
    title: "Tesoreria",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Compras",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/rtl",
    title: "Nómina",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
