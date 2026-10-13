---
name: browser-automation-debugging
description: 'Debug and validate Playwright browser automation tests, login flows, selectors, and UI state. Use for failing browser tests, OTP/TOTP flows, flaky interactions, and real-browser verification before completion.'
argument-hint: 'Describe the failing UI flow, page URL, expected result, and current error or selector issue.'
user-invocable: true
disable-model-invocation: false
---

# Browser Automation Debugging

## When to Use
- A Playwright test or browser automation flow fails, hangs, or behaves inconsistently.
- A login, OTP/TOTP, or form-driven workflow needs verification in a real browser.
- A selector, timing issue, or page-state mismatch must be debugged.
- You need a repeatable workflow for validating UI fixes before calling work complete.

## Procedure
1. Reproduce the issue with the smallest possible test or page script.
2. Capture the exact failing step, browser, URL, selector, console error, and current output.
3. Inspect the page state in the real browser: DOM, network, console messages, screenshots, and visible text.
4. Write or adjust a minimal failing assertion that reflects the actual user behavior.
5. Identify the root cause: selector drift, timing, state mismatch, app logic issue, or flaky environment condition.
6. Apply the smallest fix that addresses the root cause, not just the symptom.
7. Re-run the focused validation command and confirm the expected result in the actual UI.
8. Check adjacent flows for obvious regression and document the evidence from the run.

## Decision Points
- If the failure is caused by stale or brittle selectors, prefer role/text-based locators and explicit waits on visible or enabled state.
- If the step fails intermittently, inspect page load timing, network activity, and app readiness before interacting.
- If the page depends on dynamic state, assert the target condition before acting instead of blindly waiting by time.
- If the flow involves OTP or TOTP, generate the current code from the real secret and validate the exact browser interaction.
- If the behavior is app-side rather than scripting-side, fix the application logic; if the issue is in automation, fix the browser script and assertions.

## Quality Criteria
- The bug is reproduced in a real browser before code changes.
- The test validates actual user-visible behavior, not mock-only assumptions.
- Assertions are specific and stable enough to catch real regressions.
- Verification is run after the fix and evidence is reviewed before completion.
- Any debug artifacts such as screenshots or logs are used to support the final result.

## Example Commands
- `npx playwright test tests/OTP.js --project=chromium`
- `npx playwright test --headed`
- `npx playwright show-report`

## Completion Checklist
- The issue is reproduced.
- The root cause is understood.
- The fix is minimal and targeted.
- The focused validation passes.
- The result is consistent with the intended user flow.

This skill is designed for precise troubleshooting and verification in browser-based automated tests, especially for login flows and interactive UI work in this workspace.
