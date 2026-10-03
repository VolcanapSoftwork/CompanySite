import { Fragment } from "react";

/**
 * Thai has no spaces between words, so browsers happily break a line in the
 * middle of a phrase ("ราคา / จริง"). This renders text so a line can only
 * break at a space, or at "|" where a long phrase needs an extra break point.
 * Use a non-breaking space ( ) to keep English pairs like "data flow" together.
 */
export function Phrases({ text }: { text: string }) {
  const chunks = text.replace(/ ๆ/g, " ๆ").split(" ");
  return (
    <>
      {chunks.map((chunk, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          {chunk.split("|").map((part, j) => (
            <Fragment key={j}>
              {j > 0 && <wbr />}
              <span className="nowrap">{part}</span>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  );
}

/** The same text without "|" break markers, for metadata and other plain-text uses. */
export function plainText(text: string) {
  return text.replace(/\|/g, "");
}
