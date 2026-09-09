"use client";

import { useEffect, useState } from "react";

export default function ResponsiveDetails({number,title,children}:{number:string;title:string;children:React.ReactNode}){
  const [open,setOpen]=useState(true);

  useEffect(()=>{
    const media=window.matchMedia("(max-width: 720px)");
    const sync=()=>setOpen(!media.matches);
    sync();
    media.addEventListener("change",sync);
    return()=>media.removeEventListener("change",sync);
  },[]);

  return <details className="mobile-collapse" open={open} onToggle={event=>setOpen(event.currentTarget.open)}>
    <summary><span>{number}</span><b>{title}</b><i>{open?"Close":"Open"}</i></summary>
    {children}
  </details>;
}

export function ResponsiveArticleSection({title,children}:{title:string;children:React.ReactNode}){
  const [open,setOpen]=useState(true);

  useEffect(()=>{
    const media=window.matchMedia("(max-width: 720px)");
    const sync=()=>setOpen(!media.matches);
    sync();
    media.addEventListener("change",sync);
    return()=>media.removeEventListener("change",sync);
  },[]);

  return <details className="article-section" open={open} onToggle={event=>setOpen(event.currentTarget.open)}>
    <summary>{title}<span>+</span></summary>
    <div>{children}</div>
  </details>;
}
