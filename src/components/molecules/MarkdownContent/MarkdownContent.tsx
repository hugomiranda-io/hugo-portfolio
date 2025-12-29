import "./MarkdownContent.css";
import type { MarkdownContentProps } from "@types";

export default function MarkdownContent(props: MarkdownContentProps) {
 const { contentHtml, children } = props;

 return (
  <div className="markdown-content" dangerouslySetInnerHTML={{ __html: contentHtml }}>
   {children}
  </div>
 );
}
