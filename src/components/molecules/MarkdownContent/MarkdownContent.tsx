import "./MarkdownContent.scss";
import type { MarkdownContentProps } from "@types";

export default function MarkdownContent(props: MarkdownContentProps) {
 if ("contentHtml" in props && props.contentHtml !== undefined) {
  return (
   <div className="markdown-content" dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
  );
 }

 return <div className="markdown-content">{props.children}</div>;
}
