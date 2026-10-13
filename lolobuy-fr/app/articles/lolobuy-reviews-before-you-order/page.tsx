import { ArticleLayout } from "../article-layout";
import { reviewArticles } from "../review-article";

export default function Page(){
  return <ArticleLayout article={reviewArticles.en}/>;
}
