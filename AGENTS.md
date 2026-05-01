# Agent Instructions

## UI Work

Before changing UI, read:

- `docs/ui-agent-guideline.md`

Do not redesign the app by default. Preserve layout structure, viewport rhythm, card hierarchy, palette, typography, character placement, and rendering sharpness.

If the request, reference image, or existing docs can be interpreted in more than one way, stop and ask the user. Ask again if the answer is still ambiguous. Separate questions for layout, tone, allowed change scope, reference priority, and verification method.

Never fix a visual issue by deleting, reducing, or rewording reference content unless the user explicitly asks for that exact content change. Keep task counts, labels, percentages, points, character copy, and visible density aligned with the reference.

Before reporting UI work as complete, compare before/after screenshots at the same viewport and call out any difference the user may perceive as a visual regression. Review both the modified element and the full screen against the reference.
