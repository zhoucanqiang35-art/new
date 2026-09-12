"use client";

import { useMemo, useState } from "react";

const positive=(value:string)=>Math.max(0,Number(value)||0);

export function ShippingCalculator(){
  const [weight,setWeight]=useState("1");
  const [length,setLength]=useState("30");
  const [width,setWidth]=useState("20");
  const [height,setHeight]=useState("15");
  const [divisor,setDivisor]=useState("6000");
  const result=useMemo(()=>{
    const volumetric=positive(length)*positive(width)*positive(height)/Math.max(1,positive(divisor));
    return {volumetric,chargeable:Math.max(positive(weight),volumetric)};
  },[weight,length,width,height,divisor]);
  return <section className="shipping-tool" aria-labelledby="shipping-tool-title">
    <div className="tool-intro"><p className="eyebrow">PLANNING TOOL</p><h2 id="shipping-tool-title">Estimate chargeable weight</h2><p>Enter packed measurements and the divisor shown by the route you are comparing. This tool does not calculate a LoloBuy price or confirm route eligibility.</p></div>
    <div className="tool-form">
      <label><span>Actual weight (kg)</span><input inputMode="decimal" type="number" min="0" step="0.01" value={weight} onChange={event=>setWeight(event.target.value)}/></label>
      <label><span>Length (cm)</span><input inputMode="decimal" type="number" min="0" step="0.1" value={length} onChange={event=>setLength(event.target.value)}/></label>
      <label><span>Width (cm)</span><input inputMode="decimal" type="number" min="0" step="0.1" value={width} onChange={event=>setWidth(event.target.value)}/></label>
      <label><span>Height (cm)</span><input inputMode="decimal" type="number" min="0" step="0.1" value={height} onChange={event=>setHeight(event.target.value)}/></label>
      <label><span>Route divisor</span><input inputMode="numeric" type="number" min="1" step="1" value={divisor} onChange={event=>setDivisor(event.target.value)}/></label>
    </div>
    <div className="tool-result"><div><span>Volumetric estimate</span><strong>{result.volumetric.toFixed(2)} kg</strong></div><div><span>Planning weight</span><strong>{result.chargeable.toFixed(2)} kg</strong></div><p>Formula: length × width × height ÷ divisor. The planning weight is the greater of actual and volumetric weight. The live route quote controls billing.</p></div>
  </section>;
}
