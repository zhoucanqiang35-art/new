import generated from "./generatedSiteContent.json";

type TextSection={heading:string;body:string;level?:number};
type TextCard={title:string;body:string};
export type LocalizedSiteBundle={
  text:{
    shell:Record<string,string>;
    common:Record<string,string>;
    home:Record<string,string>;
    guides:{sections:TextSection[];sourceNote:string;checklist:string[]};
    qc:{sections:TextSection[];sourceNote:string;checklist:string[]};
    shipping:{sections:TextSection[];checklist:string[]};
    research:{cards:TextCard[];countryPriority:string;title:string;body:string};
    sources:Record<string,string>;
    about:{sections:TextSection[];checklist:string[]};
  };
  categories:Array<{slug:string;name:string;note:string;description:string;checks:string[]}>;
  products:Array<{slug:string;name:string;category:string;description:string;checks:string[]}>;
  hotCountries:string[];
  sourceLinks:Array<{id:string;title:string;label:string;checked:string}>;
};

export const localizedSiteContent=generated as unknown as Record<string,LocalizedSiteBundle>;
