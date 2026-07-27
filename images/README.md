# Management OS Visual Language Repository

This repository is the visual knowledge base for Management OS. Read it before opening Figma, generating references, selecting assets, or writing interface CSS.

Images illustrate principles. The Markdown files define them. A reference is not permission to copy its decoration; contributors must identify the quality it demonstrates and preserve that quality in context.

## How to use this repository

1. Begin with [`17-design-principles`](17-design-principles/README.md).
2. Read the folder matching the design question.
3. Review exploratory references in that folder.
4. Use [`99-canonical`](99-canonical/README.md) only for approved, durable direction.
5. Record why a new reference belongs before adding it.

## Governance

- This is neither a production-assets folder nor a screenshot archive.
- Store implementation assets with the implementation, not here.
- Do not promote a reference to canonical because it is attractive or recent.
- Record source, rights, date added, contributor, and demonstrated principle beside every image.
- Use descriptive lowercase names such as `desk-composition-reference-03.jpg`.
- Remove obsolete exploratory material deliberately; never silently replace canonical references.

## Reference record

Document each image in its folder README using:

```markdown
### `workbench-room-reference-01.jpg`

- Added: YYYY-MM-DD
- Contributor:
- Source:
- Rights:
- Status: exploratory | approved canonical
- Demonstrates:
- Do not copy:
- Related principle:
- Decision reference:
```

Numbers identify related alternatives, not approval rank. Preserve the original
extension, never encode a person’s name in the filename, and do not use words such
as `final` or `latest`.

## Canonical relationship

The written product architecture governs authority, data, and behavior. This repository governs visual intent. If they appear to conflict, preserve product authority boundaries and open a design decision rather than resolving the conflict through styling.
