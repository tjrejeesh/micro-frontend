import { registerApplication, start } from "single-spa";
/*
 registerApplication({
   name: "@single-spa/welcome",
   app: () =>
     System.import(
       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
     ),
   activeWhen: ["/"],
 });
*/
registerApplication({
   name: "@tel-org/candidates",
   app: () => System.import("@tel-org/candidates"),
   activeWhen: ["/candidates"]
 });

registerApplication({
    name: "@tel-org/panelists",
    app: () => System.import("@tel-org/panelists"),
    activeWhen: ["/panelists"]
});

registerApplication({
    name: "@tel-org/platform",
    app: () => System.import("@tel-org/platform"),
    activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
