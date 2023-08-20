import { useState } from "react";

export default function InfoUpdate({ content }: { content: JSX.Element }) {
  return <div id="album-info">{content}</div>;
}
