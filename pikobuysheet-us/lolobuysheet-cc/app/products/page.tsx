import { Header, Footer, MobileModule, ProductImage } from "../components";
import { categories, products } from "../data";
import { pageMetadata } from "../seo";

export const metadata=pageMetadata({title:"Product Research Cards | LoloBuy Spreadsheet",description:"Open independent product-detail pages for footwear, clothing, accessories, electronics and lifestyle finds.",path:"/products"});

export default function ProductsPage(){return <><Header/><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>10 current product records</p><h1>Product details<br/><em>from the live database.</em></h1><p>Each card uses the corresponding FindSpreadsheet product image and opens that exact main-site product page.</p></div><MobileModule title="All product records" defaultOpen><div className="product-grid">{products.map((product)=><a className="product-card" href={product.live} key={product.slug}><div className="product-visual product-photo"><ProductImage src={product.image} alt={product.name}/><span>{product.label}</span></div><small>{categories.find((category)=>category.slug===product.category)?.name}</small><h2>{product.name}</h2><p>{product.summary}</p><strong>View on FindSpreadsheet ↗</strong></a>)}</div></MobileModule></main><Footer/></>}
