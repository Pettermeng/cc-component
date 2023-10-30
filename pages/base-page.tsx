
// import HeroComponent from "../../component/HeroBanner";
// import NewsComponent from "../../component/NewsCard";

import React from "react";
import BaseComponent from "./component";

export default function BasePage(name:any) {

    const mapNameToComponent:any = {
      'cc-0002': BaseComponent,
    }
  
    const Component = mapNameToComponent[name];
    
    if (!Component) return null;
    return <Component />
}
