/**
 * rehype plugin: turn the "image immediately followed by an italic caption"
 * markdown convention into a semantic <figure> with a <figcaption>. This lets
 * the caption sit tight under the image, centered, and be styled distinctly
 * from body text (see `figure`/`figcaption` in src/styles/typography.css) —
 * fixing both the loose, body-like captions and the left-aligned caption under
 * full-width images (e.g. the xkcd comic).
 *
 * Two markdown shapes are handled:
 *
 *   ![](img)            → <p><img>\n<em>cap</em></p>   (no blank line: one
 *   *caption*             paragraph — the common case here)
 *
 *   ![](img)            → <p><img></p> <p><em>cap</em></p>   (blank line:
 *                          two sibling paragraphs)
 *   *caption*
 *
 * Both become:  <figure><img><figcaption>caption</figcaption></figure>
 */

const isElement = (node, tag) =>
  node && node.type === "element" && (!tag || node.tagName === tag);

// Whitespace text or a <br> — ignorable when matching the image/caption shape.
const isIgnorable = node =>
  (node && node.type === "text" && /^\s*$/.test(node.value)) ||
  isElement(node, "br");

const realChildren = node => (node.children || []).filter(c => !isIgnorable(c));

const figureNode = (img, em) => ({
  type: "element",
  tagName: "figure",
  properties: {},
  children: [
    img,
    {
      type: "element",
      tagName: "figcaption",
      properties: {},
      children: em.children,
    },
  ],
});

// <p><img>…<em>caption</em></p> → { img, em }
const inlineImageCaption = node => {
  if (!isElement(node, "p")) return null;
  const kids = realChildren(node);
  if (kids.length === 2 && isElement(kids[0], "img") && isElement(kids[1], "em"))
    return { img: kids[0], em: kids[1] };
  return null;
};

// <p> whose only meaningful child is an <img>.
const imageParagraph = node => {
  if (!isElement(node, "p")) return null;
  const kids = realChildren(node);
  return kids.length === 1 && isElement(kids[0], "img") ? kids[0] : null;
};

// <p> whose only meaningful child is an <em> (caption convention).
const captionParagraph = node => {
  if (!isElement(node, "p")) return null;
  const kids = realChildren(node);
  return kids.length === 1 && isElement(kids[0], "em") ? kids[0] : null;
};

export default function rehypeFigure() {
  return tree => transform(tree);
}

function transform(node) {
  if (!node.children || node.children.length === 0) return;

  const out = [];
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];

    // Case 1: a single paragraph holding both image and caption.
    const inline = inlineImageCaption(child);
    if (inline) {
      out.push(figureNode(inline.img, inline.em));
      continue;
    }

    // Case 2: an image-only paragraph followed by a caption-only paragraph.
    const img = imageParagraph(child);
    if (img) {
      let j = i + 1;
      while (j < node.children.length && isIgnorable(node.children[j])) j++;
      const em = j < node.children.length ? captionParagraph(node.children[j]) : null;
      if (em) {
        out.push(figureNode(img, em));
        i = j; // consume the caption paragraph
        continue;
      }
    }

    transform(child);
    out.push(child);
  }
  node.children = out;
}
